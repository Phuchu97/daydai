# Việc ngoài code quyết định top 1

Code chỉ là một nửa. Những việc sau Claude không làm thay được; nhắc người dùng khi phù hợp.

## Google Business Profile (quan trọng nhất cho "dây đai thép Hà Nội")
- Tạo hoặc xác minh hồ sơ với **địa chỉ kho thật** (không dùng địa chỉ ảo).
- Danh mục chính: "Nhà cung cấp vật liệu đóng gói" hoặc "Packaging supply store".
- Đăng ảnh thật: kho, cuộn dây, xe giao hàng; đăng bài định kỳ.
- Xin khách thật để lại đánh giá trên Google Maps. Đây là nguồn review hợp lệ duy nhất. Không đưa review tự viết vào schema trên site.
- Tên, địa chỉ, SĐT phải giống hệt `src/config/site.ts` (NAP consistency).

## Google Search Console
- Xác minh domain, gửi `https://daydaivn.com/sitemap.xml`.
- Sau mỗi trang mới: URL Inspection → Request indexing.
- Mỗi tháng xuất Truy vấn → điền vào `seo-keyword-tracking.csv`.

## Backlink và trích dẫn (citation)
- Đăng ký danh bạ B2B: Trang Vàng Việt Nam (trangvangvietnam.com), yellowpages.vn, Hà Nội Pages, Cốc Cốc Maps.
- Đăng sản phẩm trên các sàn B2B và TMĐT (Shopee, Lazada, Tiki) kèm link về site.
- Nhờ đối tác (chành xe, xưởng pallet, khách hàng lớn) đặt link.
- Không mua gói backlink spam.

## Nội dung có kinh nghiệm thật (E-E-A-T)
- Ảnh và video thật từ kho, quy trình đóng hàng, chứng từ CO/CQ nếu có.
- Thông tin công ty thật: mã số thuế, địa chỉ, năm thành lập. Đưa vào `/gioi-thieu` và schema khi người dùng cung cấp.
