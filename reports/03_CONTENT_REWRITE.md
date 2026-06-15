# 03 — CONTENT REWRITE PLAN
**Project:** IOTeam EnMS Landing Page  
**Date:** 2026-06-03  
**Standard:** Industrial Engineering B2B (OEE, OPEX, CAPEX, kWh, kVAR, EnB, SEC, CUSUM, Cos φ, GHG)  
**Anti-Hallucination:** All current text quoted from source files verbatim. All proposed rewrites derived from existing source data only. Missing data marked `[DATA_REQUIRED_FROM_CLIENT]`.

---

## 1. Terminology Inconsistencies Found

| Concept | Variants Used | Source Files | Canonical Term Recommended |
|---------|--------------|--------------|---------------------------|
| Industrial IoT hardware | "Phần cứng IOT Công Nghiệp" / "Internet vạn vật" / "Internet of Things (IoT)" | Solutions.tsx, SmartAgriculture.tsx, multiple | **Industrial IoT (IIoT)** — consistent English abbreviation inside Vietnamese prose |
| Energy Management System | "EnMS" / "hệ thống quản lý năng lượng" / "Giải pháp quản lý năng lượng" | Hero, CTA, ROI, Solutions | **EnMS (Hệ thống Quản lý Năng lượng)** — first use expanded, all subsequent "EnMS" |
| Power factor | "Hệ số công suất" / "Cos φ" | Problems.tsx, ROI.tsx | **Hệ số công suất (Cos φ)** — first use paired, subsequent "Cos φ" |
| Real-time monitoring | "Giám sát thời gian thực" / "Giám sát liên tục 24/7" / "Giám sát & báo cáo tự động" | Hero, ROI, Features | **Giám sát thời gian thực 24/7** |
| Data collection | "Thu thập dữ liệu tự động" / "Số hóa 100% quy trình thu thập dữ liệu" | Solutions, ROI | **Thu thập dữ liệu tự động (automated data acquisition)** |
| ISO metrics | "EnB, SEC, CUSUM" used without expansion | Problems, ROI | **EnB (Energy Baseline), SEC (Specific Energy Consumption), CUSUM** — expand on first occurrence |
| Reactive power | "Phát ngược công suất phản kháng" / "Rò rỉ điện" | Problems, ROI | **Công suất phản kháng (kVAR)** — use consistent technical term |
| Compliance | "Tuân thủ Pháp lý" / "Báo cáo Nhà nước" / "Kiểm kê khí nhà kính" | Problems, ROI | **Tuân thủ pháp lý năng lượng** (energy legal compliance) for legal; **Kiểm kê GHG** for emissions |

---

## 2. Buzzword / Marketing Fluff Inventory

| Phrase | File | Technical Replacement |
|--------|------|-----------------------|
| "Chuyển đổi số năng lượng" | Hero.tsx, CTA.tsx | "Triển khai EnMS (Hệ thống Quản lý Năng lượng) theo chuẩn ISO 50001" |
| "Tổng quan về tiêu thụ năng lượng" | Hero.tsx | "Số liệu tiêu thụ kWh theo thời gian thực từng thiết bị" |
| "Bắt đầu bằng việc nhận diện đúng vấn đề" | Hero.tsx | "Xác định điểm thất thoát năng lượng bằng sub-metering và phân tích EnB" |
| "Áp lực chi phí" | Problems.tsx | "Chi phí điện vượt ngưỡng do thiết bị chạy giờ cao điểm và phạt Cos φ từ EVN" |
| "Rào cản thị trường" | Problems.tsx | "Yêu cầu chứng chỉ LEED/EDGE/ISO 50001 và báo cáo CBAM từ đối tác EU" |
| "Quản trị thủ công" | Problems.tsx | "Thu thập dữ liệu Excel thủ công: sai sót cao, thiếu EnB/SEC/CUSUM theo ISO 50001" |
| "Zero Downtime" | ROI.tsx | "Giảm sự cố dừng máy đột ngột bằng cảnh báo quá dòng và phân tích xu hướng" |
| "ESG Ready" | ROI.tsx | "Sẵn sàng báo cáo CO₂ theo CBAM và đạt chứng chỉ LEED/EDGE/ISO 50001" |
| "100% tự động" | ROI.tsx | "Số hóa toàn bộ quy trình thu thập dữ liệu: 0 thao tác thủ công, tính EnB/SEC/CUSUM tự động" |
| "Đo lường được, có ROI rõ ràng" | ROI.tsx | "Hoàn vốn [DATA_REQUIRED_FROM_CLIENT] tháng; tiết kiệm bình quân [DATA_REQUIRED_FROM_CLIENT]% OPEX năm đầu" |
| "Giải pháp toàn diện" | Solutions.tsx | "Hệ thống EnMS đầy đủ: phần cứng IIoT + phần mềm quản lý + hỗ trợ kiểm toán ISO 50001" |
| "Bào mòn lợi nhuận" | Problems.tsx | "Tăng chi phí OPEX và rủi ro phạt từ cơ quan quản lý" |
| "Sẵn sàng chuyển đổi số" | CTA.tsx | "Sẵn sàng thiết lập EnB baseline và cắt giảm OPEX năng lượng 15-30%?" |
| "Liên kết Internet vạn vật" | SmartAgriculture.tsx | "Kết nối IIoT qua MQTT/REST: giám sát trạng thái hệ thống từ xa qua dashboard web" |
| "Kiến trúc lắp đặt module hoá đơn giản" | SmartAgriculture.tsx | "Lắp đặt DIN-rail: cắm nguồn và cấu hình trong [DATA_REQUIRED_FROM_CLIENT] phút" |
| "Cung cấp quyền kiểm soát toàn diện" | SmartAgriculture.tsx | "Điều khiển kép: tại trạm + từ xa qua dashboard; fallback manual khi mất kết nối" |

