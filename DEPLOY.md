# Deploy lên VPS

Hướng dẫn deploy dự án **daydaivn** lên VPS bằng Docker.

## Thông tin server

| Mục | Giá trị |
|-----|---------|
| IP | `160.30.160.31` |
| SSH port | `8686` |
| User | `root` |
| Domain | `daydaivn.com` |
| Thư mục app trên server | `/opt/daydaivn` |

## Yêu cầu trên máy local

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (có `docker buildx`)
- `expect` (macOS có sẵn)

## Biến môi trường

Tạo/sửa file `.env` ở root dự án trước khi deploy:

```env
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=https://daydaivn.com
```

File này được upload lên server và dùng bởi `docker-compose.yml`.

## Deploy (một lệnh)

```bash
VPS_PASSWORD='mật-khẩu-root' ./scripts/deploy-docker.sh
```

Script sẽ tự động:

1. Build Docker image (`linux/amd64`) trên máy local
2. Upload source + image lên VPS
3. Cài Docker, nginx (lần đầu)
4. Chạy container `daydaivn-web` port 3000
5. Cấu hình nginx reverse proxy port 80 → 3000

Sau khi xong, truy cập: **http://160.30.160.31**

### Tùy chỉnh kết nối (nếu cần)

```bash
VPS_HOST=160.30.160.31 \
VPS_PORT=8686 \
VPS_USER=root \
VPS_PASSWORD='...' \
./scripts/deploy-docker.sh
```

## Chạy local bằng Docker

```bash
npm run docker:build   # build image amd64
npm run docker:up      # chạy tại localhost:3000
npm run docker:down    # dừng container
```

## Cấu trúc trên server

```
nginx (:80)
  └── Docker container daydaivn-web (:3000)
        └── Next.js standalone
```

## Quản lý trên server

SSH vào VPS:

```bash
ssh -p 8686 root@160.30.160.31
```

Các lệnh hữu ích:

```bash
cd /opt/daydaivn

docker compose ps              # xem trạng thái
docker compose logs -f web     # xem log
docker compose restart web     # restart app
docker compose down            # dừng app
```

## Domain & HTTPS

1. Trỏ DNS A record `daydaivn.com` và `www.daydaivn.com` → `160.30.160.31`
2. Cài SSL trên VPS:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d daydaivn.com -d www.daydaivn.com
```

## Lưu ý

- Image **phải build `linux/amd64`** — script deploy đã xử lý sẵn (Mac M1/M2 build ARM sẽ không chạy trên VPS).
- Mỗi lần sửa code, chạy lại `./scripts/deploy-docker.sh` để deploy bản mới.
- `RESEND_API_KEY` chỉ cần trên server (API route gửi email), không commit lên git.
