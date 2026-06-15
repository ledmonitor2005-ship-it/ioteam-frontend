# 01 — WEBSITE AUDIT REPORT
**Project:** IOTeam EnMS Landing Page  
**Date:** 2026-06-03  
**Design System Reference:** Dell 1996 Catalog-Era  
**Auditor:** impeccable agent (Phase 1)

---

## 1. Information Architecture (IA)

| # | Section | Purpose | B2B Funnel Stage | Status |
|---|---------|---------|-----------------|--------|
| 1 | Navbar | Navigation + sticky CTA | Entry | PASS |
| 2 | Hero | Value proposition + EnMS dashboard | Awareness | WEAK |
| 3 | Problems | 5 industrial pain points | Pain Recognition | PASS |
| 4 | Bridge CTA | Micro-conversion after pain | Conversion | PASS |
| 5 | SpecialOffer | 10% pilot discount | CTA | MISPLACED |
| 6 | ROI | Benefits mapped to 5 problems | Business Impact | WEAK |
| 7 | Bridge CTA | Micro-conversion after ROI | Conversion | PASS |
| 8 | Solutions | Hardware + Software architecture | Solution Detail | PASS |
| 9 | Features | 6 capability tiles | Differentiation | REDUNDANT |
| 10 | Bridge CTA | Micro-conversion after features | Conversion | PASS |
| 11 | Projects | Case studies carousel | Social Proof | PASS |
| 12 | Bridge CTA | Micro-conversion after proof | Conversion | PASS |
| 13 | Timeline | 6-step deployment process | Risk Reduction | LATE |
| 14 | SmartAgriculture | Ecosystem extension | Upsell | MISPLACED |
| 15 | CTA | Lead capture form | Conversion | PASS |
| 16 | Footer | Contact + nav | Trust | PASS |

**Critical IA Issue:** SpecialOffer (pilot commitment) appears before the buyer has seen ROI proof or case studies. Funnel asks for decision before building belief.

---

## 2. Dell 1996 Compliance Violations

### CRITICAL

| Rule | Components Affected | Finding |
|------|---------------------|---------|
| **Page Frame: 8px solid #000** | ALL | App.tsx wraps content in `border: '8px solid #000000'` — **PRESENT** in code, but may be clipped by browser chrome. Verify visually. |
| **Responsive Grid: Inline style overrides Tailwind** | Solutions, Features, Projects, CTA, Footer, SmartAgriculture, Hero | Inline `gridTemplateColumns` hardcodes column counts, overriding Tailwind breakpoint classes. Mobile always gets multi-column layouts. **FAIL.** |
| **Semantic HTML: Headings** | Problems, ROI, Solutions, Features, Projects, Timeline | Section eyebrows rendered as `<span>` styled to look like `<h2>`. Not semantic headings. **FAIL.** |

### HIGH

| Rule | Component | Finding |
|------|-----------|---------|
| Hero dashboard border | Hero.tsx | Border is `#ffffff` (white), should be `#000000` (black) per Dell spec |
| Buttons on red section | SpecialOffer.tsx | CTA button inside red panel uses white bg — intentional design choice, acceptable |
| Phone number font | Navbar.tsx | Phone number uses Helvetica (nav font), not Times New Roman (body font) |

### LOW / PASS

