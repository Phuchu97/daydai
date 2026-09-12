import type { Article } from "./articles";

/** P3 secondary articles — expanded 600–900 từ, bảng số (một số bài), FAQ. */
export const secondaryArticles: Article[] = [
  {
    slug: "cach-chon-khoa-dai-thep-phu-hop-ban-day",
    title: "Cách chọn khóa đai thép phù hợp theo bản dây",
    description:
      "Hướng dẫn chọn khóa đai thép, bọ kín, bọ chữ U theo bản dây 16mm, 19mm, 25mm, 32mm và loại dụng cụ bấm.",
    excerpt:
      "Khóa đai sai quy cách là nguyên nhân thường gặp khiến tuột mối đai. Bài viết này giúp bạn chọn đúng ngay từ đầu.",
    publishedAt: "2026-05-10",
    updatedAt: "2026-08-16",
    keywords: [
      "chọn khóa đai thép",
      "bọ sắt đóng đai",
      "khóa đai thép 19mm",
      "khoa dai thep",
    ],
    relatedProductIds: ["steel-seals", "steel-strapping-tools"],
    sections: [
      {
        heading: "Vì sao khóa đai phải khớp bản dây và dụng cụ bấm?",
        paragraphs: [
          "Khóa đai thép (bọ sắt) là điểm yếu nhất của toàn bộ vòng đai. Dù dây đai thép đủ bản rộng và lực siết đạt chuẩn, một bọ sai kích thước hoặc bấm không đủ lực vẫn khiến mối nối trượt sau vài lần nâng hạ forklift. Đây là lỗi phổ biến tại kho Việt Nam khi mua khóa lẻ không đồng bộ với cuộn dây hoặc kìm bấm cũ.",
          "Nguyên tắc cơ bản: bản khóa nên lớn hơn bản dây khoảng 0,2mm để hai mép bọ ôm dây vừa khít khi bấm. Khóa quá chật làm cắt cạnh dây; khóa quá rộng khiến lực bám giảm và bọ dễ xoay khi rung. Mỗi khổ dây (16mm, 19mm, 32mm) phải có khóa và kìm bấm tương ứng — không dùng chung kìm 16mm cho dây 19mm.",
          "Khi chuẩn hóa vật tư, nên gom khóa theo 1–2 quy cách dây chính và đặt nhãn rõ tại khu cấp phát. Trang /khoa-dai-thep có bảng quy cách bọ kín và bọ chữ U theo từng khổ để đối chiếu trước khi đặt hàng.",
        ],
      },
      {
        heading: "Bảng chọn khóa theo bản dây",
        paragraphs: [
          "Bảng dưới là tham chiếu nhanh cho kho và nhà máy. Luôn kiểm tra tem trên thùng khóa và thử bấm trên dây mẫu trước khi cấp phát số lượng lớn.",
        ],
        table: {
          headers: ["Bản dây", "Bản khóa gợi ý", "Loại bọ phổ biến", "Ghi chú"],
          rows: [
            ["16mm", "16,2mm", "Bọ kín hoặc bọ U", "Dùng kìm bấm 16mm; hàng vừa, tuyến ngắn"],
            ["19mm", "19,2mm", "Bọ kín", "Phổ biến nhất; ưu tiên bọ kín nếu đi xa"],
            ["25mm", "25,2mm", "Bọ kín", "Ít gặp hơn 19/32; cần kìm riêng"],
            ["32mm", "32,2mm", "Bọ kín nặng", "Bắt buộc kìm 32mm; cuộn thép, kiện >1,5 tấn"],
          ],
        },
      },
      {
        heading: "Bọ kín và bọ chữ U: chọn theo tải và tuyến",
        paragraphs: [
          "Bọ kín (sealed joint) có hai mép bẹt sâu vào dây sau khi bấm, tạo mối nối phẳng, chịu lực kéo cao. Đây là lựa chọn mặc định cho pallet hàng nặng, container và tuyến vận chuyển rung lắc. Với kiện trên 800kg hoặc hàng xuất khẩu, kho nên chỉ dùng bọ kín chất lượng ổn định, tránh đổi nhà cung cấp khóa giữa chừng mà không test lại.",
          "Bọ chữ U (open seal) phù hợp một số ứng dụng thao tác nhanh, tải trung bình và kiện ít bốc xếp lại. Mép bọ U ít bám hơn bọ kín nên không nên dùng cho cuộn thép hoặc hàng có tâm trọng lực lệch. Nếu doanh nghiệp đang dùng bọ U mà tỷ lệ tuột mối cao, chuyển sang bọ kín cùng khổ thường cải thiện rõ mà không cần đổi bản dây.",
          "Dụng cụ bấm phải đồng bộ: kìm sealer đúng khổ, hàm không mòn, lực bấm đủ để bọ biến dạng đều hai bên. Sau mỗi ca, kiểm tra ngẫu nhiên 3–5 mối: bọ phẳng, không lỏng, không có khe hở giữa bọ và dây.",
        ],
      },
      {
        heading: "Checklist kiểm tra mối đai sau khi bấm",
        paragraphs: [
          "Độ bám khóa: kéo thử nhẹ hai đầu dây tại mối — không được trượt. Nếu trượt ngay tại kho, thay khóa hoặc kiểm tra kìm trước khi xuất hàng.",
          "Độ cân mép bọ: hai mép bẹt phải đối xứng; lệch một bên thường do hàm kìm mòn hoặc bấm nghiêng. Mối nối đạt chuẩn phải phẳng, không có cạnh nhô sắc có thể cắt tay khi thao tác.",
          "Độ căng vòng đai: sau bấm khóa, vòng đai vẫn giữ lực siết ban đầu. Nếu dây võng ngay sau siết, vấn đề có thể ở lực căng chứ không phải khóa — cần phân biệt để xử lý đúng.",
          "Chuẩn hóa biểu mẫu kiểm tra theo ca giúp QA ghi nhận tỷ lệ lỗi mối và truy vết lô khóa. Kết hợp với quy trình đóng đai 5 bước tại /bo-dung-cu-dong-dai-thep để giảm lỗi lặp.",
        ],
      },
      {
        heading: "Mua khóa đai đồng bộ với dây và dụng cụ",
        paragraphs: [
          "Đặt khóa cùng đơn dây đai thép để nhà cung cấp tư vấn đúng khổ và loại bọ. Ghi rõ trên PO: bản dây × bản khóa × loại bọ (kín/U) × số lượng/tháng.",
          "Tồn kho khóa nên tách riêng từng khổ, ghi nhãn và áp dụng FIFO. Nhầm khóa 16mm cho dây 19mm là nguyên nhân hàng đầu gây tuột mối tại kho Việt Nam.",
          "Tham khảo thêm /day-dai-thep để chốt quy cách dây trước, sau đó chọn khóa tại /khoa-dai-thep. Test 1 thùng khóa mới trên ca mẫu trước khi thay toàn bộ tồn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có thể dùng khóa 19mm cho dây 16mm không?",
        answer:
          "Không nên. Khóa rộng hơn dây làm giảm lực bám và bọ dễ xoay khi rung. Luôn chọn khóa đúng khổ, lớn hơn bản dây khoảng 0,2mm.",
      },
      {
        question: "Bọ kín hay bọ U tốt hơn cho pallet 1 tấn?",
        answer:
          "Với pallet 1 tấn và tuyến vận chuyển xa, nên dùng bọ kín cùng khổ dây (thường 19mm hoặc 32mm tùy hình kiện). Bọ U chỉ phù hợp tải trung bình, ít bốc xếp.",
      },
      {
        question: "Mua khóa đai thép ở đâu có đủ quy cách?",
        answer:
          "Trang /khoa-dai-thep liệt kê bọ kín và bọ U theo 16/19/32mm. Gửi ảnh kìm bấm hiện tại để xác nhận tương thích trước khi giao hàng.",
      },
    ],
  },
  {
    slug: "day-dai-thep-cho-pallet-hang-nang-va-cuon-thep",
    title: "Dây đai thép cho pallet hàng nặng và cuộn thép",
    description:
      "Gợi ý cấu hình dây đai thép cho pallet hàng nặng, cuộn thép, kết cấu kim loại theo điều kiện vận chuyển.",
    excerpt:
      "Mỗi nhóm hàng nặng cần cấu hình đai khác nhau. Bài viết tổng hợp cách chọn thực dụng cho kho và nhà máy.",
    publishedAt: "2026-05-12",
    updatedAt: "2026-08-16",
    keywords: [
      "dây đai thép cho pallet",
      "dây đai thép cho hàng nặng",
      "dây đai thép cho cuộn thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Pallet thép và hàng cấu kiện kim loại",
        paragraphs: [
          "Pallet thép, dầm, tấm tôn và cấu kiện cơ khí có cạnh sắc và khối lượng tập trung — vòng đai phải chịu lực ngang khi xe phanh và khi nâng nghiêng forklift. Với kiện trên 800kg, nên ưu tiên dây đai thép bản 19mm (độ dày 0,6–0,9mm) hoặc 32mm nếu tải vượt 1,2 tấn hoặc hình dạng không ổn định.",
          "Số điểm đai tối thiểu: 3 vòng cho kiện trung bình, 4 vòng trở lên cho kiện cao hoặc dễ nghiêng. Kết hợp siết ngang (giữ hàng trên pallet) và siết dọc (chống xê dịch theo phương cao). Không chỉ siết một hướng dù lực siết cao — lực tập trung một phía dễ làm móp bao bì hoặc bật pallet.",
          "Dùng nẹp góc (edge protector) tại mọi góc 90° để dây không cắt vào cạnh tấm thép và phân bố lực đều. Trang /day-dai-thep-19mm và /day-dai-thep-32mm có gợi ý quy cách chi tiết theo từng nhóm tải.",
        ],
      },
      {
        heading: "Bảng cấu hình gợi ý theo loại hàng",
        paragraphs: [
          "Bảng tham khảo cho kho logistics và nhà máy thép. Luôn test mẫu trên kiện thực trước khi chuẩn hóa SOP.",
        ],
        table: {
          headers: ["Loại hàng", "Bản dây", "Số vòng đai", "Khóa / ghi chú"],
          rows: [
            ["Pallet VLXD 600–900kg", "16–19mm", "3 ngang + 1 dọc", "Bọ kín 19mm; nẹp góc carton"],
            ["Pallet thép cấu kiện 1–1,5 tấn", "19mm × 0,8mm", "4 vòng (2 ngang, 2 dọc)", "Bọ kín; kìm siết cơ"],
            ["Cuộn thép 2–5 tấn", "32mm × 0,8–1,0mm", "2–3 vòng qua tâm + chặn", "Bọ kín 32mm; góc bảo vệ bắt buộc"],
            ["Máy móc lệch tâm", "19–32mm", "4+ vòng tại vùng chịu lực", "Thêm chèn gỗ; kiểm tra sau nâng hạ"],
          ],
        },
      },
      {
        heading: "Cuộn thép và kiện có tâm trọng lực lệch",
        paragraphs: [
          "Cuộn thép cần kiểm soát hướng đai: vòng qua lỗ cuộn hoặc quanh thân cuộn tùy quy cách xếp, nhưng phải đảm bảo lực cân giữa các điểm siết. Cuộn đứng trên pallet sắt dễ lăn — cần thêm chặn gỗ hoặc khối neo trước khi siết.",
          "Lực siết trên cuộn thép phải đồng đều; siết một vòng quá căng trong khi vòng kia lỏng khiến cuộn nghiêng khi xe rẽ. Dùng kìm siết cơ học thay vì căng tay để lực ổn định giữa các ca.",
          "Khóa đai và kìm bấm phải đồng bộ khổ 32mm. Xem /khoa-dai-thep để chọn bọ kín nặng. Sau siết, kiểm tra mối khóa trước khi xe nâng di chuyển — rung khi nâng hạ là bài test thực tế đầu tiên.",
        ],
      },
      {
        heading: "Gợi ý kiểm tra trước khi xuất hàng",
        paragraphs: [
          "Checklist nhanh trước xuất kho: (1) lực siết — dây ôm sát, không võng; (2) mối khóa — bọ phẳng, không trượt; (3) số điểm đai — đủ theo SOP SKU; (4) cạnh kiện — có nẹp góc tại điểm gập dây; (5) pallet — không vượt mép, không gãy thanh.",
          "Với lô xuất container, chụp ảnh mối đai mẫu cho từng SKU để đối chiếu nếu khách báo lỗi tại cảng. Ghi nhận tỷ lệ tuột đai theo tháng giúp điều chỉnh bản dây hoặc số vòng kịp thời.",
          "Kết hợp với bài hướng dẫn bố trí vòng đai cho container và quy trình 5 bước đóng đai để chuẩn hóa toàn bộ quy trình từ chọn dây đến xuất hàng.",
        ],
      },
    ],
    faqs: [
      {
        question: "Pallet 700kg nên dùng dây 16mm hay 19mm?",
        answer:
          "Nếu hình khối ổn định, tuyến ngắn và đủ 3–4 vòng đai, 16mm có thể đủ. Hàng cấu kiện kim loại, tuyến xa hoặc dễ trượt nên lên 19×0,6–0,8mm và bọ kín.",
      },
      {
        question: "Cuộn thép 3 tấn cần mấy vòng đai?",
        answer:
          "Thường 2–3 vòng dây 32mm qua tâm hoặc quanh thân, kèm chặn chống lăn. Cần test nâng hạ thực tế; số vòng có thể tăng nếu cuộn đứng trên pallet cao.",
      },
      {
        question: "Có cần dây mạ kẽm cho hàng trong nhà máy?",
        answer:
          "Trong nhà máy khô ráo, dây dầu có thể đủ. Nếu pallet lưu ngoài trời hoặc vận chuyển xa, nên dùng dây mạ kẽm hoặc sơn tĩnh điện — xem /day-dai-thep-ma-kem.",
      },
    ],
  },
  {
    slug: "loi-thuong-gap-khi-dong-dai-thep-va-cach-khac-phuc",
    title: "Lỗi thường gặp khi đóng đai thép và cách khắc phục",
    description:
      "Các lỗi thường gặp như tuột khóa, lỏng đai, xước dây khi đóng đai thép và phương án xử lý ngay tại kho.",
    excerpt:
      "Tổng hợp lỗi vận hành phổ biến và cách khắc phục theo từng nguyên nhân để giảm tỷ lệ hàng lỗi.",
    publishedAt: "2026-05-15",
    updatedAt: "2026-08-16",
    keywords: [
      "lỗi đóng đai thép",
      "tuột khóa đai thép",
      "đai thép bị lỏng",
    ],
    relatedProductIds: ["steel-strapping-tools", "steel-seals", "steel-strapping"],
    sections: [
      {
        heading: "Khóa đai bị tuột sau vận chuyển",
        paragraphs: [
          "Tuột khóa là sự cố đắt nhất vì thường phát hiện muộn — khi hàng đã xê dịch hoặc rơi khỏi pallet tại điểm giao. Nguyên nhân hàng đầu: khóa sai kích thước (16mm cho dây 19mm hoặc ngược lại), lực bấm không đủ, hoặc hàm kìm sealer mòn lệch.",
          "Xử lý ngay tại kho: dừng cấp phát lô khóa nghi ngờ, thử bấm trên dây mẫu và kéo thử mối. Nếu trượt, thay khóa đúng khổ tại /khoa-dai-thep và kiểm tra kìm bấm. Với hàng nặng, ưu tiên bọ kín thay vì bọ chữ U.",
          "Phòng ngừa: checklist 3 mối đai/ca, ghi lô khóa trên phiếu xuất, đào tạo công nhân không bấm nghiêng và giữ lực siết khi bấm khóa.",
        ],
      },
      {
        heading: "Đai lỏng sau khi bốc xếp",
        paragraphs: [
          "Dây võng sau nâng hạ forklift thường do lực siết ban đầu thấp hoặc số vòng đai không đủ cho tải và hình dạng kiện. Dây đai thép ít co hơn PET nhưng vẫn có thể lỏng nếu mối khóa trượt nhẹ hoặc pallet bật khi nâng nghiêng.",
          "Khắc phục: tăng số điểm đai (thêm vòng dọc nếu chỉ có ngang), siết lại bằng kìm cơ, hoặc lên bản dây lớn hơn nếu lỗi lặp trên cùng SKU. Kiện rung nhiều trên cao tốc cần 4 vòng trở lên dù tải chỉ 600–800kg.",
          "Dấu hiệu cần can thiệp sớm: dây xoay được trên mặt kiện sau bốc xếp, tiếng kêu tại mối khóa, hoặc hàng lệch trên pallet trước khi lên xe.",
        ],
      },
      {
        heading: "Dây bị xước, cấn hoặc đứt tại góc",
        paragraphs: [
          "Cạnh sắc của tấm thép, khung máy hoặc pallet gỗ splinter cắt vào dây tại điểm uốn 90°. Xước sâu làm giảm tiết diện hiệu dụng — dây có thể đứt đột ngột khi siết lại hoặc khi chịu rung mạnh.",
          "Giải pháp: lắp nẹp góc tại mọi góc gập dây; điều chỉnh đường đi dây tránh cạnh nhọn; không siết quá căng trên góc yếu. Nếu bao bì mỏng, giảm lực siết và tăng số vòng thay vì siết một vòng cực căng.",
          "Cuộn dây bị xước từ kho: tách lô, cắt bỏ đoạn hỏng, không dùng cho kiện xuất khẩu. Kiểm tra điều kiện lưu kho tại khu vực cấp phát — xem thêm hướng dẫn bảo quản dây và dụng cụ.",
        ],
      },
      {
        heading: "Lỗi thao tác và dụng cụ không tương thích",
        paragraphs: [
          "Dùng kìm siết 16mm cho dây 32mm: không đủ lực, mối yếu. Bấm khóa khi đã nhả lực siết: bọ không ăn sâu vào dây. Cắt dây sát quá (<0,5cm sau bọ): đầu dây trượt vào trong bọ khi rung.",
          "Chuẩn hóa quy trình 5 bước: luồn dây → lắp bọ → siết căng → bấm khóa (giữ lực) → cắt thừa chừa 1–2cm. Đào tạo tại /bo-dung-cu-dong-dai-thep và kiểm tra dụng cụ đầu ca.",
          "Ghi sổ sự cố: SKU, loại lỗi, lô dây/khóa, ca làm việc — dữ liệu này giúp QA quyết định đổi quy cách thay vì chỉ phạt công nhân.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tuột khóa do dây hay do khóa?",
        answer:
          "Thường do khóa sai khổ, bấm yếu hoặc kìm hỏng. Hiếm khi do dây nếu quy cách đúng. Test kéo mối ngay sau bấm; nếu trượt, xử lý khóa/kìm trước.",
      },
      {
        question: "Đai lỏng có siết lại được không?",
        answer:
          "Có, nếu dây chưa xước nặng và mối khóa còn. Tháo bọ cũ, siết lại, bấm khóa mới. Nếu lỏng lặp lại trên cùng SKU, tăng số vòng hoặc lên bản dây lớn hơn.",
      },
      {
        question: "Bao nhiêu % mối nên kiểm tra mỗi ca?",
        answer:
          "Tối thiểu kiểm tra 3–5 mối ngẫu nhiên/ca, 100% với lô xuất khẩu hoặc kiện >1 tấn. Tỷ lệ lỗi >2% nên dừng ca và rà soát khóa, kìm, SOP.",
      },
    ],
  },
  {
    slug: "quy-trinh-kiem-tra-chat-luong-day-dai-thep-truoc-khi-nhap-kho",
    title: "Quy trình kiểm tra chất lượng dây đai thép trước khi nhập kho",
    description:
      "Hướng dẫn kiểm tra ngoại quan, quy cách, độ dày và đóng gói dây đai thép trước khi đưa vào vận hành.",
    excerpt:
      "Thiết lập quy trình kiểm tra đầu vào giúp doanh nghiệp giảm lỗi đóng đai và tránh gián đoạn sản xuất.",
    publishedAt: "2026-05-18",
    updatedAt: "2026-08-16",
    keywords: [
      "kiểm tra chất lượng dây đai thép",
      "quy trình nhập kho dây đai thép",
      "độ dày dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Kiểm tra ngoại quan và thông tin nhãn ngay khi nhận hàng",
        paragraphs: [
          "Khi xe giao đến, đối chiếu PO với phiếu giao: bản rộng, độ dày, loại bề mặt (dầu/mạ kẽm/sơn), số cuộn, trọng lượng. Tem cuộn phải ghi rõ quy cách — ví dụ 19×0,8mm mạ kẽm. Sai nhãn so với PO: tách lô, chụp ảnh, liên hệ nhà cung cấp trước khi đưa vào khu cấp phát.",
          "Ngoại quan cuộn: không gỉ sét nặng, không mép dây bị bẹt do va đập, đóng gói không thấm nước. Cuộn lăn trên nền bẩn dễ xước bề mặt — không chấp nhận cuộn đã mở và lăn ngoài bãi nếu spec yêu cầu nguyên seal.",
          "Kiểm tra đồng thời lô khóa đai (nếu giao cùng đơn): khổ bọ khớp dây, không lẫn 16mm và 19mm trong cùng thùng không nhãn.",
        ],
      },
      {
        heading: "Bảng kiểm tra quy cách trên mẫu ngẫu nhiên",
        paragraphs: [
          "Mỗi lô nhập, lấy mẫu 10% cuộn (tối thiểu 2 cuộn) đo bản rộng và độ dày bằng thước kẹp tại 3 điểm trên cùng một vòng dây. Ghi vào biên bản kiểm tra đầu vào.",
        ],
        table: {
          headers: ["Hạng mục", "Cách đo", "Tiêu chí chấp nhận", "Xử lý nếu fail"],
          rows: [
            ["Bản rộng", "Thước kẹp, 3 điểm", "±0,3mm so với PO", "Tách lô, đổi/trả NCC"],
            ["Độ dày", "Micrometer, 3 điểm", "±0,05mm so với PO", "Không cấp phát sản xuất"],
            ["Bề mặt", "Quan sát + test gãy uốn nhẹ", "Không gỉ xuyên, không nứt", "Dùng nội bộ hoặc trả"],
            ["Khóa đai", "Đo khổ, thử bấm mẫu", "Khớp dây + kìm", "Đổi khóa trước khi cấp phát"],
          ],
        },
      },
      {
        heading: "Test vận hành trước khi cấp phát số lượng lớn",
        paragraphs: [
          "Trên 1 cuộn mẫu: siết thử trên pallet mô phỏng, bấm khóa, kéo thử mối, nâng hạ forklift nếu có thể. Quan sát độ võng sau 30 phút. Lô mới từ nhà cung cấp lần đầu bắt buộc test trước khi thay toàn bộ tồn cũ.",
          "So sánh với cuộn cũ đang chạy ổn: cùng lực siết, dây mới có thể cần điều chỉnh nhẹ. Ghi SOP cập nhật nếu quy cách thay đổi.",
          "Nếu lô lớn (>50 cuộn), giữ 1 cuộn mẫu lưu 3 tháng để truy vết khi phát sinh khiếu nại chất lượng.",
        ],
      },
      {
        heading: "Bảo quản, phân khu và cấp phát",
        paragraphs: [
          "Sau kiểm tra OK: đưa vào khu khô ráo, phân khu theo quy cách — dây 16/19/32mm, dầu/mạ kẽm/sơn tách riêng. Khóa đai đặt cạnh đúng khổ dây, ghi nhãn kệ.",
          "Áp dụng FIFO: cuộn nhập trước xuất trước. Không xếp chồng quá 4 tầng nếu cuộn nặng — mép dây dễ biến dạng.",
          "Cấp phát theo ca: ghi số cuộn, quy cách, bộ phận nhận. Liên kết với trang /day-dai-thep để công nhân đối chiếu quy cách đúng SKU.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có bắt buộc đo độ dày mỗi lô không?",
        answer:
          "Nên đo trên mẫu ngẫu nhiên mỗi lô nhập. Nhiều tranh chấp giá–chất lượng đến từ cùng ghi 19mm nhưng độ dày mỏng hơn PO.",
      },
      {
        question: "Cuộn có gỉ nhẹ có dùng được không?",
        answer:
          "Gỉ bề mặt nhẹ trên dây dầu có thể chấp nhận nếu không ảnh hưởng siết. Gỉ sét xuyên hoặc trên dây mạ kẽm mới — nên trả hoặc tách lô không xuất khẩu.",
      },
      {
        question: "Ai ký biên bản kiểm tra đầu vào?",
        answer:
          "Thường do thủ kho + QA hoặc bộ phận mua hàng. Biên bản là căn cứ làm việc với nhà cung cấp khi lô fail quy cách.",
      },
    ],
  },
  {
    slug: "quy-trinh-dong-day-dai-thep-5-buoc-chuan-ky-thuat",
    title: "Quy trình đóng dây đai thép 5 bước chuẩn kỹ thuật",
    description:
      "Hướng dẫn chi tiết 5 bước đóng dây đai thép: luồn dây, lắp bọ sắt, siết căng, bấm khóa và cắt dây thừa — áp dụng cho pallet và kiện hàng nặng.",
    excerpt:
      "Làm đúng 5 bước giúp mối nối chắc, lực siết đồng đều và giảm rủi ro tuột đai khi vận chuyển. Quy trình chuẩn cho kho và nhà máy.",
    publishedAt: "2026-06-03",
    updatedAt: "2026-08-16",
    keywords: [
      "quy trình đóng dây đai thép",
      "cách đóng dây đai thép",
      "siết dây đai thép",
      "bấm bọ sắt đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-strapping-tools", "steel-seals"],
    sections: [
      {
        heading: "Chuẩn bị dụng cụ và vật tư trước ca",
        paragraphs: [
          "Bộ ba bắt buộc: dây đai thép đúng bản × độ dày, khóa đai thép (bọ sắt) khớp khổ, và cặp kìm siết (tensioner) + kìm bấm khóa (sealer). Hai kìm luôn dùng kết hợp — siết trước, bấm khóa trong lúc vẫn giữ lực căng. Kiểm tra đầu ca: hàm kìm không gãy, không rỉ kẹt, bọ sắt đúng kích cỡ (lớn hơn bản dây ~0,2mm).",
          "Với kiện trên 500kg, ưu tiên kìm siết cơ học thay vì căng tay — lực đồng đều giữa các ca, giảm mỏi và sai sót. Dụng cụ lấy tại khu riêng, không để chung khu ẩm. Xem /bo-dung-cu-dong-dai-thep để đối chiếu loại kìm theo khổ dây.",
          "Chuẩn bị nẹp góc cho kiện có cạnh sắc; kéo cắt đai chuyên dụng. Xác nhận SKU, số vòng đai theo SOP trước khi bắt đầu.",
        ],
      },
      {
        heading: "Bước 1–2: Luồn dây và lắp bọ sắt",
        paragraphs: [
          "Quấn dây quanh kiện/pallet theo hướng đã định (ngang, dọc hoặc kết hợp). Dây nằm sát bề mặt, không xoắn, không chéo lệch. Đầu dây dưới cố định trên mặt kiện; đầu dây trên (từ cuộn) chồng khít lên đầu dưới tại vị trí phẳng, thuận tiện bấm.",
          "Luồn bọ sắt vào hai lớp dây đã chồng. Đặt bọ tránh xa góc sắc; nếu cạnh nhọn, lắp nẹp góc trước. Vị trí bọ nên ở mặt phẳng của kiện — không đặt trên cạnh pallet gỗ splinter.",
          "Kiểm tra nhanh: hai lớp dây song song, không lệch >5mm — lệch lớn làm bọ bấm không đều.",
        ],
      },
      {
        heading: "Bước 3–4: Siết căng và bấm khóa",
        paragraphs: [
          "Đặt kìm siết: một ngàm giữ đầu dây dưới, bánh răng bám đầu dây trên. Gạt cần liên tục đến khi dây ôm sát kiện. Không siết quá mức — dễ biến dạng hàng hoặc đứt dây tại góc uốn. Hàng carton mềm: siết vừa; hàng thép nặng: lực cao hơn, tham chiếu SOP SKU.",
          "Giữ nguyên lực căng, đặt kìm bấm vuông góc với bọ sắt. Bóp mạnh để bọ bẹt, ăn sâu vào hai lớp dây. Hàng nặng có thể bấm hai lần trên cùng bọ. Mối đạt chuẩn: phẳng, không lỏng, không cạnh nhô sắc.",
          "Lỗi thường gặp: nhả lực siết trước khi bấm — bọ chỉ kẹp nhẹ, tuột khi rung. Đào tạo công nhân giữ kìm siết đến khi nghe tiếng bấm xong.",
        ],
      },
      {
        heading: "Bước 5: Cắt dây thừa và kiểm tra cuối",
        paragraphs: [
          "Dùng kéo cắt đai chuyên dụng, cắt phần dây thừa, chừa 1–2cm sau bọ để đầu dây không trượt vào trong bọ khi rung. Đeo găng chống cắt — đứng lệch hướng dây (tránh snap back).",
          "Kiểm tra toàn vòng: độ căng đồng đều giữa các span, mối khóa chắc (kéo thử nhẹ), dây không sượt cạnh. Lặp cho mọi vòng đai trên kiện.",
          "Checklist cuối ca: ghi SKU, số kiện, số mối kiểm tra ngẫu nhiên. Pallet >1 tấn: QA ký xác nhận trước khi xe nâng di chuyển.",
        ],
      },
      {
        heading: "Chuẩn hóa SOP và đào tạo công nhân mới",
        paragraphs: [
          "In SOP 1 trang dán tại khu đóng đai: 5 bước + ảnh mối đúng/sai. Công nhân mới chạy thử 10 kiện có giám sát trước khi làm độc lập.",
          "Rà soát SOP mỗi quý khi đổi quy cách dây hoặc khi tỷ lệ tuột đai tăng. Liên kết với /day-dai-thep và /khoa-dai-thep trong tài liệu nội bộ để công nhân tra quy cách nhanh.",
          "Quy trình 5 bước áp dụng cho cả pallet gỗ, pallet sắt và kiện lên container — chỉ khác số vòng và lực siết theo SKU.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có thể bấm khóa rồi siết sau không?",
        answer:
          "Không. Thứ tự đúng là siết căng trước, giữ lực, bấm khóa, rồi cắt thừa. Bấm trước sẽ không siết được đủ lực.",
      },
      {
        question: "Kiện 1,2 tấn cần kìm gì?",
        answer:
          "Dây 19–32mm với kìm siết cơ học và sealer đúng khổ. Căng tay thường không đủ lực đồng đều trên kiện nặng.",
      },
      {
        question: "Chừa bao nhiêu cm dây sau bọ?",
        answer:
          "1–2cm là đủ. Dưới 0,5cm dễ tuột; trên 3cm thừa dây sắc gây nguy hiểm và vướng khi bốc xếp.",
      },
    ],
  },
  {
    slug: "an-toan-khi-su-dung-day-dai-thep-tai-kho",
    title: "An toàn khi sử dụng dây đai thép tại kho và nhà máy",
    description:
      "Các quy tắc an toàn khi siết dây đai thép: trang bị bảo hộ, tư thế thao tác, phòng dây bật ngược (snap back) và kiểm tra dụng cụ trước vận hành.",
    excerpt:
      "Dây đai thép có cạnh sắc và có thể bật mạnh khi đứt. Bài viết tổng hợp quy tắc an toàn thực tế cho công nhân kho.",
    publishedAt: "2026-06-08",
    updatedAt: "2026-08-16",
    keywords: [
      "an toàn dây đai thép",
      "quy tắc siết đai thép",
      "snap back dây đai thép",
      "bảo hộ khi đóng đai",
    ],
    relatedProductIds: ["steel-strapping-tools", "steel-strapping"],
    sections: [
      {
        heading: "Rủi ro thường gặp khi thao tác dây đai thép",
        paragraphs: [
          "Mép dây đai thép sắc có thể cắt da khi luồn dây hoặc kéo tay không đeo găng. Vết cắt tưởng nhẹ có thể nhiễm trùng nếu làm việc trong môi trường bụi bẩn kho.",
          "Hiện tượng snap back: khi dây đứt hoặc mối khóa bung đột ngột, phần dây co lại rất mạnh theo hướng ngược lực siết — có thể gây chấn thương nghiêm trọng nếu đứng trực diện. Siết quá căng làm dây đứt tại góc uốn hoặc biến dạng hàng.",
          "Dụng cụ hỏng (hàm kìm gãy, rỉ kẹt) tạo mối nối yếu — mối có thể bung khi nâng hạ, gây snap back bất ngờ. Kiểm tra dụng cụ đầu ca là bắt buộc, không tùy chọn.",
        ],
      },
      {
        heading: "Trang bị bảo hộ bắt buộc",
        paragraphs: [
          "Tối thiểu: găng tay chống cắt (level 3–5 tùy loại dây), giày bảo hộ mũi thép, kính bảo vệ mắt khi cắt dây hoặc thao tác gần mối nối căng. Áo dài tay khuyến khích — tránh cẳng tay tiếp xúc mép dây.",
          "Không đeo găng quá rộng — dễ vướng bánh răng kìm siết. Không quấn dây quanh tay để kéo. Với ca lặp nhiều (>4 giờ siết liên tục), luân phiên nhân sự để giảm mỏi và sai sót.",
          "Khu vực đóng đai nên có sơ cứu và bộ sơ cứu cắt/thương tại chỗ. Ghi nhận mọi sự cố đứt dây vào sổ an toàn.",
        ],
      },
      {
        heading: "Tư thế và kỹ thuật thao tác an toàn",
        paragraphs: [
          "Luôn đứng lệch hướng so với dây đai khi siết và cắt — không đứng trực diện theo hướng dây có thể bật về phía bạn. Đứa trẻ và người không liên quan không đứng trong vùng span dây đang căng.",
          "Trước mỗi ca: kiểm tra kìm siết và kìm bấm — không rỉ nặng, không lỏng ốc, hàm bấm đối xứng. Dụng cụ không tương thích bản dây (kìm 16mm cho dây 32mm) vừa hỏng máy vừa tạo mối không an toàn.",
          "Không siết quá căng để “chắc chắn” — với carton và pallet gỗ yếu, lực quá cao gây đứt dây hoặc văng mảnh pallet. Tuân SOP lực siết theo SKU.",
        ],
      },
      {
        heading: "Quy định nội bộ và đào tạo định kỳ",
        paragraphs: [
          "Chuẩn hóa quy trình 5 bước kèm checklist an toàn: PPE, tư thế, kiểm tra dụng cụ, kiểm tra mối trước khi xe nâng di chuyển pallet.",
          "Đào tạo lại 6 tháng/lần hoặc khi có sự cố snap back. Demo video mối đúng/sai treo tại khu đóng đai.",
          "Báo cáo ngay tuột đai, đứt dây, hỏng dụng cụ để điều chỉnh quy cách hoặc thay thiết bị. Liên kết với /bo-dung-cu-dong-dai-thep để cập nhật dụng cụ đạt chuẩn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Snap back nguy hiểm đến mức nào?",
        answer:
          "Có thể gây chấn thương nặng tương đương văng dao — dây sắc, lực cao. Luôn đứng lệch hướng, không siết quá căng, kiểm tra mối trước vận chuyển.",
      },
      {
        question: "Có bắt buộc kính bảo hộ không?",
        answer:
          "Khuyến nghị mạnh khi cắt dây và khi làm việc gần mối căng. Mảnh dây hoặc khóa có thể bật vào mắt khi bung.",
      },
      {
        question: "Kìm rỉ có dùng tiếp được không?",
        answer:
          "Rỉ nhẹ: làm sạch, tra dầu, test mối mẫu. Rỉ kẹt bánh răng hoặc hàm lệch: ngưng dùng, bảo trì hoặc thay — tiếp tục dùng tạo mối yếu và rủi ro snap back.",
      },
    ],
  },
  {
    slug: "cach-bo-tri-vong-dai-thep-cho-pallet-va-container",
    title: "Cách bố trí vòng đai thép cho pallet và container",
    description:
      "Hướng dẫn chọn số vòng đai, hướng siết ngang-dọc và vị trí đặt dây khi cố định pallet, kiện hàng nặng và hàng lên container.",
    excerpt:
      "Bố trí sai số vòng hoặc sai hướng đai khiến hàng xê dịch dù lực siết đủ. Cách phân bố vòng đai thực dụng cho kho Việt Nam.",
    publishedAt: "2026-06-12",
    updatedAt: "2026-08-16",
    keywords: [
      "bố trí dây đai thép",
      "số vòng đai thép pallet",
      "đóng đai container",
      "siết đai ngang dọc",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Nguyên tắc chọn số vòng đai trên pallet",
        paragraphs: [
          "Kiện nhỏ, hình khối ổn định trên pallet tiêu chuẩn thường cần tối thiểu 2 vòng đai — một ngang hoặc một dọc tùy hướng chịu lực chính khi xe chạy. Kiện cao (>1,2m), nặng hoặc dễ nghiêng: 3–4 vòng, kết hợp cả ngang và dọc.",
          "Hàng có tâm trọng lực lệch (cuộn thép, máy móc): thêm điểm đai tại vùng chịu lực, không chỉ viền ngoài pallet. Một vòng quanh viền không giữ được cuộn thép đứng nếu không có chặn.",
          "Quy tắc thực tế: khi nghi ngờ, thêm một vòng — chi phí dây thấp hơn chi phí hàng đổ. Ghi số vòng chuẩn theo SKU trên SOP tại /day-dai-thep-dong-pallet.",
        ],
      },
      {
        heading: "Hướng siết ngang, dọc và khi nào kết hợp",
        paragraphs: [
          "Siết ngang (vuông góc chiều cao kiện): giữ hàng bám pallet, chống trượt khi phanh. Siết dọc (theo chiều cao): chống xê dịch tầng trên, quan trọng với kiện xếp nhiều tầng carton.",
          "Tuyến vận chuyển xa, rung nhiều: kết hợp cả hai. Chỉ siết ngang trên kiện cao dễ nghiêng — hàng “trồi” theo phương dọc dù không trượt ngang.",
          "Tránh đặt dây qua vị trí yếu bao bì (nắp hộp mỏng, cạnh tấm ván). Dùng nẹp góc tại góc 90° để lực phân bố đều.",
        ],
      },
      {
        heading: "Pallet lên container và xe tải",
        paragraphs: [
          "Trong container, ngoài đai từng pallet có thể cần thêm dây neo pallet với móc sàn, thanh chèn hoặc air bag nếu lô không lấp kín. Pallet tự do lăn khi container lắc — đai chỉ trên kiện không đủ.",
          "Trước đóng cửa container: kiểm tra lại mối khóa sau khi xe nâng hạ pallet — quán tính dễ làm lỏng đai nếu siết chưa đủ hoặc thiếu vòng.",
          "Xe tải Bắc–Nam: ưu tiên thêm vòng dọc trên kiện cao. Chèn gỗ giữa pallet nếu xếp chồng không đều.",
        ],
      },
      {
        heading: "Checklist bố trí trước khi siết",
        paragraphs: [
          "Xác nhận hàng xếp cân, không vượt mép pallet; xác định hướng chịu lực chính khi xe chạy và khi nâng hạ forklift.",
          "Đánh dấu vị trí vòng đai trên pallet mẫu cho từng loại hàng — công nhân mới thao tác đồng nhất, giảm tranh luận giữa các ca.",
          "Chụp ảnh bố trí mẫu cho SKU xuất khẩu. Kết hợp khóa đai đúng khổ tại /khoa-dai-thep và quy trình 5 bước đóng đai.",
        ],
      },
    ],
    faqs: [
      {
        question: "Pallet carton 500kg cần mấy vòng?",
        answer:
          "Thường 2–3 vòng: ít nhất 2 ngang, thêm 1 dọc nếu kiện cao hoặc tuyến xa. Test nâng hạ để quyết định.",
      },
      {
        question: "Container không chèn đầy có cần đai chéo không?",
        answer:
          "Đai chéo có thể bổ sung nhưng không thay neo pallet. Ưu tiên chèn/thanh chằng + đai chuẩn trên kiện.",
      },
      {
        question: "Có nên đai qua lỗ pallet không?",
        answer:
          "Có, nếu pallet có lỗ khoan và hàng cho phép — tăng điểm neo. Kiểm tra pallet không nứt tại lỗ trước khi siết.",
      },
    ],
  },
  {
    slug: "dieu-chinh-luc-siet-day-dai-thep-theo-tai-trong",
    title: "Điều chỉnh lực siết dây đai thép theo tải trọng hàng",
    description:
      "Cách căn lực siết dây đai thép phù hợp từng nhóm hàng: nhẹ, trung bình và nặng; dấu hiệu siết quá hoặc quá lỏng và cách kiểm tra nhanh tại kho.",
    excerpt:
      "Siết quá lỏng thì tuột đai, siết quá căng thì hỏng hàng và đứt dây. Hướng dẫn căn lực theo kinh nghiệm thực tế tại kho.",
    publishedAt: "2026-06-18",
    updatedAt: "2026-08-16",
    keywords: [
      "lực siết dây đai thép",
      "căng dây đai thép",
      "điều chỉnh lực siết đai",
      "độ căng dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-strapping-tools"],
    sections: [
      {
        heading: "Vì sao lực siết quyết định an toàn vận chuyển",
        paragraphs: [
          "Lực siết đủ giúp dây giữ kiện khi chịu rung, phanh gấp và nâng hạ forklift. Lực quá thấp: dây võng, mối khóa trượt, hàng xê dịch. Lực quá cao: móp thùng carton, nứt pallet gỗ, đứt dây tại góc uốn hoặc snap back nguy hiểm.",
          "Dây đai thép có độ dãn thấp hơn PET — sau siết, đai giữ lực ổn định lâu hơn nếu mối khóa đạt chuẩn. Tuy nhiên không có nghĩa “siết càng căng càng tốt”.",
          "Mục tiêu: lực vừa đủ theo tải kiện, số vòng đai và loại bao bì — chuẩn hóa theo SKU thay vì cảm giác từng công nhân.",
        ],
      },
      {
        heading: "Bảng gợi ý mức siết theo nhóm hàng",
        paragraphs: [
          "Bảng tham khảo vận hành — không thay thiết bị đo lực chuyên dụng nếu khách yêu cầu WLL. Dùng kết hợp test nâng hạ thực tế.",
        ],
        table: {
          headers: ["Nhóm hàng", "Bản dây gợi ý", "Mức siết (cảm quan)", "Kiểm tra nhanh"],
          rows: [
            ["Carton <400kg", "16mm", "Vừa — không lõm mặt thùng", "Võng 20–40mm giữa span"],
            ["Pallet 400–800kg", "16–19mm", "Căng hơn, 3–4 vòng", "Không xoay dây trên kiện"],
            ["Thép/VLXD 800kg–1,5t", "19–32mm", "Cao — kìm cơ", "Mối khóa không kêu"],
            ["Cuộn thép >1,5t", "32mm", "Cao, đồng đều mọi vòng", "Test nâng nghiêng forklift"],
          ],
        },
      },
      {
        heading: "Dấu hiệu siết chưa đạt và cách xử lý",
        paragraphs: [
          "Sau bốc xếp, dây võng rõ hoặc xoay được trên mặt kiện — cần siết lại hoặc thêm vòng. Mối khóa có tiếng kêu, bọ biến dạng không đều — lực quá cao hoặc bấm lỗi.",
          "Dây cắt sát quá sát bọ (<1cm): nguy cơ tuột khi rung. Carton bị lõm sâu: giảm lực, tăng số vòng thay vì siết một vòng cực căng.",
          "Ghi nhận SKU nào hay lỏng sau 24h lưu kho — có thể cần lên bản dây hoặc thêm vòng dọc.",
        ],
      },
      {
        heading: "Chuẩn hóa lực siết trong doanh nghiệp",
        paragraphs: [
          "Chọn kiện mẫu, thử 2–3 mức siết, vận chuyển thử nội bộ hoặc nâng hạ forklift, quan sát sau 24h nếu hàng lưu kho. Chốt mức chuẩn ghi vào SOP.",
          "Với đơn xuất khắt khe, dùng thiết bị đo lực căng (tension meter). Dây mới đôi khi cần siết cao hơn dây đã chạy vì độ dãn ban đầu khác.",
          "Đào tạo công nhân dùng cùng loại kìm cơ — kìm tay và kìm cơ cho lực khác nhau dù cùng người siết. Xem /bo-dung-cu-dong-dai-thep để đồng bộ dụng cụ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có số Newton chuẩn cho dây 19mm không?",
        answer:
          "Phụ thuộc độ dày, khóa và số vòng. NCC có bảng WLL; thực tế kho nên test mẫu + tension meter nếu cần audit.",
      },
      {
        question: "Siết lại được bao nhiêu lần trên cùng vòng?",
        answer:
          "1–2 lần nếu dây chưa xước. Lặp nhiều làm cứng vùng dây, dễ đứt tại góc — nên thay đoạn dây hoặc bấm vị trí mới.",
      },
      {
        question: "PET và thép siết khác nhau thế nào?",
        answer:
          "PET cần siết cao hơn ban đầu vì co nhẹ theo thời gian. Thép giữ lực ổn định hơn — siết quá căng trên thép nguy hiểm hơn (snap back, đứt dây).",
      },
    ],
  },
  {
    slug: "bao-quan-day-dai-thep-va-dung-cu-dong-dai",
    title: "Bảo quản dây đai thép và dụng cụ đóng đai đúng cách",
    description:
      "Hướng dẫn lưu kho dây đai thép mạ kẽm, khóa đai và bộ kìm siết: chống ẩm, tránh va đập, xếp cuộn đúng chiều và bảo dưỡng dụng cụ.",
    excerpt:
      "Bảo quản sai làm dây gỉ sét, khóa lẫn quy cách và dụng cụ kẹt. Quy trình lưu kho gọn cho bộ phận vật tư và kho thành phẩm.",
    publishedAt: "2026-06-22",
    updatedAt: "2026-08-16",
    keywords: [
      "bảo quản dây đai thép",
      "lưu kho dây đai thép",
      "bảo dưỡng dụng cụ đóng đai",
      "dây đai thép mạ kẽm",
    ],
    relatedProductIds: ["steel-strapping", "steel-strapping-tools", "steel-seals"],
    sections: [
      {
        heading: "Điều kiện kho cho dây đai thép",
        paragraphs: [
          "Lưu nơi khô ráo, thoáng, tránh đọng nước trực tiếp lên cuộn. Dây mạ kẽm chịu ẩm tốt hơn dây dầu nhưng vẫn nên hạn chế môi trường muối biển, hóa chất ăn mòn và sàn kho ẩm.",
          "Không xếp chồng cuộn quá cao — mép dây biến dạng, khó siết đều. Cuộn đặt đứng hoặc nằm theo hướng NCC khuyến cáo; tránh lăn cuộn trên nền bẩn làm xước bề mặt.",
          "Nhiệt độ cao (>40°C liên tục) có thể ảnh hưởng lớp dầu/phủ. Tách khu dây khỏi khu hóa chất và axit.",
        ],
      },
      {
        heading: "Phân khu khóa đai và dây theo quy cách",
        paragraphs: [
          "Tách riêng bọ 16mm, 19mm, 32mm — ghi nhãn rõ kệ và thùng. Nhầm khóa là nguyên nhân phổ biến tuột mối. Đặt khóa cạnh đúng khổ dây tại /khoa-dai-thep.",
          "Phân khu theo bề mặt: dây dầu, mạ kẽm (/day-dai-thep-ma-kem), sơn tĩnh điện (/day-dai-thep-son-tinh-dien) — tránh cấp nhầm cho SKU yêu cầu chống gỉ.",
          "FIFO: cuộn nhập trước xuất trước. Cuộn cũ nằm lâu ở lõi dễ ẩm mốc — rà soát định kỳ.",
        ],
      },
      {
        heading: "Bảo dưỡng kìm siết và kìm bấm",
        paragraphs: [
          "Sau ca: làm sạch mạt sắt và bụi; tra dầu nhẹ vào bản lề và bánh răng theo khuyến cáo. Cất hộp riêng, không để chung khu ẩm.",
          "Kìm hàm mòn, lệch hoặc không giữ lực căng — ngưng dùng, bảo trì hoặc thay. Tiếp tục dùng tạo mối kém chất lượng và rủi ro an toàn.",
          "Mỗi khổ dây một bộ kìm riêng (16/19/32mm). Ghi sổ cấp phát theo ca để truy vết khi lỗi mối tăng.",
        ],
      },
      {
        heading: "Kiểm tra định kỳ trước khi cấp phát",
        paragraphs: [
          "Hàng tuần: rà ngoại quan cuộn dây — gỉ sét, mép xước, nhãn quy cách. Cuộn ẩm mốc tách lô kiểm tra trước khi đưa vào sản xuất.",
          "Hàng tháng: test bấm khóa mẫu trên dây cấp phát; kiểm tra lực giữ kìm siết.",
          "Kết hợp quy trình kiểm tra đầu vào khi nhập lô mới — giảm lỗi từ nguồn thay vì chỉ xử lý tại ca đóng đai.",
        ],
      },
    ],
    faqs: [
      {
        question: "Cuộn dây để ngoài trời có được không?",
        answer:
          "Không khuyến khích. Nếu bắt buộc, che bạt, nâng khỏi sàn, ưu tiên dây mạ kẽm và xoay FIFO nhanh.",
      },
      {
        question: "Dụng cụ rỉ có dùng được không?",
        answer:
          "Rỉ nhẹ: làm sạch, bôi trơn, test mối. Rỉ kẹt hoặc hàm lệch: thay hoặc sửa chuyên nghiệp trước khi cấp phát.",
      },
      {
        question: "Khóa đai lưu bao lâu?",
        answer:
          "Trong kho khô, bọ kín đạt chuẩn có thể 12–24 tháng. Kiểm tra gỉ và biến dạng trước khi dùng; không trộn lô NCC khác nhau không test.",
      },
    ],
  },
  {
    slug: "day-dai-pet-hay-day-dai-thep",
    title: "Dây đai PET hay dây đai thép? Cách chọn theo tải và ngành",
    description:
      "So sánh dây đai PET và dây đai thép theo tải trọng, độ co giãn, an toàn thao tác, chi phí và môi trường vận chuyển để chọn đúng vật tư đóng gói.",
    excerpt:
      "PET nhẹ và an toàn khi cắt; thép chịu lực cao và ít co giãn. Bài viết giúp chốt lựa chọn theo từng nhóm hàng.",
    publishedAt: "2026-07-08",
    updatedAt: "2026-08-16",
    keywords: [
      "dây đai pet hay dây đai thép",
      "so sánh dây đai pet và thép",
      "dây đai thép vs pet",
      "chọn dây đai đóng hàng",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Khác biệt cốt lõi giữa PET và thép",
        paragraphs: [
          "Dây đai thép là băng thép dẹt, siết bằng kìm, khóa bọ sắt — chịu lực kéo cao, độ dãn rất thấp sau siết. Phù hợp kiện nặng, cạnh sắc, tuyến rung mạnh, nhiệt cao.",
          "Dây đai PET (polyester) nhẹ hơn, đàn hồi có kiểm soát, cắt an toàn hơn (không sắc như thép), thao tác nhanh với kìm tay hoặc máy bọ nhựa. Chi phí mét dây thường thấp hơn trên hàng vừa.",
          "Không có loại “tốt tuyệt đối” — chọn theo tải kiện, hình dạng, số lần bốc xếp, yêu cầu an toàn lao động và spec khách hàng.",
        ],
      },
      {
        heading: "Bảng so sánh nhanh PET vs thép",
        paragraphs: [
          "Dùng bảng khi họp nội bộ giữa kho, QA và mua hàng.",
        ],
        table: {
          headers: ["Tiêu chí", "Dây đai thép", "Dây đai PET"],
          rows: [
            ["Tải kiện phù hợp", "400kg+, cuộn thép, cơ khí", "Carton, hàng vừa, thường <800kg"],
            ["Co giãn sau siết", "Rất thấp", "Co nhẹ 24–48h — cần kiểm tra"],
            ["An toàn cắt", "Cạnh sắc, snap back", "An toàn hơn, ít đứt bật"],
            ["Chi phí", "Cao hơn/kg, đủ lực kiện nặng", "Rẻ hơn hàng nhẹ/vừa"],
            ["Thiết bị", "Kìm siết + bấm /khoa-dai-thep", "Kìm tay hoặc máy bọ"],
            ["Xuất khẩu hàng nặng", "Thường bắt buộc spec thép", "Tùy khách, test mẫu"],
          ],
        },
      },
      {
        heading: "Khi nào nên ưu tiên dây đai thép",
        paragraphs: [
          "Cuộn thép, dầm, VLXD nặng, máy móc trên pallet, hàng xuất khẩu đường dài nhiều lần nâng hạ — thép cho biên an toàn cao hơn với ít vòng đai hơn PET.",
          "Hàng cạnh sắc cắt dây nhựa; yêu cầu giữ lực ổn định nhiều ngày trong container — dây thép + bọ kín phổ biến. Xem /day-dai-thep cho quy cách 16/19/32mm.",
          "Khách spec đóng gói ghi rõ steel strapping — không thay PET nếu chưa được phê duyệt và test.",
        ],
      },
      {
        heading: "Khi nào PET đủ dùng và checklist quyết định",
        paragraphs: [
          "Pallet hàng tiêu dùng, thùng carton ổn định, tải vừa, tuyến nội địa ngắn — PET giảm chi phí và rủi ro thương tích khi cắt.",
          "Chuyển từ thép sang PET: test cùng số vòng, cùng quy trình nâng hạ, quan sát 48h trước khi thay toàn dây chuyền.",
          "Checklist: ghi tải kiện, số điểm đai, pallet, quãng đường, môi trường ẩm. Tải cao/cạnh sắc/xuất khẩu dài → thép. Tải vừa/ưu tiên an toàn cắt/giá → cân PET.",
        ],
      },
    ],
    faqs: [
      {
        question: "PET có thay thế hoàn toàn thép trong kho không?",
        answer:
          "Không với hàng nặng và spec xuất khẩu. Nhiều nhà máy dùng song song: PET cho hàng vừa, thép cho nặng.",
      },
      {
        question: "PET bị lỏng sau 2 ngày xử lý thế nào?",
        answer:
          "Siết lại hoặc thêm vòng; nếu lặp thường xuyên trên SKU đó, chuyển thép hoặc tăng bản PET.",
      },
      {
        question: "Chi phí tổng loại nào rẻ hơn?",
        answer:
          "PET rẻ hơn trên hàng nhẹ. Trên kiện 1t+, thép có thể rẻ hơn tổng thể vì ít vòng, ít sự cố hư hàng.",
      },
    ],
  },
  {
    slug: "huong-dan-chon-day-dai-thep-cho-nha-may",
    title: "Hướng dẫn chọn dây đai thép cho nhà máy và kho logistics",
    description:
      "Quy trình chọn dây đai thép cho nhà máy: khảo sát tải, chuẩn hóa quy cách, đồng bộ khóa–dụng cụ, test mẫu và dự trù tồn kho theo tháng.",
    excerpt:
      "Chuẩn hóa vật tư đóng đai giúp giảm bung hàng và chi phí phát sinh. Checklist dành cho quản lý kho và sản xuất.",
    publishedAt: "2026-07-09",
    updatedAt: "2026-08-16",
    keywords: [
      "chọn dây đai thép cho nhà máy",
      "dây đai thép kho logistics",
      "chuẩn hóa dây đai thép",
      "vật tư đóng đai công nghiệp",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals", "steel-strapping-tools"],
    sections: [
      {
        heading: "Khảo sát hiện trạng trước khi mua",
        paragraphs: [
          "Liệt kê SKU theo tải kiện, hình dạng, tuyến vận chuyển (nội địa/container). Ghi quy cách dây–bọ–dụng cụ đang dùng và tỷ lệ sự cố bung đai/đứt dây 1–3 tháng gần nhất.",
          "Ảnh mối đai lỗi (tuột khóa, dây xước, đai lỏng) giúp NCC tư vấn đúng hơn chỉ hỏi “báo giá 19mm”. Liên hệ qua /bao-gia-day-dai-thep kèm ảnh pallet thực tế.",
          "Phỏng vấn nhanh ca trưởng: điểm đau là thiếu lực, nhầm khóa, hay dụng cụ cũ — mỗi nguyên nhân có giải pháp khác (dây vs /khoa-dai-thep vs /bo-dung-cu-dong-dai-thep).",
        ],
      },
      {
        heading: "Chuẩn hóa 1–2 quy cách dây chính",
        paragraphs: [
          "Tránh tồn quá nhiều khổ — nhiều nhà máy chỉ cần 16mm hàng vừa và 19mm (hoặc 32mm) hàng nặng, kèm bọ và kìm khớp từng dòng.",
          "Gắn nhãn khu cấp phát: màu kệ hoặc QR link /day-dai-thep-16mm, /day-dai-thep-19mm, /day-dai-thep-32mm. Công nhân không nhầm khóa 16 với 19.",
          "Chọn bề mặt theo môi trường: dầu (trong nhà), mạ kẽm (ẩm), sơn (yêu cầu thẩm mỹ/ chống gỉ cao).",
        ],
      },
      {
        heading: "Test mẫu và chốt SOP",
        paragraphs: [
          "Chạy 1–2 ca quy cách mới: siết, bấm, nâng hạ forklift, quan sát võng sau 24h nếu lưu kho. So sánh với quy cách cũ về thời gian ca và tỷ lệ lỗi.",
          "Viết SOP 1 trang/SKU: số vòng đai, hướng ngang/dọc, lực siết tham chiếu, loại khóa, checklist trước xuất. Treo ảnh pallet mẫu tại khu đóng gói.",
          "Chỉ scale lô tháng sau khi QA ký test — tránh đổi NCC và quy cách đồng thời (khó truy vết lỗi).",
        ],
      },
      {
        heading: "Dự trù tồn, giao hàng và đối tác cung ứng",
        paragraphs: [
          "Tính tiêu hao kg/tháng theo số kiện × mét/kiện. Tồn an toàn = tiêu hao × lead time giao (thường 7–14 ngày). KCN miền Bắc có thể chia lô giao tuần để giảm tồn.",
          "Hợp đồng khung theo tháng ổn định giá khi thép biến động. Gom nhu cầu giữa các bộ phận (thành phẩm, nguyên liệu) để đạt MOQ tốt hơn.",
          "Đối tác cần cung cấp: CO quy cách, giao đúng bản×độ dày, khóa đồng bộ, hỗ trợ SOP. Tham khảo /nha-cung-cap-day-dai-thep và /dai-thep-cong-nghiep cho chuẩn B2B.",
        ],
      },
      {
        heading: "KPI theo dõi sau triển khai",
        paragraphs: [
          "Theo dõi hàng tháng: tỷ lệ tuột đai/1000 kiện, thời gian đóng đai/kiện, kg dây tiêu hao/ton hàng, số sự cố an toàn.",
          "Review quý: có cần lên bản dây, thêm vòng SOP, hay thay dụng cụ. Dữ liệu KPI là căn cứ đàm phán với NCC thay vì cảm tính.",
          "Chia sẻ SOP cập nhật cho mọi ca — chuẩn hóa vật tư chỉ hiệu quả khi vận hành đồng nhất.",
        ],
      },
    ],
    faqs: [
      {
        question: "Nhà máy nhỏ có cần cả 16mm và 32mm không?",
        answer:
          "Tùy tải max. Nhiều site chỉ 16+19mm; 32mm chỉ khi có cuộn thép hoặc kiện >1,5t. Khảo sát tải max trước khi mua.",
      },
      {
        question: "Bao lâu nên review quy cách dây?",
        answer:
          "6 tháng hoặc khi tỷ lệ sự cố >2%, đổi SKU mới, hoặc đổi tuyến xuất khẩu. Test mẫu trước mọi thay đổi.",
      },
      {
        question: "Mua ở đâu có tư vấn chuẩn hóa nhà máy?",
        answer:
          "Gửi danh sách SKU + ảnh pallet qua /day-dai-thep hoặc /bao-gia-day-dai-thep — chốt 1–2 quy cách, khóa và dụng cụ đồng bộ trong 1–2 ngày làm việc.",
      },
    ],
  },
];

export const secondaryArticleSlugs = new Set(
  secondaryArticles.map((article) => article.slug),
);
