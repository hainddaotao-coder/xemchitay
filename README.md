# Landing page Xem chỉ tay – Tử Vi Chi Đạo

## Chạy cục bộ

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. Trang chủ được dựng trực tiếp bằng Next.js App Router.

## Build

```bash
npm run build
npm start
```

Google Form chính thức được nhúng trực tiếp và có liên kết dự phòng mở trong cửa sổ mới.

## Triển khai trên Vercel

1. Giải nén tệp ZIP.
2. Đưa **toàn bộ tệp ở thư mục gốc** lên GitHub hoặc chọn trực tiếp thư mục này trong Vercel.
3. Framework Preset: `Next.js`; Root Directory: để trống nếu `package.json` nằm ở gốc.
4. Build Command: `npm run build`; Output Directory: để Vercel tự nhận diện.
