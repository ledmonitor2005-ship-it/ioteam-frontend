---
name: enms-orchestrator
description: >
  Orchestrator cho B2B SaaS landing page (React + TSX + Tailwind CSS + Framer Motion).
  Dùng khi: build section mới, thêm feature, redesign component, cải thiện UI,
  audit toàn bộ trang, định hình phong cách SaaS Tech-Aura, thiết kế Bento Box,
  hoặc yêu cầu bất kỳ thay đổi nào liên quan đến giao diện của project này.
  Tự động điều phối ui-builder → design-guardian → qa-reviewer theo pipeline.
  Cũng dùng khi: "làm lại", "cải thiện", "thêm section", "sửa design",
  "build lại", "update UI", "refactor component".
---

# SaaS Landing Page Orchestrator

Điều phối team 3 agent để build/audit/refactor landing page theo phong cách B2B SaaS cao cấp.

## Phase 0: Kiểm tra context

Trước khi bắt đầu, xác định loại task:

1. Đọc `_workspace/` — có file từ lần trước không?
   - Có + user yêu cầu sửa/tiếp tục → **Partial re-run** (chỉ chạy lại agent liên quan)
   - Có + request mới hoàn toàn → Đổi tên `_workspace/` thành `_workspace_prev/`, bắt đầu mới
   - Không có → **Fresh run**

2. Xác định task type:
   - **BUILD**: Tạo section/component mới → chạy full pipeline (Phase 1→2→3→4)
   - **AUDIT**: Review design/code hiện tại → chỉ Phase 1→3 (design-guardian + qa-reviewer song song)
   - **REFACTOR**: Cải thiện code không thay đổi UI → chỉ Phase 1→4 (qa-reviewer)

## Phase 1: Phân tích yêu cầu

1. Đọc `PRODUCT.md` và skill `upmind-design-system` để nắm bắt brand context và các quy chuẩn thiết kế bento box, neon gradients, glassmorphism, và UX flow.
2. Dùng CodeGraph explore để hiểu code liên quan.
3. Tóm tắt cho user: sẽ làm gì, dùng agent nào, ước lượng output.

## Phase 2: Thực thi (BUILD task)

**Thực thi mô hình:** Agent Team (pipeline)

```
ui-builder → design-guardian → ui-builder (nếu cần fix) → qa-reviewer
```

### Bước 2a: UI Builder
- Agent: ui-builder (model: opus)
- Input: Mô tả feature + context từ PRODUCT.md + quy chuẩn `upmind-design-system`
- Output: `_workspace/01_ui-builder_{component}.tsx`

### Bước 2b: Design Guardian review
- Agent: design-guardian (model: opus)  
- Input: File từ 2a + PRODUCT.md + quy chuẩn `upmind-design-system`
- Output: `_workspace/02_design-review_{component}.md`
- Nếu BLOCK: ui-builder fix và quay lại 2b (tối đa 2 vòng)

### Bước 2c: QA Review
- Agent: qa-reviewer (model: opus)
- Input: File đã pass design review + chạy build
- Output: `_workspace/03_qa-review_{component}.md`
- Nếu NEEDS_REVISION: ui-builder fix và quay lại 2c

## Phase 3: Thực thi (AUDIT task)

Chạy **song song** (subagent mode):
- design-guardian audit toàn bộ `src/app/` → `_workspace/audit-design.md`
- qa-reviewer audit code quality → `_workspace/audit-code.md`

Tổng hợp kết quả, ưu tiên theo severity.

## Phase 4: Ghi output cuối

1. Copy file component đã hoàn thiện vào đúng vị trí trong `src/`
2. Cập nhật import trong file parent nếu cần
3. Tóm tắt thay đổi cho user

## Data flow

```
PRODUCT.md ─────────────────────────────────┐
                                            ↓
Request → [ui-builder] → [design-guardian] → [ui-builder*] → [qa-reviewer] → src/
                                                               ↑
                                               (*nếu cần fix)
```

Workspace files: `_workspace/{phase}_{agent}_{artifact}.{ext}`

## Xử lý lỗi

- Agent timeout/fail → ghi note vào workspace, báo user, tiếp tục với available results
- Design block sau 2 vòng fix → stop, báo user với specific issues
- Build fail → qa-reviewer phân tích error, ui-builder fix

## Test scenarios

**Normal flow:** "Build section giới thiệu tính năng realtime monitoring"
- Expect: 3 file trong `_workspace/`, 1 TSX file mới trong `src/app/components/`

**Error flow:** Component vi phạm layout (thiếu bento layout, dùng stock photo)  
- Expect: design-guardian BLOCK, ui-builder nhận feedback, fix và pass vòng 2
