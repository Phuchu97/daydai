#!/bin/bash
# Chạy MỘT LẦN trên VPS sau khi DNS đã trỏ về server.
# Usage: CERTBOT_EMAIL=you@email.com bash ssl-setup-vps.sh
set -euo pipefail

if [[ -z "${CERTBOT_EMAIL:-}" ]]; then
  echo "Thiếu CERTBOT_EMAIL. Ví dụ:"
  echo "  CERTBOT_EMAIL=admin@daydaivn.com bash ssl-setup-vps.sh"
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive

echo "==> Cài certbot..."
apt-get update -qq
apt-get install -y -qq certbot python3-certbot-nginx

if [[ -f /etc/letsencrypt/live/daydaivn.com/fullchain.pem ]]; then
  echo "==> Cert đã có — chỉ gắn lại nginx..."
  bash /root/nginx-restore-ssl.sh
else
  echo "==> Cấp chứng chỉ SSL (lần đầu)..."
  certbot --nginx \
    -d daydaivn.com \
    -d www.daydaivn.com \
    --non-interactive \
    --agree-tos \
    --no-eff-email \
    -m "$CERTBOT_EMAIL" \
    --redirect
fi

echo "==> Bật gia hạn tự động (systemd timer)..."
systemctl enable certbot.timer
systemctl start certbot.timer

echo "==> Kiểm tra gia hạn thử (dry-run)..."
certbot renew --dry-run

echo ""
echo "==> Hoàn tất. Certbot sẽ tự gia hạn ~mỗi 60 ngày."
systemctl status certbot.timer --no-pager | head -5
