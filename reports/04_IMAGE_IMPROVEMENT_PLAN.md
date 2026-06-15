# 04 — IMAGE IMPROVEMENT PLAN
**Project:** IOTeam EnMS Landing Page  
**Date:** 2026-06-03  
**Auditor:** Asset review agent (Phase 4)  
**Anti-Hallucination:** Image classifications based on filename context and component usage only. Visual quality unverified from filename alone — confirm classifications visually before replacing.

---

## 1. Complete Image Inventory

| Filename | Used In | Purpose | Classification |
|----------|---------|---------|----------------|
| `dashboard-bg.jpg` | Hero.tsx (background) | Hero background overlay at 25% opacity | [KEEP] |
| `sandkey.png` | Hero.tsx (main visual) | EnMS Dashboard Demo — Sankey energy flow diagram | [RECOMPOSE] |
| `KT.jpg` | Problems.tsx Card 01 | Operations & Technical — production failure context | [REPLACE] |
| `CP.jpg` | Problems.tsx Card 02 | Finance & Costs — electricity billing pressure | [REPLACE] |
| `TM.jpg` | Problems.tsx Card 03 | Commerce & Export — green certification requirements | [REPLACE] |
| `QT.jpg` | Problems.tsx Card 04 | Management — manual data collection pain | [REPLACE] |
| `(Unsplash URL)` | Problems.tsx Card 05 | Legal & Compliance — regulatory documents | [REPLACE] — external dependency, no fallback |
| `LIVH.png` | ROI.tsx Card 01 | 24/7 reliable operations — control room or uptime | [REPLACE] |
| `LICP.png` | ROI.tsx Card 02 | Cost reduction — electricity savings dashboard | [REPLACE] |
| `Picture1.jpg` | ROI.tsx Card 03 | ESG / green export readiness | [REPLACE] |
| `LIQT.png` | ROI.tsx Card 04 | Data-driven management — automated dashboard | [REPLACE] |
| `LIPL.png` | ROI.tsx Card 05 | Legal compliance — GHG inventory reporting | [REPLACE] |
| `1.jpg` | Projects.tsx | Viglacera Thăng Long (ceramic tile factory) | [UNVERIFIED] |
| `2.jpg` | Projects.tsx | Nhà máy Tú Phương (plastic packaging) | [UNVERIFIED] |
| `3.jpg` | Projects.tsx | Dệt Phú Thọ (textile) | [UNVERIFIED] |
| `4.jpg` | Projects.tsx | Dệt Nam Định (textile) | [UNVERIFIED] |
| `2.png` | Solutions.tsx | System overview diagram (SCADA/architecture) | [KEEP] |
| `3.png` | Solutions.tsx | Hardware wiring/connection diagram | [KEEP] |
| `4.png` | Solutions.tsx | Software dashboard screenshot | [KEEP] |
| `A.png` | Features.tsx Feature 1 | Monitoring & automatic reporting | [UNVERIFIED] |
| `B.png` | Features.tsx Feature 2 | Analysis & optimization | [UNVERIFIED] |
| `C.png` | Features.tsx Feature 3 | Anomaly & incident detection | [UNVERIFIED] |
| `D.png` | Features.tsx Feature 4 | Real-time tracking | [UNVERIFIED] |
| `E.png` | Features.tsx Feature 5 | Automated reporting & operations | [UNVERIFIED] |
| `F.png` | Features.tsx Feature 6 | Incident alerts | [UNVERIFIED] |
| `agriculture-bg.jpg` | SmartAgriculture.tsx | Smart irrigation / agriculture hero | [RECOMPOSE] |
| `logo.png` | Footer.tsx | Company logo | [KEEP] |
| `logo1.png` | Navbar.tsx | Company logo (nav variant) | [KEEP] |
| `image.png` | Footer.tsx (imported as `logo`) | Footer logo | [KEEP] |
| `seu.png` | Not referenced in components | Unknown purpose | [UNVERIFIED] |
| `G.png` | Not referenced in components | Unknown | [UNVERIFIED] |
| `K.png` | Not referenced in components | Unknown | [UNVERIFIED] |
| `PL.jpg` | Not referenced in components | Unknown (likely "Pháp Lý") | [UNVERIFIED] |
| `PL_ROI.png` | Not referenced in components | Unknown | [UNVERIFIED] |
| `LIQT.png`, `LIPL.png` | ROI.tsx | Benefit images (covered above) | [REPLACE] |

