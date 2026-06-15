# 02 — CONTENT STRATEGY
**Project:** IOTeam EnMS Landing Page  
**Date:** 2026-06-03  
**Target Audience:** C-Level, Plant Directors, Energy Managers at Vietnamese Industrial Enterprises  
**Auditor:** Strategy agent (Phase 2)  
**Anti-Hallucination:** All data extracted from source files only. Absent data marked `[DATA_REQUIRED_FROM_CLIENT]`.

---

## 1. Current Funnel Assessment

| Stage | Component(s) | Status | Assessment |
|-------|-------------|--------|------------|
| **Awareness** | Hero + Badges | WEAK | Headline "Chuyển đổi số năng lượng" is product-centric, not problem-centric. C-Level reads cost and risk, not transformation. |
| **Problem Recognition** | Problems (5 áp lực) | PRESENT | Maps operations, finance, commerce, governance, compliance correctly. Strong. |
| **Business Impact / ROI** | ROI section | WEAK | Benefits listed but no quantified ROI numbers in copy. Range (15-30%) only in bridge CTA text, not the section itself. |
| **Solution Detail** | Solutions + Features | PRESENT | Clear hardware/software split. Features tiles lack descriptions. |
| **Social Proof** | Projects | PRESENT | 4 real Vietnamese factories, specific savings (10%, 8%, 12%, 9%) and annual VNĐ amounts. Strongest trust signal on page. |
| **CTA / Conversion** | CTA + SpecialOffer | PRESENT | Form and deadline (30/06/2026 — 27 days away) are real. SpecialOffer is misplaced before proof. |

**Critical Finding: INVERTED FUNNEL**

SpecialOffer (asks for 3-month pilot commitment) appears at position #5 — before the buyer has seen ROI proof (position #6) or case studies (position #11). Decision is requested before belief is established.

---

## 2. Hero Section Analysis

### Current Value Proposition (from Hero.tsx)

**Heading:** "Chuyển đổi số năng lượng trong doanh nghiệp"  
**Subheading:** "Tổng quan về tiêu thụ năng lượng theo thời gian thực bằng nền tảng EnMS chuyên sâu. Bắt đầu bằng việc nhận diện đúng vấn đề."  
**Narrative Bridge:** "Nhưng trước khi chuyển đổi — bạn cần nhận diện đúng vấn đề đang xảy ra trong nhà máy."

### Target Audience Alignment: WEAK

The headline addresses "digital transformation" — a concept that resonates with IT buyers and consultants, not factory directors. A C-Level / Plant Director thinks in:
- Cost reduction (OPEX savings)
- Operational reliability (unplanned downtime cost)
- Compliance risk (regulatory fines)
- Market access (export certification)

None of these appear in the current hero headline.

### Recommended Repositioning (from source data only)

**PROPOSED HEADLINE:**  
"Giảm 15–30% hóa đơn điện — Đạt ISO 50001 — Sẵn sàng xuất khẩu xanh. Trên một nền tảng."

**Source data basis:** "15–30%" from ROI.tsx bridge CTA; "ISO 50001" from Problems.tsx, Timeline.tsx; "xuất khẩu xanh" from Problems.tsx card 3 and ROI.tsx card 3.

**Rationale:** Opens with the three outcomes C-Level cares about (cost, compliance, market access) before introducing the product. Specific numbers anchor credibility. Dell 1996 eyebrow block above headline provides product name (EnMS) without cluttering the value statement.

---

## 3. Narrative Flow Issues

### Issue 1: SpecialOffer before ROI proof
**Current order:** Problems → SpecialOffer → ROI  
**Problem:** A pilot commitment (even with 10% discount) appears before the buyer understands the specific return. The decision frame is reversed.  
**Fix:** Move SpecialOffer to position #9 (after Projects case studies).

### Issue 2: ROI section lacks its own numbers
**Finding:** The heading "Hệ thống EnMS hóa giải 5 áp lực trên như thế nào?" (ROI.tsx) describes benefits (Zero Downtime, ESG Ready) but the quantified numbers (15–30%, 865M VNĐ) only appear in bridge CTA divs in App.tsx, not inside the ROI section itself.  
**Fix:** Pull quantified numbers from Projects data into ROI section descriptions. Source: Projects.tsx lines 19–50.

### Issue 3: Solutions architecture before social proof
**Current order:** ROI → Solutions → Features → Projects  
**Problem:** A factory director sees Modbus/BACnet architecture before seeing that similar factories achieved real results. Technical depth before credibility loses engineers-who-aren't-decision-makers.  
**Fix:** Move Projects after ROI; Solutions after Projects.

### Issue 4: Features tiles redundant with ROI
**Finding:** Features.tsx lists 6 capabilities (Monitoring, Analysis, Anomaly Detection, Real-time, Reporting, Alerts) that are all already covered in ROI.tsx and Solutions.tsx. No new information.  
**Fix:** Either remove Features or differentiate with screenshots/specifications not covered elsewhere.

### Issue 5: Timeline too late
**Finding:** The 6-step deployment process (Timeline.tsx) appears second-to-last on the page. Implementation detail is a *risk-reduction* signal that buyers need before committing — not after they've read everything else.  
**Fix:** Move Timeline immediately before CTA form.

---

## 4. B2B Trust Signals Assessment

