export type SpecByWidth = {
  width: string;
  thickness: string;
  breakStrength: string;
  coilWeight: string;
  typicalUse: string;
};

export const steelStrappingWhatIs = {
  title: "Dây đai thép là gì?",
  paragraphs: [
    "Dây đai thép là vật tư đóng gói công nghiệp dùng để siết chặt, cố định kiện hàng, kệ pallet và cuộn vật liệu có trọng lượng lớn. Dây được cuốn thành cuộn; khi sử dụng sẽ quấn quanh kiện hàng rồi siết căng bằng dụng cụ chuyên dụng và khóa bằng bọ thép (khóa đai thép).",
    "Khác với dây đai nhựa mềm (thường dùng cho hàng nhẹ), dây đai thép có độ cứng cao, chịu lực kéo và va đập mạnh — phù hợp cho hàng nặng, biên dạng sắc cạnh và môi trường xưởng sản xuất – nhà máy – cảng biển khắc nghiệt.",
    "Dây đai thép thường được làm từ thép cacbon chất lượng cao, qua xử lý nhiệt và phủ bề mặt mạ kẽm hoặc sơn chống gỉ để tăng độ bền và hạn chế ăn mòn khi bảo quản ngoài trời lâu ngày.",
  ],
};

export const steelStrappingStructure = {
  title: "Cấu tạo & nguyên lý siết đai",
  items: [
    {
      label: "Thân dây",
      text: "Dải thép mỏng, bản rộng 16–32mm, độ dày 0,5–1,0mm tùy tải trọng cần chịu.",
    },
    {
      label: "Bề mặt",
      text: "Mạ kẽm hoặc sơn đen chống gỉ — giúp chống oxy hóa, phù hợp bảo quản ngoài trời và khu vực ẩm.",
    },
    {
      label: "Khóa đai (bọ thép, bọ sắt)",
      text: "Miếng thép nhỏ bấm chặt hai đầu dây sau khi siết, tạo vòng đai liên tục giữ lực.",
    },
    {
      label: "Dụng cụ siết",
      text: "Kìm siết dây đến lực căng thiết kế, sau đó bấm khóa hoàn tất vòng đai.",
    },
  ],
};

export const steelStrappingApplications = {
  title: "Ứng dụng dây đai thép",
  intro:
    "Dây đai thép được dùng rộng rãi khi cần giữ chặt hàng có khối lượng lớn, chịu rung lắc và không cho phép xê dịch trong quá trình bốc xếp – vận chuyển.",
  groups: [
    {
      title: "Xưởng sản xuất & vận chuyển",
      items: [
        "Đóng đai kệ pallet gỗ, pallet thép chứa vật tư nặng.",
        "Cố định kiện hàng xếp chồng trong thùng hàng, xe tải, rơ-moóc.",
        "Siết thùng, kiện xuất nhập khẩu tại kho cảng, cảng biển và trung tâm vận chuyển.",
      ],
    },
    {
      title: "Nhà máy thép & kim loại",
      items: [
        "Buộc cuộn tôn, cuộn thép không gỉ, ống thép, thanh thép.",
        "Cố định phôi, bán thành phẩm trước khi chuyển kho hoặc giao khách.",
      ],
    },
    {
      title: "Xây dựng & vật liệu",
      items: [
        "Đóng gói gạch, đá, ống, tấm panel, kính cường lực (kèm tấm bảo vệ).",
        "Buộc dầm, cấu kiện thép tại bãi vật liệu và công trường.",
      ],
    },
    {
      title: "Sản xuất & xuất khẩu",
      items: [
        "Đóng kiện máy móc, thiết bị công nghiệp, linh kiện nặng.",
        "Đảm bảo hàng nguyên kiện theo tiêu chuẩn đóng gói xuất khẩu.",
      ],
    },
  ],
};

export const steelStrappingSpecsByWidth: SpecByWidth[] = [
  {
    width: "16mm",
    thickness: "0,5 – 0,8mm",
    breakStrength: "400 – 900 kgf/đai",
    coilWeight: "25 – 35 kg/cuộn",
    typicalUse: "Pallet vừa, kiện ổn định, chi phí tối ưu",
  },
  {
    width: "19mm",
    thickness: "0,6 – 0,9mm",
    breakStrength: "800 – 1.400 kgf/đai",
    coilWeight: "30 – 45 kg/cuộn",
    typicalUse: "Pallet nặng, thép, vật tư xây dựng — phổ biến nhất",
  },
  {
    width: "25mm",
    thickness: "0,7 – 1,0mm",
    breakStrength: "1.000 – 1.600 kgf/đai",
    coilWeight: "35 – 50 kg/cuộn",
    typicalUse: "Hàng nặng, tuyến vận chuyển xa, nhiều va đập",
  },
  {
    width: "32mm",
    thickness: "0,8 – 1,2mm",
    breakStrength: "1.300 – 1.800+ kgf/đai",
    coilWeight: "40 – 55 kg/cuộn",
    typicalUse: "Cuộn thép, kiện siêu nặng, yêu cầu hệ số an toàn cao",
  },
];

