export const document = `<!DOCTYPE html>
<html lang="th">
<head>
  <base target="_top">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box}
    body{margin:0;background:#eef0f6;color:#14171f;font-family:'Noto Sans Thai','Plus Jakarta Sans',sans-serif}
    .shell{width:min(920px,100%);min-height:100vh;margin:auto;background:#fff;padding:24px 18px 70px}
    .nav{display:flex;align-items:center;justify-content:space-between}
    .brand{font:800 15px 'Plus Jakarta Sans',sans-serif}
    .back{color:#6b7280;text-decoration:none;font-size:13px;font-weight:700}
    .hero{margin:42px 0 24px}
    .eyebrow{color:#6e7bff;font:700 11px 'Plus Jakarta Sans',sans-serif;letter-spacing:.1em}
    h1{font-size:32px;margin:7px 0 4px}
    h1 span{color:#6e7bff}
    .intro{margin:0;color:#6b7280;font-size:14px}
    .grid{display:grid;grid-template-columns:1fr;gap:14px}
    .topic{display:flex;align-items:center;gap:15px;min-height:112px;border:1px solid #e7e9f0;border-radius:20px;padding:18px;background:#f8f9fb;color:inherit;text-decoration:none;transition:transform .2s,border-color .2s,box-shadow .2s}
    .topic:hover{transform:translateY(-2px);border-color:#cfd3ff;box-shadow:0 12px 24px -18px #4f46e5}
    .icon{display:grid;flex:0 0 54px;height:54px;place-items:center;border-radius:16px;background:var(--soft);color:var(--color);font:800 16px 'Plus Jakarta Sans',sans-serif;letter-spacing:-.04em}
    .topic h2{margin:0 0 3px;font-size:17px}
    .topic p{margin:0;color:#6b7280;font-size:12px;line-height:1.55}
    .nginx{--color:#07943d;--soft:#e8f8ee}.docker{--color:#1677e8;--soft:#e9f3ff}.html{--color:#e55d2d;--soft:#fff0e9}.js{--color:#8d7600;--soft:#fff7ca}.ts{--color:#3178c6;--soft:#e9f3ff}.php{--color:#626ea5;--soft:#eef0fb}.node{--color:#43853d;--soft:#eaf7e8}
    .ui{--color:#a855f7;--soft:#f7edff}
    @media(min-width:620px){.grid{grid-template-columns:repeat(2,1fr)}}
    @media(min-width:700px){body{padding:40px 20px}.shell{min-height:auto;border-radius:28px;padding:30px 40px 45px;box-shadow:0 30px 60px -20px #14171f26}.hero{margin-top:50px}}
  </style>
</head>
<body>
  <main class="shell">
    <nav class="nav">
      <div class="brand">CHAMP • LEARN</div>
      <a class="back" href="/">← กลับหน้าแรก</a>
    </nav>
    <header class="hero">
      <div class="eyebrow">✦ LEARNING SPACE</div>
      <h1>หัวข้อการ<span>เรียนรู้</span></h1>
      <p class="intro">เลือกเทคโนโลยีที่ต้องการเรียนรู้และเริ่มพัฒนาทักษะของคุณ</p>
    </header>
    <section class="grid" aria-label="หัวข้อการเรียนรู้">
      <a class="topic nginx" href="/learn/nginx"><div class="icon">NG</div><div><h2>Nginx</h2><p>Web server, reverse proxy และการตั้งค่าพื้นฐาน</p></div></a>
      <a class="topic docker" href="/learn/docker"><div class="icon">DK</div><div><h2>Docker</h2><p>Container, Image และการจัดการ environment</p></div></a>
      <a class="topic html" href="/learn/html-css-tailwind"><div class="icon">&lt;/&gt;</div><div><h2>HTML, CSS &amp; Tailwind CSS</h2><p>โครงสร้างเว็บไซต์ การตกแต่ง และ Utility-first CSS</p></div></a>
      <a class="topic ui" href="/learn/ui-components"><div class="icon">UI</div><div><h2>UI Components</h2><p>Astryx, daisyUI, ReactBits และการสร้าง Component System</p></div></a>
      <a class="topic js" href="/learn/javascript"><div class="icon">JS</div><div><h2>JavaScript</h2><p>พื้นฐานภาษา DOM และการพัฒนาเว็บแบบโต้ตอบ</p></div></a>
      <a class="topic ts" href="/learn/typescript"><div class="icon">TS</div><div><h2>TypeScript</h2><p>ระบบ Type และการเขียนโค้ดที่ดูแลได้ง่ายขึ้น</p></div></a>
      <a class="topic php" href="/learn/php"><div class="icon">PHP</div><div><h2>PHP</h2><p>พื้นฐาน Backend การจัดการข้อมูล และ Web API</p></div></a>
      <a class="topic node" href="/learn/nodejs"><div class="icon">NODE</div><div><h2>Node.js</h2><p>Runtime, npm, Core Modules, Express, REST API และโปรเจกต์ CRUD</p></div></a>
    </section>
  </main>
</body>
</html>`;
