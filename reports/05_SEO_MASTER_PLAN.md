# 05 — SEO MASTER PLAN
**Project:** IOTeam EnMS Landing Page  
**Date:** 2026-06-03  
**Auditor:** SEO agent (Phase 5)  
**Anti-Hallucination:** Only data extracted from `index.html`, `PRODUCT.md`, and component files. Missing data marked `[DATA_REQUIRED_FROM_CLIENT]`.

---

## 1. Current SEO State

| Element | Current Value | Status |
|---------|--------------|--------|
| `<title>` | `"Adjust value to .4"` | CRITICAL FAIL — placeholder text in production |
| `<meta name="description">` | MISSING | CRITICAL FAIL |
| `<h1>` | "Chuyển đổi số năng lượng trong doanh nghiệp" (Hero.tsx) | PASS — semantic element, keyword present |
| `<h2>` elements | All rendered as `<span>` or `<div>` (see Audit Report) | FAIL |
| Canonical URL | MISSING | FAIL |
| Open Graph tags | MISSING | FAIL |
| Twitter Card tags | MISSING | FAIL |
| JSON-LD Schema | MISSING | FAIL |
| `lang` attribute | `lang="en"` on `<html>` — **content is Vietnamese** | FAIL — mismatch |
| robots meta | MISSING | Warn |
| favicon | MISSING from `<head>` | Low |
| sitemap.xml | UNKNOWN | `[DATA_REQUIRED_FROM_CLIENT]` |

**Overall SEO Score: POOR (2/10)**  
Only saving grace: valid semantic H1 exists and page content is rich. Everything else needs to be built from scratch.

---

## 2. Target Keyword Map

### Informational — Awareness (educational searches)
| Keyword (Vietnamese) | Intent | Volume Estimate |
|---------------------|--------|----------------|
| hệ thống quản lý năng lượng là gì | What is EnMS | HIGH |
| ISO 50001 là gì | ISO 50001 explained | HIGH |
| cách quản lý năng lượng nhà máy | Factory energy management | HIGH |
| kiểm kê khí nhà kính theo Nghị định 06/2022 | GHG inventory per Decree | MEDIUM |
| phát thải CO₂ nhà máy sản xuất | Factory CO₂ emissions | MEDIUM |
| CBAM là gì | Carbon Border Adjustment | MEDIUM |
| chứng chỉ xanh LEED EDGE ISO 50001 | Green certifications | MEDIUM |
| giám sát năng lượng thời gian thực | Real-time energy monitoring | MEDIUM |
| EnB SEC CUSUM năng lượng | ISO 50001 metrics | LOW |

### Commercial — Consideration (vendor evaluation)
| Keyword (Vietnamese) | Intent |
|---------------------|--------|
| phần mềm EnMS giá bao nhiêu | EnMS pricing |
| so sánh hệ thống quản lý năng lượng | EnMS comparison |
| phần mềm giám sát năng lượng nhà máy | Factory monitoring software |
| giải pháp IoT năng lượng Việt Nam | Vietnamese energy IoT |
| triển khai EnMS chi phí | EnMS implementation cost |
| công ty cung cấp hệ thống EnMS | EnMS provider Vietnam |

### Transactional — Decision (ready to buy)
| Keyword (Vietnamese) | Intent |
|---------------------|--------|
| triển khai ISO 50001 năng lượng | ISO 50001 implementation |
| cài đặt hệ thống giám sát năng lượng | Monitoring system install |
| tư vấn giám sát năng lượng Hà Nội | Energy consultant Hanoi |
| dịch vụ kiểm toán năng lượng | Energy audit service |
| lắp đặt công tơ điện thông minh | Smart meter installation |
| báo cáo phát thải CO₂ tự động | Automated CO₂ reporting |

### Technical / Long-tail (engineers and operators)
| Keyword | Audience |
|---------|----------|
| Modbus BACnet IoT công nghiệp | Automation engineers |
| dashboard giám sát SCADA DCS | Control system engineers |
| cắt giảm hóa đơn điện doanh nghiệp 15-30% | Operations managers |
| tối ưu hệ số công suất Cosφ | Electrical engineers |
| kiểm kê GHG chuẩn quốc tế | Environmental compliance |
| cảnh báo sự cố quá dòng máy móc | Maintenance engineers |

---

## 3. Optimized Meta Tags (Ready to implement)

