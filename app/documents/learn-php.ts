export const document = String.raw`<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet"><title>เรียน PHP แบบละเอียด</title><style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1100px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;justify-content:space-between}.brand{font-weight:800}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#f1eaff,#fff 72%)}.eyebrow{color:#777bb3;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0;font-size:clamp(34px,7vw,54px);line-height:1.2}.hero h1 span{color:#777bb3}.hero p{max-width:780px;margin:0;color:#667085}.layout{display:grid}.toc{padding:22px 20px;background:#faf8ff}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{scroll-margin-top:20px;padding:32px 0;border-bottom:1px solid #eceef2}.chapter h2{margin:0 0 16px;font-size:24px}.chapter h3{margin:24px 0 8px;font-size:17px}.chapter li{margin:5px 0}.note,.warn,.exercise,.project{margin:18px 0;padding:14px 16px;border-left:4px solid #777bb3;border-radius:0 12px 12px 0;background:#f1eaff}.warn{border-color:#f59e0b;background:#fffaeb}.exercise{border-color:#777bb3;background:#f1eaff}.project{border-color:#2e9360;background:#ecfdf3}pre{overflow:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,monospace;white-space:pre}code{font-family:ui-monospace,monospace}p code,li code{padding:2px 6px;border-radius:5px;background:#eef0f3;color:#5b3a8b;font-size:12px}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#f8f5ff}.sources a,.chapter a{color:#65459a;font-weight:700}footer{padding:35px;text-align:center;color:#6a6674}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:255px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}}
</style></head><body><main class="shell"><nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav><header class="hero"><div class="eyebrow">BACKEND • DATABASE • WEB API</div><h1>เรียนรู้ <span>PHP</span></h1><p>เรียนภาษา PHP 8.x, Web, OOP, Composer, PDO, CRUD, Authentication, REST API, Testing และ Deploy ผ่าน Nginx + PHP-FPM พร้อมตัวอย่างและแบบฝึกพิมพ์</p></header><div class="layout"><aside class="toc"><strong>สารบัญ</strong><ol>
${Array.from({length:18},(_,i)=>`<li><a href="#php-${i+1}">${i+1}. ${[
"ภาพรวมและการทำงาน","ติดตั้งและเริ่มโปรเจกต์","Syntax และชนิดข้อมูล","เงื่อนไขและ Loop","Array และ String","Function และ Closure","HTTP และ Superglobals","Form และ Validation","ไฟล์และ Upload","OOP และ Dependency Injection","Enum, Attribute, Generator","Namespace และ Composer","Error และ Exception","ฐานข้อมูลด้วย PDO","โปรเจกต์ CRUD","Session และ Authentication","REST API และ Security","Testing และ Deployment"][i]}</a></li>`).join("")}
</ol></aside><article class="content">
<section class="chapter" id="php-1"><h2>1. PHP คืออะไรและทำงานอย่างไร</h2><p>PHP เป็นภาษาฝั่งเซิร์ฟเวอร์ เมื่อ Browser ขอ URL เว็บเซิร์ฟเวอร์จะส่งไฟล์ PHP ให้ PHP-FPM ประมวลผล แล้วส่ง HTML หรือ JSON กลับไป Browser จึงไม่เห็น source PHP และห้ามใส่ secret ใน JavaScript ฝั่งผู้ใช้</p><pre><code>Browser → Nginx → PHP-FPM → PHP Application → Database
Browser ← Nginx ← HTML / JSON      ←</code></pre><p>เส้นทางเรียนที่แนะนำ: ภาษา → HTTP/Form → OOP/Composer → PDO → CRUD/Auth/API → Test/Deploy</p><div class="note">เอกสารนี้เน้น PHP 8.x ควรตรวจรุ่นที่ยังได้รับ Security Support ก่อนเลือกใช้ใน Production</div></section>

<section class="chapter" id="php-2"><h2>2. ติดตั้งและเริ่มโปรเจกต์</h2><pre><code>php -v
php -m
php --ini
mkdir php-lab &amp;&amp; cd php-lab
php -S localhost:8000</code></pre><p>สร้าง <code>index.php</code>:</p><pre><code>&lt;?php
declare(strict_types=1);

$name = 'Champ';
echo "สวัสดี {$name}";</code></pre><p>CLI เหมาะกับ script/worker ส่วนเว็บใช้ built-in server เฉพาะพัฒนา และใช้ Nginx/Apache + PHP-FPM ใน Production</p><div class="exercise"><strong>แบบฝึกพิมพ์:</strong> แสดงชื่อ อายุ และปีเกิด รับชื่อผ่าน argument <code>$argv</code> แล้วทดสอบชนิดด้วย <code>get_debug_type()</code></div></section>

<section class="chapter" id="php-3"><h2>3. Syntax ตัวแปรและชนิดข้อมูล</h2><table><tr><th>กลุ่ม</th><th>ชนิด</th></tr><tr><td>Scalar</td><td>bool, int, float, string</td></tr><tr><td>Compound</td><td>array, object, callable, iterable</td></tr><tr><td>พิเศษ</td><td>null, resource, never, void</td></tr></table><pre><code>&lt;?php
declare(strict_types=1);

$name = 'Mali';
$age = 24;
$price = 99.50;
$active = true;
$middleName = null;

const TAX_RATE = 0.07;
$total = $price * (1 + TAX_RATE);
echo "{$name}: {$total}";</code></pre><p>เรียนเรื่อง scope, reference, type juggling, casting, <code>isset</code>, <code>empty</code>, null coalescing <code>??</code> และ comparison แบบ strict <code>===</code> ให้แม่น</p></section>

<section class="chapter" id="php-4"><h2>4. Operator เงื่อนไขและ Loop</h2><pre><code>$status = match ($score) {
    100 =&gt; 'perfect',
    80, 90 =&gt; 'great',
    default =&gt; 'keep going',
};

foreach ($products as $index =&gt; $product) {
    if (!$product['active']) continue;
    echo ($index + 1) . '. ' . $product['name'];
}</code></pre><p>ฝึก <code>if/elseif</code>, ternary, <code>match</code>, <code>for</code>, <code>while</code>, <code>foreach</code>, <code>break</code> และ <code>continue</code> โดย <code>match</code> เปรียบเทียบแบบ strict และคืนค่าได้</p><div class="exercise"><strong>โจทย์:</strong> FizzBuzz 1–100, ระบบตัดเกรด และตะกร้าสินค้าที่คำนวณ subtotal/ส่วนลด/ภาษี</div></section>

<section class="chapter" id="php-5"><h2>5. Array และ String</h2><pre><code>$users = [
    ['id' =&gt; 1, 'name' =&gt; 'Ann', 'role' =&gt; 'admin'],
    ['id' =&gt; 2, 'name' =&gt; 'Bob', 'role' =&gt; 'user'],
];

$names = array_map(fn(array $u): string =&gt; $u['name'], $users);
$admins = array_filter($users, fn(array $u): bool =&gt; $u['role'] === 'admin');
$byId = array_column($users, null, 'id');</code></pre><p>เรียน indexed/associative array, destructuring, spread, sort, map/filter/reduce และ string interpolation ส่วนข้อความ UTF-8 ใช้ส่วนขยาย <code>mbstring</code> เช่น <code>mb_strlen</code></p><div class="warn">อย่าคิดว่า array PHP เหมือน array ภาษาอื่นเสมอ เพราะเป็น ordered map และใช้หน่วยความจำมากกว่าโครงสร้างเฉพาะทาง</div></section>

<section class="chapter" id="php-6"><h2>6. Function, Closure และ Callback</h2><pre><code>function calculateTotal(float $price, int $qty = 1): float
{
    return $price * $qty;
}

function findUser(int $id): ?array { /* ... */ return null; }

$discount = 0.10;
$applyDiscount = fn(float $total): float =&gt; $total * (1 - $discount);

function run(callable $task): mixed { return $task(); }</code></pre><p>ต้องรู้ parameter/return type, union/intersection type, named arguments, variadic <code>...</code>, closure capture <code>use</code>, first-class callable, pure function และ side effect</p></section>

<section class="chapter" id="php-7"><h2>7. HTTP, Request, Response และ Superglobals</h2><pre><code>$method = $_SERVER['REQUEST_METHOD'];
$page = filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT) ?: 1;

header('Content-Type: application/json; charset=utf-8');
http_response_code(200);
echo json_encode(['page' =&gt; $page], JSON_THROW_ON_ERROR);</code></pre><p>ศึกษา <code>$_GET</code>, <code>$_POST</code>, <code>$_FILES</code>, <code>$_COOKIE</code>, <code>$_SESSION</code>, <code>$_SERVER</code>, headers, cookies, status codes และ request body แต่ไม่ควรกระจายการอ่าน superglobal ทั่วระบบ ให้แปลงเป็น Request object ที่ขอบระบบ</p></section>

<section class="chapter" id="php-8"><h2>8. Form, Validation, Escaping และ CSRF</h2><pre><code>$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$name = trim((string) ($_POST['name'] ?? ''));
$errors = [];
if ($name === '') $errors['name'] = 'กรุณากรอกชื่อ';
if ($email === false || $email === null) $errors['email'] = 'อีเมลไม่ถูกต้อง';

function e(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}</code></pre><pre><code>&lt;input name="name" value="&lt;?= e($name) ?&gt;"&gt;</code></pre><p>Validation ตรวจว่าข้อมูลถูกกติกา ส่วน escaping ป้องกันข้อมูลกลายเป็น HTML/JavaScript ต้องทำตาม output context และเพิ่ม CSRF token ให้ทุกคำขอเปลี่ยนข้อมูล</p><div class="warn">ห้ามเชื่อ validation ฝั่ง Browser อย่างเดียว และห้ามนำ input ผู้ใช้ไปต่อ SQL, shell command หรือ HTML ตรง ๆ</div></section>

<section class="chapter" id="php-9"><h2>9. File และ Upload อย่างปลอดภัย</h2><pre><code>if ($_FILES['photo']['error'] !== UPLOAD_ERR_OK) {
    throw new RuntimeException('Upload failed');
}
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mime = $finfo-&gt;file($_FILES['photo']['tmp_name']);
$allowed = ['image/jpeg' =&gt; 'jpg', 'image/png' =&gt; 'png'];
if (!isset($allowed[$mime])) throw new RuntimeException('Invalid type');
$filename = bin2hex(random_bytes(16)) . '.' . $allowed[$mime];
move_uploaded_file($_FILES['photo']['tmp_name'], $uploadDir . '/' . $filename);</code></pre><p>จำกัดขนาด ตรวจ MIME จริง สุ่มชื่อ เก็บนอก public root ป้องกัน path traversal และตั้งสิทธิ์ไฟล์ให้น้อยที่สุด</p></section>

<section class="chapter" id="php-10"><h2>10. OOP และ Dependency Injection</h2><pre><code>interface ProductRepository
{
    public function find(int $id): ?Product;
    public function save(Product $product): void;
}

final readonly class Product
{
    public function __construct(
        public int $id,
        public string $name,
        public int $priceSatang,
    ) {}
}

final class ProductService
{
    public function __construct(private ProductRepository $repository) {}
}</code></pre><p>เรียน class/object, constructor promotion, visibility, inheritance, abstract class, interface, trait, static, magic methods, readonly และ SOLID ใช้ composition เป็นค่าเริ่มต้น และ inject dependency เพื่อทดสอบง่าย</p></section>

<section class="chapter" id="php-11"><h2>11. Enum, Attribute, Generator และ Fiber</h2><pre><code>enum OrderStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
    case Cancelled = 'cancelled';
}

function csvRows(string $path): Generator
{
    $handle = fopen($path, 'rb');
    try { while (($row = fgetcsv($handle)) !== false) yield $row; }
    finally { fclose($handle); }
}</code></pre><p>Enum แทนค่าจำกัด, Attribute ใส่ metadata ที่อ่านผ่าน Reflection, Generator ประมวลผลข้อมูลใหญ่ทีละรายการ และ Fiber เป็น primitive สำหรับ cooperative concurrency ซึ่งมักใช้ผ่าน library</p></section>

<section class="chapter" id="php-12"><h2>12. Namespace, Composer และ Autoload</h2><pre><code>// src/Product/ProductService.php
namespace App\Product;

final class ProductService {}

// ใช้งาน
use App\Product\ProductService;</code></pre><pre><code>{
  "require": { "php": "^8.3" },
  "autoload": { "psr-4": { "App\\": "src/" } }
}</code></pre><pre><code>composer install
composer require ramsey/uuid
composer dump-autoload</code></pre><p>เรียน Semantic Versioning, <code>composer.json</code>, lock file, PSR-4 และ scripts โดย commit <code>composer.lock</code> สำหรับ application และใช้ <code>composer audit</code> ตรวจช่องโหว่ dependency</p></section>

<section class="chapter" id="php-13"><h2>13. Error, Exception และ Logging</h2><pre><code>try {
    $product = $service-&gt;get($id);
} catch (ProductNotFound $e) {
    http_response_code(404);
} catch (Throwable $e) {
    $logger-&gt;error('Unexpected error', ['exception' =&gt; $e]);
    http_response_code(500);
}</code></pre><p>ตั้ง error reporting แยก dev/prod, สร้าง exception ตามโดเมน, ใช้ global handler ที่ขอบระบบ และ log แบบ structured พร้อม request ID โดยไม่บันทึก password/token/ข้อมูลอ่อนไหว</p></section>

<section class="chapter" id="php-14"><h2>14. Database ด้วย PDO</h2><pre><code>$pdo = new PDO($dsn, $user, $password, [
    PDO::ATTR_ERRMODE =&gt; PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE =&gt; PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES =&gt; false,
]);

$stmt = $pdo-&gt;prepare(
    'SELECT id, name, price FROM products WHERE id = :id'
);
$stmt-&gt;execute(['id' =&gt; $id]);
$product = $stmt-&gt;fetch();</code></pre><pre><code>$pdo-&gt;beginTransaction();
try {
    // UPDATE inventory และ INSERT order
    $pdo-&gt;commit();
} catch (Throwable $e) {
    $pdo-&gt;rollBack();
    throw $e;
}</code></pre><p>เรียน SQL, schema, constraints, index, migration, prepared statements, transactions, pagination และ N+1 query</p><div class="warn">placeholder ใช้แทน value ไม่ใช่ชื่อตาราง/column ค่าที่เป็น identifier ต้องเลือกจาก allowlist</div></section>

<section class="chapter" id="php-15"><h2>15. โปรเจกต์ CRUD สินค้า</h2><pre><code>public/
  index.php
src/
  Http/Controller/ProductController.php
  Product/Product.php
  Product/ProductService.php
  Product/ProductRepository.php
  Infrastructure/PdoProductRepository.php
templates/products/
config/  migrations/  tests/</code></pre><p>ลำดับสร้าง: ออกแบบตาราง → Composer/PSR-4 → front controller/router → connection → repository → service/validation → controller → template → flash/CSRF → test</p><table><tr><th>Method</th><th>Path</th><th>งาน</th></tr><tr><td>GET</td><td>/products</td><td>List/Search</td></tr><tr><td>GET/POST</td><td>/products/create</td><td>Create</td></tr><tr><td>GET/POST</td><td>/products/{id}/edit</td><td>Update</td></tr><tr><td>POST</td><td>/products/{id}/delete</td><td>Delete</td></tr></table><div class="project"><strong>Milestone:</strong> เพิ่ม pagination, sorting, validation error, image upload, transaction, audit log และ test จากนั้นแยก endpoint JSON โดย reuse service เดิม</div></section>

<section class="chapter" id="php-16"><h2>16. Session, Authentication และ Authorization</h2><pre><code>session_start();
session_regenerate_id(true);

$hash = password_hash($password, PASSWORD_DEFAULT);
if (!password_verify($inputPassword, $hash)) {
    throw new RuntimeException('Invalid credentials');
}

$_SESSION['user_id'] = $user['id'];</code></pre><p>ระบบ Login ต้องมี unique email, password hash, generic error, rate limit, secure/httponly/samesite cookie, session rotation, logout และ authorization ทุก resource แยก Authentication (เป็นใคร) ออกจาก Authorization (ทำอะไรได้)</p><p>CSRF token สร้างด้วย <code>random_bytes</code> เก็บใน session และตรวจด้วย <code>hash_equals</code></p></section>

<section class="chapter" id="php-17"><h2>17. REST API และ Security Checklist</h2><pre><code>$input = json_decode(file_get_contents('php://input'), true, flags: JSON_THROW_ON_ERROR);

header('Content-Type: application/json; charset=utf-8');
http_response_code(201);
echo json_encode(['data' =&gt; $product], JSON_THROW_ON_ERROR);</code></pre><p>ออกแบบ resource URL, HTTP method/status, error shape, pagination, idempotency, versioning, CORS และ OpenAPI</p><ul><li>Validate input และ encode output</li><li>Prepared statement, CSRF, rate limit และ authorization</li><li>เก็บ secret ใน environment/secret manager</li><li>ตั้ง security headers, HTTPS และ dependency audit</li><li>จำกัด error detail ที่ส่ง client</li></ul><div class="exercise"><strong>โจทย์:</strong> ทำ Product API ครบ GET/POST/PATCH/DELETE พร้อม 400, 401, 403, 404, 409, 422 และ integration test</div></section>

<section class="chapter" id="php-18"><h2>18. Testing, Quality และ Deployment</h2><pre><code>composer require --dev phpunit/phpunit
vendor/bin/phpunit
vendor/bin/phpstan analyse src tests
composer audit</code></pre><p>เขียน unit test ให้ domain/service, integration test ให้ PDO และ HTTP test ให้ endpoint ใช้ formatter/linter, static analysis และ CI</p><h3>Nginx + PHP-FPM</h3><pre><code>location / {
    try_files $uri $uri/ /index.php?$query_string;
}
location ~ \.php$ {
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass php:9000;
}</code></pre><p>Production ใช้ container แบบ non-root, OPcache, health check, migration ที่ควบคุมได้, backup/restore test, metrics/logs และ zero-downtime strategy</p><div class="project"><strong>โปรเจกต์จบหลักสูตร:</strong> ระบบร้านค้า PHP + PostgreSQL มี CRUD, Login/RBAC, Cart/Order transaction, REST API, Upload, PHPUnit, PHPStan, Docker Compose, Nginx/PHP-FPM และ CI/CD</div><h3>แหล่งศึกษาอย่างเป็นทางการ</h3><ul><li><a href="https://www.php.net/manual/en/" target="_blank" rel="noreferrer">PHP Manual</a></li><li><a href="https://www.php.net/supported-versions.php" target="_blank" rel="noreferrer">Supported PHP Versions</a></li><li><a href="https://www.php.net/manual/en/book.pdo.php" target="_blank" rel="noreferrer">PDO Manual</a></li><li><a href="https://getcomposer.org/doc/" target="_blank" rel="noreferrer">Composer Documentation</a></li></ul></section>
</article></div><footer>ฝึกโดยพิมพ์เอง อธิบายเหตุผลของโค้ด และค่อยเพิ่มความซับซ้อนทีละ Milestone</footer></main></body></html>`;