**Summary:**
- `[KEEP]`: 7 files (logos, diagrams, architecture screenshots — confirmed technical content)
- `[REPLACE]`: 12 files (challenge cards, benefit cards — likely generic/stock)
- `[RECOMPOSE]`: 2 files (hero dashboard, agriculture bg — technically relevant but needs reframing)
- `[UNVERIFIED]`: 14 files (cannot confirm quality without visual inspection)

---

## 2. Critical Missing Assets

### 1. Hero Dashboard (sandkey.png) — HIGH PRIORITY
**Current:** Sankey energy flow diagram — technically relevant but static, low-drama for a hero.  
**Needed:** Full EnMS dashboard screenshot: real-time kWh gauges, power factor indicators, cost trend chart, alert panel. The product's own UI is the strongest hero visual.  
**Action:** `[DATA_REQUIRED_FROM_CLIENT]` — Request actual dashboard screenshot from IOTeam dev team.

### 2. Problems Section Cards (KT, CP, TM, QT.jpg) — HIGH PRIORITY
**Filenames suggest:** KT = Kỹ Thuật (Technical), CP = Chi Phí (Cost), TM = Thương Mại (Commerce), QT = Quản Trị (Management).  
**Needed:** Vietnamese industrial context images for each pain point — factory floor with no monitoring equipment; manual meter reading; paper Excel logs; EVN electricity bill.  
**Action:** AI generation or commissioning of industrial photography.

### 3. Unsplash External URL (Problems.tsx Card 05) — CRITICAL
**Current:** External dependency on Unsplash CDN — image can disappear, break, or load slowly.  
**Needed:** Self-hosted image showing regulatory documents (Thông tư 25/2020, GHG reporting forms).  
**Action:** Replace immediately with locally hosted image.

### 4. ROI Cards (LIVH, LICP, Picture1, LIQT, LIPL) — HIGH PRIORITY
**Current:** Filenames suggest "LI" = Lợi Ích (Benefit) — likely UI mockups or diagrams of unclear quality.  
**Needed:** Result-oriented images: control room uptime; energy cost graphs; green certification documents; automated report generation; GHG inventory dashboard.  
**Action:** AI generation or dashboard screenshots.

### 5. Project Photos (1.jpg, 2.jpg, 3.jpg, 4.jpg) — MEDIUM PRIORITY
**Needed:** Real facility photos from Viglacera Thăng Long, Tú Phương, Dệt Phú Thọ, Dệt Nam Định.  
**Action:** `[DATA_REQUIRED_FROM_CLIENT]` — IOTeam must supply. If clients did not consent to photography, use industry-generic Vietnamese factory images.

### 6. Features Tiles (A–F.png) — MEDIUM PRIORITY
**Needed:** Clean dashboard screenshots or technical diagram per feature type. The feature title is the only text — the image must carry the meaning.  
**Action:** Request UI screenshots for each of the 6 features from IOTeam.

---

## 3. AI Image Generation Prompts

### Hero Dashboard (replaces sandkey.png)
```
Prompt (Midjourney/DALL-E):
"Industrial energy management dashboard displayed on large wide monitor, Vietnamese manufacturing plant control room background, dark UI with real-time kWh consumption graphs, power factor gauges, equipment status indicators, alert notification panel, green accent colors, cinematic lighting, ultra-sharp, 16:9, photorealistic --style raw --ar 16:9 --no people --no faces"
```

### Problems Card 01 — Operations & Technical (replaces KT.jpg)
```
"Vietnamese ceramic tile manufacturing factory floor, outdated electrical switchboard without digital monitoring, machines running without sensors, industrial kiln visible in background, fluorescent lighting, photorealistic industrial photography, 16:10 --style raw --no people"
```

### Problems Card 02 — Finance & Costs (replaces CP.jpg)
```
"EVN Vietnam electricity utility bill with highlighted peak-hour charges and power factor penalty warning, red stamped notice, paper document on factory desk, blurred industrial background, overhead view, 4K photography --ar 16:10 --style raw"
```