```html
<!-- REPLACE entire <head> section in index.html with: -->

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- FIX: Change lang="en" to lang="vi" -->
<!-- (on the <html> element) -->

<!-- Title: max 60 chars -->
<title>EnMS Giám Sát Năng Lượng Nhà Máy | ISO 50001 | IOTeam VN</title>

<!-- Meta Description: max 155 chars -->
<meta name="description" content="Hệ thống EnMS giám sát năng lượng 24/7, cắt giảm hóa đơn điện 15-30%, đạt ISO 50001 và báo cáo CO₂ theo Nghị định 06/2022. Dành cho nhà máy sản xuất Việt Nam." />

<!-- Robots -->
<meta name="robots" content="index, follow" />
<meta name="language" content="vi" />
<meta name="author" content="IOTeam VN" />
<meta name="theme-color" content="#000000" />

<!-- Canonical (REQUIRED from client) -->
<link rel="canonical" href="[DATA_REQUIRED_FROM_CLIENT]" />

<!-- Favicon -->
<link rel="icon" href="/favicon.ico" type="image/x-icon" />

<!-- Open Graph -->
<meta property="og:title" content="EnMS Giám Sát Năng Lượng Nhà Máy | ISO 50001 | IOTeam VN" />
<meta property="og:description" content="Giám sát năng lượng realtime, cắt giảm chi phí 15-30%, tuân thủ ISO 50001 và Nghị định 06/2022. Triển khai nhanh cho doanh nghiệp sản xuất Việt Nam." />
<meta property="og:type" content="website" />
<meta property="og:url" content="[DATA_REQUIRED_FROM_CLIENT]" />
<meta property="og:image" content="[DATA_REQUIRED_FROM_CLIENT - EnMS dashboard screenshot, 1200x630px]" />
<meta property="og:image:alt" content="EnMS Dashboard — Giám sát năng lượng nhà máy thời gian thực" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="IOTeam Vietnam" />
<meta property="og:locale" content="vi_VN" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="EnMS Giám Sát Năng Lượng | Cắt Giảm 15-30% | ISO 50001" />
<meta name="twitter:description" content="Hệ thống tự động giám sát năng lượng cho nhà máy sản xuất Việt Nam. Đạt ISO 50001, báo cáo CO₂ theo quy định." />
<meta name="twitter:image" content="[DATA_REQUIRED_FROM_CLIENT - same OG image]" />
```

---

## 4. JSON-LD Schema Markup (Ready to implement)

Add all blocks inside `<script type="application/ld+json">` tags in `<head>`.

### a) Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IOTeam VN",
  "url": "[DATA_REQUIRED_FROM_CLIENT]",
  "logo": "[DATA_REQUIRED_FROM_CLIENT]",
  "description": "Hệ thống quản lý năng lượng EnMS cho doanh nghiệp sản xuất Việt Nam — giám sát thời gian thực, ISO 50001, báo cáo GHG",
  "sameAs": [
    "https://www.facebook.com/ioteamvietnam"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Số 3 ngõ 220 Bạch Mai",
    "addressLocality": "Hai Bà Trưng",
    "addressRegion": "Hà Nội",
    "addressCountry": "VN"
  },
  "telephone": "(+84) 96 833 6043",
  "email": "contact@ioteamvn.com",
  "areaServed": "VN",
  "foundingDate": "[DATA_REQUIRED_FROM_CLIENT]",
  "serviceType": [
    "Energy Management System (EnMS)",
    "Industrial IoT Monitoring",
    "ISO 50001 Energy Audit",
    "GHG Inventory Reporting"
  ]
}
```

### b) FAQ Schema (5 questions from existing content)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "EnMS (Hệ thống Quản lý Năng lượng) là gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EnMS là nền tảng tự động giám sát tiêu thụ kWh từng thiết bị trong nhà máy theo thời gian thực, qua cảm biến kết nối Modbus và BACnet. Hệ thống tính toán EnB baseline, SEC và CUSUM theo chuẩn ISO 50001, loại bỏ hoàn toàn thu thập dữ liệu Excel thủ công."
      }
    },
    {
      "@type": "Question",
      "name": "EnMS giúp cắt giảm hóa đơn điện bao nhiêu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Theo dữ liệu từ các dự án thực tế (Viglacera Thăng Long: 865 triệu VNĐ/năm; Dệt Phú Thọ: 1,2 tỷ VNĐ/năm), doanh nghiệp tiết kiệm 8–12% điện năng trong năm đầu. Cơ chế chính: dịch chuyển phụ tải khỏi giờ cao điểm EVN và tối ưu hệ số công suất Cos φ để tránh phạt."
      }
    },
    {
      "@type": "Question",
      "name": "EnMS hỗ trợ đạt ISO 50001 như thế nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EnMS tự động thu thập dữ liệu 24/7 và tính các chỉ số bắt buộc của ISO 50001: Energy Baseline (EnB), Specific Energy Consumption (SEC), và Cumulative Sum Control Chart (CUSUM). Mọi số liệu đều được lưu trữ và xuất báo cáo tự động cho kỳ kiểm toán năng lượng định kỳ."
      }
    },
    {
      "@type": "Question",
      "name": "EnMS có tự động báo cáo CO₂ theo Nghị định 06/2022 không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Có. EnMS tự động tính toán phát thải CO₂ dựa trên số liệu tiêu thụ điện thực tế, xuất báo cáo GHG (kiểm kê khí nhà kính) theo yêu cầu của Nghị định 06/2022/NĐ-CP. Dữ liệu này cũng phục vụ chuẩn bị cho báo cáo CBAM khi xuất khẩu sang thị trường EU."
      }
    },
    {
      "@type": "Question",
      "name": "Quy trình triển khai EnMS tại nhà máy gồm những bước nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IOTeam VN triển khai theo 6 bước: (1) Khảo sát hiện trạng hệ thống điện, (2) Thiết kế giải pháp phù hợp quy mô nhà máy, (3) Lắp đặt thiết bị IoT và tích hợp phần mềm, (4) Đào tạo vận hành cho đội ngũ kỹ thuật, (5) Kiểm toán năng lượng xác định cơ hội tiết kiệm, (6) Giám sát liên tục và tối ưu theo chu trình ISO 50001 (Plan–Do–Check–Act)."
      }
    }
  ]
}
```

