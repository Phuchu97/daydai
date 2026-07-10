import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactCtaLabel } from "@/components/contact/ContactCtaLabel";
import { PhoneIcon } from "@/components/contact/ContactIcons";
import { Logo } from "@/components/brand/Logo";

const currentYear = new Date().getFullYear();

const resourceLinks = [
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
  { href: "/bao-gia-day-dai-thep", label: "Báo giá dây đai thép" },
  { href: "/khoa-dai-thep", label: "Khóa đai thép" },
  { href: "/day-dai-thep-16mm-19mm-32mm", label: "Dây đai 16-19-32mm" },
  { href: "/day-dai-thep-ha-noi", label: "Dây đai thép Hà Nội" },
  { href: "/day-dai-thep-mien-bac", label: "Dây đai thép miền Bắc" },
  { href: "/day-dai-sat", label: "Dây đai sắt" },
  { href: "/dai-thep-cong-nghiep", label: "Đai thép công nghiệp" },
  { href: "/nha-cung-cap-day-dai-thep", label: "Nhà cung cấp dây đai thép" },
] as const;

const legalLinks = [
  { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
  { href: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-muted/25">
      <div className="site-container py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo showTagline className="max-w-sm" />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <a
              href={`tel:${siteConfig.company.zaloPhone}`}
              className="btn-lift mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_24px_-16px_rgba(22,67,126,0.85)] lg:hidden"
            >
              <ContactCtaLabel icon={<PhoneIcon className="h-4 w-4" />}>
                Gọi {siteConfig.company.phone}
              </ContactCtaLabel>
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <nav aria-label="Điều hướng chính" className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Điều hướng
              </p>
              <ul className="space-y-2">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Tài nguyên mua hàng" className="space-y-3 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Tài nguyên
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {resourceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Pháp lý" className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Pháp lý
              </p>
              <ul className="space-y-2">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Hotline:{" "}
            <a
              href={`tel:${siteConfig.company.zaloPhone}`}
              className="font-semibold text-foreground hover:text-primary"
            >
              {siteConfig.company.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
