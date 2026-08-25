const topics = [
  ['intro', 'Node.js คืออะไร'],
  ['prerequisites', 'พื้นฐานที่ต้องมี'],
  ['install', 'ติดตั้งและ CLI'],
  ['npm', 'npm และ package.json'],
  ['modules', 'ES Modules และ CommonJS'],
  ['core', 'Core Modules'],
  ['async', 'Async และ Event Loop'],
  ['events-streams', 'Events, Buffer, Streams'],
  ['http', 'HTTP Server พื้นฐาน'],
  ['express', 'Express และ Middleware'],
  ['crud', 'REST API CRUD'],
  ['database', 'Database และ ORM'],
  ['auth-security', 'Auth และ Security'],
  ['errors', 'Error, Logging, Config'],
  ['testing', 'Testing และ Debugging'],
  ['performance', 'Performance และ Workers'],
  ['deploy', 'Docker และ Deployment'],
  ['exercises', 'แบบฝึกหัด 5 ระดับ'],
  ['project', 'โปรเจกต์ Todo API'],
  ['roadmap', 'Roadmap และแหล่งเรียน'],
] as const;

const toc = topics
  .map(([id, label], index) => `<li><a href="#${id}">${index + 1}. ${label}</a></li>`)
  .join('');

export const document = `<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet"><title>เรียน Node.js แบบละเอียด</title><style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1100px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;justify-content:space-between}.brand{font-weight:800}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#e9f7e7,#fff 72%)}.eyebrow{color:#43853d;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0;font-size:clamp(34px,7vw,54px);line-height:1.2}.hero h1 span{color:#43853d}.hero p{max-width:780px;margin:0;color:#667085}.layout{display:grid}.toc{padding:22px 20px;background:#f7fcf6}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{scroll-margin-top:20px;padding:32px 0;border-bottom:1px solid #eceef2}.chapter h2{margin:0 0 16px;font-size:24px}.chapter h3{margin:24px 0 8px;font-size:17px}.chapter li{margin:5px 0}.note,.warning,.exercise,.project{margin:18px 0;padding:14px 16px;border-left:4px solid #43853d;border-radius:0 12px 12px 0;background:#edf8eb}.warning{border-color:#f59e0b;background:#fffaeb}.exercise{border-color:#43853d;background:#f2faef}.project{border-color:#1677e8;background:#eef6ff}.code{overflow:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,monospace;white-space:pre}code{font-family:ui-monospace,monospace}p code,li code{padding:2px 6px;border-radius:5px;background:#eef0f3;color:#286125;font-size:12px}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#f2faef}.flow{padding:14px;border-radius:12px;background:#171a21;color:#fff;text-align:center;font:700 12px/1.8 ui-monospace,monospace}.chapter a{color:#34702f;font-weight:700}.checklist li{list-style:'✓  ';padding-left:4px}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:255px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}}
</style></head><body><main class="shell"><nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav><header class="hero"><div class="eyebrow">RUNTIME • BACKEND • REST API</div><h1>เรียนรู้ <span>Node.js</span></h1><p>ตั้งแต่ JavaScript Runtime, Event Loop, npm และ Core Modules ไปจนถึง Express, Database, Authentication, Testing, Security และการสร้าง Todo CRUD API</p></header><div class="layout"><aside class="toc"><strong>สารบัญ</strong><ol>${toc}</ol></aside><article class="content">

<section class="chapter" id="intro"><h2>1. Node.js คืออะไร</h2><p>Node.js คือ JavaScript runtime นอก Browser ใช้ V8 ร่วมกับ libuv เหมาะกับ Backend API, CLI, automation, real-time application และ microservices</p><div class="flow">JavaScript → V8 → Node APIs / libuv → OS, File, Network, Database</div><table><tr><th>เหมาะ</th><th>ต้องวางแผนเพิ่ม</th></tr><tr><td>I/O สูง, API, WebSocket, streaming, tooling</td><td>งาน CPU หนักควรใช้ Worker Threads, child process หรือ service เฉพาะ</td></tr></table><div class="note"><b>คำว่า single-threaded:</b> JavaScript callback หลักทำงานทีละงาน แต่ Node ใช้ OS และ thread pool ช่วยงาน I/O บางชนิด จึงรองรับหลาย connection ได้โดยไม่สร้าง thread ต่อ request</div></section>

<section class="chapter" id="prerequisites"><h2>2. พื้นฐานที่ต้องมีก่อน</h2><ul class="checklist"><li>JavaScript: const/let, function, object/array, map/filter/reduce, destructuring</li><li>Promise, async/await และ try/catch</li><li>ES Modules และ CommonJS</li><li>Terminal, path, environment variable และ Git</li><li>HTTP methods, headers, status code, JSON และ REST</li></ul><div class="exercise"><b>ตรวจความพร้อม:</b> เขียนฟังก์ชัน async ที่รับ URL หลายรายการ เรียกพร้อมกันด้วย <code>Promise.allSettled()</code> แล้วแยกผลสำเร็จกับล้มเหลว</div></section>

<section class="chapter" id="install"><h2>3. ติดตั้งและคำสั่ง CLI</h2><p>ใช้ version manager เช่น nvm และเลือกสาย LTS ที่โปรเจกต์รองรับ ณ สิงหาคม 2026 สายแนะนำสำหรับโปรเจกต์ใหม่คือ Node.js 24 LTS ส่วน Node.js 26 ยังเป็น Current จึงควรตรวจตารางรุ่นทางการก่อนเลือกใช้ Production</p><pre class="code">nvm install --lts
nvm use --lts
node --version
npm --version

node app.js
node                    # REPL
node --watch app.js     # restart เมื่อไฟล์เปลี่ยน
node --inspect app.js   # debugger
node -e "console.log(1 + 1)"</pre><p>กำหนดเวอร์ชันโปรเจกต์ด้วย <code>.nvmrc</code> และ field <code>engines</code> ใน package.json เพื่อลดปัญหาเครื่องนักพัฒนาและ Production ใช้คนละรุ่น</p></section>

<section class="chapter" id="npm"><h2>4. npm, npx และ package.json</h2><pre class="code">npm init -y
npm install express
npm install --save-dev eslint
npm ci                 # ติดตั้งตรง lockfile ใน CI
npm uninstall express
npm outdated
npm audit
npm run dev
npx eslint .</pre><pre class="code">{
  "name": "node-lab",
  "private": true,
  "type": "module",
  "engines": { "node": ">=24" },
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js",
    "test": "node --test"
  }
}</pre><p><code>dependencies</code> ใช้ตอนแอปทำงาน ส่วน <code>devDependencies</code> ใช้พัฒนา/ทดสอบ ให้ commit lockfile และใช้ <code>npm ci</code> ใน CI อย่าติดตั้ง global หากรันผ่าน script หรือ npx ได้</p></section>

<section class="chapter" id="modules"><h2>5. ES Modules กับ CommonJS</h2><table><tr><th>ESM</th><th>CommonJS</th></tr><tr><td><code>import/export</code>, package type module, มาตรฐานปัจจุบัน</td><td><code>require/module.exports</code>, พบในระบบเก่า</td></tr></table><pre class="code">// math.js
export const sum = (a, b) =&gt; a + b;

// app.js
import { sum } from './math.js';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);</pre><div class="warning">อย่าผสม ESM กับ CommonJS โดยไม่เข้าใจ package boundary, file extension และ module resolution ใช้ prefix <code>node:</code> กับ built-in modules เพื่อสื่อให้ชัด</div></section>

<section class="chapter" id="core"><h2>6. Core Modules ที่ต้องรู้</h2><table><tr><th>Module</th><th>หน้าที่</th></tr><tr><td>node:fs / fs/promises</td><td>ไฟล์และ directory</td></tr><tr><td>node:path / node:url</td><td>path และ URL ข้าม OS</td></tr><tr><td>node:http</td><td>HTTP client/server ระดับล่าง</td></tr><tr><td>node:events</td><td>EventEmitter</td></tr><tr><td>node:stream</td><td>ข้อมูลทีละ chunk และ backpressure</td></tr><tr><td>node:crypto</td><td>random, hash, signing primitives</td></tr><tr><td>node:child_process</td><td>เรียก process ภายนอก</td></tr><tr><td>node:worker_threads</td><td>งาน CPU-bound</td></tr></table><pre class="code">import { readFile, writeFile } from 'node:fs/promises';

const text = await readFile('data.txt', 'utf8');
await writeFile('output.txt', text.toUpperCase(), 'utf8');</pre><div class="exercise"><b>แบบฝึก:</b> ทำ CLI notes ที่เพิ่ม อ่าน และลบรายการจากไฟล์ JSON โดยเขียนไฟล์แบบ atomic และจัดการกรณีไฟล์เสีย</div></section>

<section class="chapter" id="async"><h2>7. Async และ Event Loop</h2><pre class="code">console.log('A');
setTimeout(() =&gt; console.log('timer'), 0);
Promise.resolve().then(() =&gt; console.log('microtask'));
console.log('B');
// A, B, microtask, timer</pre><p>ต้องเข้าใจ call stack, event loop phases, microtask queue, timers, I/O callbacks และการที่ callback CPU หนักบล็อก request อื่นทั้งหมด</p><pre class="code">async function loadUsers(signal) {
  const response = await fetch('https://example.com/users', { signal });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  return response.json();
}

const controller = new AbortController();
setTimeout(() =&gt; controller.abort(), 5000);
const users = await loadUsers(controller.signal);</pre><p>เรียน Promise combinators: <code>all</code>, <code>allSettled</code>, <code>race</code>, <code>any</code> รวมถึง timeout, cancellation และ concurrency limit</p></section>

<section class="chapter" id="events-streams"><h2>8. Events, Buffer และ Streams</h2><pre class="code">import { createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

await pipeline(
  createReadStream('large.log'),
  createGzip(),
  createWriteStream('large.log.gz')
);</pre><p>Buffer แทน binary data ส่วน stream มี Readable, Writable, Duplex, Transform ข้อดีคือไม่โหลดไฟล์ใหญ่ทั้งหมดเข้าหน่วยความจำ และ <code>pipeline</code> ช่วยส่งต่อ error/cleanup อย่างถูกต้อง ต้องเข้าใจ backpressure</p></section>

<section class="chapter" id="http"><h2>9. HTTP Server โดยไม่ใช้ Framework</h2><pre class="code">import { createServer } from 'node:http';

const server = createServer((req, res) =&gt; {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  if (req.method === 'GET' &amp;&amp; req.url === '/') {
    res.writeHead(200).end(JSON.stringify({ message: 'สวัสดี' }));
    return;
  }
  res.writeHead(404).end(JSON.stringify({ error: 'Not found' }));
});

server.listen(3000);</pre><p>ฝึก parse URL, query, headers, request body, response และ status code พร้อมจำกัดขนาด body เพื่อป้องกัน memory exhaustion</p></section>

<section class="chapter" id="express"><h2>10. Express และ Middleware</h2><pre class="code">import express from 'express';
const app = express();

app.use(express.json({ limit: '100kb' }));
app.use((req, res, next) =&gt; {
  req.requestId = crypto.randomUUID();
  next();
});

app.get('/health', (req, res) =&gt; res.json({ status: 'ok' }));
app.use((error, req, res, next) =&gt; {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
});</pre><p>ลำดับ middleware สำคัญ แยก router → controller → service → repository และส่ง error ไป central error handler แทนการทำทุกอย่างใน route callback</p></section>

<section class="chapter" id="crud"><h2>11. REST API CRUD หนังสือ</h2><table><tr><th>Method</th><th>Path</th><th>Status</th></tr><tr><td>GET</td><td>/books</td><td>200</td></tr><tr><td>GET</td><td>/books/:id</td><td>200 / 404</td></tr><tr><td>POST</td><td>/books</td><td>201 / 422</td></tr><tr><td>PUT/PATCH</td><td>/books/:id</td><td>200 / 404</td></tr><tr><td>DELETE</td><td>/books/:id</td><td>204 / 404</td></tr></table><pre class="code">app.post('/books', (req, res) =&gt; {
  const title = String(req.body.title ?? '').trim();
  if (!title) return res.status(422).json({ error: 'title is required' });
  const book = { id: crypto.randomUUID(), title };
  books.push(book);
  res.status(201).location('/books/' + book.id).json(book);
});</pre><div class="exercise"><b>โจทย์:</b> เพิ่ม pagination, filter, sort, duplicate title check, validation schema และ optimistic concurrency</div></section>

<section class="chapter" id="database"><h2>12. Database และ ORM</h2><p>เลือก PostgreSQL/MySQL สำหรับ relational data หรือ MongoDB เมื่อ document model เหมาะจริง เรียน SQL/schema/index/transaction ก่อนพึ่ง ORM เครื่องมือที่พบได้แก่ไดรเวอร์ฐานข้อมูล, Prisma, Drizzle, Sequelize และ Mongoose</p><pre class="code">await db.transaction(async (tx) =&gt; {
  const order = await tx.order.create({ data: orderInput });
  await tx.inventory.update({
    where: { productId },
    data: { stock: { decrement: quantity } }
  });
  return order;
});</pre><ul><li>ใช้ migration และ constraints</li><li>connection pool ต้องมีขนาดเหมาะสม</li><li>prepared/parameterized query ป้องกัน SQL injection</li><li>ตรวจ N+1 query และมี index ตาม query จริง</li></ul></section>

<section class="chapter" id="auth-security"><h2>13. Authentication และ Security</h2><ul class="checklist"><li>Hash password ด้วย Argon2id หรือ bcrypt library ที่ดูแลอยู่</li><li>Session cookie ใช้ HttpOnly, Secure และ SameSite</li><li>JWT ต้องตรวจ algorithm, issuer, audience, expiry และ rotation</li><li>Authorization ทุก resource ไม่ใช่แค่ซ่อนปุ่ม</li><li>Validate input, จำกัด body/upload, rate limit และ CORS allowlist</li><li>ไม่ส่ง stack trace หรือ secret กลับ client</li></ul><div class="warning">อย่าเขียนระบบเข้ารหัสเอง และอย่าเก็บ password, API key หรือ token ลง Git ใช้ secret manager/environment ของ platform</div></section>

<section class="chapter" id="errors"><h2>14. Error Handling, Logging และ Config</h2><pre class="code">process.on('unhandledRejection', (reason) =&gt; {
  logger.fatal({ reason }, 'Unhandled rejection');
  shutdown(1);
});

async function shutdown(code = 0) {
  server.close(() =&gt; process.exit(code));
  setTimeout(() =&gt; process.exit(1), 10_000).unref();
}</pre><p>แยก operational error จาก programmer error, ใช้ custom error ที่มี status/code, structured log พร้อม request ID และ redact ข้อมูลลับ Validate environment ตอนเริ่มโปรแกรมและทำ graceful shutdown เมื่อรับ SIGTERM</p></section>

<section class="chapter" id="testing"><h2>15. Testing และ Debugging</h2><pre class="code">import test from 'node:test';
import assert from 'node:assert/strict';

test('sumArray รวมตัวเลข', () =&gt; {
  assert.equal(sumArray([1, 2, 3]), 6);
});

node --test
node --test --experimental-test-coverage
node --inspect-brk src/server.js</pre><p>ใช้ unit test กับ pure logic, integration test กับ database/repository และ HTTP test กับ API แยก config/test database และไม่พึ่งลำดับการรัน test</p></section>

<section class="chapter" id="performance"><h2>16. Performance, Worker และ Production Runtime</h2><p>วัดก่อนปรับ: latency percentile, throughput, event-loop delay, memory, CPU และ database query งาน CPU หนักใช้ <code>worker_threads</code> งาน process isolation ใช้ child process ส่วนหลาย instance ใช้ container/process manager และ load balancer</p><ul><li>ใช้ stream กับ payload ใหญ่</li><li>หลีกเลี่ยง synchronous API ใน request path</li><li>ตั้ง timeout ทุก outbound request</li><li>ทำ cache พร้อม invalidation policy</li><li>ป้องกัน memory leak จาก listener, timer และ cache ไม่จำกัด</li></ul></section>

<section class="chapter" id="deploy"><h2>17. Docker และ Deployment</h2><pre class="code">FROM node:24-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY src ./src
USER node
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "src/server.js"]</pre><p>เพิ่ม health/readiness endpoint, reverse proxy Nginx, HTTPS, logs/metrics/traces, backup, migration strategy และ CI/CD สร้าง image เดียวแล้วเลื่อน artifact เดิมผ่าน environment</p></section>

<section class="chapter" id="exercises"><h2>18. แบบฝึกหัด 5 ระดับ</h2><h3>ระดับ 1 — ภาษาและ CLI</h3><ol><li>hello.js และรับชื่อจาก <code>process.argv</code></li><li><code>sumArray()</code> ด้วย reduce</li><li><code>delay(ms)</code> ด้วย Promise และ async/await</li></ol><h3>ระดับ 2 — Core Modules</h3><ol><li>สร้าง/อ่าน notes.txt ด้วย fs/promises และ try/catch</li><li>หานามสกุลไฟล์ด้วย path</li><li>HTTP server มี /, /about และ 404</li></ol><h3>ระดับ 3 — Express</h3><ol><li>Books CRUD ใน memory</li><li>middleware validation สำหรับ POST/PUT</li><li>dev script ด้วย node --watch</li></ol><h3>ระดับ 4 — Async ขั้นสูง</h3><ol><li>เรียก public API ด้วย built-in fetch</li><li>เทียบ sequential กับ Promise.all</li><li>เพิ่ม timeout, retry เฉพาะ error ที่ควร retry และ error message</li></ol><h3>ระดับ 5 — ระบบจริง</h3><ol><li>ย้าย Books API ไป PostgreSQL</li><li>เพิ่ม login/role และ integration tests</li><li>Dockerize และวัด latency</li></ol></section>

<section class="chapter" id="project"><h2>19. โปรเจกต์รวบยอด: Todo API</h2><div class="project"><b>ผลลัพธ์:</b> Todo API ที่มี CRUD, toggle, PostgreSQL, validation, logging, test, Docker และเอกสาร API</div><ol><li><b>Milestone 1:</b> Express + array: GET/POST/PUT/DELETE และ PATCH toggle</li><li><b>Milestone 2:</b> แยก router/controller/service/repository และ central error handler</li><li><b>Milestone 3:</b> PostgreSQL + migration + transaction + pagination</li><li><b>Milestone 4:</b> Register/Login, ownership, authorization และ rate limit</li><li><b>Milestone 5:</b> unit/integration/API tests, Docker Compose, Nginx และ CI</li></ol><pre class="code">Todo {
  id: UUID
  userId: UUID
  title: string
  completed: boolean
  createdAt: ISO date
  updatedAt: ISO date
}</pre><p><b>เกณฑ์ผ่าน:</b> validation ครบ, status code ถูก, ไม่มี secret ใน Git, graceful shutdown, test CRUD + unauthorized access และ README รันได้จากเครื่องใหม่</p></section>

<section class="chapter" id="roadmap"><h2>20. Roadmap และแหล่งเรียน</h2><ol><li>JavaScript + async ให้แน่น</li><li>Node core, event loop, stream และ HTTP</li><li>Express/Fastify และ API architecture</li><li>SQL/PostgreSQL, transaction และ ORM</li><li>Auth, security, testing และ observability</li><li>Docker/deploy แล้วต่อยอด TypeScript, NestJS, queues และ microservices</li></ol><ul><li><a href="https://nodejs.org/docs/latest/api/">Node.js API Documentation</a></li><li><a href="https://nodejs.org/en/learn">Node.js Learn</a></li><li><a href="https://nodejs.org/en/about/previous-releases">Node.js Release Schedule</a></li><li><a href="https://docs.npmjs.com/">npm Documentation</a></li><li><a href="https://expressjs.com/">Express Documentation</a></li><li><a href="https://roadmap.sh/nodejs">Node.js Roadmap</a></li></ul></section>
</article></div></main></body></html>`;