### c) BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": "[DATA_REQUIRED_FROM_CLIENT]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "5 Áp lực Năng lượng",
      "item": "[DATA_REQUIRED_FROM_CLIENT]#challenges"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Giải pháp EnMS",
      "item": "[DATA_REQUIRED_FROM_CLIENT]#benefits"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Tính năng & Kiến trúc",
      "item": "[DATA_REQUIRED_FROM_CLIENT]#solutions"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Liên hệ & Tư vấn",
      "item": "[DATA_REQUIRED_FROM_CLIENT]#contact"
    }
  ]
}
```

### d) SoftwareApplication Schema

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "IOTeam EnMS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web browser",
  "description": "Hệ thống quản lý năng lượng tự động cho doanh nghiệp sản xuất. Giám sát kWh realtime, ISO 50001 EnB/SEC/CUSUM, báo cáo GHG theo Nghị định 06/2022.",
  "inLanguage": "vi-VN",
  "url": "[DATA_REQUIRED_FROM_CLIENT]",
  "offers": {
    "@type": "Offer",
    "price": "[DATA_REQUIRED_FROM_CLIENT]",
    "priceCurrency": "VND",
    "availability": "https://schema.org/InStock"
  }
}
```

---

## 5. Heading Hierarchy Fix Plan

### Required Changes Per Component

| Component | Current Element | Fix | Keyword in Heading |
|-----------|----------------|-----|--------------------|
| `Problems.tsx` eyebrow | `<span id="challenges-heading">` | `<h2 id="challenges-heading">` | "5 áp lực năng lượng" |
| `Problems.tsx` RibbonCard titles | `<div className="ribbon-title">` | `<h3>` | "Vận hành & Kỹ thuật", etc. |
| `ROI.tsx` eyebrow | `<span id="benefits-heading">` | `<h2 id="benefits-heading">` | "Hệ thống EnMS hóa giải" |
| `ROI.tsx` RibbonCard titles | `<div className="ribbon-title">` | `<h3>` | "Giám sát 24/7", "Cắt giảm OPEX điện", etc. |
| `Solutions.tsx` eyebrow | `<div style={sectionEyebrow(...)}>` | Wrap text child in `<h2>` | "Giải pháp toàn diện" |
| `Solutions.tsx` column headers | `<div className="ribbon-title">` | `<h3>` | "Phần cứng IIoT", "Phần mềm EnMS" |
| `Features.tsx` eyebrow | `<span>` in `sectionEyebrow` div | `<h2>` | "Tính năng nổi bật" |
| `Projects.tsx` eyebrow | `<span>` in `sectionEyebrow` div | `<h2>` | "Dự án tiêu biểu" |
| `Timeline.tsx` eyebrow | `<span>` in `sectionEyebrow` div | `<h2>` | "Quy trình triển khai" |
| `SmartAgriculture.tsx` eyebrow | `<span>` in `sectionEyebrow` div | `<h2>` | "Hệ sinh thái Nông nghiệp Thông minh" |
| `CTA.tsx` eyebrow | `<span>` in `sectionEyebrow` div | `<h2>` | "Đăng ký tư vấn EnMS miễn phí" |

### Target Heading Structure (after fix)

