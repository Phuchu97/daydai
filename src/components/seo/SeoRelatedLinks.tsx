import Link from "next/link";

const DEFAULT_LINKS = [
  { href: "/day-dai-thep", label: "Tổng quan dây đai thép" },
  { href: "/bao-gia-day-dai-thep", label: "Bảng giá dây đai & khóa đai" },
  { href: "/day-dai-thep-16mm-19mm-32mm", label: "So sánh 16mm · 19mm · 32mm" },
  { href: "/day-dai-thep-dong-pallet", label: "Dây đai thép đóng pallet" },
  { href: "/khoa-dai-thep", label: "Khóa đai thép (bọ sắt)" },
  { href: "/bo-sat", label: "Bọ sắt, bọ kẹp đai" },
  { href: "/bo-dung-cu-dong-dai-thep", label: "Bộ dụng cụ đóng đai" },
  { href: "/siet-day-thep", label: "Siết dây thép" },
  { href: "/day-dai-thep-ha-noi", label: "Dây đai thép Hà Nội" },
  { href: "/day-dai-thep-mien-bac", label: "Dây đai thép miền Bắc" },
  { href: "/day-dai-sat-gia-re", label: "Dây đai sắt giá rẻ" },
  { href: "/tu-van", label: "Tư vấn kỹ thuật" },
] as const;

type SeoRelatedLinksProps = {
  title?: string;
  excludeHref?: string;
  extraLinks?: { href: string; label: string }[];
};

export function SeoRelatedLinks({
  title = "Trang liên quan nên xem",
  excludeHref,
  extraLinks = [],
}: SeoRelatedLinksProps) {
  const links = [...extraLinks, ...DEFAULT_LINKS].filter(
    (link, index, arr) =>
      link.href !== excludeHref &&
      arr.findIndex((item) => item.href === link.href) === index,
  );

  return (
    <section className="surface-card p-6">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-primary hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
