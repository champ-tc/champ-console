# champ-console

เว็บ Next.js App Router พร้อม Tailwind CSS สำหรับรันในเครื่องและ deploy บน Vercel โดยยังไม่เชื่อมฐานข้อมูลภายนอก

## รันในเครื่อง

```bash
npm run dev
```

จากนั้นเปิด <http://localhost:3000>

ข้อมูลในหน้า Work ยังจัดเก็บด้วย `localStorage` ของเบราว์เซอร์เท่านั้น

ระบบใช้ Tailwind CSS v4 และโหลด Noto Sans Thai ผ่าน `next/font/google` เพื่อให้ Next.js จัดการและ optimize ฟอนต์ให้

## Deploy บน Vercel

Import repository เข้า Vercel แล้วใช้ค่า Framework Preset เป็น Next.js ได้ทันที ยังไม่ต้องเพิ่ม Environment Variables จนกว่าจะเริ่มเชื่อม Google Sheets
