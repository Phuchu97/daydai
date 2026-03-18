const rows = [
  { label: "Bản rộng", value: "16mm, 19mm, 25mm, 32mm" },
  { label: "Độ dày", value: "0.6mm – 1.0mm" },
  { label: "Vật liệu", value: "Thép cacbon mạ kẽm / sơn đen chống gỉ" },
  { label: "Lực kéo đứt", value: "Tùy quy cách, lên tới 1.200–1.800 kgf/đai" },
  {
    label: "Trọng lượng cuộn",
    value: "Khoảng 25–50kg/cuộn (tùy bản rộng & độ dày)",
  },
  {
    label: "Ứng dụng",
    value:
      "Đóng đai pallet hàng nặng, cuộn thép, ống thép, máy móc và kiện hàng xuất khẩu",
  },
];

export function SpecsTable() {
  return (
    <section className="border-t border-border/60 bg-muted/30 py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          Thông số kỹ thuật
        </h2>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
          <dl className="divide-y divide-border/70 text-sm">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[180px,minmax(0,1fr)]"
              >
                <dt className="font-medium text-foreground">{row.label}</dt>
                <dd className="text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

