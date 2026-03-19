import type { CatalogProduct } from "@/data/products";

type Props = {
  product?: CatalogProduct;
};

export function DescriptionSection({ product }: Props) {
  const productId = product?.id;
  const isStrapping = productId === "steel-strapping";
  const isTools = productId === "steel-strapping-tools";
  const isSeals = productId === "steel-seals";

  return (
    <section className="border-t border-border bg-background py-10">
      <div className="container mx-auto max-w-5xl px-4 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground sm:text-xl">
            Tổng quan sản phẩm
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {isTools
              ? "Bộ dụng cụ đóng đai thép giúp siết dây đai nhanh, cố định khóa đai chắc chắn và tối ưu thao tác cho nhân sự kho/nhà máy. Sản phẩm phù hợp khi bạn cần tốc độ đóng đai ổn định cho pallet, thùng hàng và kiện xuất vận chuyển."
              : isSeals
                ? "Khóa đai thép (seals) dùng để cố định đầu dây đai sau khi siết, giúp vòng đai giữ lực ổn định và hạn chế tuột đai trong quá trình bốc xếp - vận chuyển."
                : "Dây đai thép công nghiệp được thiết kế để cố định hàng hóa trọng tải lớn như cuộn thép, ống thép, pallet gỗ, máy móc và vật liệu xây dựng. Với độ bền kéo cao và khả năng chịu va đập tốt, dây đai thép đảm bảo hàng hóa luôn được siết chặt an toàn trong suốt quá trình bốc xếp và vận chuyển."}
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
            {isTools
              ? "Bộ dụng cụ siết - bấm khóa hoạt động theo nguyên lý siết dây đến lực căng phù hợp, sau đó bấm/khóa để hoàn tất vòng đai. Khi thao tác đúng quy trình, bạn sẽ giảm rủi ro bung đai, tăng độ ổn định và rút ngắn thời gian đóng gói."
              : isSeals
                ? "Khóa đai thép giúp liên kết và giữ chặt đầu dây sau khi siết. Việc chọn đúng kích thước khóa theo bản dây sẽ giúp vòng đai ổn định hơn và hạn chế tuột trong quá trình vận chuyển."
                : "Dây đai thép được sản xuất từ thép cacbon chất lượng cao, qua xử lý nhiệt và bề mặt để đạt được lực kéo và độ dẻo tối ưu. Bản rộng và độ dày khác nhau cho phép lựa chọn phù hợp với tải trọng và kích thước kiện hàng. Khi kết hợp với bộ dụng cụ siết đai và khóa đai thép, hệ thống đóng gói tạo thành vòng đai chắc chắn, phân bổ lực đều và giảm nguy cơ bung đai trong quá trình vận chuyển."}
          </p>
        </div>
      </div>
    </section>
  );
}

