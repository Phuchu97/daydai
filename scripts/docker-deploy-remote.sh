#!/bin/bash
set -euo pipefail

APP_DIR="/opt/daydaivn"
IMAGE_TAR="/root/daydaivn-image.tar.gz"

mkdir -p "$APP_DIR"
rm -rf "${APP_DIR:?}"/*
tar -xzf /root/daydaivn-src.tar.gz -C "$APP_DIR"

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