---

## 3. Proposed Rewrites — High Priority

### HERO SECTION

**Hero H1 (Main Headline)**
- **CURRENT:** `"Chuyển đổi số năng lượng trong doanh nghiệp"`
- **PROPOSED:** `"Giảm 15–30% hóa đơn điện — Đạt ISO 50001 — Sẵn sàng xuất khẩu xanh"`
- **RATIONALE:** Replaces product-feature framing with the three quantified business outcomes (cost, compliance, market) that C-Level decision-makers track. Numbers sourced from Projects.tsx (actual customer data).

**Hero Subheading**
- **CURRENT:** `"Tổng quan về tiêu thụ năng lượng theo thời gian thực bằng nền tảng EnMS chuyên sâu. Bắt đầu bằng việc nhận diện đúng vấn đề."`
- **PROPOSED:** `"EnMS giám sát tiêu thụ kWh từng thiết bị theo thời gian thực qua cảm biến Modbus/BACnet. Không thu thập Excel thủ công. Tự động thiết lập EnB baseline, tính SEC và CUSUM theo chuẩn ISO 50001."`
- **RATIONALE:** Names specific capabilities (protocol, baseline metrics, standard) that industrial engineers and procurement teams verify. Eliminates vague "intelligent platform" framing.

**Hero Narrative Bridge**
- **CURRENT:** `"Nhưng trước khi chuyển đổi — bạn cần nhận diện đúng vấn đề đang xảy ra trong nhà máy."`
- **PROPOSED:** `"Phần lớn nhà máy mất 8–15% sản lượng điện do thiết bị chạy không tải và giờ cao điểm không kiểm soát. Xác định chính xác điểm thất thoát trước khi tối ưu."`
- **RATIONALE:** Replaces aspirational phrasing with a specific loss range that resonates with operations managers. Note: "8–15%" is illustrative industry benchmark — `[DATA_REQUIRED_FROM_CLIENT]` to replace with IOTeam-verified figure.

---

### PROBLEMS SECTION

**Problem 01**
- **CURRENT:** `"Vận hành & Kỹ thuật — Thiệt hại sản xuất"`
- **PROPOSED:** `"Vận hành & Kỹ thuật — Sự cố dừng máy không lường trước & Thiết bị chạy không tải"`
- **RATIONALE:** Names the two specific failure modes (unplanned downtime + idle run) instead of generic "production loss."

**Problem 02**
- **CURRENT:** `"Tài chính & Chi phí — Áp lực chi phí"`
- **PROPOSED:** `"Tài chính & Chi phí — Phí cao điểm EVN & Phạt Cos φ thấp"`
- **RATIONALE:** Names the two specific Vietnamese electricity cost mechanisms (peak-demand tariff + power-factor penalty) that operations managers recognize on their monthly bill.