| Signal | Status | Source |
|--------|--------|--------|
| Customer logos | MISSING | `[DATA_REQUIRED_FROM_CLIENT]` |
| Case studies (named companies) | PRESENT | 4 real Vietnamese factories: Viglacera Thăng Long, Tú Phương, Dệt Phú Thọ, Dệt Nam Định |
| Quantified ROI numbers | PRESENT | 10%, 8%, 12%, 9% savings; 865M, 420M, 1.2B, 680M VNĐ/year; 1.8–2.1yr payback |
| Certification badges explained | WEAK | Badges (#ISO50001, #ESGReady etc.) are visual tags — not explained, not linked |
| Regulatory compliance named | PRESENT | Thông tư 25/2020/TT-BCT, Nghị định 06/2022/NĐ-CP, ISO 50001 |
| Third-party awards | MISSING | `[DATA_REQUIRED_FROM_CLIENT]` |
| Customer testimonials / quotes | MISSING | `[DATA_REQUIRED_FROM_CLIENT]` |
| Team credentials / bios | MISSING | `[DATA_REQUIRED_FROM_CLIENT]` |
| Partner integrations (vendor logos) | MISSING | Modbus/BACnet mentioned in Solutions.tsx but no vendor named |
| Implementation SLA / support terms | MISSING | `[DATA_REQUIRED_FROM_CLIENT]` |

---

## 5. Value Proposition Clarity

### Strongest Statement (from source)
From ROI.tsx subheading:
> "Mỗi tính năng được thiết kế để giải quyết trực tiếp một nhóm vấn đề — từ vận hành, chi phí, đến tuân thủ pháp lý và xuất khẩu xanh. Đo lường được, có ROI rõ ràng."

**Strength:** Problem-to-solution mapping. Introduces measurability ("Đo lường được").

### Weakest Statement (from source)
From Solutions.tsx intro:
> "Kết hợp phần cứng và phần mềm để giám sát và phân tích, tối ưu sử dụng năng lượng."

**Weakness:** Feature description without business outcome. No differentiation from any SCADA vendor.

### Missing Entirely
- No statement of what makes IOTeam EnMS different from open-source SCADA, Schneider EcoStruxure, or generic monitoring platforms
- No mention of Vietnamese-first advantages: local regulatory expertise (EVN, Ministry of Industry & Trade), local support, Vietnamese language interface
- No competitive comparison or positioning statement

---

## 6. Recommended Section Order

```
1. NAVBAR (sticky)
   └─ "TƯ VẤN NGAY" yellow sticker CTA always visible

2. HERO
   ├─ Repositioned headline: outcomes first, product second
   ├─ Subheading: specific capabilities (Modbus/BACnet, EnB baselines)
   └─ CTA: "Xem tại sao 4 nhà máy Việt Nam đã triển khai →"

3. PROBLEMS (5 áp lực)
   └─ Keep current structure — strong pain articulation

4. PROJECTS (case studies) ← MOVED UP from position 11
   ├─ Social proof immediately after pain validation
   ├─ Real factories, real numbers, real payback periods
   └─ CTA: "Nhà máy của bạn có thể đạt được tương tự?"

5. ROI (benefits) ← now supported by Projects evidence
   ├─ Map each benefit back to a problem from #3
   ├─ Pull quantified numbers from Projects into descriptions
   └─ CTA: "Tính ROI cho nhà máy của bạn"

6. SOLUTIONS (hardware + software)
   └─ Architecture detail — now buyer understands WHY before HOW

7. FEATURES (capability tiles)
   └─ Only if differentiated from ROI — else remove

8. TIMELINE (6-step deployment)  ← MOVED to before CTA
   └─ De-risk: "Here is exactly what implementation looks like"

9. SPECIAL OFFER ← MOVED DOWN from position 5
   ├─ Now buyer has full business case
   └─ "3-month pilot to validate results at your facility — 10% off until 30/06/2026"

10. SMART AGRICULTURE (ecosystem)
    └─ Optional upsell — move to footer or dedicated page

11. CTA FORM
    └─ Final conversion: ready buyer

12. FOOTER
```

### Rationale Summary

| Move | From → To | Why |
|------|----------|-----|
| Projects | #11 → #4 | Social proof before architecture — credibility before detail |
| SpecialOffer | #5 → #9 | Pilot offer is a closing tool, not an opening tool |
| Timeline | #13 → #8 | Implementation transparency reduces commitment fear before the ask |
| SmartAgriculture | #14 → optional | IoT agriculture is an upsell — not core buyer journey |

---

## Data Required from Client

Before Phase 6 implementation, the following must be provided:

- `[DATA_REQUIRED_FROM_CLIENT]` Customer logos for social proof bar
- `[DATA_REQUIRED_FROM_CLIENT]` Testimonial quotes from project case study customers
- `[DATA_REQUIRED_FROM_CLIENT]` Competitive differentiation statement (vs. alternatives)
- `[DATA_REQUIRED_FROM_CLIENT]` IOTeam team credentials, years of experience, certifications
- `[DATA_REQUIRED_FROM_CLIENT]` Methodology behind "15–30% savings" claim (baseline, calculation)
- `[DATA_REQUIRED_FROM_CLIENT]` Typical implementation timeline (weeks/months)
- `[DATA_REQUIRED_FROM_CLIENT]` Pricing range or starting price
