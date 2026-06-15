---
name: upmind-design-system
description: >
  Hệ thống thiết kế B2B SaaS Tech-Aura & AIDA Funnel. Định nghĩa và áp dụng các tiêu chuẩn thiết kế
  cao cấp (Bento Box, phân cấp chữ cực đoan, neon mesh gradients, glassmorphism, abstract mockups,
  chuyển động kích thích dopamine, và phễu chuyển đổi AIDA). Sử dụng khi:
  "thiết kế lại UI", "build bento grid", "chỉnh sửa layout", "thêm hiệu ứng hover",
  "tối ưu hóa typography", "áp dụng glassmorphism", "viết hiệu ứng cuộn trang",
  "tối ưu scannability", "áp dụng Hick's Law", hoặc bất kỳ thay đổi giao diện nào.
---

# B2B SaaS Tech-Aura Design System & UX Flow

Hệ thống thiết kế này định nghĩa các nguyên tắc và chỉ dẫn kỹ thuật để xây dựng và kiểm tra giao diện cao cấp (Premium Awwwards-tier) cho dự án, dựa trên triết lý Bento Box, Ambient Cyberpunk Lighting, và tối ưu hóa phễu chuyển đổi B2B SaaS.

## 1. Hệ thống Bố cục & Lưới (Layout & Grid System)

### Kiến trúc Bento Box
Thay vì trình bày thông tin dạng danh sách nhàm chán, tất cả nội dung phải được đóng gói vào các **Thẻ (Cards) bo góc** với kích thước và tỷ lệ bất đối xứng xếp khít nhau.
- **Kỹ thuật**: Sử dụng CSS Grid (`grid-cols-1 md:grid-cols-12 gap-6`) và điều chỉnh `col-span` động (ví dụ: `md:col-span-8` đứng cạnh `md:col-span-4`).
- **Ứng dụng Gestalt**: Tận dụng triệt để *Law of Enclosure* (luật Đóng kín) bằng cách bao bọc các khối tin trong các thẻ riêng biệt để mắt người dùng tự động phân nhóm thông tin (Chunking) mà không bị ngợp.

### Không gian âm (Negative Space)
- **Macro-whitespace**: Padding giữa các section lớn phải từ `py-20` đến `py-36` (80px - 144px). Hãy để giao diện "hít thở".
- **Micro-whitespace**: Padding trong các thẻ phải từ `p-6` đến `p-10` (24px - 40px) để các phần tử bên trong không bị dính sát vào nhau.

---

## 2. Kiến trúc Nghệ thuật chữ (Typography)

### Font hình học Geometric Sans-serif
Sử dụng các font chữ không chân chuẩn xác như `Inter`, `Satoshi`, hoặc `Plus Jakarta Sans` / `Be Vietnam Pro` (cho Tiếng Việt để tránh lỗi hiển thị dấu).

### Phân cấp tương phản cực đoan (Extreme Visual Hierarchy)
- **Tiêu đề (Heading/Display)**:
  - Cực to (`fontSize: 'clamp(2rem, 5vw, 3.25rem)'`), nét siêu dày (`font-weight: 800`).
  - Bóp hẹp khoảng cách chữ (`letterSpacing: '-0.02em'` hoặc `-0.03em`) để biến dòng tiêu đề thành một khối đồ họa vững chắc.
  - Phải có màu sáng nổi bật (`text-foreground` hoặc gradient rực sáng).
- **Văn bản mô tả (Body text)**:
  - Nhỏ gọn (`text-sm` hoặc `text-base`), nét mỏng (`font-weight: 400`).
  - **Không bao giờ dùng màu trắng tinh (Pure White)**. Sử dụng màu xám bạc với độ mờ/trong suốt từ 60% đến 70% (`color: 'var(--muted-foreground)'` hoặc `text-white/60`) để chống mỏi mắt trên nền tối và ép người dùng đọc tiêu đề trước.

---

## 3. Màu sắc & Xử lý bề mặt (Colors & Textures)