```
H1: "Giảm 15–30% hóa đơn điện — Đạt ISO 50001 — Sẵn sàng xuất khẩu xanh"

  H2: "5 áp lực lớn nhất về năng lượng trong nhà máy sản xuất Việt Nam"
    H3: "01 — Vận hành & Kỹ thuật: Sự cố dừng máy & Thiết bị chạy không tải"
    H3: "02 — Tài chính & Chi phí: Phí cao điểm EVN & Phạt Cos φ thấp"
    H3: "03 — Xuất khẩu & ESG: Yêu cầu CBAM, LEED/EDGE/ISO 50001"
    H3: "04 — Quản trị & Kiểm toán: Thiếu EnB/SEC/CUSUM baseline ISO 50001"
    H3: "05 — Pháp lý & GHG: Thông tư 25/2020 & Nghị định 06/2022"

  H2: "Hệ thống EnMS hóa giải 5 áp lực trên như thế nào?"
    H3: "01 — Giám sát 24/7: Cảnh báo quá dòng & Phân tích xu hướng"
    H3: "02 — Cắt giảm OPEX điện 15–30% via Load Shifting & Cos φ"
    H3: "03 — Sẵn sàng xuất khẩu xanh: CO₂ realtime, CBAM, ISO 50001"
    H3: "04 — Kiểm toán ISO 50001 tự động: EnB, SEC, CUSUM"
    H3: "05 — Tuân thủ Thông tư 25/2020 & Nghị định 06/2022"

  H2: "Dự án tiêu biểu"
    H3: "Viglacera Thăng Long — Giảm 10% điện năng, 865M VNĐ/năm"
    H3: "Nhà máy Tú Phương — Tiết kiệm 8%, 420M VNĐ/năm"
    H3: "Dệt Phú Thọ — Giảm 12%, 1,2 tỷ VNĐ/năm"
    H3: "Dệt Nam Định — Tiết kiệm 9%, 680M VNĐ/năm"

  H2: "Giải pháp toàn diện: Phần cứng IIoT + Phần mềm EnMS"
    H3: "Phần cứng IIoT Công Nghiệp"
    H3: "Phần mềm EnMS"

  H2: "Tính năng nổi bật"

  H2: "Quy trình triển khai 6 bước"
    H3: "B1 – B6 step titles"

  H2: "Đăng ký tư vấn EnMS miễn phí"
```

---

## 6. Internal Linking & Content Gaps

### Current Internal Links: ADEQUATE
Navigation, section anchors, and CTA links cover the page flow. No broken anchors found.

### Critical Content Gaps (for SEO)

| Missing Topic | Why It Matters | Keywords Targeted | Action |
|--------------|----------------|-------------------|--------|
| ISO 50001 explanation | Top informational query for the audience | "ISO 50001 là gì" | Add FAQ section or H2 explainer |
| Decree 06/2022 / GHG compliance | Vietnamese regulatory mandate, mandatory search | "Nghị định 06/2022 kiểm kê GHG" | Expand Problems Card 05 body text |
| Pricing / cost range | Commercial-intent searchers bounce without it | "EnMS giá bao nhiêu" | `[DATA_REQUIRED_FROM_CLIENT]` — add pricing section |
| Competitive differentiation | Buyers compare options; no statement exists | "so sánh EnMS" | Add "Tại sao IOTeam EnMS?" section |
| Vietnamese-first advantages | Differentiates from imported SCADA platforms | "hệ thống năng lượng Việt Nam" | Add to Hero or Solutions |
| Implementation timeline | Decision-stage buyers need to know this | "triển khai EnMS mất bao lâu" | Expand Timeline section with durations |
| Blog / content hub | Long-tail keyword capture requires articles | Multiple longtail queries | `[DATA_REQUIRED_FROM_CLIENT]` — establish blog |

### HTML fix required in index.html

```html
<!-- CURRENT (broken): -->
<html lang="en">

<!-- FIX: -->
<html lang="vi">
```

---

## Implementation Priority

| Priority | Item | Effort |
|----------|------|--------|
| P0 | Fix `<title>` from placeholder | 5 min |
| P0 | Add `<meta name="description">` | 5 min |
| P0 | Fix `lang="en"` → `lang="vi"` | 1 min |
| P0 | Add `<link rel="canonical">` | 5 min |
| P0 | Fix all `<span>/<div>` headings → semantic `<h2>/<h3>` | 30 min |
| P1 | Add all Open Graph + Twitter Card tags | 15 min |
| P1 | Add Organization JSON-LD schema | 10 min |
| P1 | Add FAQ JSON-LD schema | 15 min |
| P1 | Add BreadcrumbList + SoftwareApplication JSON-LD | 10 min |
| P2 | Create pricing section | `[DATA_REQUIRED_FROM_CLIENT]` |
| P2 | Add competitive differentiation section | `[DATA_REQUIRED_FROM_CLIENT]` |
| P3 | Establish blog content calendar | Medium-term |