### Problems Card 03 — Commerce & Export (replaces TM.jpg)
```
"Vietnamese textile factory inspector reviewing LEED/ISO 50001 green building certification checklist on clipboard, energy audit documents, factory floor background, professional industrial photography, 4K, 16:10 --style raw"
```

### Problems Card 04 — Management (replaces QT.jpg)
```
"Factory worker manually recording electricity meter readings into paper logbook, rows of analog meters on panel board, cluttered desk with printed Excel sheets, harsh overhead fluorescent lighting, 4K --ar 16:10 --style raw"
```

### Problems Card 05 — Legal Compliance (replaces Unsplash URL)
```
"Vietnamese government regulatory documents on desk: Thong tu energy audit papers, GHG inventory form, compliance checklist with stamps, professional government office setting, overhead view, 4K --ar 16:10 --style raw"
```

### ROI Card 01 — 24/7 Operations (replaces LIVH.png)
```
"Modern industrial SCADA control room, Vietnamese factory, wall-mounted monitors showing live equipment status in green, zero active alerts, operator monitoring station, night shift cinematic lighting, 16:10 --style raw"
```

### ROI Card 02 — Cost Reduction (replaces LICP.png)
```
"Energy cost reduction bar chart dashboard, before-and-after electricity expense comparison, 20% savings highlighted in green, Vietnamese dong currency symbols, dark professional financial analytics interface, clean data visualization, 16:10 --style raw"
```

### ROI Card 03 — ESG Export (replaces Picture1.jpg)
```
"Vietnamese factory entrance with LEED green building certification plaque, ISO 50001 badge, carbon neutral stamp on wall, export shipping containers with green labeling visible background, professional corporate photography, 4K --ar 16:10"
```

### ROI Card 04 — Automated Management (replaces LIQT.png)
```
"EnMS software dashboard interface showing automated ISO 50001 compliance report being generated, energy baseline metrics (EnB, SEC, CUSUM) displayed, Vietnamese language UI, dark theme, professional SaaS product screenshot, 16:10 --style raw"
```

### ROI Card 05 — Legal & GHG (replaces LIPL.png)
```
"GHG emissions tracking dashboard, real-time CO2 measurement chart with Decree 06/2022 compliance status indicator, carbon footprint metrics, green compliance checkmarks, Vietnamese regulatory document icons, dark professional UI, 16:10 --style raw"
```

### SmartAgriculture (recompose agriculture-bg.jpg)
```
"Vietnamese smart irrigation rice field, IoT soil moisture sensors installed between rows, automated drip irrigation pipes, rural Vietnam landscape, smart farming equipment visible, golden hour lighting, 4K nature + technology --style raw --ar 16:11"
```

---

## 4. Dell 1996 Image Frame Compliance

**Required standard:** `border: 1px solid #000000` | `objectFit: cover` | `borderRadius: 0` | `boxShadow: none`

| Component | Status | Finding |
|-----------|--------|---------|
| RibbonCard images (Problems, ROI) | PASS | `border: 1px solid #000000`, `objectFit: 'cover'`, `borderRadius: 0` |
| Hero background (dashboard-bg.jpg) | PASS | Full-width cover, no border needed (decorative overlay) |
| Hero dashboard (sandkey.png) | **FAIL** | Wrapped in `border: '1px solid #ffffff'` — should be `#000000` |
| Solutions diagrams (2.png, 3.png, 4.png) | PASS | `border: '1px solid #000000'`, `objectFit: 'contain'` |
| Features tiles (A–F.png) | PASS | `border: '1px solid #000000'`, `objectFit: 'contain'`, `height: 160px` — equal sizing |
| Projects carousel images | PASS | Images inside `hardBorderCard` container with full 1px black border |
| SmartAgriculture image | PASS | `border: '1px solid #000000'`, `objectFit: 'cover'` |
| SmartAgriculture data badge | PASS | `border: '1px solid #000000'`, flat tint background |

**One violation found:** `Hero.tsx` line ~89 — `border: '1px solid #ffffff'` on the ZoomableImage wrapper for the dashboard.  
**Fix:** Change `#ffffff` → `#000000`.