### Nền tối & Mesh Gradients (Ambient LED Lighting)
- Nền chủ đạo là màu tối sâu thẳm (True Black `#000000` hoặc cực tối slate như `#0b0f19`).
- Tạo hiệu ứng chiếu sáng vi mô bằng cách thả các vệt sáng gradient mờ ảo (`radial-gradient`) mang màu Neon (Electric Purple, Cyan, Hot Pink) ẩn dưới các thẻ hoặc góc màn hình để mô phỏng ánh sáng cyberpunk LED.
- **CSS**:
  ```css
  background: radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%); /* Purple example */
  filter: blur(50px);
  ```

### Glassmorphism (Kính mờ)
Navbar và các thẻ Bento phải được làm bán trong suốt và làm mờ nền phía sau:
- **CSS**:
  ```css
  background-color: rgba(255, 255, 255, 0.03) or rgba(11, 15, 25, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  ```

---

## 4. Thành phần Đồ họa (Visual Assets)

- **Zero Photography**: Loại bỏ hoàn toàn hình ảnh người thật/stock photo giả tạo.
- **Abstract UI Mockups**: Mô phỏng trừu tượng giao diện phần mềm bằng các nét vẽ vector tinh gọn (đồ thị tăng trưởng, thanh trạng thái, mã code trôi lơ lửng, data nodes phát sáng) để trực quan hóa dữ liệu.

---

## 5. UX Flow & Tương tác vi mô (UX Funnel)

### Phản hồi kích thích Dopamine (Micro-interactions)
Mọi thẻ Bento phải phản hồi khi rê chuột (Hover) để mang lại cảm giác "nhạy bén":
- Khi hover, thẻ phải nổi bồng lên nhẹ (`scale: 1.02`), viền sáng màu thương hiệu (`border-color` phát sáng) và đổ bóng sâu hơn.
- Thao tác nhấn (Active) phải scale nhẹ xuống (`scale: 0.98`) tạo xúc giác cơ học.

### Chuyển động cuộn (Scroll Reveal)
Không hiển thị toàn bộ nội dung cùng lúc. Sử dụng Framer Motion `whileInView` hoặc `IntersectionObserver` để kích hoạt hiệu ứng fade-in & slide-up nhẹ (`y: [20, 0]`, `opacity: [0, 1]`) khi người dùng cuộn đến phần tử.

### Scannability (Khả năng đọc lướt)
- Sử dụng luồng đọc F-Pattern và Z-Pattern.
- Thay thế các đoạn văn dài bằng các từ khóa in đậm và biểu tượng (icon) nét mảnh tinh tế.

### Phễu chuyển đổi AIDA (Conversion Funnel)
Toàn bộ cấu trúc trang phải đi theo thứ tự:
1. **Navbar**: Ultra-minimalist. Muted secondary CTA và glowing/vibrant Primary CTA.
2. **Hero Section (Above the Fold)**: Tiêu đề khổng lồ rực sáng, mô tả ngắn, CTA chính nằm giữa (hoặc email input).
3. **Social Proof (Halo Effect)**: Dải logo các khách hàng lớn tự động cuộn (monochrome logo ticker) ngay bên dưới Hero CTA.
4. **Features (Bento Grid)**: Lưới Bento trình diễn các tính năng hấp dẫn nhất.
5. **Deep-Dive**: Trình bày trực quan workflow/giao diện phần mềm trừu tượng.
6. **Testimonials**: Clean, glassmorphic testimonial cards.
7. **Bottom CTA (The Closer)**: Một khung kêu gọi hành động lớn, rực sáng ở chân trang để người dùng chốt đăng ký mà không cần cuộn ngược lên.

### Định luật Hick (Hick's Law)
Navbar phải cực kỳ tinh gọn. Không đưa quá nhiều lựa chọn. Phân biệt rõ ràng bằng màu sắc giữa **Primary CTA** (Nút chính, màu rực) và **Secondary CTA** (Nút phụ, màu mờ hoặc viền).