export const steelStrappingGeneralSpecs = [
  { label: "Tên sản phẩm", value: "Dây đai thép công nghiệp" },
  { label: "Vật liệu", value: "Thép cacbon, mạ kẽm / sơn đen chống gỉ" },
  { label: "Bản rộng", value: "16mm, 19mm, 25mm, 32mm" },
  { label: "Độ dày", value: "0,5mm – 1,2mm (tùy bản)" },
  { label: "Lực kéo đứt", value: "400 – 1.800+ kgf/đai (theo quy cách)" },
  { label: "Trọng lượng cuộn", value: "25 – 55 kg/cuộn hoặc theo yêu cầu" },
  {
    label: "Tiêu chuẩn tham chiếu",
    value: "Quy chuẩn kỹ thuật tương đương D3953 (tùy lô hàng)",
  },
  { label: "Phụ kiện đi kèm", value: "Khóa đai thép, bộ dụng cụ siết–bấm" },
  { label: "Bảo quản", value: "Nơi khô ráo, tránh ẩm ướt lâu ngày; xếp cuộn đứng/ngang ổn định" },
];

export const steelStrappingSelectionGuide = {
  title: "Cách chọn quy cách dây đai thép",
  steps: [
    "Xác định trọng lượng kiện hàng và số điểm đai (thường 2–4 vòng tùy kích thước pallet).",
    "Đánh giá hình dạng hàng: vuông vức hay dễ lăn, có cạnh sắc làm cắt dây nhựa không.",
    "Xem xét quãng đường vận chuyển và mức rung lắc — tuyến xa nên chọn bản rộng hơn.",
    "Đồng bộ khóa đai và dụng cụ đúng bản dây (16 / 19 / 25 / 32mm).",
    "Liên hệ tư vấn nếu hàng đặc biệt nặng hoặc cần checklist đóng đai theo quy trình nội bộ.",
  ],
};

export const steelStrappingProcess = {
  title: "Quy trình đóng đai thép chuẩn",
  steps: [
    "Chuẩn bị pallet vững, xếp hàng cân đối, đặt tấm bảo vệ góc nếu cần.",
    "Luồn dây quanh kiện theo vị trí đai đã đánh dấu.",
    "Siết dây bằng kìm siết đến lực căng phù hợp (không siết quá tay gây đứt, không lỏng).",
    "Bấm khóa đai thép chắc chắn tại vị trí giao đầu dây.",
    "Kiểm tra lại toàn bộ vòng đai, cắt đầu dây thừa an toàn.",
  ],
};

export const steelStrappingComparison = {
  title: "Dây đai thép so với dây đai nhựa",
  rows: [
    ["Tiêu chí", "Dây đai thép", "Dây đai nhựa mềm"],
    ["Chịu lực", "Rất cao", "Trung bình"],
    ["Va đập / cạnh sắc", "Tốt", "Kém hơn với hàng nặng"],
    ["Độ dẻo khi uốn", "Cứng hơn, cần dụng cụ", "Mềm, thao tác tay dễ hơn"],
    ["Chi phí", "Cao hơn nhưng bền cho hàng nặng", "Rẻ hơn cho hàng nhẹ–vừa"],
    ["Ứng dụng điển hình", "Thép, kệ pallet nặng, xuất khẩu", "Thùng giấy, kiện nhẹ, in ấn"],
  ],
};

export const steelStrappingFaqs = [
  {
    question: "Dây đai thép là gì, khác gì dây đai nhựa?",
    answer:
      "Dây đai thép là dải thép dùng siết kiện hàng nặng, chịu lực và va đập cao hơn dây đai nhựa. Dây nhựa phù hợp hàng nhẹ; dây thép dùng cho kệ pallet nặng, cuộn thép, vận chuyển và xuất khẩu.",
  },
  {
    question: "Nên chọn bản 16mm, 19mm hay 32mm?",
    answer:
      "19mm là lựa chọn phổ biến cho pallet nặng và thép. 16mm cho kiện vừa, tối ưu chi phí. 32mm khi hàng rất nặng hoặc tuyến vận chuyển xa, nhiều rung lắc. Chúng tôi tư vấn miễn phí theo tải trọng thực tế.",
  },
  {
    question: "Lực kéo đứt của dây đai thép khoảng bao nhiêu?",
    answer:
      "Tùy bản rộng và độ dày: từ khoảng 400 kgf/đai (16mm mỏng) đến 1.800+ kgf/đai (32mm dày). Số liệu tham khảo; cần tính thêm hệ số an toàn và số điểm đai.",
  },
  {
    question: "Mua dây đai thép có cần mua khóa và dụng cụ không?",
    answer:
      "Có. Hệ thống đóng đai gồm dây + khóa đai thép + dụng cụ siết/bấm. Dùng đồng bộ đúng bản dây giúp vòng đai giữ lực ổn định và giảm rủi ro tuột đai.",
  },
  {
    question: "Có giao hàng toàn quốc và báo giá theo kg không?",
    answer:
      "Có. Giao toàn quốc qua chành xe hoặc vận chuyển phù hợp. Báo giá theo quy cách, khối lượng kg/cuộn và số lượng đơn hàng — gọi số điện thoại trên website để nhận giá trong ngày.",
  },
  {
    question: "Bảo quản cuộn dây đai thép như thế nào?",
    answer:
      "Để nơi khô ráo, tránh để lâu trong môi trường muối biển ẩm ướt. Xếp cuộn ổn định, không đè nặng làm biến dạng. Kiểm tra bề mặt trước khi sử dụng nếu lưu kho lâu.",
  },
];

export const steelStrappingBenefits = [
  "Siết chặt pallet và cuộn thép, hạn chế xê dịch khi vận chuyển đường dài.",
  "Chịu lực kéo và va đập vượt trội so với dây đai nhựa thông thường.",
  "Phù hợp xưởng sản xuất, nhà máy, cảng — môi trường nhiệt độ và ẩm khắc nghiệt.",
  "Tương thích hệ thống khóa đai + dụng cụ chuyên dụng, quy trình đóng đai chuẩn.",
];
