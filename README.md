<div align="center">

# ⚡ DevMaster.VN — Animation Showcase & SPA Architecture

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

_Khám phá kho tàng hiệu ứng UI/UX đỉnh cao, micro-interactions mượt mà và kiến trúc Single-Page Application (SPA) tối ưu hóa trải nghiệm người dùng._  
_Explore cutting-edge UI/UX effects, smooth micro-interactions, and an optimized Single-Page Application (SPA) architecture._

[🇻🇳 Tiếng Việt](#-tiếng-việt) • [🇬🇧 English](#-english)

</div>

---

<div id="-tiếng-việt"></div>

## 🇻🇳 Tiếng Việt

### 🚀 Giới thiệu dự án

**DevMaster.VN** là một nền tảng SPA (Single-Page Application) hiện đại được thiết kế theo phong cách Cyberpunk / Dark-themed tối giản nhưng cực kỳ bắt mắt. Dự án không chỉ là nơi lưu trữ các lộ trình học tập Full-stack mà còn tích hợp một **Kho Animation Showcase** chuẩn phong cách _FreeFrontend_, giúp lập trình viên dễ dàng tra cứu, xem trước (Live Demo) và sao chép mã nguồn tích hợp ngay vào dự án của mình.

### ✨ Tính năng nổi bật

- **Kiến trúc SPA Không Tải Lại (Conditional Rendering):** Chuyển đổi mượt mà giữa các trang (Home, Auth, RoadmapShowcase) chỉ bằng một State trung tâm, giữ nguyên hiệu suất tối ưu.
- **Hệ thống Object Mapping thông minh:** Quản lý danh sách animation cực kỳ sạch sẽ bằng cách nhét trực tiếp component vào trường `preview`, loại bỏ hoàn toàn các cấu trúc `if/else` rườm rà.
- **Modal Live Demo toàn màn hình:** Phóng lớn hiệu ứng để trải nghiệm chi tiết micro-interaction kèm tính năng _Copy to Clipboard_ tức thì.
- **Custom Toast Notification:** Thay thế hoàn toàn các hàm `alert()` thô kệch bằng thông báo nổi giữa màn hình hiệu ứng Spring mượt mà.

### 🛠️ Cấu trúc thư mục

```text
src/
├── components/
│   └── animations/       # 📂 Nơi chứa các file component hiệu ứng độc lập (CoolGlowCard.jsx,...)
├── pages/
│   └── RoadmapShowcase.jsx # ⚡ Trang chính quản lý lưới animation và modal live demo
├── App.jsx               # 🧠 Bộ não điều hướng trạng thái SPA
└── index.css             # 🎨 Giao diện màu nền và tối ưu font chữ toàn cục
```
