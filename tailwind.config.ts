import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "cta-attention-bell",
    "cta-attention-bell--zalo",
    "contact-cta-shine",
    "purchase-cta-primary",
    "purchase-action-zone",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        "primary-foreground": "hsl(var(--color-primary-foreground))",
        accent: "hsl(var(--color-accent))",
        secondary: "hsl(var(--color-accent))",
        "secondary-foreground": "hsl(var(--color-primary-foreground))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        muted: "hsl(var(--color-muted))",
        "muted-foreground": "hsl(var(--color-muted-foreground))",
        border: "hsl(var(--color-border))",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
    },
  },
  plugins: [],
};

export default config;