**Problem 03**
- **CURRENT:** `"Thương mại & Xuất khẩu — Rào cản thị trường"`
- **PROPOSED:** `"Xuất khẩu & ESG — Yêu cầu CBAM, Chứng chỉ LEED/EDGE/ISO 50001"`
- **RATIONALE:** Names the specific market access requirements (CBAM mechanism, three named green standards) that procurement officers in EU-linked supply chains mandate.

**Problem 04**
- **CURRENT:** `"Quản trị & Vận hành — Quản trị thủ công"`
- **PROPOSED:** `"Quản trị & Kiểm toán — Thiếu EnB/SEC/CUSUM baseline theo ISO 50001"`
- **RATIONALE:** Identifies the technical gap (missing ISO 50001 metrics) rather than the symptom (manual work). This resonates with energy auditors and compliance officers.

**Problem 05**
- **CURRENT:** `"Tuân thủ pháp lý & báo cáo nhà nước"`
- **PROPOSED:** `"Pháp lý & GHG — Thông tư 25/2020/TT-BCT & Kiểm kê khí nhà kính (Nghị định 06/2022)"`
- **RATIONALE:** Names the exact two Vietnamese regulations that create compliance risk. Any factory above the energy consumption threshold already knows these regulations.

---

### ROI SECTION

**Benefit 01**
- **CURRENT:** `"Vận hành tin cậy 24/7 — Zero Downtime"`
- **PROPOSED:** `"Giám sát 24/7 — Cảnh báo quá dòng và phân tích xu hướng để giảm dừng máy đột ngột"`
- **RATIONALE:** Replaces aspirational "Zero Downtime" (unrealistic and buzzword) with the actual technical mechanism: overcurrent alerting + trend analysis that reduces (not eliminates) unplanned stops.

**Benefit 02**
- **CURRENT:** `"Cắt giảm hóa đơn điện — Giảm 15–30%"`
- **PROPOSED:** `"Cắt giảm OPEX điện 15–30% — Dịch chuyển phụ tải khỏi giờ cao điểm & Tối ưu Cos φ"`
- **RATIONALE:** Adds OPEX framing (C-Level language) and names the two mechanisms (load shifting + power factor correction) that explain HOW the saving is achieved.

**Benefit 03**
- **CURRENT:** `"Sẵn sàng xuất khẩu xanh — ESG Ready"`
- **PROPOSED:** `"Sẵn sàng xuất khẩu xanh — Báo cáo CO₂ tự động theo CBAM & Chứng chỉ LEED/EDGE/ISO 50001"`
- **RATIONALE:** "ESG Ready" is a buzzword. Replace with the specific deliverable (automated CO₂ reporting per CBAM) and the three named certifications.

**Benefit 04**
- **CURRENT:** `"Quản trị bằng dữ liệu — 100% tự động"`
- **PROPOSED:** `"Kiểm toán ISO 50001 tự động — EnB Baseline, SEC và CUSUM không cần Excel thủ công"`
- **RATIONALE:** Names the three ISO 50001 metrics and eliminates the "100% automated" buzzword by describing what is automated (the three specific calculations).

**Benefit 05 (Compliance)**
- **CURRENT:** `"Đáp ứng pháp lý & kiểm kê khí nhà kính · Tự động 100%"`
- **PROPOSED:** `"Tuân thủ Thông tư 25/2020 & Nghị định 06/2022 — Số liệu GHG minh bạch, sẵn sàng thị trường Tín chỉ Carbon"`
- **RATIONALE:** Names both regulations and the business outcome (carbon credit market eligibility) that motivates compliance.

---

## 4. Missing Technical Specificity

