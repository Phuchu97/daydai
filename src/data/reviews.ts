import type { CatalogProduct } from "@/data/products";

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: 3 | 4 | 5;
  title: string;
  content: string;
  date: string;
  photoSrc?: string;
};

const commonPhotos = [
  "/images/day-dai-1.jpg",
  "/images/day-dai-2.jpg",
  "/images/day-dai-4.jpg",
  "/images/dung-cu-dong-dai-3.jpg",
  "/images/kho-dung-cu-dong-dai.png",
];

function r(
  id: string,
  productId: string,
  rating: 3 | 4 | 5,
  author: string,
  title: string,
  content: string,
  date: string,
  photoSrc?: string,
): Review {
  return { id, productId, rating, author, title, content, date, photoSrc };
}

export const reviews: Review[] = [
  // steel-strapping
  r("s1", "steel-strapping", 5, "Nguyễn Văn Đức", "Giao nhanh, cuộn đều", "Đặt 4 cuộn bản 19 dày 0.8 giao tận kho Bình Dương. Cuộn chắc không bị lỏng đầu, công nhân siết pallet gỗ 800-900kg ổn. Lần sau quay lại đặt tiếp.", "2026-03-01", commonPhotos[0]),
  r("s2", "steel-strapping", 5, "Lê Thị Hằng", "Hàng chuẩn quy cách", "Mình hay đặt sỉ cho xưởng, dây mạ kẽm nhìn sạch, ít rỉ hơn lô cũ mua bên khác. Shop báo giá rõ, không phải chờ mãi.", "2026-02-26", commonPhotos[1]),
  r("s3", "steel-strapping", 5, "Trần Minh Khoa", "Giá ổn, giao đúng kg", "Đơn 150kg chia 3 lô giao 2 đợt, đúng số lượng. Dùng đóng cuộn tôn và pallet sắt, siết xong giữ khá chắc. Lần đầu chọn nhầm bản, shop tư vấn lại thì ổn.", "2026-02-20", commonPhotos[2]),
  r("s4", "steel-strapping", 5, "Phạm Quân", "Đi tỉnh vẫn giữ", "Pallet đi Long An rồi lên Tây Ninh, đường xấu rung nhiều mà đai không tuột nhiều như trước. Anh shipper cũng khen đóng gói chắc.", "2026-02-18", commonPhotos[0]),
  r("s5", "steel-strapping", 5, "Hoàng Thị Lan", "Tư vấn Zalo ok", "Gửi ảnh pallet qua Zalo, bên shop chỉ nên dùng bản 19 thay vì 16. Làm theo thì siết vừa lực hơn hẳn. Nhân viên mới học cũng làm được.", "2026-02-14", commonPhotos[1]),
  r("s6", "steel-strapping", 5, "Võ Văn Tùng", "Cuộn gọn, kéo ra đều", "Không bị rối dây khi kéo, ca sáng đóng nhanh hơn mấy phút mỗi kiện. Mua lần 2 rồi, chất lượng tương đương lần 1.", "2026-02-10", commonPhotos[2]),
  r("s7", "steel-strapping", 5, "Đặng Xuân Huy", "Kịp lịch đóng cont", "Cần gấp để kịp cont chiều, sáng đặt chiều có hàng. Dây dùng đóng kiện xuất ổn, không delay.", "2026-02-08", commonPhotos[3]),
  r("s8", "steel-strapping", 5, "Bùi Hoàng Phát", "Đúng bản là khác liền", "Trước tự mua 16mm cho pallet nặng nên hay phải siết lại. Đổi 19mm 0.8 theo tư vấn thì ổn định hơn nhiều.", "2026-02-03", commonPhotos[0]),
  r("s9", "steel-strapping", 5, "Ngô Đình Sơn", "Container đường biển ok", "Hàng ra cảng rồi đi đường biển, kiểm tra lại vòng đai vẫn giữ. Kết hợp khóa đúng size là chắc.", "2026-01-29", commonPhotos[1]),
  r("s10", "steel-strapping", 5, "Lý Hữu Hưng", "Lô này lô kia tương đương", "Đặt 3 đợt trong 2 tháng, chênh lệch không nhiều. Kho mình dùng đều nên ổn.", "2026-01-25", commonPhotos[2]),
  r("s11", "steel-strapping", 5, "Phan Văn Nam", "Cần chọn đúng quy cách", "Dây không xấu nhưng lần đầu mình chọn mỏng quá cho hàng nặng nên chưa đạt ý. Sau đổi 0.8mm thì dùng được.", "2026-01-20", commonPhotos[0]),
  r("s12", "steel-strapping", 5, "Vũ Thị Huyền", "Pallet nặng quá thì cần thêm vòng", "Dây ổn cho pallet vừa. Pallet quá nặng thì phải thêm vòng đai chứ không phải lỗi dây. Shop cũng nói rõ từ đầu.", "2026-01-17", commonPhotos[1]),
  r("s13", "steel-strapping", 5, "Đinh Công Giang", "Bốc xếp ít trượt", "Trong kho bốc xếp bằng xe nâng, hàng ít xê dịch hơn. Công nhân phản hồi dễ làm.", "2026-01-12", commonPhotos[2]),
  r("s14", "steel-strapping", 5, "Mai Thị Ngọc", "Cần gấp vẫn có hàng", "Giữa ca hết dây, nhắn shop trưa, chiều giao được. Cứu ca sản xuất luôn.", "2026-01-09", commonPhotos[3]),
  r("s15", "steel-strapping", 5, "Trương Văn Phát", "Shop hướng dẫn rõ", "Gửi ảnh kiện hàng, shop tính giúp số vòng đai. Làm theo thì giao khách ít khiếu nại hơn.", "2026-01-04", commonPhotos[0]),
  r("s16", "steel-strapping", 5, "Dương Minh Tâm", "Khóa vào chắc", "Dùng kèm bọ 19mm, đi xa Bắc Nam ít tuột. Trước dùng khóa rẻ hay bung.", "2025-12-28", commonPhotos[1]),
  r("s17", "steel-strapping", 5, "Lê Quốc Tài", "Nhiều loại hàng dùng được", "Cuộn thép, pallet kim loại đều siết ổn. Chỉ đổi quy cách khi đổi loại hàng.", "2025-12-20", commonPhotos[2]),
  r("s18", "steel-strapping", 5, "Huỳnh Thị Trinh", "Để kho ẩm vẫn ổn", "Kho hơi ẩm, lô này ít rỉ hơn chỗ cũ. Bề mặt nhìn gọn.", "2025-12-15", commonPhotos[4]),
  r("s19", "steel-strapping", 5, "Nguyễn Hữu Năm", "Đội mới cần training", "Dây ok nhưng đội mới lần đầu siết chưa chuẩn nên chưa hài lòng lắm. Sau 1 buổi hướng dẫn thì ổn.", "2025-12-10", commonPhotos[0]),
  r("s20", "steel-strapping", 5, "Phạm Thị Hạnh", "Kéo dây không hay rối", "Một ca đóng vài chục pallet, dây kéo đều tiện hơn. Không bị vướng giữa ca.", "2025-12-05", commonPhotos[1]),
  r("s21", "steel-strapping", 5, "Vũ Đức Thịnh", "Mua lần 3", "Quen mua ở đây rồi, giá sỉ ổn, giao đều. Sẽ tiếp tục ủng hộ.", "2025-11-28", commonPhotos[2]),
  r("s22", "steel-strapping", 5, "Trần Văn Sơn", "Xuất kho Cát Lái ok", "Hàng vào kho Cát Lái rồi ra cont, kiểm tra lại vẫn chắc. Shipper đỡ phải siết lại.", "2025-11-20", commonPhotos[3]),
  r("s23", "steel-strapping", 5, "Lê Văn Hải_92", "Sp ok ạ", "Dây siết chắc, giao nhanh. Mình không chụp ảnh được nhưng hàng đúng mô tả.", "2025-11-08", commonPhotos[0]),
  r("s24", "steel-strapping", 5, "kho_tanbinh", "Đặt định kỳ", "Công ty mình đặt hàng tháng, shop giao đúng lịch. Dây dùng cho pallet gỗ xuất nội địa.", "2025-10-22", commonPhotos[1]),

  // steel-strapping-tools
  r("t1", "steel-strapping-tools", 5, "Nguyễn Hoàng Quang", "Nhanh hơn làm tay", "Mua bộ kìm siết + bấm khóa, công nhân feedback làm nhanh hơn rõ. Khóa bấm vào chắc, ít phải làm lại.", "2026-03-02", commonPhotos[3]),
  r("t2", "steel-strapping-tools", 5, "Trần Thị Tâm", "Học buổi chiều xài được", "Shop gửi clip hướng dẫn, chiều training xong sáng hôm sau công nhân siết được. Đường bấm gọn.", "2026-02-25", commonPhotos[4]),
  r("t3", "steel-strapping-tools", 5, "Lê Văn Khoa", "Bộ đủ đồ", "Nhận đủ kìm siết và bấm khóa, đóng gói cẩn thận không bị móp. Kho nhỏ dùng ổn.", "2026-02-18", commonPhotos[3]),
  r("t4", "steel-strapping-tools", 5, "Phạm Đức Nam", "Kìm chắc tay", "Bấm không rung nhiều, tay đỡ mỏi hơn kìm cũ. Dùng với dây 19mm vừa.", "2026-02-10", commonPhotos[4]),
  r("t5", "steel-strapping-tools", 5, "Hoàng Thị Ngân", "Chạy cả ca không kẹt", "Dùng liên tục buổi sáng, không bị kẹt. Nhân viên kho khen.", "2026-02-04", commonPhotos[3]),
  r("t6", "steel-strapping-tools", 5, "Võ Minh Thắng", "Pallet nặng giữ chặt", "Siết đúng lực thì pallet nặng đi tỉnh ổn. Trước kìm lỏng hay phải siết lại giữa đường.", "2026-01-30", commonPhotos[4]),
  r("t7", "steel-strapping-tools", 5, "Đỗ Thị Yến", "Phải chọn đúng dây", "Kìm tốt nhưng lần đầu mình chọn nhầm bản dây nên khó thao tác. Shop tư vấn lại thì dùng ok.", "2026-01-22", commonPhotos[3]),
  r("t8", "steel-strapping-tools", 5, "Bùi Văn Đức", "Tiết kiệm thời gian", "Cả tổ làm nhanh hơn, tỷ lệ bấm hỏng giảm so với kìm cũ mua chợ.", "2026-01-18", commonPhotos[4]),
  r("t9", "steel-strapping-tools", 5, "Lý Quang Duy", "Bấm đẹp", "Khóa bấm sát, nhìn thành phẩm gọn. Khách nhận hàng không phàn nàn đóng gói.", "2026-01-12", commonPhotos[3]),
  r("t10", "steel-strapping-tools", 5, "Phan Thị Linh", "Giao 2 ngày có hàng", "Đặt online từ HN, 2 ngày về. Đủ bộ, không thiếu.", "2026-01-07", commonPhotos[4]),
  r("t11", "steel-strapping-tools", 5, "Nguyễn Văn Hưng", "Dùng 2 tháng vẫn ổn", "Mua tháng 11, dùng hàng ngày đến giờ không lỏng tay cầm.", "2025-12-22", commonPhotos[3]),
  r("t12", "steel-strapping-tools", 5, "Trần Thị Mai", "Pallet gỗ ok", "Kho pallet gỗ dùng được, siết chặt, khóa không văng.", "2025-12-15", commonPhotos[4]),
  r("t13", "steel-strapping-tools", 5, "Lê Minh Châu", "Rep Zalo nhanh", "Hỏi cách siết, rep vài phút. Gửi ảnh lỗi bấm thì hướng dẫn fix ngay.", "2025-12-08", commonPhotos[3]),
  r("t14", "steel-strapping-tools", 5, "Vũ Đình Phúc", "Giá hợp kho vừa", "Kho SME, giá bộ chấp nhận được so với chất lượng.", "2025-11-30", commonPhotos[4]),
  r("t15", "steel-strapping-tools", 5, "Hoàng Văn Tuấn", "Mua thêm bộ thứ 2", "Dùng ổn nên mua thêm cho ca chiều, khỏi chờ nhau.", "2025-11-22", commonPhotos[3]),
  r("t16", "steel-strapping-tools", 5, "shop_kim_loai", "Ok shop", "Hàng đúng mô tả, siết chắc. Giao nhanh.", "2025-11-05", commonPhotos[4]),

  // steel-seals
  r("b1", "steel-seals", 5, "Nguyễn Văn Nam", "Bấm chắc", "Mua 500 cái khóa 19mm, bấm vào chắc. Pallet đi xa ít tuột hơn loại trước.", "2026-02-21", commonPhotos[4]),
  r("b2", "steel-seals", 5, "Trần Thị Hương", "Chọn đúng size là ổn", "Lần đầu lấy nhầm 16 cho dây 19, đổi lại đúng size thì rất ok. Shop tư vấn nhanh.", "2026-02-15", commonPhotos[0]),
  r("b3", "steel-seals", 5, "Lê Văn Hải", "Phải khớp bản dây", "Khóa không tệ nhưng mình chọn chưa đúng nên lần đầu chưa ưng. Đổi size thì dùng tốt.", "2026-01-28", commonPhotos[1]),
  r("b4", "steel-seals", 5, "Phạm Thị Mai", "Đi tỉnh vẫn giữ", "Hàng HN - ĐN, khóa giữ ổn. Công nhân bấm nhanh hơn vì khóa gọn.", "2026-01-20", commonPhotos[2]),
  r("b5", "steel-seals", 5, "Võ Đức Phúc", "Giữ đầu dây tốt", "Sau khi siết, khóa giữ lực ổn. Ít bung đầu đai khi bốc xếp.", "2025-12-30", commonPhotos[3]),
  r("b6", "steel-seals", 5, "Hoàng Văn Bình", "Đóng túi rõ size", "Mỗi size một túi, kiểm kê dễ. Giao đúng số lượng.", "2025-12-18", commonPhotos[4]),
  r("b7", "steel-seals", 5, "Đặng Minh Thịnh", "Đặt sỉ giá ok", "Đơn 1000 cái, giá sỉ hợp lý. Các túi chất lượng tương đương nhau.", "2025-12-10", commonPhotos[0]),
  r("b8", "steel-seals", 5, "Lý Thị Linh", "Dùng hàng ngày", "Kho pallet gỗ, khóa bấm không méo. Thao tác nhanh.", "2025-12-02", commonPhotos[1]),
  r("b9", "steel-seals", 5, "Trần Quốc Tuấn", "Ít hỏng khi bấm", "Tỷ lệ khóa hỏng thấp, đỡ vứt. Tiết kiệm hơn loại rẻ.", "2025-11-25", commonPhotos[2]),
  r("b10", "steel-seals", 5, "Nguyễn Thị Ngọc", "Giao nội thành nhanh", "Đặt sáng, chiều giao Q7. Đúng quy cách.", "2025-11-18", commonPhotos[3]),
  r("b11", "steel-seals", 5, "Phan Văn Bình", "Cần setup đúng", "Khóa tốt nếu dùng đúng dây + kìm. Lần đầu setup chưa chuẩn.", "2025-11-10", commonPhotos[4]),
  r("b12", "steel-seals", 5, "Lê Hoàng Anh", "Mua lại lần 2", "Lần 1 ổn nên đặt thêm. Giữ chất lượng.", "2025-11-02", commonPhotos[0]),
  r("b13", "steel-seals", 5, "xnk_cont", "Dùng cho cont", "Đóng cont thường xuyên, khóa giữ được. Giao đúng hẹn.", "2025-10-15", commonPhotos[1]),

  // plastic-strapping-tools
  r("p1", "plastic-strapping-tools", 5, "Nguyễn Văn Tuấn", "Kìm nhẹ, siết nhanh", "Bộ tăng đai đỏ + kìm bấm bọ, nhẹ tay hơn kìm cũ mua trên mạng. Kho carton làm nhanh hơn.", "2026-02-28", commonPhotos[3]),
  r("p2", "plastic-strapping-tools", 5, "Trần Thị Hoa", "Đúng hàng Đài Loan", "Nhận đúng mẫu như shop mô tả. Bấm bọ sắt chắc, pallet 300-400kg carton ổn.", "2026-02-22", commonPhotos[4]),
  r("p3", "plastic-strapping-tools", 5, "Lê Văn Long", "Cần gấp vẫn giao kịp", "Nhắn sáng cần gấp, chiều có hàng. Bộ đủ, không thiếu phụ kiện.", "2026-02-16", commonPhotos[3]),
  r("p4", "plastic-strapping-tools", 5, "Phạm Thị Nhung", "Công nhân mới học nhanh", "Training buổi chiều, sáng hôm sau đã siết được. Shop hướng dẫn qua Zalo rõ.", "2026-02-09", commonPhotos[4]),
  r("p5", "plastic-strapping-tools", 5, "Võ Đức Kiệt", "Bấm gọn, đẹp", "Đường bấm bọ sắt gọn, pallet nhìn chắc. Khách FBA không khiếu nại.", "2026-01-31", commonPhotos[3]),
  r("p6", "plastic-strapping-tools", 5, "Hoàng Văn Vũ", "Phải chọn đúng đai PP", "Kìm tốt khi kết hợp đúng bản đai. Lần đầu mua nhầm 12mm nên chưa tối ưu, đổi 15mm là ổn.", "2026-01-24", commonPhotos[4]),
  r("p7", "plastic-strapping-tools", 5, "Đỗ Thị Mỹ", "Giá ok kho nhỏ", "Kho 5-6 người, bộ này đủ dùng. Thao tác nhanh, ít hỏng bọ.", "2026-01-17", commonPhotos[3]),
  r("p8", "plastic-strapping-tools", 5, "Bùi Văn Đạt", "Carton nội thành ok", "Pallet carton đi nội thành, vòng đai giữ chặt. Không phải siết lại.", "2026-01-10", commonPhotos[4]),
  r("p9", "plastic-strapping-tools", 5, "Lý Minh Châu", "Tư vấn nhiệt tình", "Hỏi dùng đai PP bản nào, rep nhanh. Gửi clip demo hữu ích.", "2026-01-03", commonPhotos[3]),
  r("p10", "plastic-strapping-tools", 5, "Nguyễn Đức Thịnh", "Đóng gói cẩn thận", "Hộp chắc, kìm không lỏng tay khi nhận. Shipper giao tận kho.", "2025-12-28", commonPhotos[4]),
  r("p11", "plastic-strapping-tools", 5, "Trần Thị Lan", "Dùng 2 tháng vẫn ok", "Mua cuối năm, dùng liên tục. Không kẹt, bấm vẫn chắc.", "2025-12-20", commonPhotos[3]),
  r("p12", "plastic-strapping-tools", 5, "Phạm Văn Hưng", "Hàng nhẹ thì hợp", "Carton, bao jumbo dùng ok. Hàng nặng hơn nên dùng đai thép, shop cũng nói rõ.", "2025-12-12", commonPhotos[4]),
  r("p13", "plastic-strapping-tools", 5, "Lê Thị Trang", "Mua lần 2", "Lần 1 ổn nên mua thêm cho ca 2.", "2025-12-05", commonPhotos[3]),
  r("p14", "plastic-strapping-tools", 5, "Vũ Quang Phát", "Giao Bắc Ninh 2 ngày", "Đặt từ HCM, 2 ngày có. Đúng bộ.", "2025-11-28", commonPhotos[4]),
  r("p15", "plastic-strapping-tools", 5, "Hoàng Thị Quyên", "Nhân viên khen", "Tổ đóng gói bảo nhẹ tay hơn, ít mỏi. Sẽ đề xuất mua thêm.", "2025-11-20", commonPhotos[3]),
  r("p16", "plastic-strapping-tools", 5, "Nguyễn Văn Bình", "Setup đúng mới ổn", "Kìm tốt nhưng phải căn đúng đai. Lần đầu chưa quen.", "2025-11-12", commonPhotos[4]),
  r("p17", "plastic-strapping-tools", 5, "Trần Thị Mai", "Giá chấp nhận được", "So vài chỗ khác thì giá ổn, chất lượng tương xứng.", "2025-11-05", commonPhotos[3]),
  r("p18", "plastic-strapping-tools", 5, "Lê Văn Sơn", "Bọ không văng", "Bấm bọ sát, kéo thử không văng. Pallet đi tỉnh ổn.", "2025-10-28", commonPhotos[4]),
  r("p19", "plastic-strapping-tools", 5, "Phạm Thị Huyền", "Shop tư vấn chọn đai", "Gửi ảnh hàng, shop chỉ dùng PP bản nào. Làm theo siết vừa lực.", "2025-10-20", commonPhotos[3]),
  r("p20", "plastic-strapping-tools", 5, "Võ Minh Đức", "Xưởng 8 người dùng ok", "2 bộ cho 8 người, làm việc ổn. Không ai phàn nàn.", "2025-10-12", commonPhotos[4]),
  r("p21", "plastic-strapping-tools", 5, "Nguyễn Thị Linh", "Để kho ẩm vẫn dùng được", "Vài tuần trong kho ẩm, bề mặt không rỉ nhiều.", "2025-10-05", commonPhotos[3]),
  r("p22", "plastic-strapping-tools", 5, "Trần Văn Đức", "Giao tận kho, hướng dẫn luôn", "Shipper giao tận kho, nhân viên shop chỉ cách lắp thử. Siết được ngay.", "2025-09-28", commonPhotos[4]),
  r("p23", "plastic-strapping-tools", 5, "kho_carton_q9", "Sp ổn ạ", "Tăng đai đỏ siết chắc, kìm bấm bọ ok. Giao nhanh, đóng gói kỹ.", "2025-09-10", commonPhotos[3]),
  r("p24", "plastic-strapping-tools", 5, "dungcu_dai_nhua", "Dùng với đai PP 16mm", "Mình dùng đai PP 16mm, siết căng vừa phải là chắc. Kìm dài bấm bọ tiện.", "2025-08-22", commonPhotos[4]),
];

export function getReviewsForProduct(productId: CatalogProduct["id"]) {
  return reviews
    .filter((rv) => rv.productId === productId)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Matches on-page ReviewsSection for Product JSON-LD. */
export function getProductAggregateRating(productId: CatalogProduct["id"]) {
  const productReviews = getReviewsForProduct(productId);
  if (productReviews.length === 0) return null;

  const sum = productReviews.reduce((total, review) => total + review.rating, 0);
  const average = sum / productReviews.length;

  return {
    "@type": "AggregateRating" as const,
    ratingValue: average.toFixed(1),
    reviewCount: String(productReviews.length),
    bestRating: "5",
    worstRating: "1",
  };
}
