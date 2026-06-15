import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // ── 8 sizes only: 12 · 14 · 15 · 16 · 18 · 20 · 24 · 32 ──

        // Reading hierarchy (desktop / mobile via responsive variant in Task 3)
        display:       ["2.25rem",  { lineHeight: "2.75rem", letterSpacing: "-0.02em", fontWeight: "700" }], // 36px - hero, max 1/route
        title:         ["1.75rem",  { lineHeight: "2.25rem", letterSpacing: "-0.01em", fontWeight: "700" }], // 28px - Title 1-7
        subsection:    ["1.25rem",   { lineHeight: "1.75rem", letterSpacing: "-0.01em", fontWeight: "600" }], // 20px - sub-group titles
        "card-title":  ["1.125rem", { lineHeight: "1.625rem", fontWeight: "600" }],                          // 18px - grid card title

        // Body family (15px reads tighter than 16, more "industrial report" feel)
        sapo:          ["1.125rem",  { lineHeight: "1.625rem" }], // 18px - subtitle right under section title
        body:          ["0.9375rem", { lineHeight: "1.5rem" }],   // 15px - text mô tả (paragraphs, bullets)
        "body-sm":     ["0.875rem",  { lineHeight: "1.375rem" }], // 14px - secondary meta
        caption:       ["0.8125rem", { lineHeight: "1.25rem" }],  // 13px - footnotes / annotations / caption

        // UI / functional
        eyebrow:       ["0.75rem",   { lineHeight: "1rem",    letterSpacing: "0.08em", fontWeight: "600" }], // 12/16 — ALWAYS paired with `uppercase`
        "eyebrow-lg":  ["0.875rem",  { lineHeight: "1.25rem", letterSpacing: "0.04em", fontWeight: "600" }], // 14/20 — in-card status labels (e.g. "Cực kỳ nghiêm trọng")
        label:         ["0.875rem",  { lineHeight: "1.25rem", fontWeight: "500" }],                          // 14/20 — form labels, pills, nav
        button:        ["0.875rem",  { lineHeight: "1.25rem", letterSpacing: "0.01em", fontWeight: "600" }], // 14/20

        // Data (JetBrains Mono, always with `tabular-nums`)
        "data-xl":     ["2rem",      { lineHeight: "2.25rem", letterSpacing: "-0.02em", fontWeight: "700" }], // 32/36 — KPI numbers (4,3 · 729 · 1.3 Tỷ · 112)
        "data-xxl":    ["3rem",      { lineHeight: "3.25rem", letterSpacing: "-0.02em", fontWeight: "700" }], // 48px — large KPI numbers (increased by 2 sizes)
        "data-unit":   ["0.875rem",  { lineHeight: "1.25rem", letterSpacing: "0.04em",  fontWeight: "600" }], // 14/20 — units (TỶ VNĐ, TRIỆU VNĐ) — ~2.3× smaller than the number
        "data-md":     ["1rem",      { lineHeight: "1.5rem",  fontWeight: "600" }],                           // 16/24 — metric chips ("5–15%", "~1.9 năm", "24/7")
      },
    },
  },
  plugins: [],
};

export default config;
