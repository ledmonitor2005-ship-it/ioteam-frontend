# 06 — FINAL QA REPORT
**Project:** IOTeam EnMS Landing Page  
**Date:** 2026-06-03  
**Phase:** 7 — Post Phase-6 implementation verification  
**Scope:** Static analysis + pattern scan (no runtime test)

---

## 1. Audit Score Comparison

| Dimension | Before Phase 6 | After Phase 6 | Delta |
|-----------|---------------|---------------|-------|
| Accessibility | 2/5 | 4/5 | +2 |
| Performance | 3/5 | 3/5 | 0 |
| Responsive Design | **1/5** | **4/5** | **+3** |
| Theming / Dell 1996 | 3/5 | 4/5 | +1 |
| Anti-Patterns | 3/5 | 4/5 | +1 |
| **Total** | **12/20** | **19/20** | **+7** |

**Rating:** Acceptable (12) → **Excellent (19)**

---

## 2. Issues Resolved (Phase 6)

### P0 — Critical (all resolved)

| Issue | Resolution |
|-------|-----------|
| `index.html` title was `"Adjust value to .4"` | Replaced with `"EnMS Giám Sát Năng Lượng Nhà Máy | ISO 50001 | IOTeam VN"` |
| `lang="en"` on Vietnamese content | Fixed to `lang="vi"` |
| No meta description | Added 155-char optimized description |
| No canonical, OG tags, Twitter Card | Added all to index.html |
| No JSON-LD schema | Added Organization, FAQ (5Qs), BreadcrumbList, SoftwareApplication |
| Responsive grids broken (9 files) | Removed `gridTemplateColumns` from ALL inline styles; Tailwind breakpoint classes now control layout |
| Semantic headings: section eyebrows were `<span>` | All section eyebrows now wrapped in `<h2>` elements |
| RibbonCard titles were `<div>` | Changed to `<h3>` in `RibbonCard.tsx` |

### P1 — High (all resolved)

| Issue | Resolution |
|-------|-----------|
| Hero dashboard border `#ffffff` | Fixed to `border: 1px solid #000000` |
| Solutions expand buttons missing `aria-expanded` | Added `aria-expanded={showHardware}` / `aria-expanded={showSoftware}` |
| Hero headline product-centric | Rewritten to outcome-centric: "Giảm 15–30% hóa đơn điện — Đạt ISO 50001 — Sẵn sàng xuất khẩu xanh" |
| Problems titles vague | Rewritten with technical specificity (EVN Cos φ, CBAM, EnB/SEC/CUSUM) |
| ROI benefit titles buzzword-heavy | Rewritten: "Zero Downtime" → "Cảnh báo quá dòng & Phân tích xu hướng", "ESG Ready" → "Báo cáo CO₂ tự động theo CBAM & ISO 50001" |
| CTA copy vague | Rewritten: "Gửi yêu cầu Kiểm toán Năng lượng Miễn phí", "Sẵn sàng cắt giảm OPEX điện 15–30%?" |
| No persistent CTA | Added: floating red button (right side, visible after 300px scroll) + sticky bottom bar (phone + register) + BridgeCTA component reused 3× |
| Footer responsive grid broken | Fixed via Tailwind-only classes |

### P2 — Medium (resolved)

| Issue | Resolution |
|-------|-----------|
| SmartAgriculture responsive broken | Fixed; also compacted to 16:9 aspect ratio |
| Timeline too long (vertical) | Refactored to compact 2-column grid layout |
| Features image height inconsistent | Standardized to `height: 120px` on all 6 tiles |
| Phone number not clickable | Footer phone number now `<a href="tel:...">` |

---

## 3. Remaining Items

### Low severity — accept for now

| Item | Status | Note |
|------|--------|------|
| `ZoomableImage.tsx` fullscreen modal uses `backdrop-blur-xl`, `shadow-2xl`, `rounded-xl` | ACCEPT | Global CSS `box-shadow: none !important` + `border-radius: 0 !important` override these. `backdrop-blur` on fullscreen overlay is intentional UX. |
| `RibbonCard.tsx` uses inline `gridTemplateColumns: image ? '1fr auto' : '1fr'` | ACCEPT | Not a responsive breakpoint conflict — it's a conditional 1D grid (with/without image column). No Tailwind class conflict. |
| `Services.tsx` file has old violations | IGNORE | File not imported in App.tsx — dead code, not rendered. |
| Hero dashboard image is `sandkey.png` (Sankey diagram) | VISUAL REVIEW | Technical content but not a polished dashboard screenshot. Replace when IOTeam provides real UI screenshot. |
| Unsplash external URL in Problems card 05 | LOW RISK | External image dependency. Replace with locally hosted image when available. |

### Data required from client (placeholder items)

| Placeholder | Location |
|-------------|---------|
| `[DATA_REQUIRED_FROM_CLIENT]` — canonical URL | index.html |
| `[DATA_REQUIRED_FROM_CLIENT]` — OG image URL (1200×630px dashboard screenshot) | index.html |
| `[DATA_REQUIRED_FROM_CLIENT]` — Organization foundingDate | index.html schema |
| `[DATA_REQUIRED_FROM_CLIENT]` — Implementation timeline for FAQ Q5 | index.html schema |
| `[DATA_REQUIRED_FROM_CLIENT]` — Pricing range | Not yet on page; add when available |
| `[DATA_REQUIRED_FROM_CLIENT]` — Customer logos for social proof bar | Not yet on page |
| `[DATA_REQUIRED_FROM_CLIENT]` — Customer testimonial quotes | Not yet on page |

---

## 4. File Modification Summary

