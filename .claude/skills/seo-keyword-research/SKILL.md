---
name: seo-keyword-research
description: Nghiên cứu từ khoá tiếng Việt cho daydaivn.com (dây đai thép, dây đai sắt, đai thép, bọ sắt, khoá đai, dụng cụ đóng đai). Dùng khi người dùng hỏi "người ta hay tìm gì", "tìm thêm từ khoá", "keyword mới", "đối thủ nhắm từ gì", hoặc theo lịch hằng tháng. Lấy gợi ý tìm kiếm thật từ Google Việt Nam, lọc bỏ từ sai ý định, phân loại và ghi vào seo-keyword-tracking.csv.
---

# Nghiên cứu từ khoá

## 1. Lấy gợi ý thật từ Google VN

```bash
python3 -I .claude/skills/seo-keyword-research/scripts/suggest.py \
  --csv seo-keyword-tracking.csv --expand "dây đai thép" "dây đai sắt" "đai thép"
```

- `--expand` truy vấn thêm "<seed> a…x, 1…9" để lấy được cả đuôi dài.
- Mỗi dòng được gắn `[tracked]` (đã có trong CSV), `[exclude]` (sai ý định) hoặc `[new]`.
- `xN` = số seed cùng trả về gợi ý đó; càng cao thì càng có thể là từ phổ biến.
- Seed nên thử thêm: "giá dây đai thép", "dây đai thép <bản rộng>", "máy đóng đai thép", "dụng cụ đóng đai", "kìm siết đai thép", "bọ đai thép", "đai kiện", "dây đai thép <tỉnh>".

Autocomplete chỉ cho biết người ta **có** gõ, không cho biết **bao nhiêu**. Khi cần số lượt tìm, nhờ người dùng xem Google Keyword Planner hoặc Search Console.

Có thể dùng thêm WebSearch để xem đối thủ đang xếp hạng bằng title/H1 nào (trangvangvietnam, yellowpages, website đối thủ).

## 2. Không nhắm (sai ý định tìm kiếm)

| Mẫu | Thực chất là |
|---|---|
| đai thép cột, thép đai D6/D8, đai sắt 15x15, phi 6, dầm, móng, giằng | Thép đai cốt thép trong xây dựng |
| dây đai lõi thép, dây đai PU/răng, CVT, curoa | Dây curoa, phụ tùng |
| dây đai an toàn, bảo hộ | Đồ bảo hộ lao động |
| dây đai bó gối, bó tiền | Không liên quan |
| tên thương hiệu đối thủ (Thành Đạt, Bina…) | Không nhắm trực tiếp |

Từ khoá địa phương phía Nam (Bình Dương, chợ Kim Biên, TP.HCM) chỉ làm khi người dùng xác nhận có giao nhanh vào miền Nam.

## 3. Phân loại từng từ `[new]`

- **intent**: `commercial` (tìm sản phẩm hoặc nhà cung cấp), `transactional` (giá, mua, kích cỡ cụ thể), `informational` (là gì, cách, so sánh), `local-commercial` (có tên tỉnh hoặc thành phố).
- **Trang đích**: trang hiện có cùng ý định → ghi route; cần trang mới → ghi `(chưa có trang)`; nên là bài tư vấn → ghi `(bài viết mới)`.
- **priority**:
  - **P1**: từ gốc của sản phẩm chính, hoặc xuất hiện ở nhiều seed, hoặc ý định mua rõ.
  - **P2**: đuôi dài có ý định mua, hoặc từ tìm hiểu hay gặp.
  - **P3**: phụ kiện chưa chắc có bán, hoặc từ ít gặp.
- Sản phẩm chưa chắc có bán (bản 25mm, dây đen, inox, máy khí nén, kéo cắt, xe đẩy) → ghi `next_action` là "Chỉ làm nếu có bán" rồi hỏi người dùng.

## 4. Ghi vào CSV

Cột: `keyword,intent,target_url,priority,current_position,impressions_28d,ctr,notes,next_action`

- Viết thường, có dấu, đúng như người dùng gõ. Biến thể không dấu chỉ thêm khi đó là từ gốc P1.
- `notes` ghi nguồn và ngày, ví dụ `Autocomplete 2026-10`.
- Không tạo dòng trùng; nếu đã có, cập nhật `notes`.
- Sau khi ghi, chạy `seo-audit`: audit sẽ cảnh báo nếu `target_url` không tồn tại.

## 5. Báo lại người dùng

Bảng ngắn gồm: từ khoá mới, ý định, trang đích đề xuất, ưu tiên. Thêm danh sách câu hỏi cần người dùng trả lời (có bán không, giá). Sau đó đề xuất bước tiếp theo bằng `seo-landing-page` hoặc `seo-article`.
