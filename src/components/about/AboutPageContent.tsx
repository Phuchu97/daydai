import Image from "next/image";
import Link from "next/link";
import { BulkShippingShowcase } from "@/components/marketing/BulkShippingShowcase";
import { PhoneCtaButton } from "@/components/contact/PhoneCtaButton";
import { QuickQuoteForm } from "@/components/seo/QuickQuoteForm";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import {
  aboutFaqs,
  aboutIndustries,
  aboutProcess,
  aboutProductShowcase,
  aboutStrengths,
} from "@/data/about-content";
import { siteConfig } from "@/config/site";

export function AboutPageContent() {
  return (
    <article className="space-y-14 sm:space-y-16 md:space-y-20">
      <BreadcrumbNav
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu" },
        ]}
      />

      {/* Hero */}
      <header className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Nhà cung cấp dây đai công nghiệp</p>
          <h1 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
            Giới thiệu {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-[58ch] text-sm leading-7 text-muted-foreground sm:text-base">
            {siteConfig.tagline}. Chúng tôi tập trung vào nhu cầu đóng gói
            công nghiệp: pallet hàng nặng, cuộn thép, vật liệu xây dựng và
            hàng logistics cần cố định chắc khi vận chuyển.
          </p>
          <p className="mt-4 max-w-[58ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Hoạt động từ {siteConfig.company.foundingYear}.{" "}
            {siteConfig.company.materialSource}. Kho tại{" "}
            {siteConfig.company.address}.
          </p>
          <p className="mt-4 max-w-[58ch] text-sm leading-7 text-muted-foreground sm:text-base">
            Với kho dây đai thép, khóa đai và dụng cụ siết sẵn sàng, chúng
            tôi giúp doanh nghiệp rút ngắn thời gian triển khai, giảm rủi ro
            tuột đai và tối ưu chi phí đóng gói theo từng quy mô vận hành.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <PhoneCtaButton>Gọi {siteConfig.company.phone}</PhoneCtaButton>
            <Link
              href="/san-pham"
              className="btn-lift inline-flex items-center justify-center rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/30"
            >
              Xem danh mục sản phẩm
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted/30 shadow-[0_24px_48px_-28px_rgba(22,67,126,0.55)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
          <Image
            src="/images/nha-may-dong-dai.webp"
            alt="Kho dây đai thép và bộ dụng cụ đóng đai tại Dây Đai Thép Việt Nam"
            width={960}
            height={720}
            className="h-full w-full object-cover"
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
      </header>

      {/* Core products */}
      <section aria-labelledby="about-products-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Danh mục cung cấp</p>
          <h2
            id="about-products-heading"
            className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Sản phẩm cốt lõi
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Cung cấp trọn chuỗi đóng đai: dây thép chịu lực, khóa đai và bộ
            dụng cụ siết cho dây thép lẫn dây nhựa PP/PET.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {aboutProductShowcase.map((product) => (
            <li key={product.id}>
              <Link
                href={product.slug}
                className="group surface-card flex h-full flex-col overflow-hidden transition duration-200 hover:border-primary/25 hover:shadow-[0_20px_40px_-24px_rgba(22,67,126,0.5)] sm:flex-row"
              >
                <div className="relative aspect-[4/3] shrink-0 bg-white sm:w-36 md:w-40 lg:w-44">
                  {product.image ? (
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      className="object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
                      sizes="(min-width: 640px) 180px, 100vw"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-primary">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Strengths — asymmetric */}
      <section
        aria-labelledby="about-strengths-heading"
        className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8"
      >
        <div className="surface-card flex flex-col justify-between p-6 md:p-8">
          <div>
            <p className="eyebrow">Điểm khác biệt</p>
            <h2
              id="about-strengths-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Tại sao doanh nghiệp chọn chúng tôi
            </h2>
            <p className="mt-4 max-w-[52ch] text-sm leading-7 text-muted-foreground">
              Không chỉ cung cấp hàng — chúng tôi đồng hành tối ưu quy trình
              siết đai, giảm sự cố tuột đai và rút ngắn thời gian triển khai
              khi mở rộng sản lượng.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                Khu vực
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {siteConfig.company.serviceArea}
              </dd>
            </div>
            <div className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                Hotline
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${siteConfig.company.zaloPhone}`}
                  className="text-sm font-semibold text-foreground hover:text-primary"
                >
                  {siteConfig.company.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {aboutStrengths.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-border/70 bg-white/80 px-4 py-4 shadow-[0_12px_28px_-22px_rgba(22,67,126,0.35)]"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Industries */}
      <section
        aria-labelledby="about-industries-heading"
        className="surface-card p-6 sm:p-8"
      >
        <p className="eyebrow">Ngành phục vụ</p>
        <h2
          id="about-industries-heading"
          className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl"
        >
          Khách hàng tiêu biểu theo lĩnh vực
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Dây đai thép và bộ dụng cụ đóng đai được sử dụng rộng rãi trong các
          ngành cần cố định kiện hàng nặng, chịu rung và va đập khi vận chuyển.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {aboutIndustries.map((industry) => (
            <li
              key={industry}
              className="rounded-lg border border-border/60 bg-muted/35 px-3 py-1.5 text-sm font-medium text-foreground/90"
            >
              {industry}
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-sm font-semibold text-foreground">
          Doanh nghiệp đã sử dụng dây đai thép của chúng tôi
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {siteConfig.company.notableClients.map((client) => (
            <li
              key={client}
              className="rounded-lg border border-border/60 bg-background px-3 py-1.5 text-sm font-medium text-foreground/90"
            >
              {client}
            </li>
          ))}
        </ul>
      </section>

      <BulkShippingShowcase variant="embedded" id="about-shipping" />

      {/* Process */}
      <section aria-labelledby="about-process-heading">
        <div className="section-intro">
          <p className="eyebrow">Quy trình hợp tác</p>
          <h2
            id="about-process-heading"
            className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Từ tư vấn đến giao hàng
          </h2>
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutProcess.map((item) => (
            <li
              key={item.step}
              className="surface-card relative p-5 pt-6"
            >
              <span className="absolute right-4 top-4 font-display text-2xl font-semibold tabular-nums text-primary/15">
                {item.step}
              </span>
              <h3 className="pr-10 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section aria-labelledby="about-faq-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Câu hỏi thường gặp</p>
          <h2
            id="about-faq-heading"
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Thông tin thêm về chúng tôi
          </h2>
        </div>
        <div className="mt-6 space-y-3">
          {aboutFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group surface-card overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-foreground transition hover:text-primary sm:px-6 sm:text-base">
                {faq.question}
              </summary>
              <div className="border-t border-border/60 px-5 pb-5 pt-3 sm:px-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="surface-card p-6 sm:p-7">
          <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
            Bắt đầu trao đổi báo giá
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Gửi yêu cầu qua form hoặc gọi hotline — chúng tôi phản hồi trong
            ngày làm việc với báo giá dây đai thép, khóa đai và dụng cụ phù
            hợp quy cách của bạn.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <li>
              <Link href="/bao-gia-day-dai-thep" className="font-medium text-primary hover:underline">
                Bảng giá tham khảo
              </Link>
            </li>
            <li>
              <Link href="/tu-van" className="font-medium text-primary hover:underline">
                Bài tư vấn kỹ thuật
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className="font-medium text-primary hover:underline">
                Trang liên hệ
              </Link>
            </li>
            <li>
              <Link href="/nha-cung-cap-day-dai-thep" className="font-medium text-primary hover:underline">
                Giải pháp B2B
              </Link>
            </li>
          </ul>
        </div>
        <QuickQuoteForm
          sourcePage="/gioi-thieu"
          title="Nhận báo giá nhanh"
          className="h-fit"
        />
      </section>
    </article>
  );
}
