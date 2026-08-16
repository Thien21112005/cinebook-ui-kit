# CineBook Interactive UI Blueprint 🎬

*[Đọc bản Tiếng Việt ở bên dưới / Scroll down for Vietnamese version](#-cinebook-interactive-ui-blueprint--vietnamese-version)*

> A high-fidelity, interactive HTML/CSS prototype and comprehensive design system for the CineBook modern cinema management platform.

This repository serves as the definitive frontend blueprint for **CineBook**. Built strictly with **HTML5, Tailwind CSS, and Vanilla JavaScript**, it transcends traditional static wireframes by offering a fully interactive, clickable prototype. It establishes the exact layout, state management, and design system required before moving into a full-stack production build (e.g., Next.js, PostgreSQL, Redis).

## 📐 Design Philosophy

The project adheres to a strict **Minimalist / Monochrome (Grayscale)** design system. 
- **Focus over Flash:** By stripping away unnecessary colors, the design forces a hyper-focus on structural hierarchy, typography, and core user workflows. 
- **High Contrast & Precision:** Ensures maximum legibility and a premium, analytical aesthetic suitable for complex dashboards and enterprise tools.
- **Typography:** Utilizes `Inter` for primary interface elements to ensure clean readability, and `Courier Prime` for mono-spaced data (e.g., ticket IDs, seat coordinates, transaction hashes).
- **Icons:** Integrated with Google's `Material Symbols Outlined` for crisp, scalable vector graphics.

## 🚀 Core Architectural Features

The blueprint provides 100% UI coverage for the CineBook ecosystem (28 interconnected screens), preparing the frontend for complex backend integrations.

### 1. High-Concurrency Seat Booking (The Core)
The heart of CineBook is the booking flow, specifically designed to handle race conditions (multiple users trying to book the same seat). 
- **Visual States:** The UI distinctly handles 4 seat states: `Available`, `Selected`, `Held` (Locked temporarily), and `Occupied`.
- **Backend Readiness:** The UI is structured to pair seamlessly with a **Redis Redlock** backend implementation, visually representing the lock-and-release mechanism when users hold seats during checkout.

### 2. Native AI Integrations
Unlike traditional apps, CineBook is AI-first. The UI includes dedicated interfaces for:
- **Semantic Search:** A search interface designed to handle natural language queries (ready for vector databases like `pgvector`).
- **AI Assistant Chatbot:** A persistent, floating RAG (Retrieval-Augmented Generation) widget that helps users find movies based on mood or complex criteria.
- **Personalized Recommendations:** "For You" feeds powered by hybrid recommendation algorithms.

## 🛡️ Role-Based Access Control (RBAC)

The system is divided into three distinct portals, each with specialized navigation and layouts:

### Customer Portal (B2C)
- Movie discovery and filtering.
- End-to-end booking flow (Movie → Showtime → Seat → Combo → Checkout → QR Ticket).
- Membership points, tier progression, and dynamic ticket pricing (Adult/Student/Child).
- Account preferences and ticket cancellation/refund flows.

### Staff Portal (Operations)
- Real-time QR ticket scanner and check-in dashboard.
- Live cinema dashboard showing daily revenue and occupancy rates.
- Showtime scheduling and hall/seat layout management.

### Admin Portal (Global Management)
- Global system monitoring (ready for Prometheus/Grafana integration).
- Multi-branch cinema management across different geographical locations.
- Centralized Movie, User, and Voucher/Promotion CRUD operations.

## 📁 Repository Structure

```text
├── demo.html                 # Interactive device simulator (Desktop, Laptop, Tablet, Mobile wrapper)
├── index.html                # Canvas Board providing a bird's-eye architectural view of all 28 screens
├── cinebook-shared.js        # Shared DOM injection script for global navigation consistency
└── wireframe_design_assistant/
    ├── 1_cinebook_home_page/
    ├── 2_cinebook_movie_list/
    ├── ... (28 screens total)
```

## 🛠️ Usage & Development

Since this prototype is built **without heavy build tools or bundlers**, it can be run directly in any modern browser instantly.

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```
2. **View the Prototype:**
   - Open `demo.html` in your browser to experience the interactive prototype with a built-in device viewport simulator.
   - Open `index.html` to view the comprehensive Canvas Board layout, allowing you to inspect the entire ecosystem at a glance.

### Next Steps for Production
This blueprint is designed to be immediately translated into a component-based frontend framework (e.g., React, Next.js, Flutter, or Vue). Developers can extract the Tailwind utility classes directly from the `code.html` files to guarantee a 1:1 match with this design specification.

## 📄 License
MIT License

---
---

# 🇻🇳 CineBook Interactive UI Blueprint (Vietnamese Version)

> Bản mẫu (prototype) tương tác chất lượng cao và hệ thống thiết kế (design system) hoàn chỉnh cho nền tảng quản lý rạp chiếu phim hiện đại CineBook.

Kho lưu trữ (repository) này đóng vai trò là bản thiết kế frontend gốc cho dự án **CineBook**. Được xây dựng hoàn toàn bằng **HTML5, Tailwind CSS và Vanilla JavaScript**, dự án này vượt xa các bản wireframe tĩnh truyền thống. Nó cung cấp một nguyên mẫu (prototype) có thể click, tương tác thực tế, thiết lập sẵn toàn bộ bố cục (layout), quản lý trạng thái, và hệ thống thiết kế trước khi bước vào giai đoạn code Full-stack (Next.js, PostgreSQL, Redis...).

## 📐 Triết Lý Thiết Kế

Dự án tuân thủ nghiêm ngặt phong cách thiết kế **Tối Giản / Đơn Sắc (Minimalist / Monochrome / Grayscale)**.
- **Tập trung vào Chức năng:** Việc loại bỏ các màu sắc rườm rà buộc người xem (và lập trình viên) phải tập trung hoàn toàn vào cấu trúc thông tin, nghệ thuật chữ (typography), và luồng trải nghiệm người dùng cốt lõi.
- **Độ Tương Phản Cao:** Đảm bảo khả năng đọc tốt nhất, mang lại cảm giác cao cấp, phân tích chuyên sâu (rất phù hợp cho các dashboard quản trị).
- **Typography:** Sử dụng font `Inter` cho các thành phần giao diện chính để tối ưu độ dễ đọc, và font `Courier Prime` cho các dữ liệu kỹ thuật (VD: Mã vé, tọa độ ghế, mã giao dịch).
- **Icon:** Sử dụng bộ `Material Symbols Outlined` của Google cho các biểu tượng vector sắc nét.

## 🚀 Các Tính Năng Kiến Trúc Cốt Lõi

Bản thiết kế này cung cấp 100% giao diện cho toàn bộ hệ sinh thái CineBook (28 màn hình liên kết với nhau), dọn đường sẵn sàng cho các tích hợp Backend phức tạp.

### 1. Đặt Vé Concurrency Chịu Tải Cao (Trái tim dự án)
Trọng tâm của CineBook là luồng đặt vé, được thiết kế đặc biệt để xử lý lỗi tranh chấp dữ liệu (Race Conditions - khi nhiều người cùng chọn 1 ghế).
- **Trạng thái trực quan:** Giao diện phân định rõ 4 trạng thái ghế: `Available` (Trống), `Selected` (Đang chọn), `Held` (Đang giữ chỗ tạm thời), và `Occupied` (Đã bán).
- **Sẵn sàng cho Backend:** UI được thiết kế để khớp hoàn hảo với thuật toán khóa phân tán **Redis Redlock**, biểu diễn trực quan cơ chế khóa/nhả ghế khi user đang ở bước thanh toán.

### 2. Tích hợp Trí Tuệ Nhân Tạo (AI-First)
Khác với các app truyền thống, CineBook ưu tiên AI. Giao diện bao gồm:
- **Tìm kiếm Ngữ nghĩa (Semantic Search):** Giao diện tìm kiếm hỗ trợ câu hỏi tự nhiên (sẵn sàng cho database vector như `pgvector`).
- **Trợ lý Ảo AI:** Widget Chatbot RAG lơ lửng xuyên suốt màn hình, giúp user tìm phim theo tâm trạng hoặc tiêu chí phức tạp.
- **Gợi ý Cá nhân hóa:** Nguồn cấp dữ liệu "Dành cho bạn" dựa trên thuật toán gợi ý lai (Hybrid Recommendation).

## 🛡️ Phân Quyền Hệ Thống (RBAC)

Hệ thống được chia thành 3 cổng thông tin (Portal) biệt lập, với bố cục và thanh điều hướng chuyên biệt:

### Customer Portal (Khách hàng)
- Khám phá phim, tìm kiếm AI, luồng đặt vé toàn trình (Phim → Suất chiếu → Ghế → Bắp nước → Thanh toán → Vé QR).
- Tích điểm thành viên, phân hạng, và chọn giá vé động (Người lớn/Sinh viên/Trẻ em).
- Cài đặt tài khoản, xem lịch sử, và luồng thao tác Hủy vé/Hoàn tiền.

### Staff Portal (Nhân viên Rạp)
- Quét mã QR check-in vé thực tế tại rạp.
- Dashboard rạp trực tiếp hiển thị doanh thu trong ngày và tỷ lệ lấp đầy phòng chiếu.
- Quản lý lịch chiếu và sơ đồ ghế ngồi của từng phòng.

### Admin Portal (Quản trị Hệ thống)
- Giám sát hệ thống toàn cầu (sẵn sàng tích hợp bảng điều khiển Prometheus/Grafana).
- Quản lý chuỗi rạp đa chi nhánh (Multi-branch) trên toàn quốc.
- Quản lý tập trung các dữ liệu: Phim, Người dùng, và các chiến dịch Khuyến mãi/Voucher.

## 📁 Cấu Trúc Thư Mục

```text
├── demo.html                 # Trình mô phỏng thiết bị tương tác (Desktop, Laptop, Tablet, Mobile)
├── index.html                # Canvas Board cung cấp cái nhìn toàn cảnh về kiến trúc của 28 màn hình
├── cinebook-shared.js        # Script dùng chung để đồng bộ hóa thanh điều hướng (Navigation)
└── wireframe_design_assistant/
    ├── 1_cinebook_home_page/
    ├── 2_cinebook_movie_list/
    ├── ... (tổng cộng 28 màn hình)
```

## 🛠️ Hướng Dẫn Sử Dụng

Vì bản prototype này được xây dựng **không sử dụng các công cụ build rườm rà (no bundlers)**, nó có thể chạy trực tiếp trên bất kỳ trình duyệt hiện đại nào ngay lập tức.

1. **Tải repository về máy:**
   ```bash
   git clone <your-repo-url>
   ```
2. **Trải nghiệm Bản mẫu:**
   - Mở file `demo.html` trên trình duyệt để trải nghiệm luồng tương tác thực tế với khung mô phỏng thiết bị (iPhone, Macbook...).
   - Mở file `index.html` để xem bảng Canvas Board tổng quan toàn bộ 28 màn hình cùng lúc.

### Bước Tiếp Theo (Dành cho Dev)
Bản thiết kế này được tạo ra để chuyển đổi 1:1 sang các framework Frontend dựa trên Component (như React, Next.js, Flutter, hoặc Vue). Các lập trình viên chỉ cần sao chép trực tiếp các class của Tailwind từ các file `code.html` để đảm bảo giao diện code ra chính xác 100% so với bản vẽ này.

## 📄 Giấy Phép
MIT License
