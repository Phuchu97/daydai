import Link from "next/link";
import { siteConfig } from "@/config/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/25">
      <div className="container mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/chinh-sach-bao-mat"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/dieu-khoan-su-dung"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Điều khoản sử dụng
            </Link>
            <Link
              href="/bao-gia-day-dai-thep"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Báo giá dây đai thép
            </Link>
            <Link
              href="/khoa-dai-thep"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Khóa đai thép
            </Link>
            <Link
              href="/day-dai-thep-16mm-19mm-32mm"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dây đai thép 16-19-32mm
            </Link>
            <Link
              href="/day-dai-thep-ha-noi"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dây đai thép Hà Nội
            </Link>
            <Link
              href="/day-dai-thep-mien-bac"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dây đai thép miền Bắc
            </Link>
            <Link
              href="/day-dai-sat"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dây đai sắt
            </Link>
            <Link
              href="/dai-thep-cong-nghiep"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Đai thép công nghiệp
            </Link>
            <Link
              href="/nha-cung-cap-day-dai-thep"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Nhà cung cấp dây đai thép
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {siteConfig.links.twitter && (
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
            )}
            {siteConfig.links.github && (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
