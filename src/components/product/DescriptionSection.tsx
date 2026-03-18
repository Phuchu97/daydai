export function DescriptionSection() {
  return (
    <section className="border-t border-border bg-background py-10">
      <div className="container mx-auto max-w-5xl px-4 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Tổng quan sản phẩm
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Dây đai thép công nghiệp được thiết kế để cố định hàng hóa trọng
            tải lớn như cuộn thép, ống thép, pallet gỗ, máy móc và vật liệu xây
            dựng. Với độ bền kéo cao và khả năng chịu va đập tốt, dây đai thép
            đảm bảo hàng hóa luôn được siết chặt an toàn trong suốt quá trình
            bốc xếp và vận chuyển.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Ứng dụng thực tế
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Đóng đai pallet hàng nặng trong kho và container.</li>
              <li>• Cố định cuộn thép, tôn, ống thép, dầm thép.</li>
              <li>• Gia cố hàng hóa trên xe tải và rơ-moóc.</li>
              <li>• Dùng trong nhà máy sản xuất thép, gỗ, kính, vật liệu xây dựng.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Ngành sử dụng phổ biến
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Nhà máy thép, cơ khí, kết cấu thép.</li>
              <li>• Doanh nghiệp logistics, kho bãi, ICD.</li>
              <li>• Công ty xây dựng, bãi vật liệu.</li>
              <li>• Đơn vị đóng gói công nghiệp và xuất khẩu.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Giải thích kỹ thuật đơn giản
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Dây đai thép được sản xuất từ thép cacbon chất lượng cao, qua xử lý
            nhiệt và bề mặt để đạt được lực kéo và độ dẻo tối ưu. Bản rộng và độ
            dày khác nhau cho phép lựa chọn phù hợp với tải trọng và kích thước
            kiện hàng. Khi kết hợp với{" "}
            <span className="font-medium text-foreground">
              bộ dụng cụ siết đai và khóa đai thép
            </span>
            , hệ thống đóng gói tạo thành vòng đai chắc chắn, phân bổ lực đều,
            giảm nguy cơ bung đai trong quá trình vận chuyển.
          </p>
        </div>
      </div>
    </section>
  );
}

