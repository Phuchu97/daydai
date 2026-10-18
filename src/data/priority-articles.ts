import { STEEL_STRAPPING_TIER_SUMMARY } from "@/config/pricing";
import type { Article } from "./articles";

/** P2 priority articles — expanded 800–1200 từ, bảng số, FAQ. */
export const priorityArticles: Article[] = [
  {
    slug: "cach-chon-day-dai-thep-theo-tai-trong",
    title: "Cách chọn dây đai thép theo tải trọng thực tế",
    description:
      "Hướng dẫn chọn dây đai thép theo tải trọng hàng hóa, bản rộng, độ dày và môi trường vận chuyển để giảm rủi ro bung đai.",
    excerpt:
      "Nhiều doanh nghiệp chọn sai bản rộng/độ dày khiến đai bị lỏng hoặc tốn chi phí. Bài viết này giúp bạn chọn đúng theo tải trọng thật.",
    publishedAt: "2026-03-18",
    updatedAt: "2026-08-16",
    keywords: [
      "cách chọn dây đai thép",
      "dây đai thép tải trọng",
      "bản rộng dây đai thép",
      "độ dày dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Vì sao phải chọn dây theo tải thật, không theo cảm giác?",
        paragraphs: [
          "Tải trọng trên phiếu xuất kho và tải mà vòng đai phải giữ không phải lúc nào cũng giống nhau. Một pallet 800kg nhưng hàng xếp lệch, cạnh sắc hoặc chỉ có hai điểm đai sẽ cần biên an toàn cao hơn pallet 800kg hình khối đều với bốn điểm đai.",
          "Chọn dây quá mỏng: sau vài lần nâng hạ forklift hoặc phanh gấp trên cao tốc, vòng đai có thể giãn hoặc tuột mối. Chọn dây quá dày: tốn kg thép, tốn thời gian thao tác, và đôi khi khó siết đủ lực trên pallet thấp.",
          "Mục tiêu là chọn quy cách vừa đủ an toàn cho tuyến vận chuyển thực tế, không oversized không thiếu lực.",
        ],
      },
      {
        heading: "Bảng gợi ý bản rộng theo tải kiện",
        paragraphs: [
          "Bảng dưới là điểm xuất phát tham khảo cho kho Việt Nam. Luôn cộng thêm hệ số an toàn nếu hàng dễ trượt, tuyến xa hoặc container không chèn đầy.",
        ],
        table: {
          headers: ["Tải kiện (tham khảo)", "Bản dây gợi ý", "Độ dày phổ biến", "Ghi chú vận hành"],
          rows: [
            ["Dưới 500kg", "16mm", "0.5 – 0.6mm", "2–3 vòng đai; kiểm tra ổn định hình khối"],
            ["500 – 800kg", "16mm hoặc 19mm", "0.6 – 0.8mm", "Ưu tiên 19mm nếu tuyến rung lắc"],
            ["800 – 1.200kg", "19mm", "0.6 – 0.9mm", "3–4 vòng; bọ kín nếu đi xa"],
            ["1.200 – 2.000kg", "19mm hoặc 32mm", "0.8 – 1.0mm", "32mm nếu cạnh sắc hoặc cuộn thép"],
            ["Trên 2.000kg / cuộn thép", "32mm", "0.8 – 1.2mm", "Bắt buộc bọ + kìm 32mm; thêm góc bảo vệ"],
          ],
        },
      },
      {
        heading: "Độ dày quan trọng không kém bản rộng",
        paragraphs: [
          "Hai cuộn cùng ghi 19mm nhưng 0.5mm và 0.8mm khác nhau rõ về lực kéo. Nhiều đơn hàng thiếu ghi độ dày khiến nhà cung cấp giao loại mỏng để cạnh tranh giá — kiện nặng sẽ phải siết lại giữa đường.",
          "Quy tắc thực tế: ghi rõ bản × độ dày trên PO (vd. 19×0.8mm mạ kẽm). Yêu cầu CO hoặc tem cuộn nếu lô lớn. Test 1–2 cuộn trên ca mẫu trước khi chuẩn hóa cho cả tháng.",
          "Với hàng xuất khẩu, khách thường yêu cầu hệ số an toàn (working load limit). Khi đó không chỉ nhìn bảng tải/đai mà còn số điểm đai và lực siết chuẩn.",
        ],
      },
      {
        heading: "Yếu tố ngoài khối lượng: pallet, tuyến, môi trường",
        paragraphs: [
          "Pallet gỗ mới, pallet cũ yếu, pallet sắt — cùng một khối lượng nhưng điểm neo dây khác nhau. Pallet mục dễ bật đai khi nâng nghiêng.",
          "Tuyến nội thành ngắn cho phép quy cách nhẹ hơn tuyến Bắc–Nam hoặc container đường biển. Rung lắc làm dây co nhẹ theo thời gian; dây thép ít co hơn PET nhưng vẫn cần kiểm tra sau 24h nếu hàng lưu kho.",
          "Kho ẩm, bãi ngoài trời: cùng tải nhưng nên lên mạ kẽm hoặc sơn thay vì dầu để tránh gỉ làm giảm tiết diện hiệu dụng.",
        ],
      },
      {
        heading: "Checklist chốt quy cách trước khi đặt lô",
        paragraphs: [
          "Chụp ảnh kiện mẫu: kích thước, khối lượng ước tính, số vòng đai hiện tại, loại pallet, điểm đến (nội địa / container).",
          "Chọn bản + độ dày từ bảng, chọn bề mặt (dầu / mạ kẽm / sơn), xác nhận bọ và kìm cùng khổ.",
          "Chạy thử 1–2 ca: siết, bấm, nâng hạ forklift, quan sát độ võng sau 24h. Ghi SOP: số vòng theo SKU, lực siết tham chiếu.",
          "Chỉ sau khi test ổn mới scale lên lô tháng — sai quy cách trên 50 cuộn tốn hơn test nhỏ rất nhiều.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có công thức tính lực đai chính xác không?",
        answer:
          "Lực thực tế phụ thuộc góc đai, ma sát pallet, số điểm đai và lực siết. Bảng tải/đai trong bài là tham khảo vận hành; nên test mẫu hoặc nhờ nhà cung cấp có kinh nghiệm ngành của bạn đề xuất.",
      },
      {
        question: "Kiện 700kg dùng 16mm được không?",
        answer:
          "Có thể, nếu hình khối ổn định, đủ 3–4 vòng đai, tuyến ngắn và đã test nâng hạ. Nếu hàng trượt hoặc đi xa, nên lên 19×0.6–0.8mm.",
      },
      {
        question: "Mua dây ở đâu có tư vấn theo tải?",
        answer:
          "Trang /day-dai-thep và /bao-gia-day-dai-thep có bảng quy cách; gửi ảnh pallet để chốt bản, độ dày và loại bề mặt trong ngày làm việc.",
      },
    ],
  },
  {
    slug: "so-sanh-day-dai-thep-va-day-dai-nhua",
    title: "So sánh dây đai thép và dây đai nhựa cho hàng nặng",
    description:
      "So sánh ưu nhược điểm giữa dây đai thép và dây đai nhựa theo tải trọng, độ ổn định, chi phí và môi trường sử dụng.",
    excerpt:
      "Không phải lúc nào dây đai nhựa cũng là lựa chọn tối ưu. Với hàng nặng và tuyến vận chuyển rung lắc, dây đai thép có lợi thế rõ rệt.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-08-16",
    keywords: [
      "dây đai thép vs dây đai nhựa",
      "đóng đai pallet hàng nặng",
      "vật tư đóng gói công nghiệp",
    ],
    relatedProductIds: ["steel-strapping"],
    sections: [
      {
        heading: "Hai loại đai khác nhau ở điểm nào?",
        paragraphs: [
          "Dây đai thép là băng thép dẹt, siết bằng kìm cơ hoặc máy, khóa bằng bọ sắt. Chịu lực kéo cao, gần như không co giãn sau siết — phù hợp kiện nặng, cạnh sắc, nhiệt cao.",
          "Dây đai nhựa (PP/PET) nhẹ hơn, mềm hơn, thao tác nhanh, an toàn khi cắt (không sắc như thép). PET chịu lực tốt hơn PP nhưng vẫn thấp hơn thép cùng chi phí vật tư trên kiện siêu nặng.",
          "Quyết định không phải “cái nào tốt hơn” mà “cái nào đủ an toàn cho tải và tuyến của bạn”.",
        ],
      },
      {
        heading: "Bảng so sánh nhanh",
        paragraphs: ["Dùng bảng dưới để họp nội bộ giữa kho, QA và mua hàng."],
        table: {
          headers: ["Tiêu chí", "Dây đai thép", "Dây đai nhựa PET/PP"],
          rows: [
            ["Tải kiện phù hợp", "Từ ~400kg trở lên, cuộn thép", "Carton, hàng vừa, dưới ~800kg"],
            ["Co giãn sau siết", "Rất thấp", "PET có co nhẹ theo thời gian"],
            ["An toàn khi cắt", "Cạnh sắc, cần găng", "An toàn hơn, ít đứt bật"],
            ["Chi phí vật tư", "Cao hơn/kg, nhưng đủ lực trên kiện nặng", "Rẻ hơn cho hàng nhẹ"],
            ["Môi trường ẩm / ngoài trời", "Mạ kẽm / sơn chống gỉ tốt", "PET ổn; PP kém hơn nắng nóng"],
            ["Thiết bị", "Kìm siết + bấm bọ", "Kìm tay hoặc máy bọ nhựa"],
          ],
        },
      },
      {
        heading: "Khi nào bắt buộc dùng dây đai thép?",
        paragraphs: [
          "Kiện trên 1 tấn, cuộn thép, profile kim loại, máy móc nặng — PET khó đảm bảo hệ số an toàn mà không quá nhiều vòng đai.",
          "Hàng có cạnh sắc cắt dây nhựa, hoặc nhiệt cao gần lò/nhà máy thép.",
          "Khách xuất khẩu yêu cầu đai thép trong spec đóng gói (thường gặp ngành thép, VLXD, cơ khí).",
          "Tuyến rung lắc dài (container, đường bộ Bắc–Nam) với hàng dễ xê dịch.",
        ],
      },
      {
        heading: "Khi nào dây nhựa vẫn là lựa chọn đúng?",
        paragraphs: [
          "Carton, bao bì, hàng tiêu dùng trên pallet gỗ tiêu chuẩn, tải dưới ~600–800kg và tuyến ngắn.",
          "Cần tốc độ đóng gói cao, công nhân mới — thao tác nhựa nhẹ hơn.",
          "Yêu cầu bề mặt hàng không bị đai thép cấn (một số mặt hàng hoàn thiện).",
          "Lưu ý: kiểm tra độ giãn PET sau 24–48h; nếu lỏng phải tăng vòng đai hoặc chuyển thép.",
        ],
      },
      {
        heading: "Chi phí tổng: không chỉ đơn giá mét dây",
        paragraphs: [
          "Đơn giá/kg thép cao hơn nhựa, nhưng trên kiện 1.2 tấn có thể cần ít vòng PET hơn mà vẫn không đủ lực — rủi ro hư hàng đắt hơn tiết kiệm vật tư.",
          "Cộng thêm thời gian thao tác, tỷ lệ lỗi tuột mối, chi phí bồi thường khi bung đai. Nhiều kho chạy song song: nhựa cho dòng nhẹ, thép cho dòng nặng — chuẩn hóa 2 SOP thay vì một.",
        ],
      },
    ],
    faqs: [
      {
        question: "PET có thay thế hoàn toàn thép không?",
        answer:
          "Không với hàng nặng và spec xuất khẩu cơ khí/thép. PET phù hợp phân khúc hàng vừa và nhẹ.",
      },
      {
        question: "Cùng pallet có thể dùng cả hai loại không?",
        answer:
          "Có thể trong giai đoạn chuyển đổi, nhưng nên tách SKU và khu vực cấp phát để tránh nhầm quy trình siết/bấm.",
      },
    ],
  },
  {
    slug: "huong-dan-su-dung-bo-dung-cu-dong-dai-thep",
    title: "Hướng dẫn sử dụng bộ dụng cụ đóng đai thép đúng kỹ thuật",
    description:
      "Quy trình siết - bấm - khóa đai thép đúng chuẩn để tăng tốc đóng gói và hạn chế lỗi bung đai khi vận chuyển.",
    excerpt:
      "Dùng đúng thao tác với kìm siết/bấm khóa giúp giảm lỗi rất nhiều. Đây là quy trình ngắn gọn cho kho và nhà máy.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-08-16",
    keywords: [
      "hướng dẫn dụng cụ đóng đai thép",
      "cách dùng kìm siết",
      "cách dùng sealer",
    ],
    relatedProductIds: ["steel-strapping-tools", "steel-seals"],
    sections: [
      {
        heading: "Chuẩn bị: khớp bộ dụng cụ, dây và bọ",
        paragraphs: [
          "Kiểm tra bộ dụng cụ đúng khổ (16-19mm hay 32mm). Dây, bọ và kìm lệch size là nguyên nhân số một tuột mối.",
          "Bọ phải lớn hơn bản dây ~0.2mm (19mm → bọ 19.2mm). Kiểm tra lò xo kìm siết, đầu bấm sealer không mòn.",
          "Quan sát mép dây: gỉ sét nặng hoặc mép vê làm kìm trượt, lực siết không ổn định.",
        ],
      },
      {
        heading: "Quy trình 3 bước chi tiết",
        paragraphs: [
          "Bước 1 — Luồn dây: đặt dây qua khe pallet hoặc quanh kiện, tránh cạnh sắc cắt dây. Đặt bọ ở vị trí có tì đỡ, không để bọ lơ lửng giữa không.",
          "Bước 2 — Siết: dùng kìm siết kéo dây đến lực đủ căng (kiện không xê dịch khi lắc nhẹ). Tránh siết quá tay làm đứt dây mỏng hoặc vê mép.",
          "Bước 3 — Bấm và cắt: sealer bấm bọ cho đến khi mối kín; cắt đuôi dây gọn. Kiểm tra bằng cách kéo thử mối khóa trước khi xuất.",
        ],
      },
      {
        heading: "Bảng bộ dụng cụ theo bản dây",
        paragraphs: ["Chọn bộ theo bản dây lớn nhất kho đang dùng."],
        table: {
          headers: ["Nhóm bộ", "Dây hỗ trợ", "Ứng dụng", "Trọng lượng bộ"],
          rows: [
            ["Bộ 16-19mm", "0.4 – 0.8mm", "Pallet vừa, kho tiêu chuẩn", "3.5 – 4.2kg"],
            ["Bộ 19-25mm", "0.6 – 1.0mm", "Hàng nặng trung bình", "4.2 – 5.5kg"],
            ["Bộ 32mm", "0.8 – 1.2mm", "Cuộn thép, tải cao", "5.5 – 7.0kg"],
          ],
        },
      },
      {
        heading: "Lỗi thường gặp và cách xử lý",
        paragraphs: [
          "Khóa tuột: sai size bọ, lực bấm yếu, hoặc sealer mòn — đổi bọ đúng khổ, điều chỉnh bấm, thay đầu sealer.",
          "Đai lỏng sau vài giờ: siết chưa đủ, thiếu vòng đai, hoặc dây quá mỏng — tăng vòng, tăng độ dày, kiểm tra lực siết chuẩn.",
          "Mép dây nhăn: kìm 32mm kẹp dây 16mm hoặc siết lệch — dùng bộ đúng khổ.",
          "Công nhân mỏi tay: bộ quá nặng cho ca dài — cân nhắc máy đóng đai nếu sản lượng cao.",
        ],
      },
      {
        heading: "Bảo trì và an toàn lao động",
        paragraphs: [
          "Tra dầu bôi trơn kìm theo khuyến cáo nhà sản xuất. Cất bộ khô ráo, tránh rơi từ cao.",
          "Đeo găng khi cắt dây thép. Không đứng sát mối đai khi thử lực kéo.",
          "Đặt lịch kiểm tra phụ tùng thay thế (lò xo, pin máy nếu có) theo tháng.",
        ],
      },
    ],
    faqs: [
      {
        question: "Một bộ có dùng cho cả dây dầu và mạ kẽm không?",
        answer:
          "Có, miễn cùng bản rộng và độ dày trong giới hạn bộ. Loại bề mặt không ảnh hưởng kìm.",
      },
      {
        question: "Nên mua bộ 16-19 hay tách kìm siết / bấm?",
        answer:
          "Combo thường rẻ và đồng bộ phụ tùng. Tách lẻ khi cần thay một chi tiết hoặc kho đã có sẵn một chi tiết còn tốt.",
      },
    ],
  },
  {
    slug: "day-dai-thep-16mm-19mm-32mm-nen-chon-loai-nao",
    title: "Dây đai thép 16mm, 19mm, 32mm: nên chọn loại nào?",
    description:
      "So sánh nhanh dây đai thép 16mm, 19mm, 32mm theo tải trọng, độ dày và điều kiện vận chuyển thực tế.",
    excerpt:
      "Bài viết giúp bạn chọn đúng bản dây theo tải trọng và giảm rủi ro tuột đai khi vận chuyển hàng nặng.",
    publishedAt: "2026-05-02",
    updatedAt: "2026-08-16",
    keywords: [
      "dây đai thép 16mm",
      "dây đai thép 19mm",
      "dây đai thép 32mm",
      "cách chọn bản dây đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals"],
    sections: [
      {
        heading: "Khác nhau giữa 16mm, 19mm và 32mm",
        paragraphs: [
          "Cả ba đều là băng thép dẹt, khác ở chiều rộng và lượng thép trên mét — quyết định lực kéo và kg/cuộn.",
          "16mm: tiết kiệm nhất, phù hợp pallet vừa. 19mm: cân bằng lực/chi phí, kho Việt Nam dùng nhiều nhất. 32mm: biên an toàn cao cho kiện siêu nặng và cuộn thép.",
          "Landing page /day-dai-thep-16mm (v.v.) có spec chi tiết; bài này tập trung quyết định nên chọn khổ nào.",
        ],
      },
      {
        heading: "Bảng thông số so sánh",
        paragraphs: ["Số liệu tham khảo từ catalog kỹ thuật; m/kg tính theo khối lượng riêng thép 7,85 g/cm³ — test mẫu vẫn cần thiết."],
        table: {
          headers: ["Khổ", "Độ dày", "Chịu lực (N)", "m/kg", "Tải tham khảo/đai"],
          rows: [
            ["16mm", "0.5 – 0.8", "6.500 – 9.000", "10 – 16", "400 – 900kg"],
            ["19mm", "0.6 – 0.9", "9.000 – 14.000", "7,4 – 11", "800 – 1.400kg"],
            ["32mm", "0.8 – 1.2", "18.000 – 25.000+", "3,3 – 5", "1.300kg+"],
          ],
        },
      },
      {
        heading: "Chọn 16mm khi nào?",
        paragraphs: [
          "Kiện dưới ~500–800kg, hình khối ổn định, tuyến ngắn, kho đã có bọ và kìm 16mm.",
          "Muốn tối ưu chi phí vật tư trên sản lượng lớn SKU tương tự nhau.",
          "Nâng lên 19mm khi: tải tăng, hàng trượt, thêm lần bốc xếp, hoặc khách yêu cầu hệ số an toàn cao hơn.",
        ],
      },
      {
        heading: "Chọn 19mm khi nào?",
        paragraphs: [
          "Kiện 500–1.200kg, pallet thép/VLXD, tuyến rung lắc — đây là “mặc định an toàn” nhiều nhà máy chọn.",
          "Muốn chuẩn hóa một quy cách cho nhiều SKU thay vì tồn 16 và 32 song song.",
          "Xuất khẩu đường bộ/container tải trung bình–nặng với bọ kín 19.2mm.",
        ],
      },
      {
        heading: "Chọn 32mm khi nào?",
        paragraphs: [
          "Cuộn thép, cấu kiện kim loại lớn, máy móc nặng — không nên ép 19mm tiết kiệm chi phí.",
          "Bắt buộc dùng bọ 32mm và bộ kìm 32mm; lệch size rất nguy hiểm.",
          "Nếu tải thấp hơn nhưng đã có line 32mm chạy ổn, có thể giữ 32mm cho đơn giản vận hành — cân nhắc chi phí kg.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có cần tồn cả 3 khổ không?",
        answer:
          "Nhiều kho chỉ cần 16 + 19, hoặc 19 + 32. Tránh tồn 3 khổ + 3 loại bọ nếu sản lượng chưa lớn.",
      },
      {
        question: "25mm có cần không?",
        answer:
          "25mm ít phổ biến hơn 19/32 tại VN. Chỉ dùng khi spec khách hoặc tải nằm giữa 19 và 32.",
      },
    ],
  },
  {
    slug: "bao-gia-day-dai-thep-yeu-to-anh-huong-don-gia",
    title: "Báo giá dây đai thép: 5 yếu tố ảnh hưởng trực tiếp đến đơn giá",
    description:
      "Các yếu tố quyết định giá dây đai thép gồm mác thép, lớp phủ, độ dày, khối lượng đặt và vị trí giao hàng.",
    excerpt:
      "Nắm 5 yếu tố này giúp doanh nghiệp dự toán chuẩn và đàm phán giá tốt hơn cho đơn hàng dây đai thép.",
    publishedAt: "2026-05-05",
    updatedAt: "2026-08-16",
    keywords: [
      "báo giá dây đai thép",
      "giá dây đai thép",
      "yếu tố ảnh hưởng giá đai thép",
    ],
    relatedProductIds: ["steel-strapping", "steel-seals", "steel-strapping-tools"],
    sections: [
      {
        heading: "Yếu tố 1: Loại bề mặt (dầu / mạ kẽm / sơn)",
        paragraphs: [
          `Tại Dây Đai Thép Việt Nam, dây dầu, mạ kẽm và sơn tĩnh điện cùng bảng giá theo số lượng (${STEEL_STRAPPING_TIER_SUMMARY}). Vì vậy chọn bề mặt theo môi trường: dầu cho kho khô nội địa, mạ kẽm hoặc sơn tĩnh điện khi ẩm, ngoài trời hoặc xuất khẩu.`,
          "Chọn sai loại (dầu để ngoài trời) dẫn tới gỉ, đổi lô sớm — tổng chi phí cao hơn mua đúng mạ kẽm ngay từ đầu.",
          "Xem bảng giá chi tiết tại /bao-gia-day-dai-thep và trang từng loại bề mặt.",
        ],
      },
      {
        heading: "Yếu tố 2: Bản rộng và độ dày",
        paragraphs: [
          "Tăng 16mm lên 19mm hoặc tăng 0.5mm lên 0.8mm đều tăng kg thép trên mét dây — đơn giá/kg có thể tương tự nhưng tổng tiền cuộn cao hơn.",
          "Báo giá phải ghi rõ bản × độ dày. So sánh giá hai NCC mà thiếu độ dày dễ mua phải hàng mỏng.",
        ],
        table: {
          headers: ["Quy cách", "Ảnh hưởng giá", "Ghi chú mua hàng"],
          rows: [
            ["16×0.5mm dầu", "Thấp nhất trong nhóm thép", "Chỉ cho tải nhẹ"],
            ["19×0.8mm mạ kẽm", "Trung bình–cao", "Phổ biến xuất khẩu"],
            ["32×1.0mm mạ kẽm", "Cao theo kg", "Cuộn nặng, cần xe tải phù hợp"],
          ],
        },
      },
      {
        heading: "Yếu tố 3: Khối lượng đặt và tần suất",
        paragraphs: [
          "Lô 500kg–2 tấn/tháng thường được giá tốt hơn mua 2–3 cuộn lẻ. Gom nhu cầu giữa các bộ phận để tăng sức mua.",
          "Hợp đồng khung theo quý giúp ổn định giá khi thép đầu vào biến động — phù hợp nhà máy tiêu thụ đều.",
        ],
      },
      {
        heading: "Yếu tố 4: Điểm giao và cước vận chuyển",
        paragraphs: [
          "Giao Hà Nội / KCN miền Bắc thường nhanh và cước thấp hơn gửi chành xa. Cuộn 30–50kg — tính cả số chuyến khi đặt nhiều quy cách nhỏ.",
          "Giao công trình xa tỉnh: cộng chành xe hoặc gom lô lớn một lần/tháng để giảm cước đơn vị.",
        ],
      },
      {
        heading: "Yếu tố 5: Bọ, kìm và combo vật tư",
        paragraphs: [
          "Một số báo giá chỉ dây; thiếu bọ/kìm khiến kho mua lẻ đắt hơn combo. Hỏi gói dây + bọ + kìm nếu đang triển khai line mới.",
          "Khóa đai tính theo cái hoặc kg — xem bảng SEAL trên /bao-gia-day-dai-thep và /khoa-dai-thep.",
        ],
      },
    ],
    faqs: [
      {
        question: "Giá thép biến động thì báo giá thế nào?",
        answer:
          "Báo giá thường có hiệu lực 7–15 ngày hoặc gắn tháng. Đơn lớn có thể chốt giá khung theo quý.",
      },
      {
        question: "Có VAT và vận chuyển trong giá kg không?",
        answer:
          "Hỏi rõ FOB kho hay giao tận nơi, đã VAT chưa. Website daydaivn niêm yết tham khảo — lô B2B chốt trên phiếu báo giá.",
      },
    ],
  },
];

export const priorityArticleSlugs = new Set(
  priorityArticles.map((article) => article.slug),
);