| Rule | Status |
|------|--------|
| 0px border-radius global | PASS — CSS `!important` override in theme.css |
| No box-shadow global | PASS — CSS `!important` override in theme.css |
| Arial Black headings | PASS — all headings h1–h6 |
| Times New Roman body | PASS — p, li, td |
| CTA buttons #e91d2a | PASS — all primary CTAs red |
| Ribbon tint colors | PASS — correct catalog tints used per section |
| Helvetica buttons | PASS — Helvetica 12px bold |
| Classic blue links (#0000ee) | PASS — all anchor links |

---

## 3. Semantic HTML & Heading Hierarchy

### Current State (FAIL)

```
<h1> Hero.tsx — "Chuyển đổi số năng lượng trong doanh nghiệp" ✓

Problems.tsx:
  <span id="challenges-heading">5 áp lực lớn nhất về năng lượng</span> ✗ (should be <h2>)
  RibbonCard titles → <div className="ribbon-title"> ✗ (should be <h3>)

ROI.tsx:
  <span id="benefits-heading">Hệ thống EnMS hóa giải...</span> ✗ (should be <h2>)

Solutions.tsx:
  <div style={sectionEyebrow(...)}>Giải pháp toàn diện</div> ✗ (should be <h2>)
  <div className="ribbon-title">Phần cứng IOT Công Nghiệp</div> ✗ (should be <h3>)

Features.tsx:
  <span>Tính năng nổi bật...</span> ✗ (should be <h2>)
  <h3> feature titles ✓

Projects.tsx:
  <span>Dự án tiêu biểu</span> ✗ (should be <h2>)

Timeline.tsx:
  <span>Quy trình triển khai</span> ✗ (should be <h2>)
  <h3> step titles ✓

SmartAgriculture.tsx:
  <span>Hệ sinh thái Nông nghiệp Thông minh</span> ✗ (should be <h2>)
  <h3> section content ✓

CTA.tsx:
  <span> eyebrow ✗
  <h2> inside red panel ✓ (only correct h2 besides hero)
```

**Fix pattern:** In every `sectionEyebrow()` wrapper `<div>`, wrap the text child in `<h2>`. In every `RibbonCard` title bar, change `<div>` to `<h3>`.

---

## 4. Responsive Design Issues (ALL CRITICAL)

| File | Issue | Affected Breakpoints |
|------|-------|---------------------|
| `Hero.tsx` | `gridTemplateColumns: 'repeat(12,1fr)'` + `className="col-span-12 lg:col-span-5"` — grid conflict | Mobile (always 12-col) |
| `Problems.tsx` | `flexDirection:'column'` + `className="md:flex-row"` — inline wins | Tablet+ (row never applies) |
| `ROI.tsx` | Same as Problems.tsx | Tablet+ |
| `Solutions.tsx` | `gridTemplateColumns:'repeat(2,1fr)'` + `className="grid-cols-1 lg:grid-cols-2"` | Mobile (always 2-col) |
| `Features.tsx` | `gridTemplateColumns:'repeat(3,1fr)'` + `className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"` | Mobile + Tablet (always 3-col) |
| `Projects.tsx` | `gridTemplateColumns:'repeat(2,1fr)'` + `className="grid-cols-1 md:grid-cols-2"` | Mobile (always 2-col) |
| `SmartAgriculture.tsx` | `gridTemplateColumns:'7fr 5fr'` + `className="grid-cols-1 lg:grid-cols-12"` | Mobile (7fr/5fr never stacks) |
| `CTA.tsx` | `gridTemplateColumns:'1fr 1fr'` + `className="grid-cols-1 lg:grid-cols-2"` | Mobile (always 2-col) |
| `Footer.tsx` | `gridTemplateColumns:'repeat(4,1fr)'` + `className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"` | Mobile + Tablet (always 4-col) |

**Root Cause:** The codebase applies both inline CSS Grid and Tailwind responsive classes. Inline styles always win specificity. Fix: remove `gridTemplateColumns` from all inline styles; use only Tailwind classes.

---

## 5. Accessibility Issues

| Component | Issue | Severity |
|-----------|-------|----------|
| Problems.tsx, ROI.tsx | `aria-labelledby` references a `<span>` id, not a heading — weak but functional | MEDIUM |
| Solutions.tsx, Features.tsx, Projects.tsx, Timeline.tsx, SmartAgriculture.tsx | No `aria-labelledby` on `<section>` | MEDIUM |
| Solutions.tsx expand/collapse | Buttons missing `aria-expanded={showHardware}` | HIGH |
| CTA.tsx form | No client-side validation feedback; no `aria-required` | LOW |
| ZoomableImage fullscreen | Close button has no `aria-label` | MEDIUM |
| General | No `:focus-visible` styles defined | MEDIUM |
| Ribbon tints (sage, peach, lime) | Pastel backgrounds with black text — contrast ratio unverified, may fail WCAG 4.5:1 | HIGH |

---

## 6. Content Quality Issues

| Issue | Location | Severity |
|-------|----------|----------|
| Terminology inconsistency: "IOT Công Nghiệp" vs "Internet vạn vật" vs "Internet of Things (IoT)" | Multiple files | HIGH |
| Unsubstantiated claim: "Giảm 15–30%" — no methodology disclosed | ROI.tsx bridge CTAs | HIGH |
| "60-80% nhân công" — no baseline or assumption stated | Solutions.tsx | HIGH |
| SpecialOffer deadline "30/06/2026" appears hardcoded (27 days from now) | SpecialOffer.tsx | MEDIUM |
| Hero eyebrow "EnMS" — acronym not expanded anywhere in hero | Hero.tsx | MEDIUM |
| Projects: ROI numbers present (865M VNĐ, 1.8yr) but no methodology | Projects.tsx | MEDIUM |
| Features section: 6 tiles with titles only, no descriptions | Features.tsx | LOW |

---

## Summary Score

| Category | Score | Rating |
|----------|-------|--------|
| IA & Funnel Logic | 3/5 | Good structure, sequencing issues |
| Dell 1996 Compliance | 3/5 | Correct styles, responsive broken |
| Semantic HTML | 1/5 | Critical — spans as headings |
| Responsive Design | 1/5 | Critical — all grids broken |
| Accessibility | 2/5 | Partial — missing ARIA |
| Content Quality | 3/5 | Real data present, inconsistencies |
| **TOTAL** | **13/30** | **Acceptable — significant work needed** |

---

## Recommended Actions (Priority Order)

1. **[P0]** Fix all responsive grids: remove `gridTemplateColumns` from inline styles; use Tailwind only
2. **[P0]** Fix semantic headings: `<span>` → `<h2>`, ribbon-card `<div>` → `<h3>`
3. **[P1]** Fix Hero dashboard border: `#ffffff` → `#000000`
4. **[P1]** Add `aria-expanded` to Solutions expand/collapse buttons
5. **[P1]** Add `aria-labelledby` to all `<section>` elements
6. **[P1]** Verify contrast ratios on pastel ribbon tints
7. **[P2]** Standardize IoT terminology across all components
8. **[P2]** Add methodology citation for "Giảm 15–30%" savings claims
9. **[P3]** Add feature descriptions to Features.tsx tiles
