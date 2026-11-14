# 🚀 Engineering Showcase & Portfolio Website

Trang Portfolio cá nhân chuyên nghiệp được thiết kế theo phong cách **Engineering Case-Study** (lấy cảm hứng từ [Jordan Pham - Lowinertia](https://lowinertia.com/portfolio/jordanpham)).

Dự án được tối ưu hóa sẵn để **deploy miễn phí lên GitHub Pages** với giao diện tối (Dark Mode), hiệu ứng mượt mà và tập trung toàn bộ vào việc làm nổi bật các sản phẩm/dự án bạn đã làm.

---

## 🌟 Điểm nổi bật của mã nguồn

1. **Chuẩn phong cách Lowinertia**:
   - Thẻ dự án tỉ lệ 16:9 với hiệu ứng hover zoom và gradient vignette.
   - Thẻ hiển thị vai trò (Role), thời gian (Timeline) và huy hiệu nổi bật (Featured).
   - Bộ lọc danh mục (Tất cả, AI, Web SaaS, Mobile, IoT...).
2. **Cửa sổ Case-Study chi tiết (Interactive Modal)**:
   - Khi bấm vào bất kỳ dự án nào, một bảng chi tiết sẽ mở ra gồm:
     - Album ảnh / Thumbnail gallery chuyển đổi linh hoạt.
     - Thống kê chỉ số KPI đạt được (Metrics).
     - Bài toán kỹ thuật cần giải quyết (Problem/Challenge).
     - Giải pháp và đóng góp kỹ thuật (Solutions).
     - Nút liên kết trực tiếp tới Live Demo, Mã nguồn GitHub hoặc Tài liệu.
3. **Cấu hình dữ liệu tập trung (`profile-config.js`)**:
   - Bạn **không cần biết code HTML/CSS phức tạp**, chỉ cần mở file [profile-config.js](file:///A:/00_HungDk/00_my_prject/01_my_profile/profile-config.js) để điền tên, bio, kỹ năng và thêm/sửa dự án của bạn!

---

## 📁 Cấu trúc thư mục

```text
01_my_profile/
├── index.html            # Giao diện chính (Tailwind CSS, Lucide Icons)
├── style.css             # Hiệu ứng chuyển động, thanh cuộn & glassmorphism
├── profile-config.js     # 👉 NƠI BẠN ĐIỀN THÔNG TIN & DỰ ÁN CỦA MÌNH
├── app.js                # Logic tự động hiển thị dữ liệu & tương tác modal
├── assets/
│   └── images/           # 👉 NƠI BẠN ĐẶT ẢNH DỰ ÁN & AVATAR CỦA BẠN
└── README.md             # Hướng dẫn sử dụng & triển khai
```

---

## 🖥️ Cách xem thử nghiệm trên máy tính của bạn

Bạn có thể xem trước trang web ngay lập tức bằng 1 trong 2 cách:

* **Cách 1 (Nhanh nhất):** Mở thư mục này và **click đúp chuột trực tiếp vào file [index.html](file:///A:/00_HungDk/00_my_prject/01_my_profile/index.html)** trong trình duyệt (Chrome, Edge, Firefox).
* **Cách 2 (Dùng máy chủ Node.js local):**
  Mở terminal tại thư mục này và chạy:
  ```powershell
  npx serve .
  ```
  Sau đó mở `http://localhost:3000` trên trình duyệt.

---

## ✏️ Cách thay thông tin & ảnh dự án của bạn sau này

Mở tệp [profile-config.js](file:///A:/00_HungDk/00_my_prject/01_my_profile/profile-config.js):

1. **Thông tin cá nhân:** Sửa `name`, `role`, `bio`, `location`, `email` và các liên kết mạng xã hội (`socials`).
2. **Ảnh Avatar:** Đặt ảnh của bạn vào `assets/images/avatar.jpg`, sau đó đổi `avatar: "assets/images/avatar.jpg"`.
3. **Thêm / Sửa dự án:** Trong mảng `projects: [ ... ]`, copy một khối dự án mẫu và điền:
   - `title`: Tên sản phẩm.
   - `heroImage`: Đường dẫn ảnh đại diện (ảnh online hoặc ảnh trong `assets/images/project1.png`).
   - `skills`: Danh sách công nghệ (ví dụ: `["Python", "FastAPI", "Docker"]`).
   - `overview` & `challenge`: Vấn đề kỹ thuật bạn giải quyết.
   - `solution`: Các gạch đầu dòng giải pháp bạn đã làm.
   - `metrics`: Các chỉ số đạt được (ví dụ: `+20% tốc độ`, `10k users`).
   - `links`: Link demo và link GitHub repo.

---

## 🌐 Hướng dẫn đưa lên GitHub Pages (Miễn phí trọn đời)

Khi bạn muốn đưa website này lên mạng thành đường dẫn dạng `https://<username>.github.io/<repo-name>`:

1. **Khởi tạo Git & Commit:**
   ```powershell
   git init
   git add .
   git commit -m "feat: initial engineering portfolio showcase"
   ```
2. **Tạo repository mới trên GitHub:**
   - Đặt tên repo là `portfolio` (hoặc tên bất kỳ bạn thích).
   - Chọn chế độ **Public**.
3. **Đẩy mã nguồn lên GitHub:**
   ```powershell
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```
4. **Bật GitHub Pages:**
   - Vào mục **Settings** của repository trên GitHub.
   - Chọn tab **Pages** ở menu bên trái.
   - Tại mục **Build and deployment** -> **Branch**, chọn nhánh `main` và thư mục `/ (root)`.
   - Bấm **Save**.
   - Sau khoảng 1-2 phút, GitHub sẽ cấp cho bạn đường link website trực tuyến!
