#!/bin/bash
set -euo pipefail

APP_DIR="/opt/daydaivn"
IMAGE_TAR="/root/daydaivn-image.tar.gz"

mkdir -p "$APP_DIR"

# .env: ưu tiên bản vừa upload (/root/daydaivn.env), không giữ bản cũ thiếu biến mới.
ENV_BACKUP=""
if [[ -f "$APP_DIR/.env" ]]; then
  ENV_BACKUP="$(mktemp)"
  cp "$APP_DIR/.env" "$ENV_BACKUP"
fi

rm -rf "${APP_DIR:?}"/*
tar -xzf /root/daydaivn-src.tar.gz -C "$APP_DIR"

if [[ -f /root/daydaivn.env ]]; then
  echo "==> Applying uploaded .env from /root/daydaivn.env"
  cp /root/daydaivn.env "$APP_DIR/.env"
elif [[ -n "$ENV_BACKUP" && -f "$ENV_BACKUP" ]]; then
  echo "==> Restoring previous .env backup"
  cp "$ENV_BACKUP" "$APP_DIR/.env"
fi

if [[ -f "$APP_DIR/.env" ]]; then
  chmod 600 "$APP_DIR/.env"
fi
rm -f "$ENV_BACKUP"

echo "==> Loading Docker image..."
docker load -i "$IMAGE_TAR"

cd "$APP_DIR"

compose() {
  if docker compose version >/dev/null 2>&1; then
    docker compose "$@"
  else
    docker-compose "$@"
  fi
}

compose down 2>/dev/null || true
compose up -d --no-build
compose ps

sleep 5
echo -n "app:"
curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:3000
echo -n " nginx:"
curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:80
echo

if [[ -x /root/nginx-restore-ssl.sh ]]; then
  bash /root/nginx-restore-ssl.sh
fi
