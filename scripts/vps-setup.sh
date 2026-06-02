#!/bin/bash
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive
NODE_VERSION="20.19.2"

echo "==> Installing Node.js ${NODE_VERSION} from official binary..."
if ! command -v node > /dev/null || ! node -v | grep -q 'v20'; then
  curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" -o /tmp/node.tar.xz
  tar -xJf /tmp/node.tar.xz -C /usr/local --strip-components=1
  rm -f /tmp/node.tar.xz
fi
node -v
npm -v

echo "==> Installing PM2..."
npm install -g pm2

echo "==> Deploying app..."
mkdir -p /var/www/daydaivn
rm -rf /var/www/daydaivn/*
tar -xzf /root/daydaivn-deploy.tar.gz -C /var/www/daydaivn --strip-components=1

cat > /var/www/daydaivn/.env << 'ENVEOF'
RESEND_API_KEY=re_VfsSTrpj_A2cjabfga8dn3hq2vnHemK47
NEXT_PUBLIC_SITE_URL=https://daydaivn.com
PORT=3000
NODE_ENV=production
ENVEOF

echo "==> Configuring nginx..."
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

echo "==> Starting app with PM2..."
cd /var/www/daydaivn
pm2 delete daydaivn 2>/dev/null || true
pm2 start server.js --name daydaivn
pm2 save
env PATH=$PATH:/usr/local/bin pm2 startup systemd -u root --hp /root | tail -1 | bash || true

echo "==> Health check..."
sleep 3
echo -n "App (3000): "
curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3000
echo
echo -n "Nginx (80): "
curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:80
echo
pm2 status

echo "==> Deploy complete!"
