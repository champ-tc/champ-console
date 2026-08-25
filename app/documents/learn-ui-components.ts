export const document = `<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1100px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;font-size:14px}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#f7edff,#eefcff 55%,#fff 88%)}.eyebrow{color:#9333ea;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0 8px;font-size:clamp(32px,7vw,52px);line-height:1.2}.hero h1 span{color:#9333ea}.hero p{max-width:760px;margin:0;color:#667085}.layout{display:grid}.toc{padding:22px 20px;background:#fcfaff;border-bottom:1px solid #e8eaf0}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px 20px;margin:10px 0 0;padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{padding:32px 0;border-bottom:1px solid #eceef2}.chapter:last-child{border:0}.chapter h2{margin:0 0 16px;font-size:24px;line-height:1.35}.chapter h3{margin:26px 0 8px;font-size:17px}.chapter p{margin:9px 0}.chapter li{margin:5px 0}.chapter ul,.chapter ol{padding-left:24px}.note{margin:18px 0;padding:14px 16px;border-left:4px solid #9333ea;border-radius:0 12px 12px 0;background:#f7edff}.info{border-color:#0891b2;background:#ecfeff}.warning{border-color:#f59e0b;background:#fffaeb}.danger{border-color:#dc2626;background:#fff0f0}.code{overflow-x:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}.inline{padding:2px 6px;border-radius:5px;background:#eef0f3;font:12px ui-monospace,monospace}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#faf7fd}.cards{display:grid;gap:10px}.card{padding:15px;border:1px solid #e5e8ec;border-radius:14px}.card strong{color:#9333ea}.flow{padding:14px;border-radius:12px;background:#171a21;color:#fff;text-align:center;font:700 12px/1.8 ui-monospace,monospace}.steps{counter-reset:step;list-style:none;padding:0!important}.steps li{counter-increment:step;position:relative;padding:11px 12px 11px 46px;border-radius:12px;background:#f7f8fa}.steps li:before{content:counter(step);position:absolute;left:12px;top:10px;display:grid;width:25px;height:25px;place-items:center;border-radius:50%;background:#9333ea;color:#fff;font-size:12px;font-weight:800}.sources a{color:#6d28d9;font-weight:700}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:250px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border:0;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}.cards{grid-template-columns:repeat(2,1fr)}}
</style></head><body><main class="shell">
<nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav>
<header class="hero"><div class="eyebrow">REACT • DESIGN SYSTEM • MOTION</div><h1>เรียนรู้ <span>UI Components</span></h1><p>Astryx, daisyUI และ ReactBits แบบละเอียด พร้อมหลักการออกแบบ Component API, Accessibility, Theming, Performance และ Testing สำหรับงาน Production</p></header>
<div class="layout"><aside class="toc"><strong>สารบัญบทเรียน</strong><ol><li><a href="#layers">ระบบ UI มีกี่ชั้น</a></li><li><a href="#choose">เลือกเครื่องมืออย่างไร</a></li><li><a href="#compare-tailwind">ตัวอย่างเทียบ Tailwind</a></li><li><a href="#astryx">Astryx</a></li><li><a href="#astryx-workflow">Astryx Workflow</a></li><li><a href="#daisyui">daisyUI v5</a></li><li><a href="#daisy-components">daisyUI Components</a></li><li><a href="#reactbits">ReactBits</a></li><li><a href="#reactbits-motion">Motion และ Effects</a></li><li><a href="#combine">ใช้ร่วมกัน</a></li><li><a href="#api-design">ออกแบบ Component API</a></li><li><a href="#state-patterns">State และ Composition</a></li><li><a href="#a11y">Accessible Components</a></li><li><a href="#forms-data">Forms และ Data UI</a></li><li><a href="#tokens">Tokens และ Themes</a></li><li><a href="#nextjs">Next.js Integration</a></li><li><a href="#performance">Performance</a></li><li><a href="#testing">Testing</a></li><li><a href="#troubleshooting">Troubleshooting</a></li><li><a href="#governance">Governance และ Migration</a></li><li><a href="#labs">Hands-on Labs</a></li><li><a href="#headless">Headless Primitives</a></li><li><a href="#storybook">Storybook และ Docs</a></li><li><a href="#i18n">Internationalization</a></li><li><a href="#advanced-data">Advanced Data UI</a></li><li><a href="#drag-drop">Drag, Drop และ Gestures</a></li><li><a href="#charts">Charts และ Visualization</a></li><li><a href="#ui-security">UI Security</a></li><li><a href="#distribution">Package Distribution</a></li></ol></aside><article class="content">

<section class="chapter" id="layers"><h2>1. ระบบ UI มีกี่ชั้น</h2><p>คำว่า UI Library ครอบคลุมเครื่องมือหลายประเภทซึ่งแก้ปัญหาคนละชั้น การเข้าใจชั้นเหล่านี้ช่วยป้องกันการติดตั้งหลายระบบที่ทำหน้าที่ซ้ำกัน</p><table><thead><tr><th>ชั้น</th><th>หน้าที่</th><th>ตัวอย่าง</th></tr></thead><tbody><tr><td>Design Tokens</td><td>สี, Typography, Spacing, Radius, Motion</td><td>CSS variables, Tailwind theme</td></tr><tr><td>Styling utilities</td><td>ประกอบหน้าตาจาก classes</td><td>Tailwind CSS</td></tr><tr><td>Styled components</td><td>Class สำเร็จรูปสำหรับ Button, Card, Input</td><td>daisyUI</td></tr><tr><td>Accessible primitives</td><td>Behavior, keyboard และ focus ของ interactive UI</td><td>Headless primitives</td></tr><tr><td>Design system</td><td>Components + Tokens + Rules + Documentation</td><td>Astryx</td></tr><tr><td>Motion/creative UI</td><td>Text animation, background และ visual effects</td><td>ReactBits</td></tr></tbody></table><div class="flow">Tokens → Primitives → Components → Patterns → Pages → Product</div></section>

<section class="chapter" id="choose"><h2>2. เลือกเครื่องมืออย่างไร</h2><table><thead><tr><th>ความต้องการ</th><th>ตัวเลือกเริ่มต้น</th><th>เหตุผล</th></tr></thead><tbody><tr><td>Prototype ให้เร็ว</td><td>daisyUI</td><td>ใช้ class สำเร็จรูปและไม่มี React API เพิ่ม</td></tr><tr><td>Internal tool ที่ต้องสม่ำเสมอ</td><td>Astryx</td><td>มี component, theme, template และ agent tooling</td></tr><tr><td>Landing page ที่ต้องการความโดดเด่น</td><td>ReactBits แบบเลือกใช้</td><td>มี motion และ background สำเร็จรูป</td></tr><tr><td>ระบบธุรกรรม Critical</td><td>Stable primitives + ระบบของทีม</td><td>ควบคุม accessibility, version และ regression ได้มากกว่า</td></tr><tr><td>ทีมหลายผลิตภัณฑ์</td><td>Design system + Governance</td><td>ลดการสร้าง component ซ้ำและควบคุม migration</td></tr></tbody></table><h3>คำถามก่อนเพิ่ม Library</h3><ul><li>แก้ปัญหาที่ระบบปัจจุบันยังแก้ไม่ได้จริงหรือไม่</li><li>Component รองรับ Keyboard, Screen Reader และ mobile หรือไม่</li><li>ใครเป็นเจ้าของ source code และการอัปเดต</li><li>Bundle, CSS engine และ dependency เพิ่มขึ้นเท่าไร</li><li>มีวิธี migrate เมื่อ API เปลี่ยนหรือไม่</li><li>License อนุญาตการใช้งานในผลิตภัณฑ์นี้หรือไม่</li></ul></section>

<section class="chapter" id="compare-tailwind"><h2>2.1 ตัวอย่างเปรียบเทียบกับ Tailwind CSS ปกติ</h2><p><b>Tailwind CSS เป็นชุด Utility Classes</b> ที่แทน CSS properties เช่น padding, color และ layout เท่านั้น ส่วน Astryx, daisyUI และ ReactBits เพิ่ม abstraction คนละแบบเหนือ Tailwind</p><table><thead><tr><th>ระบบ</th><th>สิ่งที่ได้รับเพิ่มจาก Tailwind</th><th>สิ่งที่ยังต้องทำเอง</th></tr></thead><tbody><tr><td>Tailwind CSS</td><td>Utilities และ Design Tokens ระดับ CSS</td><td>Markup, component API, state, keyboard และ accessibility</td></tr><tr><td>daisyUI</td><td>ชื่อ class ระดับ component และ themes</td><td>React logic และ accessible behavior ของ widget ซับซ้อน</td></tr><tr><td>Astryx</td><td>React components, behavior, theme, docs และ templates</td><td>Product composition, content และการทดสอบ integration</td></tr><tr><td>ReactBits</td><td>Source code ของ animation/effect สำเร็จรูป</td><td>Review source, dependencies, fallback, performance และ maintenance</td></tr></tbody></table>

<h3>ตัวอย่างที่ 1: Button</h3><p><b>Tailwind ปกติ</b> — เราเขียนทุก utility และต้องสร้าง convention เอง:</p><pre class="code">&lt;button
  className="inline-flex items-center justify-center rounded-lg
    bg-blue-600 px-4 py-2 text-sm font-semibold text-white
    hover:bg-blue-700 focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-blue-600
    disabled:cursor-not-allowed disabled:opacity-50"
&gt;
  บันทึก
&lt;/button&gt;</pre><p><b>daisyUI</b> — ย่อ styling convention เหลือ semantic classes แต่ยังเป็น HTML button ปกติ:</p><pre class="code">&lt;button className="btn btn-primary"&gt;บันทึก&lt;/button&gt;
&lt;button className="btn btn-error" disabled&gt;ลบ&lt;/button&gt;</pre><p><b>Astryx</b> — import React component ที่มี API และ design-system convention:</p><pre class="code">import { Button } from '@astryxdesign/core/Button';

&lt;Button variant="primary" onClick={handleSave}&gt;
  บันทึก
&lt;/Button&gt;</pre><div class="note"><b>ต่างกันตรงไหน:</b> Tailwind และ daisyUI กำหนดหน้าตาให้ element ส่วน Astryx ให้ component contract ด้วย แต่ทุกกรณียังต้องใส่ข้อความ, handler และ business logic ที่ถูกต้อง</div>

<h3>ตัวอย่างที่ 2: Card</h3><p><b>Tailwind ปกติ</b>:</p><pre class="code">&lt;article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"&gt;
  &lt;h2 className="text-xl font-bold text-slate-900"&gt;รายงานยอดขาย&lt;/h2&gt;
  &lt;p className="mt-2 text-sm text-slate-600"&gt;ยอดขายเพิ่มขึ้น 18%&lt;/p&gt;
  &lt;div className="mt-4 flex justify-end"&gt;
    &lt;button className="rounded-lg bg-blue-600 px-4 py-2 text-white"&gt;เปิด&lt;/button&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre><p><b>daisyUI</b>:</p><pre class="code">&lt;article className="card bg-base-100 shadow-sm"&gt;
  &lt;div className="card-body"&gt;
    &lt;h2 className="card-title"&gt;รายงานยอดขาย&lt;/h2&gt;
    &lt;p&gt;ยอดขายเพิ่มขึ้น 18%&lt;/p&gt;
    &lt;div className="card-actions justify-end"&gt;
      &lt;button className="btn btn-primary"&gt;เปิด&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre><p>Card เป็น static presentation จึงเห็นประโยชน์ของ daisyUI ชัด: class สั้นและ theme-aware โดยไม่ต้องเพิ่ม React runtime component</p>

<h3>ตัวอย่างที่ 3: Dialog</h3><p><b>Tailwind ปกติ</b> ให้เพียงหน้าตา Overlay/Panel โค้ดด้านล่างยังไม่ครบ focus trap, Escape, portal และ restore focus:</p><pre class="code">{open &amp;&amp; (
  &lt;div className="fixed inset-0 grid place-items-center bg-black/50"&gt;
    &lt;div className="w-full max-w-md rounded-xl bg-white p-6"&gt;
      &lt;h2 className="text-xl font-bold"&gt;ยืนยันการลบ&lt;/h2&gt;
      &lt;button onClick={() =&gt; setOpen(false)}&gt;ปิด&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
)}</pre><p><b>Headless Primitive หรือ Design System</b> เหมาะกว่า เพราะ behavior ซับซ้อน:</p><pre class="code">&lt;Dialog.Root open={open} onOpenChange={setOpen}&gt;
  &lt;Dialog.Trigger className="btn btn-error"&gt;ลบ&lt;/Dialog.Trigger&gt;
  &lt;Dialog.Portal&gt;
    &lt;Dialog.Backdrop className="fixed inset-0 bg-black/50" /&gt;
    &lt;Dialog.Popup className="rounded-xl bg-white p-6"&gt;
      &lt;Dialog.Title&gt;ยืนยันการลบ&lt;/Dialog.Title&gt;
      &lt;Dialog.Close className="btn"&gt;ยกเลิก&lt;/Dialog.Close&gt;
    &lt;/Dialog.Popup&gt;
  &lt;/Dialog.Portal&gt;
&lt;/Dialog.Root&gt;</pre><div class="note warning">หน้าตาเหมือน Dialog ไม่ได้แปลว่าเป็น Dialog ที่เข้าถึงได้ สำหรับ widget ซับซ้อน Tailwind/daisyUI ควรใช้ร่วมกับ native element หรือ headless primitive ที่ดูแล behavior</div>

<h3>ตัวอย่างที่ 4: Animated Hero ด้วย ReactBits</h3><p><b>Tailwind ปกติ</b> สร้าง layout, typography และ transition ง่าย ๆ:</p><pre class="code">&lt;section className="grid min-h-screen place-items-center bg-slate-950 text-white"&gt;
  &lt;h1 className="text-5xl font-bold transition hover:scale-105"&gt;
    สร้างสิ่งที่ยิ่งใหญ่
  &lt;/h1&gt;
&lt;/section&gt;</pre><p><b>ReactBits</b> เพิ่ม animation algorithm ที่ซับซ้อนและนำ source เข้ามาแก้ได้:</p><pre class="code">import SplitText from '@/components/reactbits/SplitText';
import Aurora from '@/components/reactbits/Aurora';

&lt;section className="relative grid min-h-screen place-items-center overflow-hidden"&gt;
  &lt;Aurora aria-hidden="true" /&gt;
  &lt;SplitText
    text="สร้างสิ่งที่ยิ่งใหญ่"
    className="relative text-5xl font-bold"
    delay={45}
  /&gt;
&lt;/section&gt;</pre><p>ReactBits ไม่แทน Tailwind: Tailwind ยังจัด layout และ style ส่วน ReactBits ดูแล motion/effect ต้องเพิ่ม static fallback และรองรับ <span class="inline">prefers-reduced-motion</span></p>

<h3>สรุปเลือกใช้จากงานเดียวกัน</h3><table><thead><tr><th>งาน</th><th>เลือก</th></tr></thead><tbody><tr><td>จัด spacing, grid, responsive</td><td>Tailwind CSS</td></tr><tr><td>ปุ่ม/การ์ดเร็ว ๆ และเปลี่ยน theme</td><td>daisyUI + Tailwind</td></tr><tr><td>Dialog, Menu, Form และระบบ Internal Tool</td><td>Astryx หรือ Headless Primitive + Tailwind</td></tr><tr><td>Hero, animated text หรือ decorative background</td><td>ReactBits + Tailwind แบบเลือกใช้</td></tr><tr><td>ต้องการควบคุมทุก pixel โดยไม่เพิ่ม library</td><td>Tailwind ปกติ + components ของทีม</td></tr></tbody></table></section>

<section class="chapter" id="astryx"><h2>3. Astryx Design System</h2><p>Astryx เป็น Open-source Design System สำหรับ React ที่ใช้ StyleX ในการพัฒนา styles แต่แจกจ่าย CSS ที่ compile แล้ว ผู้ใช้จึงสามารถใช้งานกับ Tailwind, CSS Modules หรือ CSS ปกติได้ ปัจจุบันยังอยู่สถานะ <b>Beta</b> และต้องใช้ React 19 ขึ้นไป</p><h3>ติดตั้งแบบ Next.js</h3><pre class="code">npm install @astryxdesign/core @astryxdesign/theme-neutral @stylexjs/stylex
npm install -D @astryxdesign/cli</pre><pre class="code">/* app/globals.css — ลำดับ import มีความสำคัญ */
@import '@astryxdesign/core/reset.css';
@import '@astryxdesign/core/astryx.css';
@import '@astryxdesign/theme-neutral/theme.css';</pre><pre class="code">'use client';

import Link from 'next/link';
import { Theme } from '@astryxdesign/core/theme';
import { LinkProvider } from '@astryxdesign/core/Link';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';

export function Providers({ children }) {
  return (
    &lt;Theme theme={neutralTheme}&gt;
      &lt;LinkProvider component={Link}&gt;{children}&lt;/LinkProvider&gt;
    &lt;/Theme&gt;
  );
}</pre><div class="note warning">Astryx ยังเป็น Beta ควร pin version, ทดสอบ visual/accessibility regression และทดลองในพื้นที่เสี่ยงต่ำก่อนนำไปใช้กับ flow สำคัญ</div></section>

<section class="chapter" id="astryx-workflow"><h2>4. Astryx CLI, Themes และ Workflow</h2><pre class="code"># ใช้ scoped package ได้โดยไม่ต้องติดตั้งล่วงหน้า
npx @astryxdesign/cli --help
npx @astryxdesign/cli init
npx @astryxdesign/cli search button
npx @astryxdesign/cli component Button
npx @astryxdesign/cli component --list
npx @astryxdesign/cli docs tokens
npx @astryxdesign/cli template --list

# หลังติดตั้ง CLI เป็น dependency แล้วจึงใช้ชื่อสั้นได้
npx astryx component Dialog</pre><p><span class="inline">init</span> เขียน component index ลง AGENTS.md/CLAUDE.md เพื่อให้คนและ AI ใช้เอกสารชุดเดียวกัน ส่วน component command แสดง API, variants และตัวอย่างโดยไม่ต้องเดา prop</p><h3>แนวทางใช้งาน</h3><ol><li>เลือกและติดตั้ง theme เพียงชุดที่ต้องใช้</li><li>วาง Theme/Link provider ที่ client boundary ระดับบน</li><li>ค้น component ผ่าน CLI ก่อนสร้างของใหม่</li><li>Import ผ่าน per-component entry เมื่อเอกสารแนะนำเพื่อช่วย tree-shaking</li><li>เก็บ override ใน tokens/className ก่อน fork component</li><li>บันทึก version และ migration notes ทุกครั้งที่ upgrade</li></ol></section>

<section class="chapter" id="daisyui"><h2>5. daisyUI v5 บน Tailwind CSS v4</h2><p>daisyUI เป็น Tailwind plugin ที่เพิ่ม semantic component classes เช่น <span class="inline">btn</span>, <span class="inline">card</span> และ <span class="inline">input</span> โดยไม่มี React state หรือ interaction logic ให้โดยอัตโนมัติ</p><pre class="code">npm install -D daisyui@latest

/* app.css */
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
  logs: false;
}</pre><pre class="code">&lt;button class="btn btn-primary btn-lg"&gt;บันทึก&lt;/button&gt;

&lt;article class="card bg-base-100 shadow-md"&gt;
  &lt;div class="card-body"&gt;
    &lt;h2 class="card-title"&gt;หัวข้อ&lt;/h2&gt;
    &lt;p&gt;รายละเอียด&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre><ul><li>ใช้ semantic colors เช่น primary, base-100 และ error เพื่อให้เปลี่ยน theme ได้</li><li>ใช้ Tailwind utilities เติม layout/spacing เฉพาะจุดได้</li><li>เปิดเฉพาะ themes ที่ใช้จริง</li><li>การมี class ชื่อ modal หรือ dropdown ไม่ได้แปลว่า behavior และ accessibility ครบ</li></ul></section>

<section class="chapter" id="daisy-components"><h2>6. daisyUI Components และ React Patterns</h2><table><thead><tr><th>หมวด</th><th>ตัวอย่าง</th></tr></thead><tbody><tr><td>Actions</td><td>button, dropdown, modal, fab</td></tr><tr><td>Data display</td><td>card, list, table, stat, badge, status</td></tr><tr><td>Data input</td><td>input, select, checkbox, toggle, fieldset</td></tr><tr><td>Navigation</td><td>navbar, menu, breadcrumbs, tabs, pagination</td></tr><tr><td>Layout</td><td>drawer, hero, join, stack, divider</td></tr><tr><td>Feedback</td><td>alert, loading, progress, toast</td></tr></tbody></table><pre class="code">function Button({ tone = 'primary', loading, children, ...props }) {
  const tones = {
    primary: 'btn-primary',
    danger: 'btn-error'
  };
  return (
    &lt;button
      className={'btn ' + tones[tone]}
      disabled={loading || props.disabled}
      aria-busy={loading || undefined}
      {...props}
    &gt;
      {loading &amp;&amp; &lt;span className="loading loading-spinner" /&gt;}
      {children}
    &lt;/button&gt;
  );
}</pre><div class="note">daisyUI ดูแลหน้าตา ส่วน React component ของเราต้องดูแล state, event, validation และ accessible behavior อย่างชัดเจน</div></section>

<section class="chapter" id="reactbits"><h2>7. ReactBits: Copy-source Animated Components</h2><p>ReactBits เป็นคลัง Animated React Components, Text Effects, Backgrounds และ Creative UI การติดตั้งนำ source code เข้ามาใน repository ทำให้แก้ไขและเป็นเจ้าของโค้ดได้ แต่ทีมต้องรับผิดชอบ dependency, security และการอัปเดตต่อเอง</p><h3>วิธีเลือก Component</h3><ol><li>เปิดตัวอย่างและตรวจบนมือถือ</li><li>เลือก TypeScript + Tailwind หรือ CSS ให้ตรง stack</li><li>อ่าน source และ imports ก่อนเพิ่ม</li><li>ตรวจ license และ dependency เช่น GSAP, OGL หรือ Three.js</li><li>เพิ่มเข้าโฟลเดอร์ที่มี ownership ชัดเจน</li><li>เขียน wrapper เพื่อกำหนด API ของผลิตภัณฑ์</li></ol><pre class="code">// ตัวอย่างแนวคิดหลังนำ source เข้าโปรเจกต์
import SplitText from '@/components/reactbits/SplitText';

export function HeroTitle() {
  return (
    &lt;SplitText
      text="ยินดีต้อนรับ"
      className="text-4xl font-bold"
      delay={50}
      duration={0.6}
    /&gt;
  );
}</pre><div class="note warning">เว็บไซต์และ registry อาจปรับวิธีติดตั้งตามรุ่น ให้ใช้คำสั่งจากหน้า component ปัจจุบัน และ review diff ทุกครั้งก่อนนำ source เข้ามา</div></section>

<section class="chapter" id="reactbits-motion"><h2>8. Motion, WebGL และ Creative Effects</h2><table><thead><tr><th>ประเภท</th><th>เหมาะกับ</th><th>ความเสี่ยง</th></tr></thead><tbody><tr><td>Text animation</td><td>Hero heading หรือ campaign</td><td>อ่านไม่ทัน, Screen Reader ซ้ำ</td></tr><tr><td>Hover/magnetic</td><td>CTA สำคัญบน pointer device</td><td>ใช้ไม่ได้บน touch/keyboard</td></tr><tr><td>Scroll animation</td><td>Storytelling</td><td>Scroll jank และ motion sickness</td></tr><tr><td>WebGL background</td><td>Landing page เฉพาะจุด</td><td>GPU, battery และ bundle สูง</td></tr><tr><td>Particle/cursor</td><td>Decorative campaign</td><td>บดบัง content และ pointer</td></tr></tbody></table><h3>Reduced Motion และ Progressive Enhancement</h3><pre class="code">function MotionHero() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return reduce ? &lt;StaticHero /&gt; : &lt;AnimatedHero /&gt;;
}

@media (prefers-reduced-motion: reduce) {
  .animated { animation: none; transform: none; }
}</pre><ul><li>Content และ CTA ต้องใช้งานได้แม้ effect โหลดไม่สำเร็จ</li><li>Decorative canvas ใช้ aria-hidden และไม่รับ pointer event</li><li>Pause effect เมื่อ tab/background หรือ component นอก viewport</li><li>วัด FPS, CPU/GPU, memory และ battery บนอุปกรณ์ระดับกลาง</li><li>อย่า animation ข้อความจน DOM/Screen Reader อ่านซ้ำ</li></ul></section>

<section class="chapter" id="combine"><h2>9. ใช้ Astryx, daisyUI และ ReactBits ร่วมกัน</h2><div class="flow">Astryx: Structure &amp; Behavior → daisyUI/Tailwind: Styling → ReactBits: Selective Motion</div><h3>กติกาก่อนผสม</h3><ol><li>กำหนดระบบเดียวเป็นเจ้าของ Design Tokens และ Theme</li><li>กำหนดระบบเดียวเป็นเจ้าของ component แต่ละชนิด เช่น Button ห้ามมีสามเวอร์ชันโดยไม่มีเหตุผล</li><li>ใช้ ReactBits เฉพาะ decorative/marketing zones ไม่ครอบ flow ธุรกรรม</li><li>แปลงสีและ spacing ผ่าน CSS variables แทนการ hard-code ข้ามระบบ</li><li>สร้าง Integration Sandbox ทดสอบ CSS order, reset, portal, dark mode และ SSR</li></ol><pre class="code">:root {
  --product-primary: oklch(58% .22 285);
  --product-surface: white;
}

/* ให้ทุกระบบอ่าน token กลาง ไม่ซิงก์ theme แยกกันด้วยมือ */
[data-theme="product"] {
  --color-primary: var(--product-primary);
  --color-base-100: var(--product-surface);
}</pre><div class="note danger">อย่าให้ Astryx theme และ daisyUI theme แข่งขันควบคุมสีใน subtree เดียวกันโดยไม่มี mapping เพราะ UI จะเปลี่ยนไม่พร้อมกันและ debug ยาก</div></section>

<section class="chapter" id="api-design"><h2>10. ออกแบบ Component API</h2><p>Component ที่ดีทำสิ่งสำคัญให้ง่าย สิ่งที่ไม่รองรับให้ทำยาก และมี API ที่คาดเดาได้</p><pre class="code">type ButtonProps = {
  tone?: 'primary' | 'neutral' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  children: React.ReactNode;
} &amp; React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;;

function Button({ tone = 'primary', size = 'md', loading, ...props }: ButtonProps) {
  return &lt;button data-tone={tone} data-size={size} aria-busy={loading} {...props} /&gt;;
}</pre><h3>หลักการ</h3><ul><li>ใช้ชื่อ prop ตาม domain เช่น tone, size, loading ไม่ผูกกับสี hard-coded</li><li>Forward native props, ref และ event ที่จำเป็น</li><li>ใช้ children/slots สำหรับ content แทน prop จำนวนมาก</li><li>แยก visual variant ออกจาก state เช่น disabled/loading/selected</li><li>กำหนด default ที่ปลอดภัยและ accessible</li><li>ไม่ expose implementation detail ของ library ภายในโดยไม่จำเป็น</li></ul></section>

<section class="chapter" id="state-patterns"><h2>11. Controlled, Uncontrolled และ Composition</h2><h3>Controlled State</h3><pre class="code">function Tabs({ value, onValueChange, children }) {
  return &lt;TabsContext value={{ value, onValueChange }}&gt;{children}&lt;/TabsContext&gt;;
}

&lt;Tabs value={tab} onValueChange={setTab}&gt;...&lt;/Tabs&gt;</pre><h3>Uncontrolled State</h3><pre class="code">&lt;Accordion defaultValue="billing"&gt;...&lt;/Accordion&gt;</pre><table><thead><tr><th>รูปแบบ</th><th>ใช้เมื่อ</th></tr></thead><tbody><tr><td>Controlled</td><td>Parent ต้อง sync URL, form หรือ business state</td></tr><tr><td>Uncontrolled</td><td>State เป็นรายละเอียดภายในและต้องการ API ง่าย</td></tr><tr><td>Compound components</td><td>Tabs, Menu, Dialog ที่มีหลายส่วนประกอบร่วม context</td></tr><tr><td>Render prop</td><td>ผู้ใช้ต้องควบคุม markup ตาม internal state</td></tr><tr><td>Slot/asChild</td><td>ต้องเปลี่ยน element โดยรักษา behavior; ต้องระวัง semantics</td></tr></tbody></table><div class="note">Component ที่รองรับทั้ง controlled และ uncontrolled ต้องห้ามสลับโหมดระหว่าง lifecycle และต้องกำหนด behavior ของ defaultValue ชัดเจน</div></section>

<section class="chapter" id="a11y"><h2>12. Accessible Interactive Components</h2><table><thead><tr><th>Component</th><th>Behavior สำคัญ</th></tr></thead><tbody><tr><td>Dialog</td><td>ย้าย/กัก/คืน focus, Escape, aria-modal, label</td></tr><tr><td>Menu</td><td>Arrow keys, Home/End, typeahead, Escape</td></tr><tr><td>Tabs</td><td>tablist/tab/tabpanel, arrow navigation, selected state</td></tr><tr><td>Combobox</td><td>Input + popup relationship, active descendant, filtering</td></tr><tr><td>Tooltip</td><td>Hover และ focus, delay, Escape, ไม่ใส่ content ที่ต้องโต้ตอบ</td></tr><tr><td>Toast</td><td>Live region ที่เหมาะสม, pause, dismiss และเวลาพออ่าน</td></tr></tbody></table><h3>Dialog Checklist</h3><pre class="code">&lt;button aria-haspopup="dialog"&gt;เปิด&lt;/button&gt;
&lt;div role="dialog" aria-modal="true" aria-labelledby="dialog-title"&gt;
  &lt;h2 id="dialog-title"&gt;แก้ไขโปรไฟล์&lt;/h2&gt;
  ...
  &lt;button&gt;ปิด&lt;/button&gt;
&lt;/div&gt;</pre><div class="note warning">ARIA เพิ่ม semantics แต่ไม่สร้าง keyboard, focus หรือ dismissal behavior ให้เอง หาก library ให้เฉพาะ CSS ต้อง implement และทดสอบ behavior เหล่านี้แยกต่างหาก</div></section>

<section class="chapter" id="forms-data"><h2>13. Forms, Tables และ Data-heavy UI</h2><h3>Form Field Contract</h3><pre class="code">type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactElement;
};</pre><ul><li>Label, hint และ error ต้องเชื่อมกับ input ผ่าน id/aria-describedby</li><li>Error summary ด้านบนควร link/focus ไป field ที่ผิด</li><li>Loading submit ต้องป้องกันซ้ำและยังคงข้อความปุ่มที่เข้าใจได้</li><li>ใช้ native input semantics ก่อนสร้าง custom select/date picker</li></ul><h3>Data Table States</h3><div class="cards"><div class="card"><strong>Loading</strong><br>Skeleton ที่รักษาขนาด layout และมี status text</div><div class="card"><strong>Empty</strong><br>บอกเหตุผลและ next action</div><div class="card"><strong>Error</strong><br>ข้อความที่ทำอะไรต่อได้และปุ่ม retry</div><div class="card"><strong>Success</strong><br>Sort, filter, pagination และ selection ที่ใช้ keyboard ได้</div></div><p>ตารางบนมือถือควรเลือกว่าจะ scroll แนวนอน, ลดคอลัมน์, เปิด detail หรือเปลี่ยนเป็น cards โดยคงความสัมพันธ์ของข้อมูล ไม่ซ่อนคอลัมน์สำคัญโดยไม่แจ้งผู้ใช้</p></section>

<section class="chapter" id="tokens"><h2>14. Design Tokens และ Multi-theme</h2><pre class="code">:root {
  --color-bg: oklch(99% .005 280);
  --color-text: oklch(22% .02 280);
  --color-action: oklch(58% .22 285);
  --space-2: .5rem;
  --space-4: 1rem;
  --radius-control: .625rem;
  --duration-fast: 120ms;
}

[data-theme="dark"] {
  --color-bg: oklch(18% .02 280);
  --color-text: oklch(94% .01 280);
}</pre><h3>Token Layers</h3><table><tbody><tr><th>Primitive</th><td>purple-600, spacing-4 — ค่า raw</td></tr><tr><th>Semantic</th><td>action-primary, text-muted — หน้าที่</td></tr><tr><th>Component</th><td>button-primary-bg — override เฉพาะ component</td></tr></tbody></table><ul><li>Component ใช้ semantic token ไม่ใช้ primitive โดยตรง</li><li>ทดสอบ contrast และ state ครบทุก theme</li><li>Token change ต้องมี changelog เพราะกระทบทั้งระบบ</li><li>หลีกเลี่ยงสร้าง token สำหรับทุกค่าจนหาไม่เจอว่าอะไรคือมาตรฐาน</li></ul></section>

<section class="chapter" id="nextjs"><h2>15. Next.js: Server/Client Boundaries และ Hydration</h2><p>UI ที่เป็นเพียง markup สามารถอยู่ใน Server Component ได้ แต่ component ที่ใช้ state, effect, event handler, browser API หรือ animation runtime ต้องอยู่หลัง <span class="inline">'use client'</span></p><pre class="code">// app/components/interactive-hero.tsx
'use client';

import dynamic from 'next/dynamic';

const Aurora = dynamic(() =&gt; import('./reactbits/Aurora'), {
  ssr: false,
  loading: () =&gt; &lt;div className="min-h-96 bg-base-200" /&gt;
});

export function InteractiveHero() {
  return &lt;Aurora /&gt;;
}</pre><h3>ป้องกัน Hydration Mismatch</h3><ul><li>ไม่อ่าน window, localStorage, Date.now หรือ random ระหว่าง server render</li><li>Theme script ต้องกำหนด theme ก่อน paint หรือใช้กลยุทธ์ที่ framework รองรับ</li><li>Portal target ต้องมีหลัง mount</li><li>สร้าง IDs ด้วย API ที่รองรับ SSR เช่น useId</li><li>อย่าส่ง component/function ที่ serialize ไม่ได้ข้าม Server → Client boundary</li></ul></section>

<section class="chapter" id="performance"><h2>16. Performance และ Bundle Budget</h2><ol><li>วัด bundle ก่อน optimize</li><li>Import component เฉพาะที่ใช้และตรวจ tree-shaking</li><li>Lazy-load เฉพาะ WebGL, chart หรือ effect ที่หนัก</li><li>คง headline และ CTA เป็น HTML ปกติ ไม่รอ animation bundle</li><li>หยุด animation นอก viewport/hidden tab และรองรับ reduced motion</li><li>จำกัด themes, fonts และ icon sets ที่โหลด</li></ol><pre class="code">// Route-level หรือ component-level split สำหรับ effect หนัก
const HeavyBackground = lazy(() =&gt; import('./HeavyBackground'));

&lt;Suspense fallback={&lt;StaticBackground /&gt;}&gt;
  &lt;HeavyBackground /&gt;
&lt;/Suspense&gt;</pre><table><thead><tr><th>วัดอะไร</th><th>สัญญาณเตือน</th></tr></thead><tbody><tr><td>JS Bundle</td><td>Library หนึ่งตัวเข้า main chunk ทั้งชุด</td></tr><tr><td>CSS</td><td>Theme/component ที่ไม่ใช้ถูก include</td></tr><tr><td>Main thread</td><td>Animation ทำ long tasks ต่อเนื่อง</td></tr><tr><td>GPU/Memory</td><td>Canvas/WebGL ไม่ cleanup หลัง unmount</td></tr><tr><td>Web Vitals</td><td>Hero effect กระทบ LCP, INP หรือ CLS</td></tr></tbody></table></section>

<section class="chapter" id="testing"><h2>17. Testing UI Components</h2><div class="flow">Types → Unit → Interaction → Accessibility → Visual → E2E → Performance</div><h3>Test Matrix</h3><ul><li>ทุก variant, size และ state</li><li>Keyboard: Tab, Shift+Tab, Enter, Space, Escape, Arrow keys</li><li>Screen Reader name/role/state</li><li>Mobile, touch, zoom 200% และข้อความยาว</li><li>Light/dark/high contrast/reduced motion</li><li>SSR + hydration และ client navigation</li><li>Error boundary, delayed data และ dependency failure</li></ul><pre class="code">it('closes dialog with Escape and restores focus', async () =&gt; {
  render(&lt;ProfileDialog /&gt;);
  await user.click(screen.getByRole('button', { name: /แก้ไข/ }));
  expect(screen.getByRole('dialog')).toBeVisible();
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /แก้ไข/ })).toHaveFocus();
});</pre><div class="note">Snapshot markup อย่างเดียวไม่ยืนยันว่า component ใช้งานได้ ควรทดสอบจาก role, accessible name และพฤติกรรมที่ผู้ใช้ทำจริง</div></section>

<section class="chapter" id="troubleshooting"><h2>18. Troubleshooting</h2><table><thead><tr><th>อาการ</th><th>ตรวจสอบ</th></tr></thead><tbody><tr><td>Class หายใน Production</td><td>Tailwind source detection และ dynamic class</td></tr><tr><td>Theme ไม่เปลี่ยน</td><td>data-theme, provider boundary และ CSS variable override</td></tr><tr><td>Style ชนกัน</td><td>Reset, cascade layer, import order และ specificity</td></tr><tr><td>Hydration error</td><td>Browser API/random/time ระหว่าง SSR</td></tr><tr><td>Dialog อยู่หลัง overlay</td><td>Portal root, stacking context และ z-index token</td></tr><tr><td>Module not found</td><td>Dependency ของ copied component เช่น GSAP/OGL</td></tr><tr><td>Animation กระตุก</td><td>Layout-triggering properties, canvas size และ cleanup</td></tr></tbody></table><pre class="code">/* Tailwind v4: ลงทะเบียน source ภายนอกที่ scanner ไม่พบ */
@source "../src/components/reactbits";

// ห้ามประกอบ class แบบครึ่งคำ
const colorMap = {
  primary: 'btn-primary',
  secondary: 'btn-secondary'
};</pre><h3>Debug Flow</h3><ol class="steps"><li>ตรวจ DOM ว่า element, class และ attributes มีจริง</li><li>ตรวจ computed styles และ rule ที่ override</li><li>ค้น class ใน generated CSS</li><li>ลด component ให้เหลือตัวอย่างเล็กที่สุด</li><li>ตรวจ client/server boundary และ console</li><li>สร้าง regression test ก่อนแก้</li></ol></section>

<section class="chapter" id="governance"><h2>19. Governance, Ownership และ Migration</h2><p>Component Library จะลดงานได้จริงเมื่อมีระบบดูแล ไม่ใช่เพียงโฟลเดอร์ที่รวม components</p><h3>สิ่งที่ต้องกำหนด</h3><ul><li><b>Owner:</b> ใคร review API, accessibility และ dependency</li><li><b>Definition of Done:</b> docs, tests, states, responsive และ changelog</li><li><b>Versioning:</b> อะไรคือ breaking change และ deprecation period</li><li><b>Contribution:</b> เมื่อใดควรเพิ่ม variant กับเมื่อใดควรสร้าง component ใหม่</li><li><b>Adoption metrics:</b> จำนวน component ซ้ำ, version drift และ defects</li><li><b>Security:</b> update cadence, SBOM, license และ source review</li></ul><h3>Migration Strategy</h3><ol><li>ทำ inventory component เดิมและจัดกลุ่มซ้ำ</li><li>กำหนด target API กับ token mapping</li><li>สร้าง adapter สำหรับ flow ที่ย้ายทีเดียวไม่ได้</li><li>ย้าย component ง่ายก่อน เช่น Badge/Button แล้วจึง Form/Dialog</li><li>ใช้ visual/interaction regression ป้องกันความเสียหาย</li><li>ประกาศ deprecation และลบเมื่อ consumer ย้ายครบ</li></ol></section>

<section class="chapter" id="labs"><h2>20. Hands-on Labs</h2><div class="cards"><div class="card"><strong>Lab 1: daisyUI Dashboard</strong><br>Navbar, Drawer, Stats, Table และ responsive states</div><div class="card"><strong>Lab 2: Accessible Dialog</strong><br>Focus trap, Escape, portal, scroll lock และ restore focus</div><div class="card"><strong>Lab 3: Astryx Internal Tool</strong><br>Theme, provider, template, form และ CLI docs</div><div class="card"><strong>Lab 4: ReactBits Hero</strong><br>Static fallback, reduced motion, lazy loading และ bundle analysis</div><div class="card"><strong>Lab 5: Form System</strong><br>Field contract, validation, error summary และ async submit</div><div class="card"><strong>Lab 6: Token Bridge</strong><br>Theme กลางเชื่อม Astryx/daisyUI โดยไม่ให้สีชนกัน</div><div class="card"><strong>Lab 7: Component Tests</strong><br>Keyboard, accessibility, visual, hydration และ mobile</div><div class="card"><strong>Lab 8: Migration</strong><br>ย้าย UI เดิมแบบ adapter + deprecation + regression</div></div><h3>Capstone: Production Component System</h3><ol class="steps"><li>กำหนด tokens, theme และ ownership</li><li>สร้าง Button, Field, Dialog, Tabs, Toast และ Data Table</li><li>ทำ Story/Docs ครบ variants และ states</li><li>ทดสอบ Keyboard, Screen Reader, dark mode และ reduced motion</li><li>เพิ่ม ReactBits effect หนึ่งจุดพร้อม static fallback</li><li>วัด bundle/Web Vitals และตั้ง performance budget</li><li>เขียน migration guide และ release changelog</li></ol><div class="note info"><b>เป้าหมาย:</b> ผู้ใช้ทำ flow สำคัญได้แม้ CSS, animation หรือ JavaScript บางส่วนล้มเหลว และทีมสามารถ upgrade library โดยมีหลักฐานจาก tests ไม่ใช่การคาดเดา</div></section>

<section class="chapter" id="headless"><h2>21. Headless UI Primitives</h2><p>Headless library ให้ behavior, state, semantics, keyboard และ focus management แต่ไม่กำหนดหน้าตา จึงเหมาะเป็นฐานของ Design System ที่ต้องมีเอกลักษณ์ของตนเอง</p><table><thead><tr><th>ตัวเลือก</th><th>จุดเด่น</th><th>เหมาะกับ</th></tr></thead><tbody><tr><td>Radix Primitives</td><td>Parts API, WAI-ARIA patterns, controlled/uncontrolled</td><td>ทีมที่ต้องการ primitives แบบแยก package</td></tr><tr><td>Base UI</td><td>Unstyled, composable, React 17+, package เดียวที่ tree-shake ได้</td><td>Design System ใหม่ที่ต้องการ API สมัยใหม่</td></tr><tr><td>React Aria</td><td>Hooks/components ที่เน้น accessibility และ internationalization</td><td>Complex widgets และแอปหลายภาษา</td></tr></tbody></table><h3>ประกอบ Base UI กับ Tailwind</h3><pre class="code">import { Popover } from '@base-ui/react/popover';

export function HelpPopover() {
  return (
    &lt;Popover.Root&gt;
      &lt;Popover.Trigger className="btn"&gt;ช่วยเหลือ&lt;/Popover.Trigger&gt;
      &lt;Popover.Portal&gt;
        &lt;Popover.Positioner sideOffset={8}&gt;
          &lt;Popover.Popup className="rounded-lg bg-base-100 p-4 shadow-xl"&gt;
            เนื้อหาช่วยเหลือ
          &lt;/Popover.Popup&gt;
        &lt;/Popover.Positioner&gt;
      &lt;/Popover.Portal&gt;
    &lt;/Popover.Root&gt;
  );
}</pre><h3>สิ่งที่ Primitive ดูแลและไม่ดูแล</h3><div class="cards"><div class="card"><strong>มักดูแลให้</strong><br>Roles, ARIA state, keyboard, focus, dismissal และ portal</div><div class="card"><strong>ทีมยังต้องดูแล</strong><br>Label, contrast, focus style, content, touch target และ product behavior</div></div><div class="note warning">อย่าซ้อน primitive สองระบบใน widget เดียว เช่นใช้ Dialog behavior จากสอง library พร้อมกัน เพราะ focus trap, portal และ event dismissal อาจแข่งขันกัน</div></section>

<section class="chapter" id="storybook"><h2>22. Storybook และ Component Documentation</h2><p>Story คือกรณีตัวอย่างที่ render component ด้วย props/context เฉพาะ ทำหน้าที่พร้อมกันทั้งเอกสาร, playground และ test fixture</p><pre class="code">import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Button } from './Button';

const meta = {
  component: Button,
  args: { onClick: fn() },
  parameters: { layout: 'centered' }
} satisfies Meta&lt;typeof Button&gt;;

export default meta;
type Story = StoryObj&lt;typeof meta&gt;;

export const Primary: Story = {
  args: { children: 'บันทึก', tone: 'primary' },
  play: async ({ canvasElement, args }) =&gt; {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'บันทึก' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
};</pre><h3>Story Matrix ที่ควรมี</h3><ul><li>ทุก variant, size และ interactive state</li><li>Loading, empty, error, disabled และ read-only</li><li>ข้อความไทย/อังกฤษที่สั้นและยาวมาก</li><li>Light, dark, high contrast และ reduced motion</li><li>Viewport มือถือ/แท็บเล็ต/เดสก์ท็อป</li><li>Play function สำหรับ keyboard และ user flow</li><li>Accessibility addon และ visual regression ใน CI</li></ul><div class="note">Automated accessibility audit จับปัญหาได้เพียงบางประเภท ยังต้องทดสอบ Keyboard, Screen Reader และความเข้าใจของข้อความด้วยมนุษย์</div></section>

<section class="chapter" id="i18n"><h2>23. Internationalization และ RTL</h2><p>Internationalization ไม่ใช่เพียงแปลข้อความ แต่รวมถึงทิศทางภาษา รูปแบบวันที่/ตัวเลข การเรียงลำดับ และ layout เมื่อข้อความยาวขึ้น</p><pre class="code">const amount = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'THB'
}).format(12500);

const date = new Intl.DateTimeFormat(locale, {
  dateStyle: 'long',
  timeZone: 'Asia/Bangkok'
}).format(new Date());

const collator = new Intl.Collator(locale, { numeric: true });
rows.sort((a, b) =&gt; collator.compare(a.name, b.name));</pre><h3>CSS ที่รองรับทิศทางภาษา</h3><pre class="code">.card {
  margin-inline: auto;
  padding-inline: 1rem;
  border-inline-start: 4px solid var(--accent);
}

[dir="rtl"] .directional-icon { scale: -1 1; }</pre><h3>Checklist</h3><ul><li>ใช้ <span class="inline">lang</span> และ <span class="inline">dir</span> บน document/subtree</li><li>เผื่อ text expansion 30–100% และไม่กำหนดความสูงข้อความคงที่</li><li>แยกข้อความออกจาก component และรองรับ pluralization</li><li>ใช้ Intl API แทนต่อ string วันที่/เงินเอง</li><li>ใช้ locale-aware search/sort และ timezone ที่ระบุชัดเจน</li><li>Icon ที่สื่อทิศทางอาจต้องกลับด้าน แต่ logo/play icon มักไม่ต้อง</li></ul></section>

<section class="chapter" id="advanced-data"><h2>24. Advanced Data Components</h2><p>ตารางข้อมูลขนาดใหญ่ต้องแยก <b>server state</b>, <b>table state</b> และ <b>visual rendering</b> เพื่อไม่ให้ component เดียวรับผิดชอบทุกอย่าง</p><pre class="code">type QueryState = {
  page: number;
  pageSize: number;
  sort: Array&lt;{ id: string; desc: boolean }&gt;;
  filters: Record&lt;string, unknown&gt;;
};

// URL เป็น source of truth เพื่อ share/reload หน้าปัจจุบันได้
const url = new URLSearchParams({
  page: String(state.page),
  sort: serializeSort(state.sort)
});</pre><h3>Patterns สำคัญ</h3><table><thead><tr><th>Pattern</th><th>เมื่อควรใช้</th><th>ข้อควรระวัง</th></tr></thead><tbody><tr><td>Pagination</td><td>ต้องอ้างอิงหน้าและรู้จำนวนข้อมูล</td><td>Reset page เมื่อ filter เปลี่ยน</td></tr><tr><td>Infinite scroll</td><td>Feed ที่เน้นสำรวจต่อเนื่อง</td><td>Footer, history, focus และตำแหน่งย้อนกลับ</td></tr><tr><td>Virtualization</td><td>แถว/รายการจำนวนมาก</td><td>Dynamic height, keyboard และ Screen Reader</td></tr><tr><td>Sticky header</td><td>ตารางยาว</td><td>Stacking context และ horizontal scroll</td></tr><tr><td>Tree view</td><td>ข้อมูล hierarchy</td><td>Arrow keys, expansion และ selection semantics</td></tr><tr><td>Command palette</td><td>ค้น action จำนวนมาก</td><td>Fuzzy search, shortcut และ focus restore</td></tr></tbody></table><div class="note">Virtualization ไม่ควรเป็นค่าเริ่มต้นสำหรับทุก list เพราะเพิ่มความซับซ้อน ใช้เมื่อ profiling ยืนยันว่าจำนวน DOM nodes กระทบ performance จริง</div></section>

<section class="chapter" id="drag-drop"><h2>25. Drag, Drop และ Gestures</h2><p>Drag-and-drop ที่ดีต้องมีทางเลือก Keyboard และปุ่มปกติ เพราะ pointer gesture เพียงอย่างเดียวไม่รองรับผู้ใช้ทุกคน</p><h3>Accessible Reordering Model</h3><ol><li>Focus item แล้วกด Space/Enter เพื่อเลือก</li><li>ใช้ Arrow keys ย้ายตำแหน่ง</li><li>ประกาศตำแหน่งใหม่ผ่าน live region</li><li>กด Space/Enter เพื่อวาง หรือ Escape เพื่อยกเลิก</li><li>คืน focus ไปยัง item ที่ย้าย</li></ol><pre class="code">&lt;li&gt;
  &lt;button
    aria-label="ย้าย รายงานยอดขาย"
    aria-pressed={dragging}
    onKeyDown={handleReorderKeys}
  &gt;
    ที่จับสำหรับย้าย
  &lt;/button&gt;
  รายงานยอดขาย
&lt;/li&gt;
&lt;div className="sr-only" aria-live="polite"&gt;{announcement}&lt;/div&gt;</pre><h3>Pointer/Touch Checklist</h3><ul><li>ใช้ Pointer Events เพื่อรวม mouse, pen และ touch</li><li>มี drag threshold ป้องกัน click กลายเป็น drag</li><li>กำหนด touch-action เฉพาะบริเวณ handle</li><li>Auto-scroll เมื่อเข้าใกล้ขอบ container</li><li>แสดง drop target ชัดเจนและรองรับ RTL</li><li>อย่าใช้ transform animation จน focus ring หรือ hit target เพี้ยน</li></ul></section>

<section class="chapter" id="charts"><h2>26. Charts และ Data Visualization</h2><table><thead><tr><th>คำถาม</th><th>Chart ที่มักเหมาะ</th></tr></thead><tbody><tr><td>เปรียบเทียบหมวดหมู่</td><td>Bar chart</td></tr><tr><td>แนวโน้มตามเวลา</td><td>Line chart</td></tr><tr><td>สัดส่วน</td><td>Stacked bar; Pie เมื่อหมวดน้อยมาก</td></tr><tr><td>ความสัมพันธ์สองตัวแปร</td><td>Scatter plot</td></tr><tr><td>การกระจาย</td><td>Histogram หรือ box plot</td></tr><tr><td>ค่าหลักหนึ่งค่า</td><td>Metric/Stat ไม่จำเป็นต้องเป็น chart</td></tr></tbody></table><h3>Accessible Chart</h3><pre class="code">&lt;figure aria-labelledby="sales-title" aria-describedby="sales-summary"&gt;
  &lt;h2 id="sales-title"&gt;ยอดขายรายเดือน&lt;/h2&gt;
  &lt;p id="sales-summary"&gt;ยอดขายสูงสุดในเดือนธันวาคม เพิ่มขึ้น 18%&lt;/p&gt;
  &lt;canvas aria-hidden="true"&gt;&lt;/canvas&gt;
  &lt;details&gt;
    &lt;summary&gt;ดูข้อมูลเป็นตาราง&lt;/summary&gt;
    &lt;table&gt;...&lt;/table&gt;
  &lt;/details&gt;
&lt;/figure&gt;</pre><ul><li>ไม่ใช้สีอย่างเดียว แยก series ด้วย label, pattern หรือ shape</li><li>Tooltip ต้องเปิดด้วย focus/touch และไม่หายก่อนอ่าน</li><li>กำหนด domain/zero baseline อย่างซื่อสัตย์กับข้อมูล</li><li>ลดจุดข้อมูลหรือ aggregate ก่อน render ไม่วาดทุกจุดโดยไม่จำเป็น</li><li>ใช้ Canvas/WebGL เมื่อข้อมูลมาก แต่ให้ DOM/table fallback สำหรับ accessibility</li></ul></section>

<section class="chapter" id="ui-security"><h2>27. UI Security</h2><h3>ป้องกัน XSS</h3><pre class="code">// ปลอดภัยโดยค่าเริ่มต้น: React escape text
&lt;p&gt;{userComment}&lt;/p&gt;

// เสี่ยง: ใช้เฉพาะ HTML ที่ sanitize ด้วย policy ที่เชื่อถือได้
&lt;div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} /&gt;</pre><h3>Links และ Embeds</h3><pre class="code">&lt;a href={validatedUrl} target="_blank" rel="noopener noreferrer"&gt;
  เปิดเว็บไซต์ภายนอก
&lt;/a&gt;

&lt;iframe
  src={trustedEmbedUrl}
  sandbox="allow-scripts allow-same-origin"
  referrerPolicy="no-referrer"
  title="ตัวอย่างเอกสาร"
/&gt;</pre><h3>Security Checklist</h3><ul><li>Allowlist protocol/domain สำหรับ user-provided URLs ปฏิเสธ javascript: และ scheme ที่ไม่ต้องการ</li><li>Sanitize rich text ด้วย library/policy ที่เหมาะกับ threat model</li><li>File upload ตรวจชนิด ขนาด และเนื้อหาที่ server ไม่เชื่อ MIME จาก client</li><li>ไม่แสดง token, password หรือ PII ใน toast, URL, analytics และ error log</li><li>Clipboard ต้องเกิดจาก user gesture และแจ้งสิ่งที่กำลัง copy</li><li>ปุ่ม action สำคัญป้องกัน double submit และใช้ CSRF protection ฝั่ง server</li><li>อย่าใช้ disabled UI เป็น authorization; server ต้องตรวจสิทธิ์ทุกครั้ง</li></ul><div class="note danger">การซ่อนปุ่มตามสิทธิ์ช่วย UX แต่ไม่ใช่มาตรการความปลอดภัย ผู้โจมตีสามารถเรียก API โดยไม่ผ่าน UI ได้เสมอ</div></section>

<section class="chapter" id="distribution"><h2>28. Component Package และ Distribution</h2><h3>โครงสร้าง Package</h3><pre class="code">packages/ui/
├── src/
│   ├── button/
│   ├── dialog/
│   ├── tokens.css
│   └── index.ts
├── package.json
├── tsconfig.json
└── CHANGELOG.md</pre><pre class="code">{
  "name": "@company/ui",
  "type": "module",
  "sideEffects": ["**/*.css"],
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./button": { "types": "./dist/button.d.ts", "import": "./dist/button.js" },
    "./styles.css": "./dist/styles.css"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}</pre><h3>Release Pipeline</h3><div class="flow">Lint/Test → Build → API Check → Storybook → Visual/A11y → Changeset → Publish → Smoke Test</div><ul><li>React เป็น peer dependency เพื่อไม่ให้ bundle React ซ้ำ</li><li>ระบุ CSS side effects ไม่เช่นนั้น bundler อาจตัด styles ทิ้ง</li><li>ทำ per-component exports เพื่อ tree-shaking และ import ที่ชัดเจน</li><li>ใช้ Semantic Versioning และ Changesets สร้าง changelog/version PR</li><li>Deprecate ก่อนลบ พร้อม migration guide และ codemod สำหรับงานซ้ำ</li><li>ทดสอบ package ที่ pack แล้วใน consumer app จริง ไม่ทดสอบเฉพาะ source monorepo</li><li>กำหนด dependency boundaries ป้องกัน UI package import business/domain code</li></ul><div class="note info"><b>Definition of Done:</b> Component ใหม่ต้องมี types, stories, interaction/a11y tests, responsive states, changelog และยืนยันว่า consumer import ได้โดยไม่ดึง dependency ที่ไม่เกี่ยวข้อง</div></section>

<section class="chapter sources"><h2>เอกสารอ้างอิงปัจจุบัน</h2><ul><li><a href="https://astryx.atmeta.com/">Astryx Design System</a></li><li><a href="https://github.com/facebook/astryx">Astryx GitHub</a></li><li><a href="https://daisyui.com/docs/install/">daisyUI Installation</a></li><li><a href="https://daisyui.com/docs/v5/">daisyUI v5 Release Notes</a></li><li><a href="https://reactbits.dev/get-started/index">ReactBits Documentation</a></li><li><a href="https://www.radix-ui.com/primitives/docs/overview/introduction">Radix Primitives</a></li><li><a href="https://base-ui.com/react/overview/about">Base UI</a></li><li><a href="https://react-spectrum.adobe.com/react-aria/">React Aria</a></li><li><a href="https://storybook.js.org/docs">Storybook Documentation</a></li></ul></section>

</article></div></main></body></html>`;
