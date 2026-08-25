export const document = `<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1100px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;justify-content:space-between}.brand{font-weight:800}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#e9f3ff,#fff 72%)}.eyebrow{color:#3178c6;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0;font-size:clamp(34px,7vw,54px);line-height:1.2}.hero h1 span{color:#3178c6}.hero p{max-width:780px;margin:0;color:#667085}.layout{display:grid}.toc{padding:22px 20px;background:#f6faff}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{padding:32px 0;border-bottom:1px solid #eceef2}.chapter h2{margin:0 0 16px;font-size:24px}.chapter h3{margin:24px 0 8px;font-size:17px}.chapter li{margin:5px 0}.note{margin:18px 0;padding:14px 16px;border-left:4px solid #3178c6;border-radius:0 12px 12px 0;background:#eaf4ff}.warning{border-color:#f59e0b;background:#fffaeb}.danger{border-color:#dc2626;background:#fff0f0}.code{overflow:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,monospace;white-space:pre}.inline{padding:2px 6px;border-radius:5px;background:#eef0f3;font:12px ui-monospace,monospace}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#f1f7ff}.cards{display:grid;gap:10px}.card{padding:15px;border:1px solid #e5e8ec;border-radius:14px}.card strong{color:#3178c6}.flow{padding:14px;border-radius:12px;background:#171a21;color:#fff;text-align:center;font:700 12px/1.8 ui-monospace,monospace}.steps{counter-reset:s;list-style:none;padding:0}.steps li{counter-increment:s;position:relative;padding:11px 12px 11px 46px;background:#f7f8fa;border-radius:12px}.steps li:before{content:counter(s);position:absolute;left:12px;top:10px;display:grid;width:25px;height:25px;place-items:center;border-radius:50%;background:#3178c6;color:#fff;font-size:12px;font-weight:800}.sources a{color:#1d63a7;font-weight:700}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:255px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}.cards{grid-template-columns:repeat(2,1fr)}}
</style></head><body><main class="shell"><nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav><header class="hero"><div class="eyebrow">STATIC TYPES • JAVASCRIPT • TOOLING</div><h1>เรียนรู้ <span>TypeScript</span></h1><p>จาก JavaScript สู่ Type-safe Application: Type System, Narrowing, Generics, Advanced Types, React/Next.js, Testing และ CRUD Project</p></header><div class="layout"><aside class="toc"><strong>สารบัญ</strong><ol><li><a href="#intro">TypeScript คืออะไร</a></li><li><a href="#setup">ติดตั้งและ tsconfig</a></li><li><a href="#basic">Types และ Inference</a></li><li><a href="#objects">Objects, Arrays, Tuples</a></li><li><a href="#type-interface">type กับ interface</a></li><li><a href="#unions">Unions และ Narrowing</a></li><li><a href="#functions">Functions</a></li><li><a href="#generics">Generics</a></li><li><a href="#operators">Type Operators</a></li><li><a href="#advanced">Advanced Types</a></li><li><a href="#utilities">Utility Types</a></li><li><a href="#classes">Classes</a></li><li><a href="#safety">unknown, never, satisfies</a></li><li><a href="#modules">Modules และ .d.ts</a></li><li><a href="#dom-react">DOM, React, Next.js</a></li><li><a href="#runtime">Runtime Validation</a></li><li><a href="#architecture">Architecture และ Testing</a></li><li><a href="#project">CRUD Project และ Labs</a></li></ol></aside><article class="content">

<section class="chapter" id="intro"><h2>1. TypeScript คืออะไร</h2><p>TypeScript คือ JavaScript ที่เพิ่ม Static Type System และ Compiler Tooling โค้ดถูกตรวจตอนพัฒนาแล้ว emit เป็น JavaScript เพื่อรันใน Browser หรือ Node.js</p><div class="flow">TypeScript Source → Type Check → JavaScript Output → Runtime</div><table><thead><tr><th>TypeScript ช่วย</th><th>TypeScript ไม่ช่วย</th></tr></thead><tbody><tr><td>ตรวจชนิด, autocomplete, refactor, API contracts</td><td>ไม่ validate JSON/API ตอน runtime</td></tr><tr><td>หา typo/property ที่ไม่มี</td><td>ไม่ป้องกัน business logic ผิด</td></tr><tr><td>อธิบาย intent ผ่าน types</td><td>ไม่แทน tests และ security validation</td></tr></tbody></table><pre class="code">function total(price: number, quantity: number): number {
  return price * quantity;
}

total(100, 2);    // 200
// total('100', 2); // Type error</pre></section>

<section class="chapter" id="setup"><h2>2. ติดตั้ง, Compiler และ tsconfig</h2><pre class="code">npm install -D typescript
npx tsc --init
npx tsc --noEmit
npx tsc --watch</pre><pre class="code">{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "useUnknownInCatchVariables": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}</pre><ul><li><b>strict</b> เปิดชุดตรวจสำคัญ</li><li><b>noEmit</b> ใช้เมื่อ bundler/framework เป็นผู้ build</li><li><b>target</b> กำหนด JavaScript output level</li><li><b>moduleResolution</b> ต้องตรงกับ runtime/bundler</li><li>อย่าคัดลอก tsconfig ข้ามโปรเจกต์โดยไม่เข้าใจ environment</li></ul></section>

<section class="chapter" id="basic"><h2>3. Basic Types และ Type Inference</h2><pre class="code">const name: string = 'Champ';
let score: number = 10;
const active: boolean = true;
const id: bigint = 100n;
const token: symbol = Symbol('token');

const inferred = 42; // inferred เป็น number
const mode = 'dark' as const; // literal type 'dark'

let nullable: string | null = null;
nullable = 'พร้อม';</pre><div class="note"><b>ให้ TypeScript infer ก่อน</b> ใส่ annotation เมื่อเป็น public contract, parameter, return ที่ต้องชัด หรือ inference กว้าง/ผิด intent</div><table><thead><tr><th>ควรใช้</th><th>หลีกเลี่ยง</th></tr></thead><tbody><tr><td>string, number, boolean</td><td>String, Number, Boolean boxed types</td></tr><tr><td>unknown เมื่อยังไม่รู้</td><td>any ที่ปิด type checking</td></tr><tr><td>object/Record ที่เหมาะสม</td><td>Object ที่กว้างและกำกวม</td></tr></tbody></table></section>

<section class="chapter" id="objects"><h2>4. Objects, Arrays, Tuples และ Readonly</h2><pre class="code">type Product = {
  readonly id: string;
  name: string;
  price: number;
  description?: string;
};

const products: Product[] = [];
const readonlyProducts: readonly Product[] = products;

type Point = readonly [x: number, y: number];
const point: Point = [10, 20];

type Dictionary = Record&lt;string, number&gt;;
const scores: Dictionary = { ann: 10, bob: 20 };</pre><p>Optional property หมายถึง property อาจไม่มี ไม่เหมือน property ที่มีค่า undefined เมื่อเปิด exactOptionalPropertyTypes ความแตกต่างนี้จะชัดขึ้น</p></section>

<section class="chapter" id="type-interface"><h2>5. type และ interface</h2><pre class="code">interface User {
  id: string;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

type Status = 'idle' | 'loading' | 'success' | 'error';
type UserWithStatus = User &amp; { status: Status };</pre><table><thead><tr><th>interface</th><th>type</th></tr></thead><tbody><tr><td>เหมาะกับ object contract และ extends</td><td>ใช้กับ unions, tuples, primitives, mapped/conditional types</td></tr><tr><td>Declaration merging ได้</td><td>Alias ปิด ไม่ merge</td></tr><tr><td>มักใช้ public extensible API</td><td>ยืดหยุ่นกับ type composition</td></tr></tbody></table><p>ทีมควรกำหนด convention ให้สม่ำเสมอ แต่ไม่จำเป็นต้องบังคับใช้ตัวเดียวกับทุกกรณี</p></section>

<section class="chapter" id="unions"><h2>6. Unions, Literal Types และ Narrowing</h2><pre class="code">type Result =
  | { status: 'success'; data: Product[] }
  | { status: 'error'; error: Error }
  | { status: 'loading' };

function render(result: Result) {
  switch (result.status) {
    case 'success': return result.data.length;
    case 'error': return result.error.message;
    case 'loading': return 'กำลังโหลด';
    default: return assertNever(result);
  }
}

function assertNever(value: never): never {
  throw new Error('Unhandled variant: ' + JSON.stringify(value));
}</pre><h3>Narrowing Tools</h3><ul><li>typeof สำหรับ primitives</li><li>instanceof สำหรับ class/constructor</li><li>in สำหรับ property presence</li><li>Equality และ truthiness checks</li><li>Discriminated union ด้วย literal field</li><li>User-defined type predicate</li></ul><pre class="code">function isProduct(value: unknown): value is Product {
  if (typeof value !== 'object' || value === null) return false;
  return 'id' in value &amp;&amp; 'name' in value &amp;&amp; 'price' in value;
}</pre></section>

<section class="chapter" id="functions"><h2>7. Function Types, Overloads และ Callbacks</h2><pre class="code">type Formatter = (value: number, locale?: string) =&gt; string;

const formatMoney: Formatter = (value, locale = 'th-TH') =&gt;
  new Intl.NumberFormat(locale, {
    style: 'currency', currency: 'THB'
  }).format(value);

function parse(value: string): number;
function parse(value: number): number;
function parse(value: string | number): number {
  return typeof value === 'number' ? value : Number(value);
}

function mapValues&lt;T, R&gt;(items: readonly T[], mapper: (item: T) =&gt; R): R[] {
  return items.map(mapper);
}</pre><p>ใช้ overload เมื่อ output/behavior สัมพันธ์กับ input หลาย signature จริง หาก union parameter อธิบายได้ง่ายให้ใช้ union เพื่อ API ที่ดูแลง่ายกว่า</p></section>

<section class="chapter" id="generics"><h2>8. Generics และ Constraints</h2><pre class="code">function identity&lt;T&gt;(value: T): T {
  return value;
}

function getProperty&lt;T, K extends keyof T&gt;(object: T, key: K): T[K] {
  return object[key];
}

type ApiResponse&lt;T&gt; = {
  data: T;
  requestId: string;
};

interface Repository&lt;T extends { id: string }&gt; {
  list(): Promise&lt;readonly T[]&gt;;
  get(id: T['id']): Promise&lt;T | null&gt;;
  create(input: Omit&lt;T, 'id'&gt;): Promise&lt;T&gt;;
}</pre><div class="note warning">Generic ต้องแสดงความสัมพันธ์ระหว่าง types หาก type parameter ใช้ครั้งเดียวและไม่สร้างความสัมพันธ์ อาจใช้ unknown/concrete type แทนได้</div></section>

<section class="chapter" id="operators"><h2>9. keyof, typeof และ Indexed Access</h2><pre class="code">const config = {
  apiUrl: '/api',
  timeout: 5000,
  retries: 2
} as const;

type Config = typeof config;
type ConfigKey = keyof Config;
type Timeout = Config['timeout'];

const roles = ['admin', 'editor', 'viewer'] as const;
type Role = typeof roles[number];

function pick&lt;T, K extends keyof T&gt;(object: T, keys: readonly K[]): Pick&lt;T, K&gt; {
  return Object.fromEntries(keys.map((key) =&gt; [key, object[key]])) as Pick&lt;T, K&gt;;
}</pre></section>

<section class="chapter" id="advanced"><h2>10. Conditional, Mapped และ Template Literal Types</h2><pre class="code">type Nullable&lt;T&gt; = { [K in keyof T]: T[K] | null };
type OptionalExcept&lt;T, K extends keyof T&gt; = Partial&lt;T&gt; &amp; Pick&lt;T, K&gt;;

type ElementType&lt;T&gt; = T extends readonly (infer U)[] ? U : T;
type ProductItem = ElementType&lt;Product[]&gt;;

type ChangedEvent&lt;K extends string&gt; = &#96;on&#36;{Capitalize&lt;K&gt;}&#96;;

type Getters&lt;T&gt; = {
  [K in keyof T as K extends string ? K : never]: () =&gt; T[K]
};</pre><p>Advanced types ควรลดงานซ้ำและสื่อ contract ไม่ควรกลายเป็นปริศนาที่ error message อ่านไม่ได้ หาก type ซับซ้อนเกินไปแยกเป็น named helpers และเพิ่ม type tests</p></section>

<section class="chapter" id="utilities"><h2>11. Utility Types ที่ต้องรู้</h2><table><thead><tr><th>Utility</th><th>ความหมาย</th></tr></thead><tbody><tr><td>Partial&lt;T&gt;</td><td>ทุก property optional</td></tr><tr><td>Required&lt;T&gt;</td><td>ทุก property required</td></tr><tr><td>Readonly&lt;T&gt;</td><td>ทุก property readonly ระดับตื้น</td></tr><tr><td>Pick&lt;T,K&gt;</td><td>เลือก keys</td></tr><tr><td>Omit&lt;T,K&gt;</td><td>ตัด keys</td></tr><tr><td>Record&lt;K,V&gt;</td><td>Object mapping key ไป value</td></tr><tr><td>Exclude / Extract</td><td>ตัด/เลือกสมาชิก union</td></tr><tr><td>NonNullable</td><td>ตัด null และ undefined</td></tr><tr><td>Parameters / ReturnType</td><td>ดึง parameter tuple/return type</td></tr><tr><td>Awaited</td><td>แกะค่าจาก Promise ซ้อน</td></tr></tbody></table><pre class="code">type CreateProduct = Omit&lt;Product, 'id'&gt;;
type ProductPatch = Partial&lt;Pick&lt;Product, 'name' | 'price'&gt;&gt;;
type ProductMap = Record&lt;Product['id'], Product&gt;;</pre></section>

<section class="chapter" id="classes"><h2>12. Classes, Visibility และ Abstract Classes</h2><pre class="code">abstract class Entity&lt;Id&gt; {
  constructor(public readonly id: Id) {}
  abstract validate(): void;
}

class ProductEntity extends Entity&lt;string&gt; {
  #price: number;

  constructor(id: string, public name: string, price: number) {
    super(id);
    this.#price = price;
  }

  get price() { return this.#price; }
  set price(value: number) {
    if (value &lt; 0) throw new RangeError('price');
    this.#price = value;
  }
  override validate() { if (!this.name.trim()) throw new Error('name'); }
}</pre><table><tbody><tr><th>public</th><td>เข้าถึงได้ทุกที่ ค่าเริ่มต้น</td></tr><tr><th>protected</th><td>ภายใน class และ subclass</td></tr><tr><th>private</th><td>TypeScript-only private; #field เป็น runtime private</td></tr><tr><th>abstract</th><td>กำหนด contract ให้ subclass implement</td></tr></tbody></table></section>

<section class="chapter" id="safety"><h2>13. unknown, never, Assertions และ satisfies</h2><pre class="code">function parseJSON(text: string): unknown {
  return JSON.parse(text);
}

const value = parseJSON(input);
if (isProduct(value)) console.log(value.price);

const routes = {
  home: '/',
  products: '/products'
} satisfies Record&lt;string, string&gt;;

// Assertion บอก compiler แต่ไม่ตรวจ runtime
const inputElement = document.querySelector('#name') as HTMLInputElement | null;
</pre><ul><li><b>any:</b> ปิด type safety และแพร่ต่อ</li><li><b>unknown:</b> บังคับ narrow ก่อนใช้</li><li><b>never:</b> ไม่มีค่าที่เป็นไปได้/ตรวจ exhaustiveness</li><li><b>as:</b> assertion ไม่ใช่ conversion หรือ validation</li><li><b>satisfies:</b> ตรวจ contract โดยรักษา inferred type</li><li><b>@ts-expect-error:</b> ใช้ใน type test/กรณีพิเศษและต้องมีเหตุผล</li></ul></section>

<section class="chapter" id="modules"><h2>14. Modules, Declaration Files และ Packages</h2><pre class="code">// product.ts
export type Product = { id: string; name: string };
export function findProduct(id: string): Product | null { return null; }

// consumer.ts
import { findProduct, type Product } from './product.js';

// untyped-library.d.ts
declare module 'legacy-library' {
  export function parse(input: string): unknown;
}</pre><ul><li>ใช้ import type เมื่อ import เฉพาะ type</li><li>ไฟล์ .d.ts อธิบาย JavaScript/runtime ที่มีอยู่ ไม่สร้าง implementation</li><li>Library package ต้อง exports types และ JavaScript paths ตรงกัน</li><li>หลีกเลี่ยง global declarations และ module augmentation หากไม่จำเป็น</li><li>Project References ช่วย monorepo ใหญ่ build แยกขอบเขต</li></ul></section>

<section class="chapter" id="dom-react"><h2>15. DOM, React และ Next.js</h2><h3>DOM</h3><pre class="code">const form = document.querySelector&lt;HTMLFormElement&gt;('#product-form');
const input = document.querySelector&lt;HTMLInputElement&gt;('#name');

form?.addEventListener('submit', (event: SubmitEvent) =&gt; {
  event.preventDefault();
  console.log(input?.value ?? '');
});</pre><h3>React Props และ Events</h3><pre class="code">type ButtonProps = {
  tone?: 'primary' | 'danger';
  children: React.ReactNode;
} &amp; React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;;

function Button({ tone = 'primary', children, ...props }: ButtonProps) {
  return &lt;button data-tone={tone} {...props}&gt;{children}&lt;/button&gt;;
}</pre><h3>Next.js Boundaries</h3><ul><li>Server → Client props ต้อง serialize ได้</li><li>params/searchParams ใช้ types ตาม API ของ Next.js รุ่นที่ติดตั้ง</li><li>อย่าส่ง function/class instance ข้าม boundary</li><li>แยก database/server secrets ใน server-only modules</li><li>Type ของ form/API ไม่แทน runtime validation</li></ul></section>

<section class="chapter" id="runtime"><h2>16. Runtime Validation และ Typed API</h2><pre class="code">type ProductInput = {
  name: string;
  price: number;
};

function parseProductInput(value: unknown): ProductInput {
  if (typeof value !== 'object' || value === null) throw new Error('object required');
  if (!('name' in value) || typeof value.name !== 'string') throw new Error('name');
  if (!('price' in value) || typeof value.price !== 'number') throw new Error('price');
  return { name: value.name.trim(), price: value.price };
}

async function getProduct(id: string): Promise&lt;Product&gt; {
  const response = await fetch('/api/products/' + encodeURIComponent(id));
  if (!response.ok) throw new Error('HTTP ' + response.status);
  return parseProduct(await response.json());
}</pre><div class="note danger">Type assertion เช่น <span class="inline">await response.json() as Product</span> ไม่ตรวจข้อมูลจาก API ใช้ schema validator หรือ validation function ที่ boundary</div></section>

<section class="chapter" id="architecture"><h2>17. Architecture, Type Tests และ Migration</h2><h3>Layered Contracts</h3><div class="flow">unknown Input → Runtime Schema → Domain Types → Use Cases → UI DTO</div><ul><li>Domain types ไม่ import React/HTTP/Database</li><li>ใช้ branded types เมื่อ ID คนละ domain ห้ามสลับกัน</li><li>แยก input/output types จาก database row</li><li>Return Result union สำหรับ expected failures; throw สำหรับ unexpected failures</li><li>Type tests ตรวจ public generic/utility APIs</li><li>Unit/integration tests ยังจำเป็นเพราะ type ไม่ตรวจ behavior</li></ul><pre class="code">declare const brand: unique symbol;
type ProductId = string &amp; { readonly [brand]: 'ProductId' };
type UserId = string &amp; { readonly [brand]: 'UserId' };

type Result&lt;T, E&gt; =
  | { ok: true; value: T }
  | { ok: false; error: E };</pre><h3>ย้าย JavaScript → TypeScript</h3><ol class="steps"><li>เปิด allowJs/checkJs หรือเริ่มจาก leaf modules</li><li>เพิ่ม types ที่ public boundaries</li><li>เปลี่ยน any เป็น unknown และ narrow</li><li>เปิด strict checks ทีละชุด</li><li>เพิ่ม runtime validation ที่ API/storage</li><li>ลบ assertions/ignore พร้อมเพิ่ม tests</li></ol></section>

<section class="chapter" id="project"><h2>18. TypeScript CRUD Project และแบบฝึก</h2><h3>Domain Model</h3><pre class="code">type ProductId = string &amp; { readonly __brand: 'ProductId' };

type Product = Readonly&lt;{
  id: ProductId;
  name: string;
  price: number;
  quantity: number;
  version: number;
}&gt;;

type CreateProductInput = Pick&lt;Product, 'name' | 'price' | 'quantity'&gt;;
type UpdateProductInput = Partial&lt;CreateProductInput&gt; &amp; { version: number };

interface ProductRepository {
  list(signal?: AbortSignal): Promise&lt;readonly Product[]&gt;;
  create(input: CreateProductInput, signal?: AbortSignal): Promise&lt;Product&gt;;
  update(id: ProductId, input: UpdateProductInput, signal?: AbortSignal): Promise&lt;Product&gt;;
  remove(id: ProductId, signal?: AbortSignal): Promise&lt;void&gt;;
}</pre><h3>Milestones</h3><ol class="steps"><li>แปลง Vanilla JS CRUD เป็น strict TypeScript</li><li>กำหนด Domain/Input/DTO types แยกกัน</li><li>สร้าง discriminated union สำหรับ UI state</li><li>สร้าง Generic API Client และ runtime schema</li><li>รองรับ Abort, Error codes และ optimistic concurrency</li><li>เขียน Repository interface + Memory/API implementations</li><li>เพิ่ม Unit, Integration และ type tests</li><li>นำไปใช้กับ React/Next.js โดยไม่ย้าย domain logic</li></ol><h3>แบบฝึก</h3><div class="cards"><div class="card"><strong>Narrowing</strong><br>สร้าง Payment union 4 แบบและ exhaustive switch</div><div class="card"><strong>Generics</strong><br>สร้าง Paginated&lt;T&gt; และ generic repository</div><div class="card"><strong>Utilities</strong><br>สร้าง DeepReadonly และ RequireKeys</div><div class="card"><strong>Runtime</strong><br>Parse unknown JSON เป็น Product[] พร้อม field errors</div><div class="card"><strong>React</strong><br>Generic Table ที่ column keys type-safe</div><div class="card"><strong>Migration</strong><br>ย้าย JS module ที่มี any ให้ strict ผ่านทั้งหมด</div></div><div class="note"><b>เกณฑ์จบ:</b> ใช้ strict โดยไม่มี any/ts-ignore ที่ไร้เหตุผล, ไม่ assert ข้อมูลภายนอก, public API มี types ชัด และ tests ตรวจ behavior/edge cases</div></section>

<section class="chapter sources"><h2>เอกสารอ้างอิง</h2><ul><li><a href="https://www.typescriptlang.org/docs/">TypeScript Documentation</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html">Everyday Types</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html">Narrowing</a></li><li><a href="https://www.typescriptlang.org/tsconfig/">TSConfig Reference</a></li></ul></section>
</article></div></main></body></html>`;
