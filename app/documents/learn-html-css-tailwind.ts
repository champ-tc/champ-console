export const document = `<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1080px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;font-size:14px}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#fff0e9,#eefcff 55%,#fff 85%)}.eyebrow{color:#e55d2d;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0 8px;font-size:clamp(30px,6vw,48px);line-height:1.2}.hero h1 .html-color{color:#e55d2d}.hero h1 .tailwind-color{color:#0891b2}.hero p{max-width:740px;margin:0;color:#667085}.layout{display:grid}.toc{padding:22px 20px;background:#fcfaf9;border-bottom:1px solid #e8eaf0}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px 20px;margin:10px 0 0;padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{padding:32px 0;border-bottom:1px solid #eceef2}.chapter:last-child{border:0}.chapter h2{margin:0 0 16px;font-size:24px;line-height:1.35}.chapter h3{margin:26px 0 8px;font-size:17px}.chapter p{margin:9px 0}.chapter li{margin:5px 0}.chapter ul,.chapter ol{padding-left:24px}.note{margin:18px 0;padding:14px 16px;border-left:4px solid #e55d2d;border-radius:0 12px 12px 0;background:#fff1eb}.info{border-color:#0891b2;background:#ecfeff}.warning{border-color:#f59e0b;background:#fffaeb}.code{overflow-x:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}.inline{padding:2px 6px;border-radius:5px;background:#eef0f3;font:12px ui-monospace,monospace}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#faf7f5}.cards{display:grid;gap:10px}.card{padding:15px;border:1px solid #e5e8ec;border-radius:14px}.card strong{color:#e55d2d}.flow{padding:14px;border-radius:12px;background:#171a21;color:#fff;text-align:center;font:700 12px/1.8 ui-monospace,monospace}.steps{counter-reset:step;list-style:none;padding:0!important}.steps li{counter-increment:step;position:relative;padding:11px 12px 11px 46px;border-radius:12px;background:#f7f8fa}.steps li:before{content:counter(step);position:absolute;left:12px;top:10px;display:grid;width:25px;height:25px;place-items:center;border-radius:50%;background:#e55d2d;color:#fff;font-size:12px;font-weight:800}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:240px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border:0;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}.cards{grid-template-columns:repeat(2,1fr)}}
</style></head><body><main class="shell">
<nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav>
<header class="hero"><div class="eyebrow">STRUCTURE • STYLE • UTILITY</div><h1><span class="html-color">HTML &amp; CSS</span> + <span class="tailwind-color">Tailwind</span></h1><p>เรียนตั้งแต่โครงสร้างหน้าเว็บ การจัด Layout แบบ Responsive ไปจนถึงการใช้ Utility Classes เพื่อสร้างส่วนติดต่อผู้ใช้ได้อย่างรวดเร็ว</p></header>
<div class="layout"><aside class="toc"><strong>สารบัญบทเรียน</strong><ol><li><a href="#html-structure">โครงสร้าง HTML</a></li><li><a href="#html-tags">Tags และ Semantic</a></li><li><a href="#forms">Forms และ Attributes</a></li><li><a href="#css-basics">CSS และ Selectors</a></li><li><a href="#box-model">Box Model</a></li><li><a href="#layout">Display และ Position</a></li><li><a href="#flex-grid">Flexbox และ Grid</a></li><li><a href="#visual">Typography และ Visual</a></li><li><a href="#responsive-css">Responsive CSS</a></li><li><a href="#tailwind-intro">รู้จัก Tailwind CSS</a></li><li><a href="#tailwind-install">ติดตั้ง Tailwind v4</a></li><li><a href="#tailwind-utilities">Utility Classes</a></li><li><a href="#tailwind-layout">Layout ด้วย Tailwind</a></li><li><a href="#tailwind-responsive">Responsive และ States</a></li><li><a href="#roadmap">Roadmap และโปรเจกต์</a></li><li><a href="#accessibility">Accessibility</a></li><li><a href="#production-html">Production HTML และ SEO</a></li><li><a href="#modern-cascade">Modern CSS Cascade</a></li><li><a href="#modern-responsive">Container Queries</a></li><li><a href="#animation">Animation และ Interaction</a></li><li><a href="#advanced-tailwind">Tailwind ขั้นสูง</a></li><li><a href="#architecture">Design System และ Testing</a></li><li><a href="#labs">Hands-on Labs</a></li></ol></aside><article class="content">

<section class="chapter" id="html-structure"><h2>1. โครงสร้างเอกสาร HTML</h2><p>HTML หรือ HyperText Markup Language ทำหน้าที่อธิบายว่าเนื้อหาแต่ละส่วน “คืออะไร” เช่น หัวข้อ ย่อหน้า รูปภาพ ลิงก์ หรือฟอร์ม</p><pre class="code">&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;ชื่อเว็บไซต์&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- เนื้อหาที่แสดงบนหน้าเว็บ --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre><ul><li><b>DOCTYPE</b> ระบุว่าใช้มาตรฐาน HTML5</li><li><b>html lang="th"</b> ช่วย Screen Reader และ Search Engine เข้าใจภาษา</li><li><b>head</b> เก็บ metadata, title, stylesheet และข้อมูลที่ไม่แสดงเป็นเนื้อหา</li><li><b>body</b> ครอบเนื้อหาที่ผู้ใช้เห็น</li><li><b>charset UTF-8</b> รองรับภาษาไทยและ Unicode</li><li><b>viewport</b> ทำให้ layout บนมือถือมีขนาดถูกต้อง</li></ul></section>

<section class="chapter" id="html-tags"><h2>2. Tags พื้นฐานและ Semantic HTML</h2><table><thead><tr><th>กลุ่ม</th><th>Tags</th><th>หน้าที่</th></tr></thead><tbody><tr><td>หัวข้อ/ข้อความ</td><td>h1–h6, p, span, strong, em, small</td><td>สร้างลำดับหัวข้อและความหมายของข้อความ</td></tr><tr><td>โครงสร้าง</td><td>header, nav, main, section, article, aside, footer</td><td>แบ่งส่วนหน้าอย่างมีความหมาย</td></tr><tr><td>รายการ</td><td>ul, ol, li</td><td>รายการไม่มีและมีลำดับ</td></tr><tr><td>สื่อ</td><td>a, img, picture, video</td><td>ลิงก์ รูปภาพ และสื่อ</td></tr><tr><td>ตาราง</td><td>table, thead, tbody, tr, th, td</td><td>ข้อมูลที่มีความสัมพันธ์เป็นแถวและคอลัมน์</td></tr></tbody></table><pre class="code">&lt;header&gt;
  &lt;nav aria-label="เมนูหลัก"&gt;...&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;ชื่อบทความ&lt;/h1&gt;
    &lt;p&gt;เนื้อหาบทความ&lt;/p&gt;
    &lt;img src="cover.jpg" alt="คำอธิบายสิ่งที่อยู่ในภาพ"&gt;
  &lt;/article&gt;
&lt;/main&gt;</pre><div class="note"><b>Semantic HTML</b> ช่วยทั้ง Accessibility, SEO และการดูแลโค้ด ควรเลือก tag ตามความหมาย ไม่ใช้ div กับทุกอย่าง และกำหนด alt ให้รูปภาพตามวัตถุประสงค์ของภาพ</div></section>

<section class="chapter" id="forms"><h2>3. Forms และ Attributes</h2><pre class="code">&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;ชื่อ&lt;/label&gt;
  &lt;input id="name" name="name" type="text" required&gt;

  &lt;label for="email"&gt;อีเมล&lt;/label&gt;
  &lt;input id="email" name="email" type="email" autocomplete="email"&gt;

  &lt;label for="message"&gt;ข้อความ&lt;/label&gt;
  &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;

  &lt;label for="topic"&gt;หัวข้อ&lt;/label&gt;
  &lt;select id="topic" name="topic"&gt;
    &lt;option value="html"&gt;HTML&lt;/option&gt;
    &lt;option value="css"&gt;CSS&lt;/option&gt;
  &lt;/select&gt;
  &lt;button type="submit"&gt;ส่งข้อมูล&lt;/button&gt;
&lt;/form&gt;</pre><ul><li><span class="inline">class</span> ใช้ซ้ำได้และเหมาะกับการตกแต่ง</li><li><span class="inline">id</span> ต้องไม่ซ้ำและใช้เชื่อม label, anchor หรือ JavaScript</li><li><span class="inline">name</span> คือชื่อ field ที่ส่งไปยัง server</li><li><span class="inline">data-*</span> เก็บข้อมูลเฉพาะของ element</li><li><span class="inline">required</span>, type และ pattern ช่วย validation ฝั่ง browser แต่ server ต้อง validate ซ้ำ</li></ul></section>

<section class="chapter" id="css-basics"><h2>4. CSS Syntax และ Selectors</h2><pre class="code">selector {
  property: value;
}

p { color: #334155; }
.card { padding: 1rem; }
#page-title { font-size: 2rem; }
nav a { text-decoration: none; }
ul &gt; li { margin-block: .5rem; }
a:hover { color: blue; }
input[type="email"] { border-color: skyblue; }
h1, h2, h3 { line-height: 1.2; }</pre><h3>Cascade และ Specificity</h3><p>เมื่อหลายกฎเลือก element เดียวกัน Browser จะพิจารณา origin, importance, specificity และลำดับที่ประกาศ ควรใช้ class เป็นหลัก รักษา selector ให้สั้น และหลีกเลี่ยง <span class="inline">!important</span> หากไม่จำเป็น</p><pre class="code">/* External stylesheet — เหมาะกับงานจริง */
&lt;link rel="stylesheet" href="style.css"&gt;

/* Internal stylesheet */
&lt;style&gt; body { color: #222; } &lt;/style&gt;

/* Inline style — ใช้เท่าที่จำเป็น */
&lt;p style="color:red"&gt;ข้อความ&lt;/p&gt;</pre></section>

<section class="chapter" id="box-model"><h2>5. Box Model</h2><div class="flow">margin → border → padding → content</div><pre class="code">*, *::before, *::after {
  box-sizing: border-box;
}

.box {
  width: 200px;
  min-height: 100px;
  padding: 20px;
  border: 2px solid #111;
  margin: 10px;
}</pre><p>เมื่อใช้ <span class="inline">border-box</span> ค่า width และ height จะรวม padding กับ border ทำให้คำนวณขนาด layout ได้ง่ายกว่า ค่า margin คือช่องว่างภายนอก ส่วน padding คือช่องว่างระหว่าง content กับ border</p><div class="note warning">หลีกเลี่ยงกำหนด height คงที่ให้กล่องข้อความ เพราะข้อความอาจล้นเมื่อผู้ใช้ซูมหรือเมื่อคำแปลยาวขึ้น ใช้ min-height เมื่อเหมาะสม</div></section>

<section class="chapter" id="layout"><h2>6. Display และ Positioning</h2><table><thead><tr><th>ค่า</th><th>การทำงาน</th></tr></thead><tbody><tr><td>block</td><td>ขึ้นบรรทัดใหม่และขยายตามพื้นที่แนวนอน</td></tr><tr><td>inline</td><td>ไหลไปกับข้อความและกำหนด width/height ไม่ได้ตามปกติ</td></tr><tr><td>inline-block</td><td>อยู่ในบรรทัดแต่กำหนดขนาดได้</td></tr><tr><td>flex</td><td>จัด layout หนึ่งมิติ</td></tr><tr><td>grid</td><td>จัด layoutสองมิติ</td></tr><tr><td>none</td><td>นำ element ออกจาก layout และ accessibility tree</td></tr></tbody></table><pre class="code">.parent { position: relative; }
.badge { position: absolute; top: 8px; right: 8px; }
.toolbar { position: sticky; top: 0; }
.modal { position: fixed; inset: 0; }

/* z-index มีผลภายใน stacking context */
.modal { z-index: 50; }</pre></section>

<section class="chapter" id="flex-grid"><h2>7. Flexbox และ Grid</h2><h3>Flexbox: จัดหนึ่งแกนเป็นหลัก</h3><pre class="code">.toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.toolbar__search { flex: 1; }</pre><h3>Grid: จัดแถวและคอลัมน์</h3><pre class="code">.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.featured { grid-column: span 2; }</pre><p>ใช้ Flexbox กับ navigation, toolbar หรือชุดปุ่ม และใช้ Grid กับ card gallery, dashboard หรือ layout ที่ต้องควบคุมทั้งแถวและคอลัมน์</p></section>

<section class="chapter" id="visual"><h2>8. Typography, สี และ Visual Effects</h2><pre class="code">body {
  font-family: 'Noto Sans Thai', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #1f2937;
  background: #f8fafc;
}

.card {
  border-radius: .75rem;
  box-shadow: 0 4px 16px rgb(15 23 42 / .1);
  transition: transform .2s ease, box-shadow .2s ease;
}
.card:hover { transform: translateY(-2px); }</pre><table><thead><tr><th>หน่วย</th><th>เหมาะกับ</th></tr></thead><tbody><tr><td>px</td><td>เส้นขอบหรือค่าที่ต้องการความแน่นอน</td></tr><tr><td>rem</td><td>ตัวอักษรและ spacing ที่สัมพันธ์กับ root font size</td></tr><tr><td>em</td><td>ค่าที่สัมพันธ์กับ font size ของบริบทปัจจุบัน</td></tr><tr><td>%</td><td>สัดส่วนเทียบกับ containing block</td></tr><tr><td>vw, vh, dvh</td><td>สัดส่วน viewport; dvh เหมาะกับ viewport มือถือแบบ dynamic</td></tr></tbody></table></section>

<section class="chapter" id="responsive-css"><h2>9. Responsive Design ด้วย CSS</h2><p>ออกแบบแบบ Mobile-first: เริ่มจากหน้าจอเล็ก แล้วเพิ่มความสามารถเมื่อมีพื้นที่มากขึ้น</p><pre class="code">.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .layout { grid-template-columns: 16rem 1fr; }
}

img { max-width: 100%; height: auto; }
.container { width: min(70rem, 100% - 2rem); margin-inline: auto; }</pre><h3>สิ่งที่ต้องทดสอบ</h3><ul><li>320px, tablet, laptop และจอกว้าง</li><li>ซูมอย่างน้อย 200% และขนาดตัวอักษรใหญ่</li><li>ข้อความยาว, ไม่มีรูป และข้อมูลว่าง</li><li>Keyboard focus และพื้นที่กดบน Touch screen</li><li>แนวนอน/แนวตั้งและ Reduced Motion</li></ul></section>

<section class="chapter" id="tailwind-intro"><h2>10. รู้จัก Tailwind CSS</h2><p>Tailwind เป็น CSS framework แบบ <b>utility-first</b> ที่ประกอบ UI จาก class ขนาดเล็กซึ่งแทน CSS property โดยตรง</p><pre class="code">&lt;!-- CSS แบบแยก class --&gt;
&lt;div class="card"&gt;...&lt;/div&gt;

.card {
  padding: 1rem;
  background: white;
  border-radius: .5rem;
}

&lt;!-- Tailwind utilities --&gt;
&lt;div class="rounded-lg bg-white p-4"&gt;...&lt;/div&gt;</pre><div class="cards"><div class="card"><strong>ข้อดี</strong><br>พัฒนาเร็ว, constraint สม่ำเสมอ, responsive/state อยู่ใกล้ markup</div><div class="card"><strong>สิ่งที่ต้องเข้าใจ</strong><br>CSS, cascade, layout และ accessibility ยังจำเป็น Tailwind ไม่ได้แทนความรู้เหล่านี้</div></div></section>

<section class="chapter" id="tailwind-install"><h2>11. ติดตั้ง Tailwind CSS v4</h2><h3>Play CDN สำหรับทดลองเท่านั้น</h3><pre class="code">&lt;script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"&gt;&lt;/script&gt;</pre><h3>Tailwind CLI</h3><pre class="code">npm install tailwindcss @tailwindcss/cli

/* src/input.css */
@import "tailwindcss";

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch</pre><h3>PostCSS สำหรับ Framework เช่น Next.js</h3><pre class="code">npm install tailwindcss @tailwindcss/postcss postcss

// postcss.config.mjs
export default {
  plugins: { "@tailwindcss/postcss": {} }
}

/* app.css */
@import "tailwindcss";</pre><div class="note info">Tailwind v4 แยก CLI และ PostCSS plugin เป็น package เฉพาะแล้ว ส่วนคำสั่ง init และ setup ด้วย autoprefixer ในไฟล์ต้นฉบับเป็นแนวทางของ Tailwind v3 จึงปรับบทเรียนนี้ให้เป็น v4</div></section>

<section class="chapter" id="tailwind-utilities"><h2>12. Utility Classes ที่ใช้บ่อย</h2><table><thead><tr><th>กลุ่ม</th><th>ตัวอย่าง</th></tr></thead><tbody><tr><td>Spacing</td><td>p-4, px-6, py-2, mt-4, mx-auto, gap-4, space-y-3</td></tr><tr><td>Sizing</td><td>w-full, w-1/2, h-10, min-h-screen, max-w-md</td></tr><tr><td>Typography</td><td>text-sm, text-2xl, font-semibold, leading-relaxed, truncate</td></tr><tr><td>Color</td><td>text-slate-700, bg-blue-500, border-red-300</td></tr><tr><td>Border</td><td>border, border-2, rounded-lg, rounded-full</td></tr><tr><td>Shadow</td><td>shadow-sm, shadow-md, shadow-xl</td></tr></tbody></table><pre class="code">&lt;div class="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-md"&gt;
  &lt;h2 class="mb-2 text-xl font-bold text-slate-900"&gt;ชื่อการ์ด&lt;/h2&gt;
  &lt;p class="text-sm leading-relaxed text-slate-600"&gt;รายละเอียด&lt;/p&gt;
&lt;/div&gt;</pre><p>Scale เริ่มต้นของ spacing ส่วนใหญ่ใช้ช่วงที่สัมพันธ์กับ <span class="inline">0.25rem</span> เช่น p-4 เท่ากับ 1rem แต่ theme สามารถปรับเปลี่ยนได้</p></section>

<section class="chapter" id="tailwind-layout"><h2>13. Flexbox และ Grid ด้วย Tailwind</h2><pre class="code">&lt;!-- Flexbox --&gt;
&lt;div class="flex flex-wrap items-center justify-between gap-4"&gt;
  &lt;div class="flex-1"&gt;เนื้อหา&lt;/div&gt;
  &lt;button&gt;บันทึก&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Grid --&gt;
&lt;div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"&gt;
  &lt;article&gt;การ์ด 1&lt;/article&gt;
  &lt;article&gt;การ์ด 2&lt;/article&gt;
  &lt;article class="md:col-span-2"&gt;การ์ดพิเศษ&lt;/article&gt;
&lt;/div&gt;</pre><ul><li><b>justify-*</b> จัดตาม main axis</li><li><b>items-*</b> จัดตาม cross axis</li><li><b>flex-col / flex-row</b> เปลี่ยนทิศทาง</li><li><b>grid-cols-*</b> กำหนดจำนวนคอลัมน์</li><li><b>col-span-*</b> กำหนดจำนวนคอลัมน์ที่ item ครอบ</li></ul></section>

<section class="chapter" id="tailwind-responsive"><h2>14. Responsive, States และ Effects</h2><table><thead><tr><th>Prefix</th><th>ค่าเริ่มต้นขั้นต่ำ</th></tr></thead><tbody><tr><td>ไม่มี prefix</td><td>ทุกขนาด — เขียนสำหรับมือถือก่อน</td></tr><tr><td>sm:</td><td>640px</td></tr><tr><td>md:</td><td>768px</td></tr><tr><td>lg:</td><td>1024px</td></tr><tr><td>xl:</td><td>1280px</td></tr><tr><td>2xl:</td><td>1536px</td></tr></tbody></table><pre class="code">&lt;div class="flex flex-col gap-4 md:flex-row"&gt;
  &lt;button class="rounded-lg bg-blue-500 px-4 py-2 text-white
    transition hover:bg-blue-600
    focus-visible:outline-2 focus-visible:outline-offset-2
    active:scale-95 disabled:cursor-not-allowed disabled:opacity-50
    dark:bg-blue-400 dark:text-slate-950"&gt;
    บันทึก
  &lt;/button&gt;
&lt;/div&gt;</pre><p>State ที่ควรรู้: <b>hover, focus-visible, active, disabled, checked, group-hover, peer</b> และ <b>dark</b> ควรมี focus indicator ที่มองเห็นชัด ไม่ใช้สีอย่างเดียวในการสื่อสถานะ</p></section>

<section class="chapter" id="roadmap"><h2>15. Roadmap และโปรเจกต์ฝึกฝน</h2><ol class="steps"><li><b>HTML 1–2 สัปดาห์:</b> โครงสร้าง, semantic, links, images, tables และ forms</li><li><b>CSS 2–3 สัปดาห์:</b> Cascade, Box Model, Typography, Position และ Responsive</li><li><b>Layout:</b> ทำ Flexbox และ Grid ให้คล่องก่อนใช้ framework</li><li><b>Tailwind:</b> แปลงความรู้ CSS เป็น utilities, responsive variants และ states</li><li><b>Accessibility:</b> ฝึก keyboard, focus, labels, semantic และ contrast ไปพร้อมกัน</li></ol><h3>โปรเจกต์แนะนำ</h3><div class="cards"><div class="card"><strong>Landing Page</strong><br>Hero, Features, Pricing และ Responsive Navigation</div><div class="card"><strong>Portfolio</strong><br>Semantic sections, images, cards และ contact form</div><div class="card"><strong>Dashboard</strong><br>Sidebar, tables, filters, empty/loading/error states</div><div class="card"><strong>Component Library</strong><br>Button, input, modal, alert และ responsive card variants</div></div><div class="note info"><b>แหล่งอ้างอิง:</b> ใช้ MDN Web Docs สำหรับ HTML/CSS และเอกสารทางการของ Tailwind CSS สำหรับ utilities และวิธีติดตั้งของเวอร์ชันที่ใช้งาน</div></section>

<section class="chapter" id="accessibility"><h2>16. Accessibility สำหรับงานจริง</h2><p>Accessibility คือการทำให้ผู้ใช้ทุกคนเข้าถึงเว็บไซต์ได้ รวมถึงผู้ใช้ Keyboard, Screen Reader, ผู้มีสายตาเลือนราง หรือผู้ที่ไวต่อการเคลื่อนไหว</p><h3>ใช้ Native HTML ก่อน ARIA</h3><pre class="code">&lt;!-- ใช้ button แทน div onclick --&gt;
&lt;button type="button" aria-expanded="false" aria-controls="menu"&gt;
  เปิดเมนู
&lt;/button&gt;
&lt;nav id="menu" aria-label="เมนูหลัก" hidden&gt;...&lt;/nav&gt;

&lt;label for="phone"&gt;เบอร์โทร&lt;/label&gt;
&lt;input id="phone" name="phone"
  aria-describedby="phone-hint phone-error"
  aria-invalid="true"&gt;
&lt;p id="phone-hint"&gt;กรอกเฉพาะตัวเลข&lt;/p&gt;
&lt;p id="phone-error" role="alert"&gt;กรุณากรอกให้ครบ 10 หลัก&lt;/p&gt;</pre><h3>Keyboard และ Focus</h3><pre class="code">:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}

.skip-link {
  position: fixed;
  translate: 0 -200%;
}
.skip-link:focus { translate: 0; }</pre><ul><li>ลำดับ Tab ต้องตรงกับลำดับการอ่าน หลีกเลี่ยง tabindex ที่มากกว่า 0</li><li>Modal ต้องย้าย focus เข้าไป, กัก focus, ปิดด้วย Escape และคืน focus ให้ปุ่มเดิม</li><li>Icon button ต้องมี accessible name เช่น aria-label</li><li>ข้อความกับพื้นหลังต้องมี contrast เพียงพอ และห้ามใช้สีอย่างเดียวสื่อความหมาย</li><li>ซูม 200% แล้วเนื้อหาต้องไม่หายหรือบังคับเลื่อนสองแกนโดยไม่จำเป็น</li></ul><div class="note"><b>กฎแรกของ ARIA:</b> หากมี HTML element ที่ให้ความหมายและพฤติกรรมตามต้องการอยู่แล้ว ให้ใช้ element นั้นแทนการสร้างใหม่ด้วย div + ARIA</div></section>

<section class="chapter" id="production-html"><h2>17. Production HTML, SEO และ Media</h2><h3>Metadata และ Social Preview</h3><pre class="code">&lt;title&gt;ชื่อหน้าที่อธิบายเนื้อหา&lt;/title&gt;
&lt;meta name="description" content="คำอธิบายหน้าที่กระชับ"&gt;
&lt;link rel="canonical" href="https://example.com/page"&gt;

&lt;meta property="og:title" content="ชื่อสำหรับ Social Media"&gt;
&lt;meta property="og:description" content="คำอธิบาย"&gt;
&lt;meta property="og:image" content="https://example.com/cover.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;</pre><h3>Responsive Images</h3><pre class="code">&lt;picture&gt;
  &lt;source type="image/avif" srcset="hero.avif"&gt;
  &lt;source type="image/webp" srcset="hero.webp"&gt;
  &lt;img src="hero.jpg"
    srcset="hero-640.jpg 640w, hero-1280.jpg 1280w"
    sizes="(min-width: 768px) 50vw, 100vw"
    width="1280" height="720"
    alt="คำอธิบายภาพ"
    loading="lazy" decoding="async"&gt;
&lt;/picture&gt;</pre><p>รูปภาพ Hero ที่มีผลต่อ Largest Contentful Paint มักไม่ควร lazy-load ส่วนรูปด้านล่าง viewport เหมาะกับ <span class="inline">loading="lazy"</span> และควรกำหนด width/height เพื่อลด Layout Shift</p><h3>Native Dialog และ Popover</h3><pre class="code">&lt;button commandfor="confirm-dialog" command="show-modal"&gt;ลบ&lt;/button&gt;
&lt;dialog id="confirm-dialog"&gt;
  &lt;h2&gt;ยืนยันการลบ&lt;/h2&gt;
  &lt;form method="dialog"&gt;
    &lt;button value="cancel"&gt;ยกเลิก&lt;/button&gt;
    &lt;button value="confirm"&gt;ยืนยัน&lt;/button&gt;
  &lt;/form&gt;
&lt;/dialog&gt;</pre><div class="note info">SEO ที่ดีเริ่มจากเนื้อหามีคุณภาพ, heading hierarchy, semantic HTML, URL และ performance ที่ดี ไม่ใช่การใส่ meta tags จำนวนมากเพียงอย่างเดียว</div></section>

<section class="chapter" id="modern-cascade"><h2>18. Modern CSS Cascade และ Architecture</h2><h3>Cascade Layers</h3><pre class="code">@layer reset, theme, base, components, utilities;

@layer theme {
  :root {
    --color-brand: oklch(55% .2 250);
    --space-card: clamp(1rem, 2vw, 2rem);
  }
}

@layer components {
  .card {
    padding: var(--space-card);
    background: var(--surface, white);
  }
}</pre><h3>Modern Selectors</h3><pre class="code">/* :where() มี specificity เป็นศูนย์ */
:where(article, section) &gt; :first-child { margin-block-start: 0; }

/* :is() รวม selector */
:is(h1, h2, h3) { text-wrap: balance; }

/* :has() เลือก parent ตามลูก */
.field:has(input:invalid) { color: #b91c1c; }

/* Logical properties รองรับทิศทางภาษา */
.card { padding-inline: 1rem; margin-block: 2rem; }</pre><ul><li>ใช้ Custom Properties ทำ Design Tokens และ Runtime Theme</li><li>ใช้ @layer กำหนดลำดับที่ชัดเจน แทนการเพิ่ม specificity แข่งขันกัน</li><li>ใช้ Logical Properties เพื่อรองรับ RTL และ writing mode</li><li>จำกัด scope ของ CSS ด้วย component boundary หรือ naming convention</li></ul></section>

<section class="chapter" id="modern-responsive"><h2>19. Container Queries และ Fluid Design</h2><p>Media Query อิงขนาด viewport ส่วน Container Query อิงพื้นที่ที่ component ได้รับ จึงทำให้ component ใช้ซ้ำใน sidebar หรือ main content ได้ดีขึ้น</p><pre class="code">.card-list { container-type: inline-size; }

.card { display: grid; gap: 1rem; }

@container (min-width: 36rem) {
  .card { grid-template-columns: 12rem 1fr; }
}

h1 { font-size: clamp(2rem, 1rem + 4vw, 4.5rem); }
.grid { grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr)); }
.video { aspect-ratio: 16 / 9; }
.screen { min-height: 100dvh; }</pre><h3>Subgrid</h3><pre class="code">.cards { display: grid; grid-template-columns: repeat(3, 1fr); }
.card { display: grid; grid-template-rows: subgrid; grid-row: span 3; }</pre><p>Subgrid ช่วยให้หัวข้อ เนื้อหา และปุ่มของการ์ดหลายใบตรงแนวกันโดยไม่กำหนดความสูงคงที่</p></section>

<section class="chapter" id="animation"><h2>20. Animation และ Interaction</h2><pre class="code">@keyframes enter {
  from { opacity: 0; translate: 0 .5rem; }
  to { opacity: 1; translate: 0; }
}

.panel { animation: enter .25s ease-out both; }
.button { transition: translate .15s, box-shadow .15s; }
.button:hover { translate: 0 -2px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}</pre><h3>ป้องกัน Layout Shift</h3><ul><li>กำหนด width/height หรือ aspect-ratio ให้รูปและ video</li><li>จองพื้นที่สำหรับ Ads, Embed และข้อมูลที่โหลดช้า</li><li>ใช้ transform และ opacity สำหรับ animation ที่ไม่ต้องเปลี่ยน layout</li><li>Skeleton ควรมีขนาดใกล้เคียง content จริง</li><li>Tooltip และ Dropdown ต้องใช้งานด้วย Keyboard และไม่หายเมื่อผู้ใช้เลื่อน pointer ระหว่าง trigger กับ content</li></ul><div class="note warning">Animation ต้องช่วยอธิบายการเปลี่ยนสถานะ ไม่ควรทำให้ช้า รบกวนสมาธิ หรือเป็นอุปสรรคต่อผู้ใช้ที่เปิด Reduced Motion</div></section>

<section class="chapter" id="advanced-tailwind"><h2>21. Tailwind CSS v4 ขั้นสูง</h2><h3>Theme Variables และ Design Tokens</h3><pre class="code">@import "tailwindcss";

@theme {
  --color-brand-500: oklch(62% .2 255);
  --color-brand-600: oklch(55% .21 255);
  --font-display: "Noto Sans Thai", sans-serif;
  --radius-card: 1rem;
}

@utility content-auto {
  content-visibility: auto;
}

@custom-variant theme-dark (&amp;:where([data-theme="dark"] *));</pre><pre class="code">&lt;div class="rounded-[var(--radius-card)] bg-brand-500 p-[clamp(1rem,3vw,2rem)]"&gt;
  Arbitrary values ใช้เมื่อค่าไม่อยู่ใน theme และมีเหตุผลเฉพาะ
&lt;/div&gt;</pre><h3>หลีกเลี่ยง Dynamic Class ที่ตรวจไม่พบ</h3><pre class="code">// ไม่ควร: Tailwind อาจไม่พบชื่อ class ที่ประกอบตอน runtime
const className = 'bg-' + color + '-500'

// ควร: map ไปยังชื่อ class แบบเต็ม
const colors = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  red: 'bg-red-500 hover:bg-red-600'
}</pre><h3>Reusable Component</h3><pre class="code">function Button({ tone = 'primary', className = '', ...props }) {
  const tones = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }
  return &lt;button className={'rounded-lg px-4 py-2 ' + tones[tone] + ' ' + className} {...props} /&gt;
}</pre><ul><li>ใช้ @apply อย่างจำกัดเมื่อจำเป็นต้องเชื่อมกับ third-party markup หรือ CSS API</li><li>สร้าง tokens สำหรับสี spacing typography radius และ shadow ก่อนสร้าง component variants</li><li>ใช้ Dark Theme ผ่าน attribute/class และทดสอบ contrast ทั้งสองธีม</li><li>อย่าสร้าง abstraction เร็วเกินไป รอให้เห็นรูปแบบซ้ำจริงก่อนแยก component</li></ul></section>

<section class="chapter" id="architecture"><h2>22. Design System, Code Quality และ Testing</h2><div class="flow">Tokens → Primitives → Components → Patterns → Pages</div><table><thead><tr><th>ชั้น</th><th>ตัวอย่าง</th></tr></thead><tbody><tr><td>Tokens</td><td>Color, spacing, font, radius, shadow, breakpoint</td></tr><tr><td>Primitives</td><td>Box, Stack, Text, Icon</td></tr><tr><td>Components</td><td>Button, Input, Card, Dialog</td></tr><tr><td>Patterns</td><td>Login form, Search toolbar, Data table</td></tr><tr><td>Pages</td><td>นำ patterns มาประกอบเป็นงานเฉพาะ</td></tr></tbody></table><h3>Component States ที่ต้องออกแบบ</h3><ul><li>Default, hover, focus, active และ disabled</li><li>Loading, empty, error, success และ read-only</li><li>ข้อความสั้น/ยาว, ไม่มีรูป และข้อมูลจำนวนมาก</li><li>Mobile, tablet, desktop, zoom และ high contrast</li><li>Light/dark theme และ reduced motion</li></ul><h3>Testing Layers</h3><ol><li><b>Static:</b> HTML validation, lint และ type checking</li><li><b>Component:</b> Interaction, keyboard และ accessible name</li><li><b>End-to-end:</b> User flow สำคัญบน Browser จริง</li><li><b>Visual regression:</b> ตรวจ layout และ theme หลาย viewport</li><li><b>Audit:</b> Lighthouse, Accessibility scanner และทดสอบด้วย Keyboard/Screen Reader จริง</li></ol></section>

<section class="chapter" id="labs"><h2>23. Hands-on Labs</h2><div class="cards"><div class="card"><strong>Lab 1: Accessible Navigation</strong><br>Skip link, mobile menu, keyboard, focus และ aria-expanded</div><div class="card"><strong>Lab 2: Responsive Landing</strong><br>Semantic sections, responsive images, fluid type และ container</div><div class="card"><strong>Lab 3: Form Validation</strong><br>Labels, hints, errors, aria-invalid และ focus ไป error แรก</div><div class="card"><strong>Lab 4: Modal &amp; Dropdown</strong><br>Dialog, focus trap, Escape, outside click และ reduced motion</div><div class="card"><strong>Lab 5: Dashboard</strong><br>Sidebar, responsive table, filters และทุก data state</div><div class="card"><strong>Lab 6: Theme System</strong><br>Design tokens, light/dark theme และ contrast testing</div><div class="card"><strong>Lab 7: Component Library</strong><br>Button, input, card, alert, dialog และ variants</div><div class="card"><strong>Lab 8: CSS → Tailwind</strong><br>แปลงหน้าเดิมโดยรักษา semantics, accessibility และ visual parity</div></div><h3>เกณฑ์ผ่าน</h3><ol class="steps"><li>ใช้งาน flow หลักได้ด้วย Keyboard โดยไม่ใช้ Mouse</li><li>รองรับ 320px ถึงจอกว้างและ Zoom 200%</li><li>ไม่มี heading ข้ามระดับ, label หาย หรือ focus ที่มองไม่เห็น</li><li>ไม่มี Layout Shift สำคัญเมื่อรูปและข้อมูลโหลด</li><li>Component รองรับ loading, empty, error และข้อความยาว</li><li>ผ่าน Automated Audit และมีการตรวจด้วยมนุษย์</li></ol><div class="note info"><b>Capstone:</b> สร้าง Dashboard Responsive ด้วย Tailwind v4 มี Navigation, Form, Table, Modal, Dark Mode และ Design Tokens พร้อมทดสอบ Keyboard, Accessibility และ Visual Regression</div></section>

</article></div></main></body></html>`;
