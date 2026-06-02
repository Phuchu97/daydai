#!/bin/bash
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

echo "==> Installing Docker..."
if ! command -v docker > /dev/null; then
  apt-get update -qq
  apt-get install -y -qq ca-certificates curl gnupg lsb-release

  install -m 0755 -d /etc/apt/keyrings
  curl -4 -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc

  echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu bionic stable" \
    > /etc/apt/sources.list.d/docker.list

  apt-get update -qq
  apt-get install -y -qq docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  systemctl enable docker
  systemctl start docker
fi
docker --version

echo "==> Installing Docker Compose fallback..."
if ! docker compose version > /dev/null 2>&1; then
  curl -4 -fsSL "https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
fi

echo "==> Configuring nginx reverse proxy..."
apt-get install -y -qq nginx

cat > /etc/nginx/sites-available/daydaivn << 'NGINXEOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name daydaivn.com www.daydaivn.com 160.30.160.31;

    client_max_body_size 10M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINXEOF

rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/daydaivn /etc/nginx/sites-enabled/daydaivn
nginx -t
systemctl enable nginx
systemctl restart nginx

echo "==> Docker setup complete."
