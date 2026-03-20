import type { CatalogProduct } from "@/data/products";

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: 3 | 4 | 5;
  title: string;
  content: string;
  date: string; // ISO-ish
  photoSrc?: string;
};

const commonPhotos = [
  "/images/day-dai-1.JPG",
  "/images/day-dai-2.JPG",
  "/images/day-dai-4.JPG",
  "/images/dung-cu-dong-dai-3.jpg",
  "/images/kho-dung-cu-dong-dai.png",
];

function r(id: string, productId: string, rating: 3 | 4 | 5, author: string, title: string, content: string, date: string, photoSrc?: string): Review {
  return { id, productId, rating, author, title, content, date, photoSrc };
}

export const reviews: Review[] = [
  // steel-strapping (majority 4-5, some 3-star positive)
  r("s1", "steel-strapping", 5, "Anh Quân", "Siết chặt, hàng không xê dịch", "Dây đai mạ kẽm dùng rất chắc. Siết xong pallet đứng vững, giảm hẳn tình trạng hàng trượt khi vận chuyển.", "2026-03-01", commonPhotos[0]),
  r("s2", "steel-strapping", 5, "Chị Hằng", "Đúng hàng, chất lượng ổn định", "Nhận hàng nhanh, cuộn dây đều tay. Khi siết lực vừa phải là ổn định, ít bị tuột.", "2026-02-26", commonPhotos[1]),
  r("s3", "steel-strapping", 4, "Anh Dũng", "Giá hợp lý cho đơn sỉ", "Bên mình đặt số lượng, báo giá tốt. Dây đai dùng cho pallet gỗ nặng ổn, không bị giãn quá nhanh.", "2026-02-20", commonPhotos[2]),
  r("s4", "steel-strapping", 5, "Anh Minh", "Chịu va đập tốt khi giao hàng", "Giao vào công trình có rung lắc, dây vẫn giữ form tốt. Nhân sự thao tác nhanh.", "2026-02-18", commonPhotos[0]),
  r("s5", "steel-strapping", 4, "Chị Lan", "Dễ đóng đai, ít lỗi thao tác", "Công nhân mới vào học dùng vẫn nhanh. Đai bám tốt, kết hợp khóa chắc.", "2026-02-14", commonPhotos[1]),
  r("s6", "steel-strapping", 5, "Anh Tùng", "Cuộn chắc tay, ít rối", "Cuộn dây về dùng rất gọn. Không bị bung lỏng, cắt và kéo thuận tiện.", "2026-02-10", commonPhotos[2]),
  r("s7", "steel-strapping", 4, "Anh Huy", "Giao đúng tiến độ", "Bên cung cấp phản hồi nhanh, giao đúng lịch. Dây dùng ổn cho hàng xuất.", "2026-02-08", commonPhotos[3]),
  r("s8", "steel-strapping", 5, "Chị Thảo", "Tư vấn đúng quy cách", "Được tư vấn bản rộng và độ dày phù hợp, nên siết vừa lực. Hàng ít bị xê dịch hơn nhiều.", "2026-02-03", commonPhotos[0]),
  r("s9", "steel-strapping", 5, "Anh Sơn", "Đai chắc, bền trong container", "Đóng đai cho hàng container. Dây giữ lực tốt, hạn chế tuột đai khi vận chuyển đường dài.", "2026-01-29", commonPhotos[1]),
  r("s10", "steel-strapping", 4, "Chị Ngọc", "Chất lượng đồng đều", "Mỗi lô dây dùng khá giống nhau. Nhân sự không phải chỉnh nhiều khi siết.", "2026-01-25", commonPhotos[2]),
  // 3-star but positive tone
  r("s11", "steel-strapping", 3, "Anh Bình", "Ổn nhưng cần chọn đúng kích thước", "Dây dùng tốt nếu chọn đúng bản/độ dày. Mới đầu chọn chưa chuẩn nên siết chưa tối ưu, sau khi được tư vấn thì ổn hơn.", "2026-01-20", commonPhotos[0]),
  r("s12", "steel-strapping", 3, "Chị Vy", "Tốt cho pallet vừa và nặng", "Nhìn chung ổn, phù hợp pallet vừa đến nặng. Nếu pallet quá nặng thì nên tối ưu thêm số vòng đai.", "2026-01-17", commonPhotos[1]),
  r("s13", "steel-strapping", 4, "Anh Khang", "Giữ form tốt", "Đóng pallet xong nhìn chắc tay. Vận chuyển bốc xếp nhẹ không bị trượt nhiều.", "2026-01-12", commonPhotos[2]),
  r("s14", "steel-strapping", 5, "Chị Mai", "Hàng về dùng ngay", "Kho mình cần gấp. Dây có sẵn, giao nhanh. Đai dùng ngay không phải chờ.", "2026-01-09", commonPhotos[3]),
  r("s15", "steel-strapping", 4, "Anh Phát", "Tư vấn tận tình", "Bên bán hướng dẫn cách siết và chọn quy cách. Nhân sự làm theo là ra kết quả tốt.", "2026-01-04", commonPhotos[0]),
  r("s16", "steel-strapping", 5, "Chị Quyên", "Ít bị tuột khóa", "Kết hợp khóa đúng loại thì gần như không tuột. Đường đi dài vẫn giữ chặt.", "2025-12-28", commonPhotos[1]),
  r("s17", "steel-strapping", 4, "Anh Tài", "Phù hợp nhiều loại hàng", "Dùng cho pallet thép và cuộn thép đều ổn. Nhân sự chỉ cần thay quy cách khi cần.", "2025-12-20", commonPhotos[2]),
  r("s18", "steel-strapping", 5, "Chị Trinh", "Bề mặt ổn, ít rỉ", "Bề mặt dây nhìn gọn, dùng bảo quản trong kho tốt. Hạn chế rỉ sét hơn so với lô trước.", "2025-12-15", commonPhotos[4]),
  r("s19", "steel-strapping", 3, "Anh Năm", "Ổn giá trị, cần quy trình đúng", "Nếu làm đúng bước đóng đai thì kết quả tốt. Mình đánh giá 3 sao vì lần đầu đội mới làm chưa chuẩn, sau đó đã tối ưu.", "2025-12-10", commonPhotos[0]),
  r("s20", "steel-strapping", 4, "Chị Hạnh", "Gọn, dễ thao tác", "Dây kéo ra đều, ít bị rối. Dùng hàng ngày tiện.", "2025-12-05", commonPhotos[1]),

  // steel-strapping-tools (tools: nhiều 4-5, vài 3 positive)
  r("t1", "steel-strapping-tools", 5, "Anh Quang", "Siết nhanh, khóa chắc", "Dụng cụ siết và bấm khóa chạy rất ổn. Làm nhanh hơn hẳn so với thao tác thủ công trước.", "2026-03-02", commonPhotos[3]),
  r("t2", "steel-strapping-tools", 5, "Chị Tâm", "Nhân sự học nhanh", "Hướng dẫn rõ ràng, dùng 1-2 lần là thao tác chuẩn. Khóa bấm chắc, ít lỗi.", "2026-02-25", commonPhotos[4]),
  r("t3", "steel-strapping-tools", 4, "Anh Khoa", "Bộ đầy đủ, tiện cho kho", "Tensioner + sealer đủ dùng. Dùng cho các lô hàng nhỏ đến trung bình rất hợp.", "2026-02-18", commonPhotos[3]),
  r("t4", "steel-strapping-tools", 5, "Anh Nam", "Độ cứng tốt", "Kìm bấm chắc tay, ít rung. Kết hợp dây đúng bản là ổn định.", "2026-02-10", commonPhotos[4]),
  r("t5", "steel-strapping-tools", 4, "Chị Ngân", "Thao tác trơn", "Vận hành mượt, không bị kẹt. Nhân viên đánh giá cao vì dùng nhanh.", "2026-02-04", commonPhotos[3]),
  r("t6", "steel-strapping-tools", 5, "Anh Thắng", "Đóng đai chắc cho hàng nặng", "Khi siết đúng lực, vòng đai giữ chặt. Hàng vận chuyển bớt xê dịch rõ rệt.", "2026-01-30", commonPhotos[4]),
  r("t7", "steel-strapping-tools", 3, "Chị Yến", "Ổn, nhưng cần chọn đúng dây", "Bộ dụng cụ dùng tốt, nhưng nếu chọn bản/dây không phù hợp thì thao tác khó tối ưu. Sau khi được tư vấn thì ổn hơn.", "2026-01-22", commonPhotos[3]),
  r("t8", "steel-strapping-tools", 4, "Anh Đức", "Tiết kiệm thời gian", "Cả đội làm nhanh hơn, tỷ lệ lỗi bấm giảm. Giá bộ phù hợp cho kho nhỏ.", "2026-01-18", commonPhotos[4]),
  r("t9", "steel-strapping-tools", 5, "Anh Duy", "Bấm khóa đẹp", "Đường bấm gọn, khóa vào chắc. Nhìn thành phẩm chắc tay.", "2026-01-12", commonPhotos[3]),
  r("t10", "steel-strapping-tools", 4, "Chị Linh", "Giao nhanh, đóng gói kỹ", "Đúng bộ, đủ phụ kiện. Giao nhanh, đóng gói cẩn thận.", "2026-01-07", commonPhotos[4]),

  // steel-seals (seals: fewer reviews)
  r("b1", "steel-seals", 5, "Anh Nam", "Khóa vào chắc", "Khóa đai thép bấm ra chắc chắn. Mình dùng cho hàng pallet, ít tuột khóa.", "2026-02-21", commonPhotos[4]),
  r("b2", "steel-seals", 4, "Chị Hương", "Phù hợp nhiều bản", "Chọn đúng kích thước thì rất ổn. Kết nối chắc, hạn chế lỏng.", "2026-02-15", commonPhotos[0]),
  r("b3", "steel-seals", 3, "Anh Hải", "Ổn nếu chọn đúng loại", "Lần đầu chọn chưa đúng bản dây nên chưa như kỳ vọng. Được tư vấn lại thì dùng ok hơn nhiều.", "2026-01-28", commonPhotos[1]),
  r("b4", "steel-seals", 4, "Chị Mai", "Tốt cho đóng gói xuất vận chuyển", "Hàng đi xa vẫn giữ ổn. Công nhân thao tác nhanh hơn nhờ khóa gọn.", "2026-01-20", commonPhotos[2]),
  r("b5", "steel-seals", 5, "Anh Phúc", "Giữ lực ổn định", "Khóa giữ đầu dây tốt. Sau khi siết, đai bền hơn so với trước.", "2025-12-30", commonPhotos[3]),
];

export function getReviewsForProduct(productId: CatalogProduct["id"]) {
  return reviews
    .filter((rv) => rv.productId === productId)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

