#!/bin/bash
# Gắn lại HTTPS trên nginx khi chứng chỉ Let's Encrypt đã có (sau deploy ghi đè cấu hình HTTP).
set -euo pipefail

LIVE="/etc/letsencrypt/live/daydaivn.com"

if [[ ! -f "${LIVE}/fullchain.pem" || ! -f "${LIVE}/privkey.pem" ]]; then
  echo "==> Chưa có chứng chỉ SSL tại ${LIVE}."
  echo "    Chạy: CERTBOT_EMAIL=admin@daydaivn.com bash /root/ssl-setup-vps.sh"
  exit 0
fi

echo "==> Khôi phục nginx HTTPS (cert đã tồn tại)..."

SSL_EXTRA=""
if [[ -f /etc/letsencrypt/options-ssl-nginx.conf ]]; then
  SSL_EXTRA="${SSL_EXTRA}    include /etc/letsencrypt/options-ssl-nginx.conf;
"
fi
if [[ -f /etc/letsencrypt/ssl-dhparams.pem ]]; then
  SSL_EXTRA="${SSL_EXTRA}    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
"
fi

cat > /etc/nginx/sites-available/daydaivn << EOF
server {
    listen 80;
    listen [::]:80;
    server_name daydaivn.com www.daydaivn.com 160.30.160.31;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name daydaivn.com www.daydaivn.com;

    ssl_certificate ${LIVE}/fullchain.pem;
    ssl_certificate_key ${LIVE}/privkey.pem;
${SSL_EXTRA}
    client_max_body_size 10M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/daydaivn /etc/nginx/sites-enabled/daydaivn
nginx -t
systemctl reload nginx

echo -n "==> Kiểm tra: http="
curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1/ || true
echo -n " https="
curl -sk -o /dev/null -w '%{http_code}' https://127.0.0.1/ || true
echo
echo "==> HTTPS đã bật lại. Mở https://daydaivn.com trên PC."
