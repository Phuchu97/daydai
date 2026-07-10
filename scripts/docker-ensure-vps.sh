#!/bin/bash
# Chỉ cài Docker / Compose nếu thiếu — KHÔNG ghi đè cấu hình nginx (tránh mất SSL khi deploy lại).
set -euo pipefail

export DEBIAN_FRONTEND=noninteractive

echo "==> Ensuring Docker..."
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
  echo "==> Docker installed."
else
  docker --version
fi

if ! docker compose version > /dev/null 2>&1; then
  curl -4 -fsSL "https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
fi

if ! command -v nginx > /dev/null; then
  echo "==> nginx chưa có — chạy một lần: bash /root/docker-setup-vps.sh"
else
  echo "==> nginx đã có — giữ nguyên cấu hình hiện tại."
fi

echo "==> Docker ensure complete."