| File | Changes |
|------|---------|
| `index.html` | Title, lang, meta description, canonical, OG, Twitter Card, 4× JSON-LD schemas |
| `App.tsx` | Floating CTA button, enhanced sticky bar with phone link, BridgeCTA component, cleaner section order |
| `Hero.tsx` | H1 rewrite, subheading rewrite, badge hashtag fix, border fix |
| `Problems.tsx` | 5 title rewrites, semantic `<h2>` eyebrow, inline CTAs per section |
| `ROI.tsx` | 5 title rewrites, semantic `<h2>` eyebrow, inline CTAs |
| `Solutions.tsx` | Responsive grid fix, semantic `<h2>` + `<h3>`, `aria-expanded` on buttons |
| `Features.tsx` | Responsive grid fix, compact 120px images, semantic `<h2>` + `<h3>` |
| `Projects.tsx` | Responsive grid fix, semantic `<h2>` + `<h3>`, compact card layout |
| `Timeline.tsx` | Full refactor to 2-column compact grid, semantic `<h2>` + `<h3>` |
| `SmartAgriculture.tsx` | Responsive grid fix, compact 16:9 image, semantic `<h2>` + `<h3>` |
| `CTA.tsx` | Copy rewrite, responsive grid fix, trust signal tags |
| `Footer.tsx` | Responsive grid fix, phone as `<a href="tel:">`, red CTA in footer col 1 |
| `shared/RibbonCard.tsx` | Title `<div>` → semantic `<h3>` |

---

## 5. Dell 1996 Compliance — Final Status

| Rule | Status |
|------|--------|
| 8px solid #000 page frame | PASS |
| 0px border-radius globally | PASS (CSS `!important`) |
| No box-shadow globally | PASS (CSS `!important`) |
| Arial Black headings, uppercase, equal size | PASS |
| Times New Roman body 14px | PASS |
| Helvetica Bold buttons 12px | PASS |
| Classic blue links (#0000ee) | PASS |
| CTA buttons #e91d2a red | PASS |
| Ribbon tint colors | PASS |
| Section eyebrow tint blocks | PASS |
| 1px solid black image borders | PASS |
| No gradient backgrounds | PASS |
| No Tailwind color utilities in JSX | PASS |
| All section headings semantic `<h2>` | PASS |
| All card titles semantic `<h3>` | PASS |

**Dell 1996 Compliance: 15/15 rules passing.**

---

## 6. Heading Hierarchy — Final Map

```
<h1> Hero: "Giảm 15–30% hóa đơn điện — Đạt ISO 50001 — Sẵn sàng xuất khẩu xanh"
  <h2> Problems: "5 áp lực năng lượng lớn nhất trong nhà máy sản xuất"
    <h3> × 5 challenge ribbon titles
  <h2> ROI: "Hệ thống EnMS hóa giải 5 áp lực trên như thế nào?"
    <h3> × 5 benefit ribbon titles
  <h2> Solutions: "Giải pháp toàn diện: Phần cứng IIoT + Phần mềm EnMS"
    <h3> Overview diagram
    <h3> Phần cứng IIoT Công Nghiệp
    <h3> Phần mềm EnMS — ISO 50001 Ready
  <h2> Features: "Tính năng nổi bật"
    <h3> × 6 feature tiles
  <h2> Projects: "Dự án tiêu biểu — Kết quả thực tế tại nhà máy Việt Nam"
    <h3> × 4 project cards (per page)
  <h2> Timeline: "Quy trình triển khai 6 bước — Từ khảo sát đến ISO 50001"
    <h3> × 6 step cards
  <h2> SmartAgriculture: "Hệ sinh thái Nông nghiệp Thông minh — Giải pháp mở rộng"
    <h3> "Tự động hoá toàn diện quy trình tưới tiêu"
  <h2> CTA: "Đăng ký tư vấn EnMS miễn phí — Phản hồi trong 24h"
    <h3> Red panel heading
  Footer <h4> × 3 column headings
```

**Heading hierarchy: valid H1 → H2 → H3 → H4 throughout.**

---

## 7. Omnipresent CTA Inventory

| CTA | Location | Trigger |
|-----|----------|---------|
| "TƯ VẤN NGAY" yellow sticker | Navbar (always visible) | Always |
| "Đặt lịch Tư vấn Miễn phí" white btn | Hero | Always |
| "Tư vấn miễn phí →" inline | Problems, ROI, Solutions sub-header | Always |
| Bridge CTA bar (red, full-width) | After Problems, after ROI, after Features | Always |
| "Đăng ký tư vấn ngay →" | Projects bottom | Always |
| "Yêu cầu Demo..." | SmartAgriculture | Always |
| "TƯ VẤN NGAY" red in Special Offer | SpecialOffer section | Always |
| Floating red button (Phone icon) | Fixed right side | After 300px scroll |
| Sticky bottom bar (Gọi ngay + Đăng ký) | Fixed bottom | After 80% viewport scroll, hides at #contact |
| Full CTA form | #contact section | End of page |

**Total touchpoints: 10 CTAs distributed across the page scroll journey.**

---

## 8. Next Steps (post-approval)

1. **Immediate:** Supply `[DATA_REQUIRED_FROM_CLIENT]` items — production URL, OG image, founding date
2. **Week 1:** Replace `sandkey.png` with real EnMS dashboard screenshot (1200×630px min)
3. **Week 2:** Replace `Services.tsx` dead code file with cleaned-up version or delete
4. **Week 3:** Add customer logo bar above Problems section
5. **Month 2:** Build blog posts targeting top informational keywords from Report 05

---

*Phase 7 complete. All 6 report files available in `/reports/`. No `.tsx` or `.css` changes pending.*
