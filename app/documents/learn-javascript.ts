export const document = `<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1100px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;font-size:14px}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#fff7ca,#fffdf0 60%,#fff)}.eyebrow{color:#8d7600;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0 8px;font-size:clamp(34px,7vw,54px);line-height:1.2}.hero h1 span{color:#b39700}.hero p{max-width:780px;margin:0;color:#667085}.layout{display:grid}.toc{padding:22px 20px;background:#fffdf4;border-bottom:1px solid #e8eaf0}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px 20px;margin:10px 0 0;padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{padding:32px 0;border-bottom:1px solid #eceef2}.chapter:last-child{border:0}.chapter h2{margin:0 0 16px;font-size:24px;line-height:1.35}.chapter h3{margin:26px 0 8px;font-size:17px}.chapter p{margin:9px 0}.chapter li{margin:5px 0}.chapter ul,.chapter ol{padding-left:24px}.note{margin:18px 0;padding:14px 16px;border-left:4px solid #c6a700;border-radius:0 12px 12px 0;background:#fff9d9}.info{border-color:#0891b2;background:#ecfeff}.warning{border-color:#f59e0b;background:#fffaeb}.danger{border-color:#dc2626;background:#fff0f0}.code{overflow-x:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}.inline{padding:2px 6px;border-radius:5px;background:#eef0f3;font:12px ui-monospace,monospace}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#fffbed}.cards{display:grid;gap:10px}.card{padding:15px;border:1px solid #e5e8ec;border-radius:14px}.card strong{color:#8d7600}.flow{padding:14px;border-radius:12px;background:#171a21;color:#fff;text-align:center;font:700 12px/1.8 ui-monospace,monospace}.steps{counter-reset:step;list-style:none;padding:0!important}.steps li{counter-increment:step;position:relative;padding:11px 12px 11px 46px;border-radius:12px;background:#f7f8fa}.steps li:before{content:counter(step);position:absolute;left:12px;top:10px;display:grid;width:25px;height:25px;place-items:center;border-radius:50%;background:#b39700;color:#fff;font-size:12px;font-weight:800}.sources a{color:#806b00;font-weight:700}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:255px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border:0;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}.cards{grid-template-columns:repeat(2,1fr)}}
.exercise{margin:16px 0;padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fafafa}.exercise h3{margin-top:0}.level{display:inline-block;margin-bottom:8px;padding:3px 9px;border-radius:999px;background:#fff3b0;color:#715f00;font-size:11px;font-weight:800}.tests{padding:12px 14px;border-radius:10px;background:#eef6ff;font-size:13px}.solution{margin-top:12px;border:1px solid #e1e4e8;border-radius:12px;background:#fff}.solution summary{cursor:pointer;padding:12px 14px;font-weight:800;color:#715f00}.solution[open] summary{border-bottom:1px solid #e1e4e8}.solution .code{margin:12px}.typing{border-left:4px solid #2563eb;background:#f0f7ff}.rule{font-size:13px;color:#667085}
</style></head><body><main class="shell">
<nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav>
<header class="hero"><div class="eyebrow">LANGUAGE • BROWSER • ASYNC</div><h1>เรียนรู้ <span>JavaScript</span></h1><p>คู่มือแบบละเอียดตั้งแต่ Syntax และ Data Types ไปจนถึง DOM, Async/Await, Fetch, Modules, Testing, Security และโปรเจกต์ฝึกฝน</p></header>
<div class="layout"><aside class="toc"><strong>สารบัญบทเรียน</strong><ol><li><a href="#overview">JavaScript คืออะไร</a></li><li><a href="#run">เริ่มรัน JavaScript</a></li><li><a href="#variables">ตัวแปรและ Scope</a></li><li><a href="#types">Data Types</a></li><li><a href="#operators">Operators</a></li><li><a href="#conditions">เงื่อนไข</a></li><li><a href="#loops">Loops</a></li><li><a href="#functions">Functions</a></li><li><a href="#closures">Scope, Hoisting, Closure</a></li><li><a href="#arrays">Arrays</a></li><li><a href="#objects">Objects</a></li><li><a href="#builtins">String, Number, Date, RegExp</a></li><li><a href="#collections">Map, Set และ Iteration</a></li><li><a href="#modern-syntax">Modern Syntax</a></li><li><a href="#oop">Prototype และ Classes</a></li><li><a href="#errors">Error Handling</a></li><li><a href="#event-loop">Event Loop</a></li><li><a href="#promises">Promise และ Async/Await</a></li><li><a href="#fetch">Fetch, JSON และ Abort</a></li><li><a href="#modules">Modules</a></li><li><a href="#dom">DOM</a></li><li><a href="#events">Events และ Forms</a></li><li><a href="#browser-apis">Browser APIs</a></li><li><a href="#quality">Debugging และ Testing</a></li><li><a href="#security-performance">Security และ Performance</a></li><li><a href="#roadmap">Roadmap และ Labs</a></li><li><a href="#practice">ห้องฝึกและโจทย์</a></li><li><a href="#crud-project">Project Track: CRUD</a></li><li><a href="#internals">Advanced Internals</a></li><li><a href="#algorithms">Data Structures</a></li><li><a href="#nodejs">Node.js Backend</a></li><li><a href="#database">PostgreSQL CRUD</a></li><li><a href="#auth">Authentication</a></li><li><a href="#production-api">Production API</a></li><li><a href="#advanced-web">Advanced Web APIs</a></li><li><a href="#deployment">Deployment และ Capstone</a></li></ol></aside><article class="content">

<section class="chapter" id="overview"><h2>1. JavaScript คืออะไร</h2><p>JavaScript เป็นภาษาหลายกระบวนทัศน์แบบ Dynamic Typing รองรับทั้ง Functional, Object-oriented และ Event-driven programming มาตรฐานของภาษาชื่อ <b>ECMAScript</b></p><table><thead><tr><th>ส่วน</th><th>ตัวอย่าง</th><th>มาจากไหน</th></tr></thead><tbody><tr><td>ตัวภาษา</td><td>let, function, Array, Promise, Map</td><td>ECMAScript</td></tr><tr><td>Browser APIs</td><td>document, fetch, localStorage, setTimeout</td><td>Web Platform</td></tr><tr><td>Node.js APIs</td><td>process, Buffer, fs, http</td><td>Node.js runtime</td></tr><tr><td>Framework APIs</td><td>React hooks, Next.js router</td><td>Library/Framework</td></tr></tbody></table><div class="note">ต้องแยกให้ออกว่าอะไรเป็น JavaScript และอะไรเป็น API ของ runtime เพราะโค้ดที่ใช้ document จะรันใน Node.js โดยตรงไม่ได้ และ API ของ Node.js ก็ไม่มีใน Browser ตามปกติ</div></section>

<section class="chapter" id="run"><h2>2. เริ่มรัน JavaScript</h2><h3>ใน Browser</h3><pre class="code">&lt;script type="module" src="./app.js"&gt;&lt;/script&gt;</pre><pre class="code">// app.js
console.log('Hello JavaScript');
console.table([{ name: 'A', score: 10 }]);
console.warn('คำเตือน');
console.error('ข้อผิดพลาด');
console.time('work');
// ทำงานบางอย่าง
console.timeEnd('work');</pre><h3>ด้วย Node.js</h3><pre class="code">node app.js
node --version
npm init -y
npm run dev</pre><p>เปิด Browser DevTools เพื่อใช้ Console, Sources debugger, Network และ Performance panel ตั้งแต่เริ่มเรียน ไม่ควร debug ด้วย console.log เพียงอย่างเดียว</p></section>

<section class="chapter" id="variables"><h2>3. ตัวแปร, Constants และ Scope</h2><pre class="code">const appName = 'Learn';  // ห้าม assign ค่าใหม่
let score = 0;            // เปลี่ยนค่าได้
score += 10;

// หลีกเลี่ยง var ในโค้ดสมัยใหม่ เพราะเป็น function-scoped
var legacy = true;</pre><table><thead><tr><th>คำสั่ง</th><th>Scope</th><th>Reassign</th><th>แนะนำ</th></tr></thead><tbody><tr><td>const</td><td>Block</td><td>ไม่ได้</td><td>ใช้เป็นค่าเริ่มต้น</td></tr><tr><td>let</td><td>Block</td><td>ได้</td><td>ใช้เมื่อค่าต้องเปลี่ยน</td></tr><tr><td>var</td><td>Function</td><td>ได้</td><td>รู้ไว้เพื่ออ่านโค้ดเก่า</td></tr></tbody></table><pre class="code">const user = { name: 'Champ' };
user.name = 'Ann';       // ทำได้: object ภายในเปลี่ยนได้
// user = {};            // ทำไม่ได้: const ห้าม reassign binding</pre><div class="note warning"><b>const ไม่ได้ทำให้ Object immutable</b> หากต้องการป้องกันการแก้ระดับตื้นใช้ Object.freeze แต่ nested objects ยังเปลี่ยนได้</div></section>

<section class="chapter" id="types"><h2>4. Data Types และการแปลงชนิด</h2><p>JavaScript มี Primitive 7 ชนิด และ Object อีกหนึ่งกลุ่มใหญ่</p><table><thead><tr><th>Type</th><th>ตัวอย่าง</th><th>ตรวจสอบ</th></tr></thead><tbody><tr><td>string</td><td>'hello'</td><td>typeof value === 'string'</td></tr><tr><td>number</td><td>42, 3.14, NaN, Infinity</td><td>typeof value === 'number'</td></tr><tr><td>bigint</td><td>9007199254740993n</td><td>typeof value === 'bigint'</td></tr><tr><td>boolean</td><td>true, false</td><td>typeof value === 'boolean'</td></tr><tr><td>undefined</td><td>ยังไม่ได้กำหนดค่า</td><td>typeof value === 'undefined'</td></tr><tr><td>symbol</td><td>Symbol('id')</td><td>typeof value === 'symbol'</td></tr><tr><td>null</td><td>ตั้งใจให้ไม่มีค่า</td><td>value === null</td></tr><tr><td>object</td><td>{}, [], Date, function</td><td>Array.isArray สำหรับ Array</td></tr></tbody></table><pre class="code">Number('42');          // 42
String(42);            // '42'
Boolean(1);            // true
parseInt('12px', 10);  // 12
parseFloat('3.14');    // 3.14
Number.isNaN(NaN);     // true
Number.isFinite(10);   // true

// typeof null เป็นข้อผิดพลาดทางประวัติศาสตร์
typeof null;           // 'object'</pre><h3>Truthy และ Falsy</h3><p>Falsy ได้แก่ <span class="inline">false, 0, -0, 0n, '', null, undefined, NaN</span> ค่าอื่นเป็น Truthy รวมถึง <span class="inline">[]</span> และ <span class="inline">{}</span></p></section>

<section class="chapter" id="operators"><h2>5. Operators ที่ต้องรู้</h2><table><thead><tr><th>กลุ่ม</th><th>Operators</th></tr></thead><tbody><tr><td>คณิตศาสตร์</td><td>+ - * / % ** ++ --</td></tr><tr><td>กำหนดค่า</td><td>= += -= *= /= ??= &amp;&amp;= ||=</td></tr><tr><td>เปรียบเทียบ</td><td>=== !== &gt; &gt;= &lt; &lt;=</td></tr><tr><td>ตรรกะ</td><td>&amp;&amp; || ! ??</td></tr><tr><td>เงื่อนไขย่อ</td><td>condition ? yes : no</td></tr><tr><td>Object</td><td>in, instanceof, delete, typeof</td></tr></tbody></table><pre class="code">5 === '5';           // false — ไม่แปลงชนิด
5 == '5';            // true — แปลงชนิด; ควรหลีกเลี่ยง

const name = input ?? 'ไม่ระบุ';  // fallback เมื่อ null/undefined
const title = input || 'ไม่ระบุ'; // fallback เมื่อ falsy รวม '' และ 0

const canEdit = isLoggedIn &amp;&amp; role === 'admin';
const label = score &gt;= 50 ? 'ผ่าน' : 'ไม่ผ่าน';</pre></section>

<section class="chapter" id="conditions"><h2>6. เงื่อนไข: if, switch และ Guard Clause</h2><pre class="code">if (score &gt;= 80) {
  grade = 'A';
} else if (score &gt;= 70) {
  grade = 'B';
} else {
  grade = 'C';
}

switch (status) {
  case 'loading': showSpinner(); break;
  case 'success': showData(); break;
  case 'error': showError(); break;
  default: showEmpty();
}</pre><h3>Guard Clause</h3><pre class="code">function submitOrder(order) {
  if (!order) throw new Error('ไม่พบคำสั่งซื้อ');
  if (order.items.length === 0) return { ok: false, reason: 'empty' };

  return saveOrder(order);
}</pre><p>Guard clause ลดการซ้อน if หลายชั้นและทำให้กรณีผิดปกติมองเห็นก่อน flow หลัก</p></section>

<section class="chapter" id="loops"><h2>7. Loops และ Iteration</h2><pre class="code">for (let i = 0; i &lt; 5; i += 1) { console.log(i); }

for (const item of items) { console.log(item); }   // values
for (const key in object) { console.log(key); }    // enumerable keys

let count = 0;
while (count &lt; 3) { count += 1; }

do { count -= 1; } while (count &gt; 0);</pre><table><thead><tr><th>คำสั่ง</th><th>หน้าที่</th></tr></thead><tbody><tr><td>break</td><td>ออกจาก loop ทันที</td></tr><tr><td>continue</td><td>ข้ามรอบปัจจุบัน</td></tr><tr><td>for...of</td><td>วนค่าจาก Iterable เช่น Array, String, Map</td></tr><tr><td>for...in</td><td>วน property keys; ไม่แนะนำสำหรับ Array</td></tr></tbody></table><div class="note">งานแปลงข้อมูล Array มักอ่านง่ายกว่าด้วย map/filter/reduce ส่วน loop เหมาะเมื่อจำเป็นต้อง break, continue หรือควบคุมลำดับซับซ้อน</div></section>

<section class="chapter" id="functions"><h2>8. Functions</h2><pre class="code">function add(a, b = 0) { return a + b; }

const multiply = function (a, b) { return a * b; };
const subtract = (a, b) =&gt; a - b;

function sum(...numbers) {
  return numbers.reduce((total, value) =&gt; total + value, 0);
}

function greet({ name, role = 'user' }) {
  return 'สวัสดี ' + name + ' (' + role + ')';
}</pre><h3>First-class Functions และ Higher-order Functions</h3><pre class="code">function withLogging(fn) {
  return function (...args) {
    console.log('calling', fn.name);
    return fn(...args);
  };
}

const loggedAdd = withLogging(add);
loggedAdd(2, 3);</pre><div class="note warning">Arrow function ไม่มี this, arguments และ constructor behavior ของตัวเอง จึงไม่ใช่ตัวแทน function declaration ทุกกรณี โดยเฉพาะ method ที่ต้องใช้ dynamic this</div></section>

<section class="chapter" id="closures"><h2>9. Scope, Hoisting และ Closures</h2><pre class="code">const globalValue = 1;

function outer() {
  const privateValue = 2;
  return function inner() {
    return globalValue + privateValue;
  };
}

const calculate = outer();
calculate(); // 3 — inner จำ environment ของ outer ได้</pre><h3>Closure ใช้ทำอะไร</h3><ul><li>เก็บ private state</li><li>สร้าง function factory</li><li>Event handlers และ callbacks</li><li>Memoization และ configuration</li></ul><pre class="code">function createCounter() {
  let count = 0;
  return {
    increment() { count += 1; return count; },
    value() { return count; }
  };
}</pre><p>Function declarations ถูก hoist พร้อม body ส่วน let/const อยู่ใน Temporal Dead Zone จนถึงบรรทัดประกาศ หลีกเลี่ยงพึ่งพา hoisting เพื่อให้โค้ดอ่านตามลำดับได้</p></section>

<section class="chapter" id="arrays"><h2>10. Arrays และ Methods สำคัญ</h2><pre class="code">const items = ['a', 'b'];
items.push('c');          // เพิ่มท้าย
items.pop();              // ลบท้าย
items.unshift('start');   // เพิ่มหน้า
items.shift();            // ลบหน้า
items.slice(0, 2);        // copy ช่วง ไม่แก้ต้นฉบับ
items.splice(1, 1, 'x');  // ลบ/แทรก แก้ต้นฉบับ
items.includes('a');
items.indexOf('b');</pre><h3>Transform และ Search</h3><pre class="code">const prices = [10, 20, 30];
prices.map((price) =&gt; price * 1.07);
prices.filter((price) =&gt; price &gt;= 20);
prices.find((price) =&gt; price &gt; 15);
prices.findIndex((price) =&gt; price &gt; 15);
prices.some((price) =&gt; price &gt; 25);
prices.every((price) =&gt; price &gt; 0);
prices.reduce((total, price) =&gt; total + price, 0);
prices.toSorted((a, b) =&gt; b - a); // คืน Array ใหม่
prices.forEach((price) =&gt; console.log(price));</pre><div class="note warning">forEach ไม่รอ async callback ตามที่หลายคนคาด หากต้องทำงาน async ตามลำดับใช้ for...of + await หรือทำพร้อมกันด้วย Promise.all(items.map(...))</div></section>

<section class="chapter" id="objects"><h2>11. Objects และ Property Operations</h2><pre class="code">const user = {
  id: 1,
  name: 'Champ',
  address: { city: 'Bangkok' },
  greet() { return 'Hello ' + this.name; }
};

user.name;
user['name'];
user.email = 'a@example.com';
delete user.email;
'name' in user;
Object.hasOwn(user, 'name');</pre><pre class="code">Object.keys(user);      // keys
Object.values(user);    // values
Object.entries(user);   // [key, value]
Object.fromEntries([['a', 1], ['b', 2]]);
Object.assign({}, user);
Object.freeze(user);    // immutable ระดับตื้น
Object.groupBy(rows, (row) =&gt; row.status);</pre><p>Object เปรียบเทียบด้วย reference ไม่ใช่เนื้อหา: <span class="inline">{} === {}</span> เป็น false การ copy ด้วย spread/Object.assign เป็น shallow copy</p></section>

<section class="chapter" id="builtins"><h2>12. String, Number, Math, Date, Intl และ RegExp</h2><h3>String</h3><pre class="code">const text = ' JavaScript ';
text.trim();
text.toLowerCase();
text.includes('Script');
text.startsWith(' Java');
text.replace('Java', 'Type');
text.split(' ');
'7'.padStart(3, '0'); // '007'</pre><h3>Number และ Math</h3><pre class="code">Number.isInteger(10);
(12.345).toFixed(2);     // string '12.35'
Math.round(1.6);
Math.floor(1.9);
Math.ceil(1.1);
Math.min(2, 8, 1);
Math.max(...values);
Math.random();</pre><h3>Date และ Intl</h3><pre class="code">const now = new Date();
now.getTime();
now.toISOString();

new Intl.DateTimeFormat('th-TH', { dateStyle: 'long' }).format(now);
new Intl.NumberFormat('th-TH', {
  style: 'currency', currency: 'THB'
}).format(12500);</pre><h3>Regular Expression</h3><pre class="code">const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailPattern.test('a@example.com');
'A1 B2'.match(/\d/g);       // ['1', '2']
'hello'.replace(/l/g, 'x');
RegExp.escape(userInput);</pre><div class="note warning">อย่า parse/format วันที่และเงินด้วยการต่อ string เอง และ RegExp สำหรับ email ไม่ควรซับซ้อนจนปฏิเสธที่อยู่ที่ถูกต้อง การยืนยัน email จริงต้องส่ง verification</div></section>

<section class="chapter" id="collections"><h2>13. Map, Set, WeakMap และ Iteration</h2><pre class="code">const map = new Map();
map.set('theme', 'dark');
map.get('theme');
map.has('theme');
map.delete('theme');

const unique = new Set([1, 1, 2, 3]);
unique.add(4);
unique.has(2);
const values = [...unique];</pre><table><thead><tr><th>โครงสร้าง</th><th>ใช้เมื่อ</th></tr></thead><tbody><tr><td>Object</td><td>Record ที่มี field ชัดเจนและ serialize เป็น JSON</td></tr><tr><td>Map</td><td>Key เป็นค่าใดก็ได้, เพิ่ม/ลบบ่อย, ต้องการ size/iteration</td></tr><tr><td>Set</td><td>เก็บค่าไม่ซ้ำและตรวจ membership</td></tr><tr><td>WeakMap/WeakSet</td><td>ผูก metadata กับ object โดยไม่กัน garbage collection</td></tr></tbody></table><pre class="code">for (const [key, value] of map) { console.log(key, value); }
const iterator = values[Symbol.iterator]();
iterator.next();</pre></section>

<section class="chapter" id="modern-syntax"><h2>14. Modern Syntax ที่ใช้ประจำ</h2><pre class="code">const { name, role = 'user', ...rest } = user;
const [first, second] = items;

const nextUser = { ...user, name: 'ใหม่' };
const nextItems = [...items, 'new'];

user.profile?.avatar?.url;    // optional chaining
user.nickname ?? user.name;   // nullish coalescing

const property = 'status';
const row = { [property]: 'active' };

const result = await import('./feature.js'); // dynamic import</pre><p>Spread เป็น shallow copy หาก nested object ต้องเปลี่ยน ให้ copy ทุกระดับที่แก้ หรือใช้โครงสร้างข้อมูล/เครื่องมือที่เหมาะสม</p></section>

<section class="chapter" id="oop"><h2>15. Prototype, this และ Classes</h2><pre class="code">class User {
  #token;

  constructor(name, token) {
    this.name = name;
    this.#token = token;
  }

  greet() { return 'Hello ' + this.name; }
  static fromJSON(data) { return new User(data.name, data.token); }
}

class Admin extends User {
  constructor(name, token, permissions) {
    super(name, token);
    this.permissions = permissions;
  }
}</pre><p>Class เป็น syntax เหนือ prototype system Methods อยู่บน prototype และ <span class="inline">this</span> ขึ้นกับวิธีเรียก function</p><pre class="code">const user = new User('Champ', 'secret');
const greet = user.greet;
// greet(); // this ไม่ได้ชี้ user
const boundGreet = user.greet.bind(user);
boundGreet();</pre><div class="note">Composition มักยืดหยุ่นกว่า inheritance สำหรับ UI/business logic ใช้ class เมื่อ model มี identity, invariant และ behavior ร่วมกันจริง</div></section>

<section class="chapter" id="errors"><h2>16. Error Handling</h2><pre class="code">class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function parseAge(value) {
  const age = Number(value);
  if (!Number.isInteger(age) || age &lt; 0) {
    throw new ValidationError('อายุไม่ถูกต้อง', 'age');
  }
  return age;
}

try {
  parseAge('-1');
} catch (error) {
  if (error instanceof ValidationError) console.warn(error.field);
  else throw error;
} finally {
  cleanup();
}</pre><ul><li>Throw Error object ไม่ throw string</li><li>Catch เฉพาะจุดที่แก้ไข, เพิ่ม context หรือแสดงผลได้</li><li>ไม่กลืน error ด้วย catch ว่าง</li><li>แยกข้อความผู้ใช้จากรายละเอียดภายใน/log</li><li>ใช้ cause เพื่อรักษาต้นเหตุเมื่อ wrap error</li></ul></section>

<section class="chapter" id="event-loop"><h2>17. Event Loop, Tasks และ Microtasks</h2><div class="flow">Call Stack → Task → Microtasks ทั้งหมด → Render → Task ถัดไป</div><pre class="code">console.log('A');

setTimeout(() =&gt; console.log('B'), 0);
Promise.resolve().then(() =&gt; console.log('C'));
queueMicrotask(() =&gt; console.log('D'));

console.log('E');
// ผลลัพธ์: A, E, C, D, B</pre><p>Promise callbacks และ queueMicrotask เป็น microtasks ซึ่งทำหลัง stack ว่างก่อน task ถัดไป ส่วน setTimeout สร้าง task และเวลา 0 ไม่ได้หมายถึงทำทันที</p><div class="note warning">งาน CPU หนักบล็อก main thread แม้เขียนใน async function เพราะ async ไม่ได้ย้าย computation ไป thread อื่น ใช้ Web Worker หรือแบ่งงานเมื่อจำเป็น</div></section>

<section class="chapter" id="promises"><h2>18. Promise และ Async/Await</h2><pre class="code">function getUser(id) {
  return fetch('/api/users/' + id)
    .then((response) =&gt; {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    });
}

async function loadUser(id) {
  try {
    const user = await getUser(id);
    return user;
  } catch (error) {
    console.error('loadUser failed', error);
    throw error;
  }
}</pre><h3>ทำงานพร้อมกัน</h3><pre class="code">const [user, orders] = await Promise.all([
  getUser(id),
  getOrders(id)
]);

const results = await Promise.allSettled(tasks);
const first = await Promise.race(requests);
const firstSuccess = await Promise.any(mirrors);</pre><table><thead><tr><th>Method</th><th>พฤติกรรม</th></tr></thead><tbody><tr><td>Promise.all</td><td>สำเร็จทั้งหมด หรือ reject เมื่อมีตัวแรกผิด</td></tr><tr><td>allSettled</td><td>รอครบและคืนสถานะทุกตัว</td></tr><tr><td>race</td><td>ตัวแรกที่ settle ไม่ว่าจะสำเร็จหรือผิด</td></tr><tr><td>any</td><td>ตัวแรกที่สำเร็จ; reject เมื่อผิดทั้งหมด</td></tr></tbody></table></section>

<section class="chapter" id="fetch"><h2>19. Fetch, JSON, HTTP และ AbortController</h2><pre class="code">async function request(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() =&gt; controller.abort(), 10000);

  try {
    const response = await fetch(url, {
      ...options,
      headers: { 'Accept': 'application/json', ...options.headers },
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}</pre><pre class="code">await request('/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ productId: 10, quantity: 2 })
});</pre><ul><li>Fetch reject เมื่อ network/abort error แต่ HTTP 404/500 ต้องตรวจ response.ok เอง</li><li>Response body อ่านได้ครั้งเดียวตามปกติ</li><li>JSON.parse อาจ throw และข้อมูลจาก network ต้อง validate ก่อนใช้</li><li>Abort request เมื่อ component unmount หรือ query ใหม่แทน query เดิม</li><li>Cookie/CORS/credentials เป็นนโยบาย Browser และ Server ไม่ใช่แก้ด้วย client อย่างเดียว</li></ul></section>

<section class="chapter" id="modules"><h2>20. ES Modules</h2><pre class="code">// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add, PI as pi } from './math.js';
import * as math from './math.js';

const feature = await import('./heavy-feature.js');</pre><ul><li>Named export ช่วย refactor และค้นหาได้ชัด</li><li>Default export เหมาะเมื่อ module มีสิ่งหลักหนึ่งอย่าง</li><li>Imports เป็น live bindings และ module รันครั้งเดียว</li><li>Dynamic import ใช้ code splitting/load on demand</li><li>Browser module ใช้ strict mode, defer โดยธรรมชาติ และต้องระบุ path ถูกต้อง</li></ul><div class="note">หลีกเลี่ยง circular dependencies และ barrel files ที่ export ทุกอย่างจนเกิด cycle หรือดึง bundle มากเกินจำเป็น</div></section>

<section class="chapter" id="dom"><h2>21. DOM: เลือก สร้าง และแก้ Element</h2><pre class="code">const title = document.querySelector('#title');
const cards = document.querySelectorAll('.card');

title.textContent = 'หัวข้อใหม่';
title.classList.add('active');
title.classList.toggle('hidden', shouldHide);
title.setAttribute('aria-live', 'polite');

const item = document.createElement('li');
item.textContent = user.name;
item.dataset.userId = String(user.id);
document.querySelector('#users').append(item);

item.remove();</pre><table><thead><tr><th>API</th><th>ใช้ทำอะไร</th></tr></thead><tbody><tr><td>querySelector/querySelectorAll</td><td>เลือกด้วย CSS selector</td></tr><tr><td>createElement</td><td>สร้าง element อย่างปลอดภัย</td></tr><tr><td>textContent</td><td>ตั้งข้อความโดยไม่ parse HTML</td></tr><tr><td>classList</td><td>add/remove/toggle/contains class</td></tr><tr><td>dataset</td><td>อ่าน/เขียน data-* attributes</td></tr><tr><td>append/prepend/before/after</td><td>เพิ่ม node</td></tr><tr><td>closest/matches</td><td>ค้น ancestor/ตรวจ selector</td></tr></tbody></table><div class="note danger">หลีกเลี่ยง innerHTML กับข้อมูลผู้ใช้เพราะเสี่ยง XSS ใช้ textContent/createElement หรือ sanitize ด้วย policy ที่เชื่อถือได้เมื่อจำเป็นต้องรับ HTML</div></section>

<section class="chapter" id="events"><h2>22. Events, Delegation และ Forms</h2><pre class="code">const button = document.querySelector('#save');

function handleClick(event) {
  event.preventDefault();
  console.log(event.currentTarget);
}

button.addEventListener('click', handleClick, { once: true });
button.removeEventListener('click', handleClick);</pre><h3>Event Delegation</h3><pre class="code">document.querySelector('#list').addEventListener('click', (event) =&gt; {
  const removeButton = event.target.closest('[data-remove]');
  if (!removeButton) return;
  removeButton.closest('li').remove();
});</pre><h3>FormData และ Validation</h3><pre class="code">form.addEventListener('submit', async (event) =&gt; {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const values = Object.fromEntries(data.entries());
  await save(values);
});</pre><p>รู้จัก bubbling, capturing, target, currentTarget, preventDefault และ stopPropagation แต่ใช้ stopPropagation เท่าที่จำเป็นเพราะอาจทำลาย delegation/behavior ของระบบอื่น</p></section>

<section class="chapter" id="browser-apis"><h2>23. Browser APIs ที่ควรรู้</h2><table><thead><tr><th>API</th><th>ใช้ทำอะไร</th></tr></thead><tbody><tr><td>localStorage/sessionStorage</td><td>เก็บ string ฝั่ง browser ขนาดเล็ก; synchronous</td></tr><tr><td>URL/URLSearchParams</td><td>สร้างและอ่าน URL/query อย่างปลอดภัย</td></tr><tr><td>History</td><td>pushState/replaceState และ navigation</td></tr><tr><td>Clipboard</td><td>อ่าน/เขียน clipboard ภายใต้ permission/user gesture</td></tr><tr><td>IntersectionObserver</td><td>ตรวจ element เข้า viewport</td></tr><tr><td>ResizeObserver</td><td>ตรวจขนาด element เปลี่ยน</td></tr><tr><td>MutationObserver</td><td>ตรวจ DOM mutations</td></tr><tr><td>Web Worker</td><td>ย้าย CPU-heavy work ออกจาก main thread</td></tr><tr><td>WebSocket</td><td>สื่อสารสองทางต่อเนื่อง</td></tr><tr><td>IndexedDB</td><td>เก็บ structured data ฝั่ง browser แบบ async</td></tr></tbody></table><pre class="code">const url = new URL(location.href);
url.searchParams.set('page', '2');
history.pushState({}, '', url);

localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');

const observer = new IntersectionObserver(([entry]) =&gt; {
  if (entry.isIntersecting) loadMore();
});
observer.observe(document.querySelector('#sentinel'));</pre><div class="note warning">อย่าเก็บ password, access token หรือข้อมูลลับใน localStorage ข้อมูลอยู่บนเครื่องผู้ใช้และ script ใน origin เดียวกันอ่านได้</div></section>

<section class="chapter" id="quality"><h2>24. Debugging, Code Quality และ Testing</h2><h3>Debugger</h3><pre class="code">function calculate(items) {
  debugger; // Browser หยุดเมื่อเปิด DevTools
  console.assert(Array.isArray(items), 'items must be array');
  return items.reduce((sum, item) =&gt; sum + item.price, 0);
}</pre><h3>Unit Test ตัวอย่าง</h3><pre class="code">import { describe, expect, it } from 'vitest';
import { sum } from './sum.js';

describe('sum', () =&gt; {
  it('รวมตัวเลขทั้งหมด', () =&gt; {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it('Array ว่างได้ 0', () =&gt; {
    expect(sum([])).toBe(0);
  });
});</pre><h3>เครื่องมือสำคัญ</h3><ul><li>ESLint ตรวจ bug patterns และมาตรฐานโค้ด</li><li>Prettier จัดรูปแบบให้สม่ำเสมอ</li><li>TypeScript/JSDoc เพิ่ม static type checking</li><li>Vitest/Jest สำหรับ unit tests</li><li>Testing Library ทดสอบ UI ตามวิธีผู้ใช้</li><li>Playwright สำหรับ browser end-to-end tests</li></ul><p>Test pure logic ให้มาก แยก network/time/random เป็น dependency ที่ควบคุมได้ และทดสอบ error/edge cases ไม่ใช่เฉพาะ happy path</p></section>

<section class="chapter" id="security-performance"><h2>25. Security และ Performance</h2><h3>Security Checklist</h3><ul><li>ข้อมูลจาก User/URL/API เป็น untrusted เสมอ ต้อง validate</li><li>ใช้ textContent/React escaping แทน innerHTML</li><li>Validate URL protocol ก่อนใช้ href/src</li><li>ไม่ใส่ secrets ใน frontend bundle</li><li>Authorization ต้องตรวจบน server ไม่ใช่ซ่อนปุ่มอย่างเดียว</li><li>หลีกเลี่ยง eval และ new Function</li><li>จัดการ dependencies และ Content Security Policy</li></ul><h3>Performance Checklist</h3><ul><li>วัดก่อน optimize ด้วย Performance panel/profiler</li><li>ลด long tasks และ DOM จำนวนมาก</li><li>Batch DOM reads/writes ป้องกัน layout thrashing</li><li>Debounce input/search และ throttle scroll/resize เมื่อเหมาะสม</li><li>ใช้ requestAnimationFrame สำหรับ visual updates</li><li>Code split feature ที่หนักและ cleanup listeners/timers/observers</li><li>ใช้ Worker สำหรับ CPU-heavy computation</li></ul><pre class="code">function debounce(fn, delay) {
  let timer;
  return (...args) =&gt; {
    clearTimeout(timer);
    timer = setTimeout(() =&gt; fn(...args), delay);
  };
}

const search = debounce((query) =&gt; loadResults(query), 300);</pre></section>

<section class="chapter" id="roadmap"><h2>26. Roadmap, Cheat Sheet และ Hands-on Labs</h2><h3>ลำดับเรียน 8 สัปดาห์</h3><ol class="steps"><li><b>สัปดาห์ 1:</b> Variables, Types, Operators และ Conditions</li><li><b>สัปดาห์ 2:</b> Loops, Functions, Scope และ Closures</li><li><b>สัปดาห์ 3:</b> Arrays, Objects, Collections และ Modern Syntax</li><li><b>สัปดาห์ 4:</b> DOM, Events และ Forms</li><li><b>สัปดาห์ 5:</b> Promise, Async/Await, Fetch และ Error Handling</li><li><b>สัปดาห์ 6:</b> Modules, OOP, Browser APIs และ Storage</li><li><b>สัปดาห์ 7:</b> Testing, Debugging, Security และ Performance</li><li><b>สัปดาห์ 8:</b> ทำ Capstone Project และ Refactor</li></ol><h3>คำสั่งที่ต้องจำให้ได้</h3><div class="cards"><div class="card"><strong>Language</strong><br>const, let, if, switch, for, while, function, return, throw, try/catch, class, import/export</div><div class="card"><strong>Array</strong><br>map, filter, reduce, find, some, every, includes, slice, splice, toSorted</div><div class="card"><strong>Object</strong><br>keys, values, entries, fromEntries, hasOwn, assign, groupBy</div><div class="card"><strong>Async</strong><br>Promise, then, catch, finally, all, allSettled, async, await</div><div class="card"><strong>DOM</strong><br>querySelector, createElement, textContent, classList, append, closest</div><div class="card"><strong>Events/Web</strong><br>addEventListener, preventDefault, fetch, FormData, URL, AbortController</div></div><h3>Labs</h3><div class="cards"><div class="card"><strong>Todo List</strong><br>Array/Object, DOM, events และ localStorage</div><div class="card"><strong>Expense Tracker</strong><br>Forms, reduce, Intl และ validation</div><div class="card"><strong>Weather App</strong><br>Fetch, async/await, loading/error และ AbortController</div><div class="card"><strong>Search UI</strong><br>Debounce, URLSearchParams, pagination และ race conditions</div><div class="card"><strong>Quiz App</strong><br>State machine, timers, modules และ tests</div><div class="card"><strong>Dashboard</strong><br>Multiple APIs, Promise.all, charts และ caching</div></div><div class="note info"><b>Capstone:</b> สร้างแอปจัดการงานแบบหลายหน้า มี Authentication UI, CRUD, Search/Filter, API, optimistic states, offline storage, tests และ performance/security checklist</div></section>

<section class="chapter" id="practice"><h2>27. ห้องฝึกพิมพ์และโจทย์ JavaScript</h2><div class="note"><b>วิธีฝึก:</b> เปิดไฟล์ <span class="inline">practice.js</span> ใน editor แล้วพิมพ์เองทีละบรรทัด ห้าม copy/paste รอบแรก จากนั้นรันด้วย <span class="inline">node practice.js</span> หรือ Browser Console เปรียบเทียบผลลัพธ์ และพิมพ์ใหม่โดยไม่ดูตัวอย่าง</div><p class="rule">กติกา: ทำโจทย์อย่างน้อย 20 นาที → เขียน test cases → ค่อยเปิดเฉลย → ปิดเฉลยแล้วเขียนใหม่ด้วยวิธีของตนเอง</p>

<div class="exercise typing"><span class="level">TYPE 01 • VARIABLES</span><h3>พิมพ์ตาม: ตัวแปรและข้อความ</h3><pre class="code">const firstName = 'Champ';
const lastName = 'Dev';
let score = 10;

score += 5;

const fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log('คะแนน:', score);</pre><div class="tests"><b>ผลที่ต้องได้:</b> Champ Dev และ คะแนน: 15</div><p><b>พิมพ์ซ้ำโดยเปลี่ยน:</b> ชื่อ, คะแนนเริ่มต้น และจำนวนคะแนนที่เพิ่ม</p></div>

<div class="exercise typing"><span class="level">TYPE 02 • CONDITIONS</span><h3>พิมพ์ตาม: ตัดเกรดด้วย if</h3><pre class="code">const score = 76;
let grade;

if (score &gt;= 80) {
  grade = 'A';
} else if (score &gt;= 70) {
  grade = 'B';
} else if (score &gt;= 60) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Grade:', grade);</pre><div class="tests"><b>ทดลองเพิ่ม:</b> score = 80, 79, 70, 69, 60, 59 เพื่อฝึกค่าขอบเขต</div></div>

<div class="exercise typing"><span class="level">TYPE 03 • FUNCTIONS</span><h3>พิมพ์ตาม: Function และ Validation</h3><pre class="code">function calculatePrice(price, quantity, discount = 0) {
  if (price &lt; 0 || quantity &lt; 0) {
    throw new Error('price และ quantity ต้องไม่ติดลบ');
  }

  const subtotal = price * quantity;
  return subtotal - subtotal * discount;
}

console.log(calculatePrice(100, 3));
console.log(calculatePrice(100, 3, 0.1));</pre><div class="tests"><b>ผลที่ต้องได้:</b> 300 และ 270 ลองส่งค่าติดลบแล้วอ่าน error</div></div>

<div class="exercise typing"><span class="level">TYPE 04 • ARRAYS</span><h3>พิมพ์ตาม: map, filter และ reduce</h3><pre class="code">const products = [
  { name: 'Keyboard', price: 1200, active: true },
  { name: 'Mouse', price: 600, active: false },
  { name: 'Monitor', price: 5000, active: true }
];

const activeProducts = products.filter((product) =&gt; product.active);
const names = activeProducts.map((product) =&gt; product.name);
const total = activeProducts.reduce((sum, product) =&gt; sum + product.price, 0);

console.log(names);
console.log(total);</pre><div class="tests"><b>ผลที่ต้องได้:</b> ['Keyboard', 'Monitor'] และ 6200</div></div>

<div class="exercise typing"><span class="level">TYPE 05 • ASYNC</span><h3>พิมพ์ตาม: Promise และ Async/Await</h3><pre class="code">function wait(milliseconds) {
  return new Promise((resolve) =&gt; {
    setTimeout(resolve, milliseconds);
  });
}

async function run() {
  console.log('เริ่ม');
  await wait(1000);
  console.log('ผ่านไป 1 วินาที');
}

run();</pre><p><b>ทดลองเพิ่ม:</b> ให้รอ 500ms สามครั้งและแสดง 1, 2, 3 ตามลำดับ</p></div>

<h3>โจทย์ระดับเริ่มต้น</h3>
<div class="exercise"><span class="level">EASY 01 • FUNCTION</span><h3>คำนวณพื้นที่สี่เหลี่ยม</h3><p>เขียน <span class="inline">rectangleArea(width, height)</span> คืนพื้นที่ หากค่าใดไม่ใช่ number หรือไม่มากกว่า 0 ให้ throw Error</p><div class="tests"><b>Tests:</b> rectangleArea(5, 4) → 20, rectangleArea(2.5, 2) → 5, rectangleArea(0, 2) → Error</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function rectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new TypeError('width และ height ต้องเป็น number');
  }
  if (width &lt;= 0 || height &lt;= 0) {
    throw new RangeError('width และ height ต้องมากกว่า 0');
  }
  return width * height;
}</pre></details></div>

<div class="exercise"><span class="level">EASY 02 • STRING</span><h3>นับสระภาษาอังกฤษ</h3><p>เขียน <span class="inline">countVowels(text)</span> นับ a, e, i, o, u โดยไม่สนตัวพิมพ์เล็ก/ใหญ่</p><div class="tests"><b>Tests:</b> countVowels('JavaScript') → 3, countVowels('HELLO') → 2, countVowels('xyz') → 0</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function countVowels(text) {
  if (typeof text !== 'string') throw new TypeError('text ต้องเป็น string');
  return [...text.toLowerCase()].filter((char) =&gt; 'aeiou'.includes(char)).length;
}</pre></details></div>

<div class="exercise"><span class="level">EASY 03 • LOOP</span><h3>FizzBuzz</h3><p>แสดงเลข 1–100 แต่เลขที่หาร 3 ลงตัวแสดง Fizz, หาร 5 ลงตัวแสดง Buzz และหารทั้งคู่แสดง FizzBuzz</p><div class="tests"><b>จุดตรวจ:</b> 3 → Fizz, 5 → Buzz, 15 → FizzBuzz, 16 → 16</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">for (let number = 1; number &lt;= 100; number += 1) {
  if (number % 15 === 0) console.log('FizzBuzz');
  else if (number % 3 === 0) console.log('Fizz');
  else if (number % 5 === 0) console.log('Buzz');
  else console.log(number);
}</pre></details></div>

<h3>โจทย์ระดับกลาง</h3>
<div class="exercise"><span class="level">MEDIUM 01 • ARRAY</span><h3>สรุปยอดขายตามหมวด</h3><p>เขียน <span class="inline">summarizeSales(rows)</span> คืน Object ที่ key เป็น category และ value เป็นยอดรวม <span class="inline">price * quantity</span></p><pre class="code">const rows = [
  { category: 'book', price: 100, quantity: 2 },
  { category: 'pen', price: 20, quantity: 5 },
  { category: 'book', price: 150, quantity: 1 }
];</pre><div class="tests"><b>ผลที่ต้องได้:</b> { book: 350, pen: 100 } และต้องไม่แก้ไข rows</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function summarizeSales(rows) {
  return rows.reduce((summary, row) =&gt; {
    const amount = row.price * row.quantity;
    summary[row.category] = (summary[row.category] ?? 0) + amount;
    return summary;
  }, {});
}</pre></details></div>

<div class="exercise"><span class="level">MEDIUM 02 • OBJECT</span><h3>จัดกลุ่มผู้ใช้ตาม Role</h3><p>เขียน <span class="inline">groupByRole(users)</span> คืน Object ที่เก็บ Array ของผู้ใช้แต่ละ role รองรับ role ที่ไม่เคยพบมาก่อน</p><div class="tests"><b>Tests:</b> admin 2 คน, user 3 คน → Object มี admin.length = 2 และ user.length = 3</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function groupByRole(users) {
  return Object.groupBy(users, (user) =&gt; user.role ?? 'unknown');
}</pre><p class="rule">ถ้า runtime ยังไม่รองรับ Object.groupBy ให้ลองเขียนด้วย reduce เป็นแบบฝึกเพิ่ม</p></details></div>

<div class="exercise"><span class="level">MEDIUM 03 • CLOSURE</span><h3>สร้าง Counter ที่กำหนดช่วงได้</h3><p>เขียน <span class="inline">createCounter(start, step)</span> คืน methods: increment, decrement และ value โดย count ต้องเข้าถึงจากภายนอกโดยตรงไม่ได้</p><div class="tests"><b>Tests:</b> createCounter(10, 2), increment() → 12, increment() → 14, decrement() → 12</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function createCounter(start = 0, step = 1) {
  let count = start;
  return {
    increment() { count += step; return count; },
    decrement() { count -= step; return count; },
    value() { return count; }
  };
}</pre></details></div>

<div class="exercise"><span class="level">MEDIUM 04 • IMMUTABILITY</span><h3>อัปเดตสินค้าโดยไม่แก้ต้นฉบับ</h3><p>เขียน <span class="inline">updateProduct(products, id, patch)</span> คืน Array ใหม่ เปลี่ยนเฉพาะสินค้าที่ id ตรง และ object ที่ไม่ถูกเปลี่ยนควรใช้ reference เดิม</p><div class="tests"><b>Tests:</b> เปลี่ยน price ของ id=2, products เดิมต้องเหมือนเดิม, item id=1 ต้องเป็น reference เดิม</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function updateProduct(products, id, patch) {
  return products.map((product) =&gt;
    product.id === id ? { ...product, ...patch } : product
  );
}</pre></details></div>

<h3>โจทย์ Async และ Web</h3>
<div class="exercise"><span class="level">ADVANCED 01 • PROMISE</span><h3>Retry เมื่อ Request ล้มเหลว</h3><p>เขียน <span class="inline">retry(task, maxAttempts)</span> โดย task เป็น function คืน Promise ให้ลองใหม่เมื่อ reject และ throw error สุดท้ายเมื่อครบจำนวน</p><div class="tests"><b>Tests:</b> task ผิด 2 ครั้งแล้วสำเร็จ, maxAttempts=3 → สำเร็จและถูกเรียก 3 ครั้ง</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">async function retry(task, maxAttempts) {
  let lastError;
  for (let attempt = 1; attempt &lt;= maxAttempts; attempt += 1) {
    try {
      return await task();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}</pre></details></div>

<div class="exercise"><span class="level">ADVANCED 02 • ASYNC</span><h3>จำกัดเวลาของ Promise</h3><p>เขียน <span class="inline">withTimeout(promise, milliseconds)</span> ถ้า promise ไม่เสร็จในเวลาให้ reject ด้วย Error('Timeout')</p><div class="tests"><b>Tests:</b> Promise สำเร็จใน 20ms + timeout 100ms → สำเร็จ; งาน 200ms + timeout 50ms → Error</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">function withTimeout(promise, milliseconds) {
  const timeout = new Promise((_, reject) =&gt; {
    setTimeout(() =&gt; reject(new Error('Timeout')), milliseconds);
  });
  return Promise.race([promise, timeout]);
}</pre><p class="rule">แบบ Production ควร abort งานต้นทางด้วย AbortController ด้วย ไม่ใช่เพียงหยุดรอผล</p></details></div>

<div class="exercise"><span class="level">ADVANCED 03 • FETCH</span><h3>สร้าง API Client</h3><p>เขียน <span class="inline">getJSON(url, signal)</span> ที่ส่ง Accept header, ตรวจ response.ok, parse JSON และ wrap error พร้อม status</p><div class="tests"><b>ทดสอบ:</b> 200 JSON, 404 JSON และ AbortError ด้วย mock fetch หรือ test server</div><details class="solution"><summary>เปิดดูเฉลย</summary><pre class="code">async function getJSON(url, signal) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    signal
  });

  if (!response.ok) {
    const error = new Error('HTTP ' + response.status);
    error.status = response.status;
    throw error;
  }

  return response.json();
}</pre></details></div>

<div class="exercise"><span class="level">ADVANCED 04 • DOM</span><h3>Todo List โดยไม่ใช้ Framework</h3><p>สร้างฟอร์มเพิ่มงาน รายการงาน ปุ่มสลับเสร็จและปุ่มลบ ใช้ Event Delegation และเก็บข้อมูลใน localStorage</p><h4>ข้อกำหนด</h4><ol><li>ป้องกันข้อความว่างและ trim whitespace</li><li>แต่ละงานมี id, title, completed</li><li>Render ด้วย createElement/textContent ไม่ใช้ innerHTML กับข้อมูลผู้ใช้</li><li>โหลดข้อมูลเดิมเมื่อ refresh</li><li>Filter: ทั้งหมด/ยังไม่เสร็จ/เสร็จแล้ว</li><li>Keyboard และ labels ต้องใช้งานได้</li></ol><details class="solution"><summary>เปิดดูแนวทาง ไม่ใช่เฉลยเต็ม</summary><ol><li>สร้าง state เป็น Array และ functions add/toggle/remove/filter</li><li>ทุกครั้งที่ state เปลี่ยน เรียก save() และ render()</li><li>ให้ list รับ click listener ตัวเดียวแล้วใช้ closest('[data-action]')</li><li>แยก renderItem(todo) เพื่อสร้าง li ด้วย createElement</li><li>เขียน tests ให้ pure state functions ก่อนเชื่อม DOM</li></ol></details></div>

<h3>Mini Projects ไม่มีเฉลยสำเร็จรูป</h3><div class="cards"><div class="card"><strong>1. Expense Tracker</strong><br>เพิ่ม/แก้/ลบรายจ่าย, category summary, Intl currency, export JSON</div><div class="card"><strong>2. Movie Search</strong><br>Debounce, AbortController, loading/error/empty, pagination และ URL state</div><div class="card"><strong>3. Quiz Engine</strong><br>Timer, shuffle, progress, score, review answers และ localStorage</div><div class="card"><strong>4. Kanban Board</strong><br>Columns, immutable state, accessible reorder, filters และ persistence</div><div class="card"><strong>5. Realtime Chat Mock</strong><br>WebSocket mock, reconnect, message status, unread count และ cleanup</div><div class="card"><strong>6. Analytics Dashboard</strong><br>Promise.allSettled, cache, retry, tables, charts และ date filters</div></div><h3>เกณฑ์ตรวจงานทุก Project</h3><ul><li>แยก state/logic ออกจาก DOM หรือ UI</li><li>มี loading, empty, error และ success states</li><li>Validate ทุก input และไม่ใช้ innerHTML กับข้อมูลผู้ใช้</li><li>Cleanup listener, timer, observer และ request</li><li>มี unit tests สำหรับ logic และ edge cases</li><li>ใช้งาน Keyboard ได้และมี labels/focus ชัดเจน</li><li>README อธิบายวิธีรัน โครงสร้าง และ trade-offs</li></ul></section>

<section class="chapter" id="crud-project"><h2>28. Project Track: สร้าง CRUD ตั้งแต่พื้นฐาน</h2><p>โปรเจกต์นี้สร้าง <b>ระบบจัดการสินค้า</b> ด้วย Vanilla JavaScript เริ่มจากข้อมูลในหน่วยความจำ แล้วค่อยเพิ่ม localStorage, Modules, REST API และ Tests เพื่อให้เห็นวิวัฒนาการของโปรเจกต์จริง</p><div class="flow">Create → Read → Update → Delete → Validate → Persist → API → Test</div><h3>CRUD คืออะไร</h3><table><thead><tr><th>งาน</th><th>JavaScript</th><th>REST API</th><th>SQL โดยประมาณ</th></tr></thead><tbody><tr><td>Create</td><td>เพิ่ม Object เข้า Array</td><td>POST /products</td><td>INSERT</td></tr><tr><td>Read</td><td>อ่าน/filter/find จาก Array</td><td>GET /products</td><td>SELECT</td></tr><tr><td>Update</td><td>map แล้วแทน Object</td><td>PATCH /products/:id</td><td>UPDATE</td></tr><tr><td>Delete</td><td>filter Object ออก</td><td>DELETE /products/:id</td><td>DELETE</td></tr></tbody></table>

<h3>Phase 0: สิ่งที่ต้องสร้าง</h3><ul><li>เพิ่มสินค้า: ชื่อ ราคา จำนวน และหมวดหมู่</li><li>แสดงรายการและยอดรวมมูลค่าสต็อก</li><li>ค้นหาและกรองตามหมวด</li><li>กดแก้ไขแล้วโหลดค่ากลับเข้าฟอร์ม</li><li>ลบโดยมีการยืนยัน</li><li>Validation และข้อความ Error</li><li>เก็บข้อมูลหลัง Refresh</li><li>Loading, Empty, Error และ Success states</li></ul><h3>โครงสร้างไฟล์เริ่มต้น</h3><pre class="code">product-crud/
├── index.html
├── styles.css
└── app.js</pre><div class="note">ทำให้ CRUD ในหน่วยความจำทำงานครบก่อน แล้วค่อยเพิ่ม Storage/API ทีละชั้น ห้ามเริ่มจาก Framework หรือ Backend พร้อมกันจนแยกไม่ออกว่าปัญหาอยู่ส่วนใด</div>

<h3>Phase 1: สร้าง HTML</h3><pre class="code">&lt;main&gt;
  &lt;h1&gt;จัดการสินค้า&lt;/h1&gt;

  &lt;form id="product-form" novalidate&gt;
    &lt;input type="hidden" name="id"&gt;

    &lt;label for="name"&gt;ชื่อสินค้า&lt;/label&gt;
    &lt;input id="name" name="name" required maxlength="80"&gt;
    &lt;p id="name-error" class="error"&gt;&lt;/p&gt;

    &lt;label for="price"&gt;ราคา&lt;/label&gt;
    &lt;input id="price" name="price" type="number" min="0" step="0.01" required&gt;

    &lt;label for="quantity"&gt;จำนวน&lt;/label&gt;
    &lt;input id="quantity" name="quantity" type="number" min="0" step="1" required&gt;

    &lt;label for="category"&gt;หมวดหมู่&lt;/label&gt;
    &lt;select id="category" name="category" required&gt;
      &lt;option value=""&gt;เลือกหมวด&lt;/option&gt;
      &lt;option value="computer"&gt;คอมพิวเตอร์&lt;/option&gt;
      &lt;option value="office"&gt;สำนักงาน&lt;/option&gt;
    &lt;/select&gt;

    &lt;button type="submit"&gt;บันทึก&lt;/button&gt;
    &lt;button id="cancel-edit" type="button" hidden&gt;ยกเลิกแก้ไข&lt;/button&gt;
  &lt;/form&gt;

  &lt;label for="search"&gt;ค้นหา&lt;/label&gt;
  &lt;input id="search" type="search"&gt;

  &lt;p id="summary" aria-live="polite"&gt;&lt;/p&gt;
  &lt;ul id="product-list"&gt;&lt;/ul&gt;
  &lt;p id="empty-state"&gt;ยังไม่มีสินค้า&lt;/p&gt;
&lt;/main&gt;

&lt;script type="module" src="./app.js"&gt;&lt;/script&gt;</pre><p><b>แบบฝึก:</b> เพิ่ม filter หมวดหมู่ และ sort ราคา ต่ำ→สูง/สูง→ต่ำ ด้วย select อีกสองตัว</p>

<h3>Phase 2: Data Model และ State</h3><pre class="code">let products = [
  {
    id: crypto.randomUUID(),
    name: 'Mechanical Keyboard',
    price: 2500,
    quantity: 3,
    category: 'computer',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let editingId = null;
let searchText = '';</pre><table><thead><tr><th>Field</th><th>Type</th><th>กฎ</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>ไม่ซ้ำและห้ามเปลี่ยน</td></tr><tr><td>name</td><td>string</td><td>trim, 1–80 ตัวอักษร</td></tr><tr><td>price</td><td>number</td><td>finite และ ≥ 0</td></tr><tr><td>quantity</td><td>number</td><td>integer และ ≥ 0</td></tr><tr><td>category</td><td>string</td><td>อยู่ในรายการที่อนุญาต</td></tr><tr><td>createdAt/updatedAt</td><td>ISO string</td><td>เวลาสร้างและแก้ล่าสุด</td></tr></tbody></table>

<h3>Phase 3: Validation</h3><pre class="code">const allowedCategories = new Set(['computer', 'office']);

function validateProduct(input) {
  const errors = {};
  const name = String(input.name ?? '').trim();
  const price = Number(input.price);
  const quantity = Number(input.quantity);
  const category = String(input.category ?? '');

  if (!name) errors.name = 'กรุณากรอกชื่อสินค้า';
  else if (name.length &gt; 80) errors.name = 'ชื่อยาวเกิน 80 ตัวอักษร';

  if (!Number.isFinite(price) || price &lt; 0) errors.price = 'ราคาต้องเป็น 0 ขึ้นไป';
  if (!Number.isInteger(quantity) || quantity &lt; 0) errors.quantity = 'จำนวนต้องเป็นจำนวนเต็ม 0 ขึ้นไป';
  if (!allowedCategories.has(category)) errors.category = 'หมวดหมู่ไม่ถูกต้อง';

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    value: { name, price, quantity, category }
  };
}</pre><div class="note warning">HTML validation ช่วย UX แต่ต้อง validate ใน JavaScript และ Backend ซ้ำ เพราะผู้ใช้สามารถข้าม HTML form และเรียก API โดยตรงได้</div>

<h3>Phase 4: Create และ Read</h3><pre class="code">function createProduct(input) {
  const result = validateProduct(input);
  if (!result.ok) return result;

  const now = new Date().toISOString();
  const product = {
    id: crypto.randomUUID(),
    ...result.value,
    createdAt: now,
    updatedAt: now
  };

  products = [...products, product];
  return { ok: true, value: product };
}

function getVisibleProducts() {
  const query = searchText.trim().toLocaleLowerCase('th');
  if (!query) return products;
  return products.filter((product) =&gt;
    product.name.toLocaleLowerCase('th').includes(query)
  );
}</pre><p><b>จุดสังเกต:</b> createProduct เป็น logic ไม่แตะ DOM จึงเขียน unit test ได้ง่าย ส่วน getVisibleProducts เป็น derived state ไม่ควรเก็บ Array ซ้ำอีกชุด</p>

<h3>Phase 5: Render รายการอย่างปลอดภัย</h3><pre class="code">const listElement = document.querySelector('#product-list');
const emptyElement = document.querySelector('#empty-state');
const summaryElement = document.querySelector('#summary');

function render() {
  const visibleProducts = getVisibleProducts();
  listElement.replaceChildren();

  for (const product of visibleProducts) {
    const item = document.createElement('li');
    const title = document.createElement('strong');
    const detail = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    title.textContent = product.name;
    detail.textContent = formatCurrency(product.price) + ' × ' + product.quantity;
    editButton.textContent = 'แก้ไข';
    editButton.dataset.action = 'edit';
    editButton.dataset.id = product.id;
    deleteButton.textContent = 'ลบ';
    deleteButton.dataset.action = 'delete';
    deleteButton.dataset.id = product.id;

    item.append(title, detail, editButton, deleteButton);
    listElement.append(item);
  }

  emptyElement.hidden = visibleProducts.length !== 0;
  const total = products.reduce((sum, product) =&gt;
    sum + product.price * product.quantity, 0
  );
  summaryElement.textContent = products.length + ' รายการ • ' + formatCurrency(total);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency', currency: 'THB'
  }).format(value);
}</pre><div class="note danger">ใช้ textContent/createElement กับข้อมูลสินค้า ไม่ต่อเป็น innerHTML เพราะชื่อสินค้ามาจากผู้ใช้และอาจกลายเป็น XSS</div>

<h3>Phase 6: Submit Form</h3><pre class="code">const form = document.querySelector('#product-form');

form.addEventListener('submit', (event) =&gt; {
  event.preventDefault();
  const input = Object.fromEntries(new FormData(form).entries());

  const result = editingId
    ? updateProduct(editingId, input)
    : createProduct(input);

  if (!result.ok) {
    showErrors(result.errors);
    return;
  }

  editingId = null;
  form.reset();
  clearErrors();
  saveProducts();
  render();
});</pre><p><b>แบบฝึก:</b> หลัง Error ให้ focus field แรกที่ผิด และใช้ aria-invalid/aria-describedby เชื่อมข้อความ Error</p>

<h3>Phase 7: Update</h3><pre class="code">function updateProduct(id, input) {
  const result = validateProduct(input);
  if (!result.ok) return result;

  const current = products.find((product) =&gt; product.id === id);
  if (!current) return { ok: false, errors: { form: 'ไม่พบสินค้า' } };

  const updated = {
    ...current,
    ...result.value,
    updatedAt: new Date().toISOString()
  };

  products = products.map((product) =&gt;
    product.id === id ? updated : product
  );
  return { ok: true, value: updated };
}

function startEditing(id) {
  const product = products.find((item) =&gt; item.id === id);
  if (!product) return;

  editingId = id;
  form.elements.id.value = product.id;
  form.elements.name.value = product.name;
  form.elements.price.value = product.price;
  form.elements.quantity.value = product.quantity;
  form.elements.category.value = product.category;
  form.elements.name.focus();
}</pre><p>อย่าเปลี่ยน id/createdAt ตอน Update และต้องจัดการกรณี record ถูกลบไปก่อนผู้ใช้กดบันทึก</p>

<h3>Phase 8: Delete และ Event Delegation</h3><pre class="code">function deleteProduct(id) {
  const exists = products.some((product) =&gt; product.id === id);
  if (!exists) return false;
  products = products.filter((product) =&gt; product.id !== id);
  return true;
}

listElement.addEventListener('click', (event) =&gt; {
  const button = event.target.closest('button[data-action]');
  if (!button || !listElement.contains(button)) return;

  const { action, id } = button.dataset;
  if (action === 'edit') startEditing(id);

  if (action === 'delete') {
    const product = products.find((item) =&gt; item.id === id);
    if (!product || !confirm('ลบ ' + product.name + ' หรือไม่?')) return;
    deleteProduct(id);
    saveProducts();
    render();
  }
});</pre><div class="note warning">confirm ใช้ได้สำหรับการเรียน แต่ Production ควรใช้ Accessible Dialog ที่ focus management ถูกต้อง และอธิบายผลของการลบให้ชัดเจน</div>

<h3>Phase 9: localStorage Persistence</h3><pre class="code">const STORAGE_KEY = 'learn-products-v1';

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function loadProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('อ่านข้อมูลไม่สำเร็จ', error);
    return [];
  }
}

products = loadProducts();
render();</pre><ul><li>เพิ่ม version ใน key เพื่อรองรับ migration schema</li><li>ข้อมูล Storage ถือเป็น untrusted ต้อง validate ตอนโหลด</li><li>จัดการ Quota/JSON parse error</li><li>localStorage เป็น synchronous ไม่เหมาะกับข้อมูลจำนวนมาก</li><li>เมื่อข้อมูลใหญ่/ซับซ้อนให้ใช้ IndexedDB หรือ Backend</li></ul>

<h3>Phase 10: แยก Modules</h3><pre class="code">product-crud/
├── index.html
├── styles.css
├── src/
│   ├── app.js          # bootstrap และ wire events
│   ├── product.js      # validation + CRUD pure functions
│   ├── storage.js      # load/save
│   ├── product-view.js # render + DOM
│   └── format.js       # Intl formatters
└── tests/
    └── product.test.js</pre><pre class="code">// product.js
export { createProduct, updateProduct, deleteProduct, validateProduct };

// app.js
import { createProduct, updateProduct } from './product.js';
import { loadProducts, saveProducts } from './storage.js';
import { renderProducts } from './product-view.js';</pre><p><b>หลักแบ่ง:</b> Domain logic ไม่ import document/localStorage/fetch ส่วน UI layer เรียก domain functions และแสดงผล</p>

<h3>Phase 11: เปลี่ยนจาก localStorage เป็น REST API</h3><pre class="code">const API_URL = '/api/products';

async function listProducts({ signal } = {}) {
  return request(API_URL, { signal });
}

async function createProductAPI(product, { signal } = {}) {
  return request(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
    signal
  });
}

async function updateProductAPI(id, patch, { signal } = {}) {
  return request(API_URL + '/' + encodeURIComponent(id), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
    signal
  });
}

async function deleteProductAPI(id, { signal } = {}) {
  return request(API_URL + '/' + encodeURIComponent(id), {
    method: 'DELETE',
    signal
  });
}</pre><h4>UI States ที่ต้องเพิ่ม</h4><table><tbody><tr><th>Loading</th><td>ปิด submit ซ้ำ แสดง spinner และ aria-busy</td></tr><tr><th>Empty</th><td>อธิบายว่ายังไม่มีสินค้าและมีปุ่มเพิ่ม</td></tr><tr><th>Error</th><td>ข้อความที่ผู้ใช้ทำต่อได้และ Retry</td></tr><tr><th>Success</th><td>อัปเดตรายการและประกาศผ่าน live region</td></tr><tr><th>Conflict</th><td>ข้อมูลถูกแก้จากที่อื่น ให้ reload/merge</td></tr></tbody></table>

<h3>Phase 12: Unit Tests สำหรับ CRUD</h3><pre class="code">import { describe, expect, it } from 'vitest';
import { createProduct, updateProduct, deleteProduct } from '../src/product.js';

describe('product CRUD', () =&gt; {
  it('create สินค้าที่ valid', () =&gt; {
    const result = createProduct([], {
      name: 'Mouse', price: 500, quantity: 2, category: 'computer'
    });
    expect(result.products).toHaveLength(1);
    expect(result.products[0].name).toBe('Mouse');
  });

  it('update โดยไม่แก้ Array เดิม', () =&gt; {
    const original = [{ id: '1', name: 'Old', price: 10, quantity: 1 }];
    const next = updateProduct(original, '1', { name: 'New' });
    expect(next).not.toBe(original);
    expect(original[0].name).toBe('Old');
    expect(next[0].name).toBe('New');
  });

  it('delete เฉพาะ id ที่เลือก', () =&gt; {
    const rows = [{ id: '1' }, { id: '2' }];
    expect(deleteProduct(rows, '1')).toEqual([{ id: '2' }]);
  });
});</pre><div class="note info">เมื่อแยก pure CRUD functions ให้รับ Array แล้วคืน Array ใหม่ Tests จะง่ายกว่า function ที่แก้ global state โดยตรง นี่เป็นโจทย์ Refactor สำคัญหลังทำเวอร์ชันแรกเสร็จ</div>

<h3>Checklist ก่อนถือว่า Project เสร็จ</h3><ul><li>Create, Read, Update, Delete ทำงานครบ</li><li>Validation ครอบคลุมค่าว่าง, NaN, ติดลบ และข้อมูลเกินขนาด</li><li>ค้นหา, filter และ sort ไม่แก้ state ต้นฉบับ</li><li>ไม่มี innerHTML กับข้อมูลผู้ใช้</li><li>Form ใช้งานด้วย Keyboard และ Error เชื่อม field ถูกต้อง</li><li>มี Loading, Empty, Error, Success และ Confirmation states</li><li>Storage/API error ไม่ทำให้หน้าพัง</li><li>Logic แยกจาก DOM และมี Unit Tests</li><li>Cleanup request/listener/timer</li><li>README อธิบายโครงสร้าง วิธีรัน และ trade-offs</li></ul>

<h3>โปรเจกต์ CRUD ลำดับถัดไป</h3><div class="cards"><div class="card"><strong>1. Todo CRUD</strong><br>title, completed, priority, due date และ filters</div><div class="card"><strong>2. Contact CRUD</strong><br>avatar, phone, email, tags และ search</div><div class="card"><strong>3. Inventory CRUD</strong><br>stock movement, low-stock alert และ category summary</div><div class="card"><strong>4. Expense CRUD</strong><br>รายรับ/รายจ่าย, month filter, budget และ chart</div><div class="card"><strong>5. User Admin CRUD</strong><br>role, status, pagination และ permission UI</div><div class="card"><strong>6. Blog CRUD</strong><br>draft/publish, slug, tags, autosave และ preview</div></div><h3>โจทย์เพิ่มความยาก</h3><ol class="steps"><li>เพิ่ม Undo Delete ภายใน 5 วินาที</li><li>ทำ Optimistic Update แล้ว rollback เมื่อ API ผิด</li><li>เพิ่ม Pagination และ Query String state</li><li>ตรวจ Conflict ด้วย version/updatedAt</li><li>เพิ่ม Bulk Select และ Bulk Delete</li><li>ทำ Import/Export CSV</li><li>เพิ่ม Authentication และ Server-side Authorization</li><li>เปลี่ยน UI เดิมเป็น React โดยคง domain functions/tests เดิม</li></ol></section>

<section class="chapter" id="internals"><h2>29. Advanced JavaScript Internals</h2><h3>Execution Context และ Scope Chain</h3><p>เมื่อเรียก function JavaScript สร้าง execution context ที่เก็บ parameters, local bindings, this และ reference ไปยัง lexical environment ชั้นนอก Context ที่กำลังทำงานอยู่จะอยู่บน Call Stack</p><pre class="code">const rate = 0.07;

function calculate(price) {
  const tax = price * rate;
  return price + tax;
}

calculate(100);
// global context → calculate context → return → pop stack</pre><h3>กฎของ this</h3><table><thead><tr><th>วิธีเรียก</th><th>ค่า this</th></tr></thead><tbody><tr><td>object.method()</td><td>object ก่อนจุด</td></tr><tr><td>fn.call(value) / apply</td><td>value ที่ส่งให้</td></tr><tr><td>new Constructor()</td><td>instance ใหม่</td></tr><tr><td>Arrow function</td><td>รับจาก lexical scope</td></tr><tr><td>Function ปกติใน strict mode</td><td>undefined เมื่อเรียกเดี่ยว</td></tr></tbody></table><pre class="code">function introduce(greeting, punctuation) {
  return greeting + ' ' + this.name + punctuation;
}

const person = { name: 'Champ' };
introduce.call(person, 'สวัสดี', '!');
introduce.apply(person, ['สวัสดี', '!']);
const bound = introduce.bind(person, 'สวัสดี');
bound('!');</pre><h3>Property Descriptors</h3><pre class="code">Object.defineProperty(user, 'id', {
  value: 'u-1',
  writable: false,
  enumerable: true,
  configurable: false
});

Object.getOwnPropertyDescriptor(user, 'id');</pre><h3>Memory และ Leak</h3><ul><li>Reachable objects จะยังไม่ถูก Garbage Collect</li><li>Listener ที่ไม่ remove อาจเก็บ DOM/component ไว้</li><li>Timer, Observer, cache และ Closure อาจเก็บข้อมูลก้อนใหญ่</li><li>WeakMap เหมาะกับ metadata ที่ไม่ควรขวาง GC</li><li>ใช้ DevTools Memory: Heap Snapshot, Allocation Timeline และ Detached DOM</li></ul><pre class="code">const controller = new AbortController();
window.addEventListener('resize', handleResize, { signal: controller.signal });

// cleanup
controller.abort();
clearInterval(timerId);
observer.disconnect();</pre><h3>Iterators และ Generators</h3><pre class="code">function* range(start, end) {
  for (let value = start; value &lt;= end; value += 1) yield value;
}

for (const value of range(1, 3)) console.log(value);

async function* pages(loadPage) {
  let page = 1;
  while (true) {
    const result = await loadPage(page);
    if (result.items.length === 0) return;
    yield result.items;
    page += 1;
  }
}

for await (const items of pages(loadPage)) process(items);</pre></section>

<section class="chapter" id="algorithms"><h2>30. Data Structures, Algorithms และ Big O</h2><table><thead><tr><th>โครงสร้าง</th><th>Operations สำคัญ</th><th>ใช้กับ</th></tr></thead><tbody><tr><td>Array</td><td>index O(1), search O(n), insert หน้า O(n)</td><td>รายการเรียงลำดับ</td></tr><tr><td>Map</td><td>get/set โดยเฉลี่ย O(1)</td><td>Lookup ด้วย key</td></tr><tr><td>Set</td><td>has/add โดยเฉลี่ย O(1)</td><td>สมาชิกไม่ซ้ำ</td></tr><tr><td>Stack</td><td>push/pop O(1)</td><td>Undo, parsing, DFS</td></tr><tr><td>Queue</td><td>enqueue/dequeue</td><td>งานตามลำดับ, BFS</td></tr><tr><td>Tree</td><td>ขึ้นกับ balance/branching</td><td>Hierarchy และ search</td></tr><tr><td>Graph</td><td>nodes + edges</td><td>Routes, dependencies, social network</td></tr></tbody></table><h3>Queue ที่ไม่ใช้ shift ซ้ำ</h3><pre class="code">class Queue {
  #items = [];
  #head = 0;

  enqueue(value) { this.#items.push(value); }
  dequeue() {
    if (this.#head &gt;= this.#items.length) return undefined;
    const value = this.#items[this.#head];
    this.#head += 1;
    return value;
  }
  get size() { return this.#items.length - this.#head; }
}</pre><h3>Binary Search</h3><pre class="code">function binarySearch(sorted, target) {
  let left = 0;
  let right = sorted.length - 1;

  while (left &lt;= right) {
    const middle = Math.floor((left + right) / 2);
    if (sorted[middle] === target) return middle;
    if (sorted[middle] &lt; target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}</pre><h3>โจทย์ฝึก</h3><ol><li>ตรวจวงเล็บสมดุลด้วย Stack</li><li>หา path สั้นสุดใน grid ด้วย BFS</li><li>สร้าง LRU Cache ด้วย Map</li><li>Topological sort dependencies</li><li>เปรียบเทียบเวลาระหว่าง Array.includes กับ Set.has</li><li>เขียน debounce, throttle และ memoize พร้อม tests</li></ol><div class="note">Big O อธิบายการเติบโตเมื่อ input ใหญ่ ไม่ใช่เวลาจริงทั้งหมด ต้องใช้ profiling และเลือกโครงสร้างที่อ่านง่ายก่อนเมื่อข้อมูลเล็ก</div></section>

<section class="chapter" id="nodejs"><h2>31. Node.js Backend จากพื้นฐาน</h2><p>Node.js รัน JavaScript นอก Browser และเพิ่ม APIs เช่น process, filesystem, streams, HTTP, crypto และ worker threads ใช้ ESM โดยกำหนด <span class="inline">"type": "module"</span> ใน package.json</p><pre class="code">{
  "name": "product-api",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js",
    "test": "node --test"
  }
}</pre><h3>HTTP Server พื้นฐาน</h3><pre class="code">import { createServer } from 'node:http';

const server = createServer(async (request, response) =&gt; {
  const url = new URL(request.url, 'http://localhost');

  if (request.method === 'GET' &amp;&amp; url.pathname === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ error: { code: 'NOT_FOUND' } }));
});

server.listen(Number(process.env.PORT ?? 3000));</pre><h3>Architecture</h3><pre class="code">src/
├── server.js        # start/stop process
├── app.js           # routes + middleware
├── products/
│   ├── route.js     # HTTP mapping
│   ├── service.js   # business rules
│   ├── repository.js# database access
│   └── schema.js    # validation
├── db.js
└── errors.js</pre><h3>สิ่งที่ต้องเรียน</h3><ul><li>process.env และ validate config ตอน startup</li><li>ESM/CommonJS และ package exports</li><li>Events, Buffer, Streams และ Backpressure</li><li>Graceful shutdown เมื่อรับ SIGTERM</li><li>Structured logs และ request ID</li><li>Worker threads สำหรับ CPU-heavy work</li><li>Native node:test หรือ test framework</li></ul><pre class="code">process.on('SIGTERM', () =&gt; {
  server.close((error) =&gt; {
    if (error) process.exitCode = 1;
  });
});</pre></section>

<section class="chapter" id="database"><h2>32. PostgreSQL และ Database CRUD</h2><h3>Schema</h3><pre class="code">CREATE TABLE categories (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL UNIQUE
);

CREATE TABLE products (
  id uuid PRIMARY KEY,
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
  price numeric(12, 2) NOT NULL CHECK (price &gt;= 0),
  quantity integer NOT NULL CHECK (quantity &gt;= 0),
  category_id bigint NOT NULL REFERENCES categories(id),
  version integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX products_category_id_idx ON products(category_id);
CREATE INDEX products_created_at_idx ON products(created_at DESC);</pre><h3>SQL CRUD</h3><pre class="code">INSERT INTO products (id, name, price, quantity, category_id)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;

SELECT p.*, c.name AS category_name
FROM products p
JOIN categories c ON c.id = p.category_id
WHERE ($1 = '' OR p.name ILIKE '%' || $1 || '%')
ORDER BY p.created_at DESC
LIMIT $2 OFFSET $3;

UPDATE products
SET name = $2, price = $3, quantity = $4,
    version = version + 1, updated_at = now()
WHERE id = $1 AND version = $5
RETURNING *;

DELETE FROM products WHERE id = $1 RETURNING id;</pre><div class="note danger">ใช้ Parameterized Queries เสมอ ห้ามต่อ user input เข้า SQL string เพราะเสี่ยง SQL Injection</div><h3>Transactions</h3><pre class="code">BEGIN;

UPDATE products
SET quantity = quantity - 2
WHERE id = $1 AND quantity &gt;= 2;

INSERT INTO stock_movements (product_id, change, reason)
VALUES ($1, -2, 'sale');

COMMIT;
-- หากขั้นใดผิด: ROLLBACK;</pre><ul><li>Primary/Foreign Keys รักษา identity และ relationships</li><li>Constraints เป็นกฎชั้นสุดท้ายของข้อมูล</li><li>Transaction รวมหลายขั้นเป็น all-or-nothing</li><li>Indexes เร่ง read แต่เพิ่มต้นทุน write/storage</li><li>Migration ต้อง versioned, review และมี rollback/forward strategy</li><li>Connection pool ต้องมี limit และ timeout</li></ul></section>

<section class="chapter" id="auth"><h2>33. Authentication และ Authorization</h2><table><thead><tr><th>คำ</th><th>ความหมาย</th></tr></thead><tbody><tr><td>Authentication</td><td>ตรวจว่า “คุณคือใคร”</td></tr><tr><td>Session</td><td>รักษาสถานะหลัง Login ระหว่าง requests</td></tr><tr><td>Authorization</td><td>ตรวจว่า “คุณทำอะไรได้”</td></tr><tr><td>Identity Provider</td><td>ระบบกลางที่ยืนยันตัวตนและออก token/assertion</td></tr></tbody></table><h3>Session Cookie ที่ควรตั้ง</h3><pre class="code">Set-Cookie: session=random-session-id;
  HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600</pre><h3>Login Flow</h3><ol class="steps"><li>รับ email/password ผ่าน HTTPS</li><li>Normalize identifier และ rate limit</li><li>ค้นผู้ใช้และตรวจ password hash ด้วย algorithm ที่เหมาะสม</li><li>สร้าง session ID แบบสุ่มที่คาดเดาไม่ได้และเก็บ state ฝั่ง server</li><li>ส่ง Cookie แบบ HttpOnly/Secure/SameSite</li><li>Rotate session ID หลัง login/privilege change</li><li>ตรวจ authorization ทุก endpoint และทุก record</li><li>Logout โดย revoke session ฝั่ง server</li></ol><h3>Permission Check</h3><pre class="code">function requirePermission(permission) {
  return async function (request, response, next) {
    const user = request.user;
    if (!user?.permissions.includes(permission)) {
      response.status(403).json({
        error: { code: 'FORBIDDEN', message: 'ไม่มีสิทธิ์ดำเนินการ' }
      });
      return;
    }
    next();
  };
}</pre><h3>Security Checklist</h3><ul><li>ใช้ password hashing library ที่ดูแลแล้ว ไม่เขียน crypto เอง</li><li>MFA สำหรับบัญชีเสี่ยงสูง</li><li>Email verification และ reset token อายุสั้น ใช้ครั้งเดียว</li><li>ป้องกัน credential stuffing ด้วย rate limit/risk checks</li><li>Session cookie ต้อง HttpOnly, Secure และ SameSite ที่เหมาะสม</li><li>State-changing requests ต้องพิจารณา CSRF</li><li>JWT ไม่ใช่การเข้ารหัส และต้อง validate algorithm, issuer, audience, expiry</li><li>อย่าเก็บ access token ระยะยาวใน localStorage</li></ul></section>

<section class="chapter" id="production-api"><h2>34. Production REST API</h2><h3>Resource Design</h3><pre class="code">GET    /api/products?search=mouse&amp;category=computer&amp;limit=20&amp;cursor=...
GET    /api/products/:id
POST   /api/products
PATCH  /api/products/:id
DELETE /api/products/:id

GET    /health/live
GET    /health/ready</pre><h3>Response และ Error Contract</h3><pre class="code">{
  "data": [{ "id": "...", "name": "Mouse" }],
  "page": { "nextCursor": "...", "hasMore": true },
  "meta": { "requestId": "req_123" }
}

{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "ข้อมูลไม่ถูกต้อง",
    "fields": { "price": "ต้องเป็น 0 ขึ้นไป" },
    "requestId": "req_123"
  }
}</pre><table><thead><tr><th>Status</th><th>ใช้เมื่อ</th></tr></thead><tbody><tr><td>200</td><td>อ่าน/แก้สำเร็จ</td></tr><tr><td>201</td><td>สร้างสำเร็จ พร้อม Location header เมื่อเหมาะสม</td></tr><tr><td>204</td><td>สำเร็จและไม่มี body</td></tr><tr><td>400</td><td>Request syntax/shape ผิด</td></tr><tr><td>401</td><td>ยังไม่ Authentication</td></tr><tr><td>403</td><td>รู้ตัวตนแต่ไม่มีสิทธิ์</td></tr><tr><td>404</td><td>ไม่พบ resource หรือปกปิด resource</td></tr><tr><td>409</td><td>Conflict/duplicate/version mismatch</td></tr><tr><td>422</td><td>Validation เชิงความหมาย</td></tr><tr><td>429</td><td>Rate limit</td></tr><tr><td>500</td><td>Unexpected server error</td></tr></tbody></table><h3>Production Concerns</h3><ul><li>Schema validation ที่ boundary และจำกัด body size</li><li>Cursor pagination สำหรับข้อมูลที่เปลี่ยนบ่อย</li><li>Idempotency key สำหรับ create/payment ที่ retry ได้</li><li>ETag/version สำหรับ optimistic concurrency</li><li>Cache-Control สำหรับ public/read-heavy endpoints</li><li>Timeout, retry เฉพาะ safe operations และ circuit breaking</li><li>OpenAPI docs ที่ generate/test กับ implementation</li><li>Audit log แยกจาก debug log และไม่เก็บ secrets</li><li>HTTPS, CORS allowlist และ security headers</li></ul></section>

<section class="chapter" id="advanced-web"><h2>35. Advanced Browser APIs และ Offline Web</h2><h3>Binary Data</h3><pre class="code">const response = await fetch('/file.bin');
const buffer = await response.arrayBuffer();
const bytes = new Uint8Array(buffer);
console.log(bytes.byteLength, bytes[0]);

const blob = new Blob([bytes], { type: 'application/octet-stream' });
const objectUrl = URL.createObjectURL(blob);
// cleanup เมื่อไม่ใช้
URL.revokeObjectURL(objectUrl);</pre><h3>Streaming Fetch</h3><pre class="code">const response = await fetch('/large-text');
const reader = response.body
  .pipeThrough(new TextDecoderStream())
  .getReader();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  appendChunk(value);
}</pre><h3>Web Worker</h3><pre class="code">// main.js
const worker = new Worker('./worker.js', { type: 'module' });
worker.postMessage(largeDataset);
worker.addEventListener('message', (event) =&gt; render(event.data));

// worker.js
self.addEventListener('message', (event) =&gt; {
  const result = expensiveCalculation(event.data);
  self.postMessage(result);
});</pre><h3>Offline Architecture</h3><div class="flow">UI → Local IndexedDB → Outbox → Network Sync → Server → Conflict Resolution</div><ul><li>Service Worker ควบคุม requests และ Cache API</li><li>IndexedDB เก็บ structured/offline data แบบ async</li><li>Outbox pattern เก็บ writes ที่รอ sync</li><li>กำหนด conflict policy: server wins, client wins หรือ merge</li><li>แสดง online/offline/sync state อย่างซื่อสัตย์</li><li>Version cache และลบ cache เก่าใน activate</li></ul><h3>Realtime</h3><table><thead><tr><th>เทคโนโลยี</th><th>เหมาะกับ</th></tr></thead><tbody><tr><td>Polling</td><td>ข้อมูลเปลี่ยนไม่ถี่และระบบง่าย</td></tr><tr><td>Server-Sent Events</td><td>Server ส่งข้อความทางเดียวต่อเนื่อง</td></tr><tr><td>WebSocket</td><td>สื่อสารสองทาง latency ต่ำ</td></tr></tbody></table><p>Realtime client ต้องมี reconnect แบบ exponential backoff, heartbeat, message ID/deduplication, ordering และ cleanup</p></section>

<section class="chapter" id="deployment"><h2>36. Deployment, DevOps และ Full-stack Capstone</h2><h3>Production Architecture</h3><div class="flow">Browser → HTTPS/Nginx → Node.js API → PostgreSQL<br>↘ Static Assets/CDN · Logs/Metrics · Backups</div><h3>Environment Configuration</h3><pre class="code">NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://...
SESSION_SECRET=...
LOG_LEVEL=info</pre><ul><li>Validate required environment variables ตอน startup</li><li>Secret อยู่ใน secret manager/runtime ไม่ commit ลง Git หรือ bake ใน image</li><li>แยก dev/test/staging/production databases</li><li>Migration เป็น deployment step ที่ตรวจสอบได้</li></ul><h3>Dockerfile แนวทาง Production</h3><pre class="code">FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:24-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=node:node . .
USER node
EXPOSE 3000
CMD ["node", "src/server.js"]</pre><h3>Deployment Checklist</h3><ol><li>Lint, tests, security scan และ build ผ่าน CI</li><li>Build immutable image และ tag ด้วย commit SHA</li><li>Backup database และตรวจ migration plan</li><li>Deploy รุ่นใหม่แล้วรอ readiness health check</li><li>สลับ traffic แบบ graceful/rolling</li><li>ตรวจ 5xx, latency, memory และ database connections</li><li>Rollback image และใช้ database strategy ที่ compatible</li></ol><h3>Observability</h3><ul><li>Structured JSON logs พร้อม request ID/user ID ที่ไม่เป็น PII</li><li>Metrics: request rate, error rate, latency, saturation</li><li>Tracing ระหว่าง Nginx, API และ Database</li><li>Alerts ที่บอกผลกระทบผู้ใช้และ runbook</li><li>Audit logs สำหรับเปลี่ยนข้อมูลสำคัญ</li></ul><h3>Capstone: ระบบ Inventory Full Stack</h3><div class="cards"><div class="card"><strong>Frontend</strong><br>Login, CRUD, search/filter, pagination, upload, optimistic states</div><div class="card"><strong>API</strong><br>Validation, session auth, roles, error contract, idempotency</div><div class="card"><strong>Database</strong><br>Products, categories, stock movements, transactions, indexes</div><div class="card"><strong>Quality</strong><br>Unit, integration, E2E, security และ load tests</div><div class="card"><strong>Operations</strong><br>Docker, Nginx, HTTPS, migrations, backup และ restore</div><div class="card"><strong>Observability</strong><br>Logs, metrics, request IDs, health checks และ alerts</div></div><h3>Milestones</h3><ol class="steps"><li>Vanilla CRUD ใน Memory</li><li>localStorage + Modules + Unit Tests</li><li>Node.js REST API ใน Memory</li><li>PostgreSQL + Migration + Transaction</li><li>Session Login + Role Authorization</li><li>Pagination, Search, Upload และ Audit Log</li><li>Docker Compose: Nginx + API + PostgreSQL</li><li>CI/CD, HTTPS, Monitoring และ Backup/Restore Drill</li></ol><div class="note info"><b>เกณฑ์จบ Track:</b> อธิบาย data flow ตั้งแต่ click ถึง database ได้, เขียน/ทดสอบ CRUD โดยไม่พึ่ง tutorial, แก้ validation/auth/concurrency errors และ deploy/rollback ระบบได้อย่างปลอดภัย</div></section>

<section class="chapter sources"><h2>เอกสารอ้างอิง</h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">MDN JavaScript Guide</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">MDN JavaScript Reference</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/API">MDN Web APIs</a></li><li><a href="https://tc39.es/ecma262/">ECMAScript Living Specification</a></li><li><a href="https://nodejs.org/api/">Node.js Documentation</a></li><li><a href="https://www.postgresql.org/docs/current/tutorial.html">PostgreSQL Tutorial</a></li><li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html">OWASP Authentication Cheat Sheet</a></li><li><a href="https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html">OWASP REST Security</a></li></ul></section>

</article></div></main></body></html>`;
