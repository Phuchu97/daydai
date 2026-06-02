#!/bin/bash
set -euo pipefail

VPS_HOST="${VPS_HOST:-160.30.160.31}"
VPS_PORT="${VPS_PORT:-8686}"
VPS_USER="${VPS_USER:-root}"
VPS_PASSWORD="${VPS_PASSWORD:-}"
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [[ -z "$VPS_PASSWORD" ]]; then
  echo "Set VPS_PASSWORD before running, e.g.:"
  echo "  VPS_PASSWORD='your-password' ./scripts/deploy-docker.sh"
  exit 1
fi

run_ssh() {
  export VPS_PASSWORD VPS_HOST VPS_PORT VPS_USER REMOTE_SCRIPT
  expect <<'EXPECTEOF'
set timeout 900
set password $env(VPS_PASSWORD)
spawn ssh -o StrictHostKeyChecking=no -p $env(VPS_PORT) $env(VPS_USER)@$env(VPS_HOST) bash $env(REMOTE_SCRIPT)
expect "password:"
send "$password\r"
expect eof
EXPECTEOF
}

run_scp() {
  export VPS_PASSWORD VPS_HOST VPS_PORT VPS_USER SCP_LOCAL SCP_REMOTE
  SCP_LOCAL="$1"
  SCP_REMOTE="$2"
  export SCP_LOCAL SCP_REMOTE
  expect <<'EXPECTEOF'
set timeout 900
set password $env(VPS_PASSWORD)
spawn scp -o StrictHostKeyChecking=no -P $env(VPS_PORT) $env(SCP_LOCAL) $env(VPS_USER)@$env(VPS_HOST):$env(SCP_REMOTE)
expect "password:"
send "$password\r"
expect eof
EXPECTEOF
}

echo "==> Building Docker image locally (linux/amd64)..."
cd "$PROJECT_ROOT"
docker buildx build --platform linux/amd64 -t daydai-web:latest --load .

echo "==> Exporting Docker image..."
TMP_DIR="$(mktemp -d)"
TAR_FILE="${TMP_DIR}/daydaivn-src.tar.gz"
IMAGE_FILE="${TMP_DIR}/daydaivn-image.tar.gz"

tar -czf "$TAR_FILE" \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude=.cursor \
  -C "$PROJECT_ROOT" .

docker save daydai-web:latest | gzip > "$IMAGE_FILE"
echo "Image size: $(du -h "$IMAGE_FILE" | cut -f1)"

echo "==> Uploading to VPS..."
run_scp "$TAR_FILE" "/root/daydaivn-src.tar.gz"
run_scp "$IMAGE_FILE" "/root/daydaivn-image.tar.gz"
run_scp "$PROJECT_ROOT/scripts/docker-setup-vps.sh" "/root/docker-setup-vps.sh"
run_scp "$PROJECT_ROOT/scripts/docker-deploy-remote.sh" "/root/docker-deploy-remote.sh"

echo "==> Installing Docker & nginx on VPS..."
REMOTE_SCRIPT="/root/docker-setup-vps.sh"
export REMOTE_SCRIPT
run_ssh

echo "==> Starting containers on VPS..."
REMOTE_SCRIPT="/root/docker-deploy-remote.sh"
export REMOTE_SCRIPT
run_ssh

rm -rf "$TMP_DIR"
echo "==> Deploy finished: http://${VPS_HOST}"
