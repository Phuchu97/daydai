
## Thông tin server

| Mục | Giá trị |
|-----|---------|
| IP | `160.30.160.31` |
| SSH port | `8686` |
| User | `root` |
| Domain | `daydaivn.com` |
| Thư mục app trên server | `/opt/daydaivn` |

## Nếu đã Deploy rồi thì lệnh chạy deloy lại là:
```bash
VPS_PASSWORD='mật-khẩu-root' ./scripts/deploy-docker.sh
```
```bash
Đổi mật khẩu trên VPS, dùng lệnh: ß
passwd
```
Lưu ý: mật khẩu root phải bọc trong dấu nháy đơn '...' như trên.

## Yêu cầu trên máy local

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (có `docker buildx`)
- `expect` (macOS có sẵn)

## Biến môi trường

Tạo/sửa file `.env` ở root dự án trước khi deploy:

```env
# Email (Resend)
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=Day Đai Thép VN <notifications@daydaivn.com>
ORDER_NOTIFICATION_EMAIL=phuchu199749@gmail.com

# Telegram bot thông báo đơn hàng
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

NEXT_PUBLIC_SITE_URL=https://daydaivn.com
```

File này được upload lên server và dùng bởi `docker-compose.yml`.

### Email (Resend)

1. Tạo API key tại [resend.com](https://resend.com)
2. Verify domain `notifications.daydaivn.com` (hoặc `daydaivn.com`) tại [resend.com/domains](https://resend.com/domains) — thêm DNS SPF/DKIM
3. Đặt `RESEND_FROM_EMAIL` dùng domain đã verify (không dùng `onboarding@resend.dev` trên production)

> `onboarding@resend.dev` chỉ gửi được tới email đăng ký tài khoản Resend.

### Telegram Bot

1. Mở Telegram → tìm **@BotFather** → gửi `/newbot` → đặt tên bot → lấy **token**
2. Tìm bot vừa tạo → bấm **Start** (hoặc thêm bot vào nhóm admin)
3. Lấy **Chat ID**:
   - Gửi 1 tin nhắn bất kỳ cho bot (hoặc trong nhóm)
   - Mở trình duyệt: `https://api.telegram.org/bot<TOKEN>/getUpdates`
   - Tìm `"chat":{"id":123456789}` → copy số đó vào `TELEGRAM_CHAT_ID`
   - Nhóm có id dạng `-100xxxxxxxxxx` (âm)
4. Điền vào `.env`:
   ```env
   TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
   TELEGRAM_CHAT_ID=123456789
   ```

Đơn hàng / báo giá gửi **song song** email + Telegram. Thành công nếu **ít nhất 1 kênh** gửi được.

**Sau deploy, kiểm tra Telegram trên production:**

```bash
ssh -p 8686 root@160.30.160.31
grep TELEGRAM /opt/daydaivn/.env
docker exec daydaivn-web printenv TELEGRAM_BOT_TOKEN TELEGRAM_CHAT_ID
```

Nếu 2 dòng `printenv` trống → container chưa nhận biến → sửa `.env` local rồi deploy lại.

## Deploy (một lệnh)

```bash
VPS_PASSWORD='mật-khẩu-root' ./scripts/deploy-docker.sh
```

**Lưu ý mật khẩu có ký tự `$`:** luôn bọc bằng dấu nháy đơn `'...'` như trên. Nếu để trong file `.env` trên server, ghi `$` thành `$$` để Docker Compose không hiểu nhầm biến.

Script sẽ tự động:

1. Build Docker image (`linux/amd64`) trên máy local
2. Upload source + image lên VPS (`.env` upload riêng, không nằm trong tar)
3. Đảm bảo Docker đã cài (deploy thường **không** ghi đè nginx)
4. Chạy container `daydaivn-web` port 3000
5. nginx (port 80) proxy → 3000 — chỉ tạo mới khi chạy `SETUP_NGINX=1`

Sau khi xong, truy cập: **http://160.30.160.31** hoặc **http://daydaivn.com**

### Lần đầu cài nginx trên VPS

```bash
SETUP_NGINX=1 VPS_PASSWORD='...' ./scripts/deploy-docker.sh
```

### PC báo `ERR_CONNECTION_REFUSED` sau khi deploy

**Nguyên nhân:** Bản deploy cũ chạy `docker-setup-vps.sh` mỗi lần → ghi đè nginx, **mất HTTPS** dù cert Let's Encrypt vẫn còn trên server.

**Sửa ngay trên VPS (không cần cấp cert lại):**

```bash
ssh -p 8686 root@160.30.160.31
bash /root/nginx-restore-ssl.sh
```

**Sau khi cập nhật script deploy mới:** mỗi lần `./scripts/deploy-docker.sh` sẽ **tự** chạy `nginx-restore-ssl.sh` nếu đã có cert.

- Deploy thường **không** ghi đè nginx (`docker-ensure-vps.sh`)
- Chỉ dùng `SETUP_NGINX=1` khi cài VPS mới chưa có nginx

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
2. Mở firewall VPS: cổng **80** và **443** (panel nhà cung cấp + `ufw allow 80,443/tcp` nếu dùng ufw)
3. SSH vào VPS, chạy **một lần** (thay email của bạn):

```bash
ssh -p 8686 root@160.30.160.31

CERTBOT_EMAIL=admin@daydaivn.com bash /opt/daydaivn/scripts/ssl-setup-vps.sh
```

Hoặc upload script rồi chạy:

```bash
CERTBOT_EMAIL=admin@daydaivn.com bash ssl-setup-vps.sh
```

### Gia hạn tự động (không cần verify lại tay)

Let's Encrypt hết hạn sau **90 ngày**. Certbot cài sẵn **timer** chạy 2 lần/ngày và tự renew khi còn ~30 ngày.

Kiểm tra timer đang chạy:

```bash
systemctl status certbot.timer
certbot renew --dry-run   # test gia hạn, không đổi cert thật
```