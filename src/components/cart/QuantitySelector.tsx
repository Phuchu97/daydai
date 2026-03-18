type Props = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
};

export function QuantitySelector({ value, onChange, min = 1 }: Props) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(value + 1);

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background">
      <button
        type="button"
        onClick={decrease}
        className="h-7 w-7 text-xs font-semibold"
        aria-label="Giảm số lượng"
      >
        -
      </button>
      <span className="w-8 text-center text-xs font-semibold">{value}</span>
      <button
        type="button"
        onClick={increase}
        className="h-7 w-7 text-xs font-semibold"
        aria-label="Tăng số lượng"
      >
        +
      </button>
    </div>
  );
}

