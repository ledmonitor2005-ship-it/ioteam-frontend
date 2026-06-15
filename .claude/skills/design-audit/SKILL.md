---
name: design-audit
description: >
  Audit toàn diện giao diện EnMS landing page so với PRODUCT.md. Dùng khi:
  "audit design", "kiểm tra brand consistency", "review accessibility",
  "check WCAG", "có đúng brand không", "design có ổn không",
  "trang trông có bị generic không". Trả về báo cáo chi tiết với file:line
  references và priority fixes.
---

# Design Audit Skill

Audit nhanh toàn bộ UI so với brand guidelines và accessibility requirements.

## Quy trình

### 1. Load context
Đọc `PRODUCT.md` và skill `upmind-design-system` để nắm:
- Brand personality và anti-references.
- Các quy tắc bento grid, typography tương phản cực đoan, mesh gradients, glassmorphism, và micro-interactions.
- Palette chính thức và font chữ tiếng Việt.

### 2. Scan codebase
Dùng `codegraph_explore` với query: `Hero Navbar sections components layout`  
Đọc các file section chính trong `src/app/`

### 3. Đánh giá theo 4 chiều

**Brand Fidelity & Bento Layout**
- Lưới Bento Box bất đối xứng có được dùng thay thế list liệt kê không?
- Macro-whitespace và micro-whitespace có đủ rộng rãi tạo sự cao cấp không?
- Palette màu ngọc lục bảo (emerald) chủ đạo? Có bị dính các anti-reference (blue gradient, stock photos) không?

**Typography**
- Sử dụng Plus Jakarta Sans hoặc Be Vietnam Pro cho tiếng Việt?
- Có sự phân cấp tương phản cực đoan (Tiêu đề khổng lồ bóp tracking + Body text nhỏ mỏng có độ trong suốt 60-70% chống mỏi mắt) không?

**UX Flow & Motion**
- Có hiệu ứng hover kích thích dopamine (scale 1.02x + viền sáng/cam) cho các thẻ Bento không?
- Các section có hiệu ứng Scroll Reveal (fade-in & slide-up)?
- Tối ưu scannability đọc lướt dưới 3 giây theo F/Z-pattern?
- Định luật Hick: Navbar tinh giản, phân biệt Primary/Secondary CTA rõ ràng?

**Accessibility**
- Contrast ratio ≥ 4.5:1 cho body text?
- Animation có `prefers-reduced-motion`?
- Semantic HTML?

**Industrial Confidence**
- Tone có phù hợp B2B công nghiệp Việt Nam?
- Có greenwashing aesthetics nào không?

### 4. Output

```markdown
## Design Audit Report

### Summary
- CRITICAL: X issues
- HIGH: X issues  
- LOW: X issues

### Critical (phải fix ngay)
- [file:line] vấn đề → cách sửa cụ thể

### High (nên fix trước launch)
- ...

### Low (cải thiện tùy chọn)
- ...

### Verdict
PASS / NEEDS_WORK
```