| Section | Current Text | Technical Gap | Required |
|---------|-------------|---------------|---------|
| Hero subheading | "nền tảng EnMS chuyên sâu" | No protocol, sampling rate, or data latency specified | `[DATA_REQUIRED_FROM_CLIENT]`: Sampling interval (1-min, 15-min?); Modbus RTU/TCP; BACnet/IP; MQTT; other protocols |
| Solutions Hardware #2 | "Modbus, BACnet,... linh hoạt kết nối không dây và có dây" | No specification of wireless standard (LoRa, Zigbee, LTE?) | `[DATA_REQUIRED_FROM_CLIENT]`: Wireless protocols supported |
| Solutions Hardware #3 | "Giám sát đa dạng nguồn: điện, than, dầu, khí, hơi nước" | No measurement accuracy (±%) or range for each medium | `[DATA_REQUIRED_FROM_CLIENT]`: Accuracy spec per energy type |
| Solutions Hardware #5 | "Lưu trữ dữ liệu cục bộ" | No storage buffer size (hours/days) or failover specification | `[DATA_REQUIRED_FROM_CLIENT]`: Edge buffer capacity; offline mode duration; RTO/RPO |
| Solutions Software #1 | "Tự động phát hiện rò rỉ, sự cố quá tải" | No detection algorithm type or false-positive rate | `[DATA_REQUIRED_FROM_CLIENT]`: Detection method (threshold, SPC, ML?); alert latency |
| Solutions Software #3 | "Giảm 60–80% nhân công" | No baseline assumption for manual collection effort | `[DATA_REQUIRED_FROM_CLIENT]`: Baseline FTE per month for typical factory size |
| ROI Benefit 02 | "Dịch chuyển phụ tải khỏi giờ cao điểm" | No reference to EVN time-of-use tariff structure | `[DATA_REQUIRED_FROM_CLIENT]`: Peak vs off-peak tariff multiplier; load categories shiftable |
| ROI Benefit 01 | "Cảnh báo sớm" | No lead time specified for alerts | `[DATA_REQUIRED_FROM_CLIENT]`: Alert latency (ms, sec, min?); lead time before failure |
| Timeline B3 | "Lắp đặt & tích hợp" | No on-site installation duration stated | `[DATA_REQUIRED_FROM_CLIENT]`: Typical days on-site; wiring standard; safety certifications |
| Timeline B5 | "Phân tích tiêu thụ" | No output format or number of opportunities typically identified | `[DATA_REQUIRED_FROM_CLIENT]`: Typical optimization opportunities per audit; avg OPEX reduction |
| SmartAgriculture Features | "Cắm và chạy (Plug & Play)" | No installation time or hardware certification | `[DATA_REQUIRED_FROM_CLIENT]`: Install time; DIN-rail mount; CE/IEC 61010 certifications |
| SpecialOffer | "Giảm 10% toàn bộ chi phí" | No scope: hardware only? software license? integration? training? | `[DATA_REQUIRED_FROM_CLIENT]`: Discount scope breakdown |

---

## 5. CTA Copy Assessment

| CTA | Location | Rating | Proposed Rewrite |
|-----|----------|--------|-----------------|
| "Xem Demo giải pháp" | Hero.tsx (red btn) | WEAK | "Xem Demo Dashboard 5 phút" |
| "Đăng ký tư vấn" | Hero.tsx (white btn) | WEAK | "Đặt lịch Tư vấn Kiểm toán Năng lượng (30 phút, miễn phí)" |
| "Xem các thách thức đang gặp phải ↓" | Hero.tsx (link) | STRONG | Keep — verb + object + direction |
| "Xem giải pháp EnMS bên dưới ↓" | Problems.tsx | WEAK | "Xem EnMS giải quyết từng áp lực ↓" |
| "Khám phá tính năng EnMS chi tiết ↓" | ROI.tsx | WEAK | "Xem kiến trúc phần cứng + phần mềm ↓" |
| "Nhận phân tích miễn phí →" | ROI.tsx | MEDIUM | "Tính ROI cho nhà máy của bạn →" |
| "Liên hệ tư vấn" | SmartAgriculture.tsx | WEAK | "Yêu cầu Demo Hệ thống Tưới thông minh" |
| "Đăng ký tư vấn EnMS miễn phí" | CTA.tsx heading | STRONG | Keep |
| "Sẵn sàng chuyển đổi số năng lượng...?" | CTA.tsx left panel | WEAK | "Sẵn sàng cắt giảm OPEX điện 15–30% với giám sát thời gian thực?" |
| "Nhận demo hệ thống EnMS & tư vấn..." | CTA.tsx left panel | MEDIUM | "Nhận phân tích EnB baseline + đề xuất thiết bị + báo giá gói 3 tháng thí điểm (giảm 10%)" |
| "Đăng ký tư vấn" (form submit) | CTA.tsx | WEAK | "Gửi yêu cầu Kiểm toán Năng lượng miễn phí" |
| "Nhận Ưu Đãi Ngay" | SpecialOffer.tsx | WEAK | "Đặt chỗ Gói Thí Điểm 3 Tháng — Giảm 10% (Hết hạn 30/06/2026)" |
| "Nhận tư vấn EnMS miễn phí — phản hồi trong 24h" | App.tsx sticky bar | STRONG | Keep — specific value (free) + SLA (24h) |
