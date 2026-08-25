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
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1080px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;font-size:14px}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#edf9f1,#fff 68%)}.eyebrow{color:#078c3d;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0 8px;font-size:clamp(32px,7vw,52px);line-height:1.2}.hero h1 span{color:#078c3d}.hero p{max-width:690px;margin:0;color:#667085}.layout{display:grid;grid-template-columns:1fr}.toc{padding:22px 20px;background:#f8faf9;border-bottom:1px solid #e8eaf0}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px 20px;margin:10px 0 0;padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{padding:32px 0;border-bottom:1px solid #eceef2}.chapter:last-child{border:0}.chapter h2{margin:0 0 16px;font-size:24px;line-height:1.35}.chapter h3{margin:26px 0 8px;font-size:17px}.chapter p{margin:9px 0}.chapter li{margin:5px 0}.chapter ul,.chapter ol{padding-left:24px}.note{margin:18px 0;padding:14px 16px;border-left:4px solid #07943d;border-radius:0 12px 12px 0;background:#edf9f1}.warning{border-color:#f59e0b;background:#fffaeb}.code{overflow-x:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}.inline{padding:2px 6px;border-radius:5px;background:#eef0f3;font:12px ui-monospace,monospace}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#f5f7f6}.cards{display:grid;gap:10px}.card{padding:15px;border:1px solid #e5e8ec;border-radius:14px}.card strong{color:#078c3d}.steps{counter-reset:step;list-style:none;padding:0!important}.steps li{counter-increment:step;position:relative;padding:11px 12px 11px 46px;border-radius:12px;background:#f7f8fa}.steps li:before{content:counter(step);position:absolute;left:12px;top:10px;display:grid;width:25px;height:25px;place-items:center;border-radius:50%;background:#07943d;color:#fff;font-size:12px;font-weight:800}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:240px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border:0;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}.cards{grid-template-columns:repeat(2,1fr)}}
  </style>
</head>
<body><main class="shell">
  <nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav>
  <header class="hero"><div class="eyebrow">WEB SERVER • REVERSE PROXY</div><h1>เรียนรู้ <span>Nginx</span></h1><p>คู่มือฉบับละเอียด ตั้งแต่แนวคิดพื้นฐาน การเขียน config ไปจนถึงการใช้งานจริง ความปลอดภัย และการแก้ปัญหา</p></header>
  <div class="layout">
    <aside class="toc"><strong>สารบัญบทเรียน</strong><ol>
      <li><a href="#intro">Nginx คืออะไร</a></li><li><a href="#concept">แนวคิดพื้นฐาน</a></li><li><a href="#commands">คำสั่งจัดการ Service</a></li><li><a href="#directives">Directive สำคัญ</a></li><li><a href="#proxy">Reverse Proxy</a></li><li><a href="#load-balancing">Load Balancing</a></li><li><a href="#ssl">SSL/TLS</a></li><li><a href="#static">Static File & Caching</a></li><li><a href="#security">Rate Limiting & Security</a></li><li><a href="#variables">ตัวแปรที่ใช้บ่อย</a></li><li><a href="#logs">Log Format</a></li><li><a href="#debug">การ Debug</a></li><li><a href="#example">Config ใช้งานจริง</a></li><li><a href="#roadmap">ลำดับการเรียนรู้</a></li><li><a href="#mistakes">ข้อผิดพลาดที่พบบ่อย</a></li><li><a href="#multi-site">Multi-site และ Firewall</a></li><li><a href="#proxy-deep">proxy_pass เชิงลึก</a></li><li><a href="#backends">Next.js และ PHP-FPM</a></li><li><a href="#docker">Nginx กับ Docker</a></li><li><a href="#production-security">Production Security</a></li><li><a href="#performance">Performance Tuning</a></li><li><a href="#proxy-cache">Proxy Cache</a></li><li><a href="#reliability">Reliability</a></li><li><a href="#observability">Monitoring และ Logs</a></li><li><a href="#troubleshooting">Troubleshooting Lab</a></li>
    </ol></aside>
    <article class="content">
      <section class="chapter" id="intro"><h2>1. Nginx คืออะไร</h2><p>Nginx (อ่านว่า “เอ็นจิ้นเอ็กซ์”) เป็นซอฟต์แวร์ประสิทธิภาพสูงที่ใช้ทรัพยากรน้อยและรองรับ concurrent connection จำนวนมาก ด้วยสถาปัตยกรรมแบบ event-driven และ asynchronous</p><div class="cards"><div class="card"><strong>Web Server</strong><br>เสิร์ฟไฟล์ HTML, CSS, JavaScript และรูปภาพ</div><div class="card"><strong>Reverse Proxy</strong><br>ส่ง request ไปยัง Node.js, PHP-FPM, Python หรือ Java</div><div class="card"><strong>Load Balancer</strong><br>กระจาย traffic ไปยัง backend หลายเครื่อง</div><div class="card"><strong>API / Mail Gateway</strong><br>จัดการ routing, rate limit, cache และ mail proxy</div></div></section>

      <section class="chapter" id="concept"><h2>2. แนวคิดพื้นฐาน</h2><h3>สถาปัตยกรรม</h3><ul><li><b>Master process</b> อ่าน config, จัดการ worker และ bind port</li><li><b>Worker process</b> รับ request จริง โดย worker หนึ่งตัวจัดการหลาย connection แบบ non-blocking I/O</li></ul><h3>ไฟล์สำคัญบน Linux</h3><table><thead><tr><th>Path</th><th>หน้าที่</th></tr></thead><tbody><tr><td>/etc/nginx/nginx.conf</td><td>Config หลัก</td></tr><tr><td>/etc/nginx/conf.d/ หรือ sites-available/</td><td>Config แยกตามเว็บไซต์</td></tr><tr><td>/etc/nginx/sites-enabled/</td><td>Symlink ของเว็บไซต์ที่เปิดใช้งาน</td></tr><tr><td>/var/log/nginx/access.log</td><td>ประวัติการเข้าถึง</td></tr><tr><td>/var/log/nginx/error.log</td><td>Error log</td></tr><tr><td>/usr/share/nginx/html หรือ /var/www/html</td><td>Web root เริ่มต้น</td></tr></tbody></table><h3>โครงสร้าง Context / Block</h3><pre class="code">user www-data;
worker_processes auto;

events { worker_connections 1024; }

http {
    include mime.types;
    server {
        listen 80;
        server_name example.com;
        location / {
            root /var/www/html;
            index index.html;
        }
    }
}</pre><p>ลำดับชั้นคือ <b>main → events / http → server → location</b> และ directive แต่ละตัวใช้ได้เฉพาะบาง context</p></section>

      <section class="chapter" id="commands"><h2>3. คำสั่งจัดการ Service</h2><pre class="code"># ตรวจ config ก่อน reload ทุกครั้ง
sudo nginx -t
sudo nginx -T

sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo systemctl status nginx
sudo systemctl enable nginx

# สั่ง Nginx โดยตรง
sudo nginx
sudo nginx -s reload
sudo nginx -s stop
sudo nginx -s quit
sudo nginx -s reopen

nginx -v
nginx -V</pre><div class="note"><b>กฎสำคัญ:</b> หลังแก้ config ให้รัน <span class="inline">nginx -t</span> ก่อน แล้วจึง reload เพื่อป้องกันเว็บล่มจาก syntax error</div></section>

      <section class="chapter" id="directives"><h2>4. Directive สำคัญ</h2><h3>listen และ server_name</h3><pre class="code">listen 80;
listen 443 ssl;
listen [::]:80;
listen 127.0.0.1:8080;

server_name example.com www.example.com;
server_name *.example.com;
server_name _;</pre><h3>root กับ alias</h3><pre class="code">location /images/ {
    root /var/www;
    # /images/cat.png → /var/www/images/cat.png
}

location /images/ {
    alias /var/www/static/;
    # /images/cat.png → /var/www/static/cat.png
}</pre><p><b>root</b> ต่อ URI ท้าย path แต่ <b>alias</b> แทนที่ path ของ location</p><h3>ลำดับการจับคู่ location</h3><pre class="code">location = /exact    { }  # 1. ตรงเป๊ะ
location ^~ /prefix/ { }  # 2. prefix และหยุดหา regex
location ~ /case/    { }  # 3. regex case-sensitive
location ~* /case/   { }  # 3. regex case-insensitive
location /normal/    { }  # 4. prefix ที่ยาวที่สุด</pre><h3>index, try_files, return และ rewrite</h3><pre class="code">index index.html index.htm;

location / {
    try_files $uri $uri/ /index.html;
}

return 301 https://example.com$request_uri;
rewrite ^/old-page$ /new-page permanent;</pre></section>

      <section class="chapter" id="proxy"><h2>5. Reverse Proxy</h2><pre class="code">server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}</pre><ul><li><b>proxy_pass</b> กำหนด backend ปลายทาง</li><li><b>proxy_set_header</b> ส่งข้อมูล client จริงให้ backend</li><li><b>proxy_connect_timeout / proxy_read_timeout / proxy_send_timeout</b> ควบคุม timeout</li><li><b>proxy_buffering</b> เปิดหรือปิดการ buffer response</li></ul></section>

      <section class="chapter" id="load-balancing"><h2>6. Load Balancing</h2><pre class="code">upstream backend {
    server 10.0.0.1:3000 weight=3;
    server 10.0.0.2:3000 weight=1;
    server 10.0.0.3:3000 backup;
    # least_conn;  หรือ ip_hash;
}

server {
    location / { proxy_pass http://backend; }
}</pre><p>ค่าเริ่มต้นคือ round-robin, <b>least_conn</b> เลือกเครื่องที่มี connection น้อยสุด, <b>ip_hash</b> ทำให้ client เดิมไปเครื่องเดิม และ <b>weight</b> กำหนดสัดส่วน traffic</p></section>

      <section class="chapter" id="ssl"><h2>7. SSL/TLS (HTTPS)</h2><pre class="code">server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
}

server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}</pre><p>ขอ certificate ฟรีด้วย Let's Encrypt:</p><pre class="code">sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com</pre></section>

      <section class="chapter" id="static"><h2>8. Static File และ Caching</h2><pre class="code">location /static/ {
    root /var/www;
    expires 30d;
    add_header Cache-Control "public, immutable";
}

gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;</pre></section>

      <section class="chapter" id="security"><h2>9. Rate Limiting และ Security</h2><pre class="code">limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
limit_conn_zone $binary_remote_addr zone=addr:10m;

location /api/ {
    limit_req zone=mylimit burst=20 nodelay;
}

location / {
    limit_conn addr 10;
    deny 192.168.1.100;
    allow all;
}

location /admin/ {
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd;
}</pre></section>

      <section class="chapter" id="variables"><h2>10. ตัวแปรที่ใช้บ่อย</h2><table><thead><tr><th>ตัวแปร</th><th>ความหมาย</th></tr></thead><tbody><tr><td>$host</td><td>โดเมนที่ request เข้ามา</td></tr><tr><td>$remote_addr</td><td>IP ของ client</td></tr><tr><td>$request_uri</td><td>Path และ query string เต็ม</td></tr><tr><td>$uri</td><td>Path ปัจจุบัน ไม่รวม query</td></tr><tr><td>$scheme</td><td>http หรือ https</td></tr><tr><td>$args</td><td>Query string</td></tr><tr><td>$http_user_agent</td><td>User-Agent header</td></tr><tr><td>$status</td><td>Status code ของ response</td></tr></tbody></table></section>

      <section class="chapter" id="logs"><h2>11. Log Format</h2><pre class="code">log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent"';

access_log /var/log/nginx/access.log main;
error_log  /var/log/nginx/error.log warn;</pre></section>

      <section class="chapter" id="debug"><h2>12. คำสั่ง Debug</h2><pre class="code">sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
sudo ss -tlnp | grep nginx
curl -I http://example.com
ps aux | grep nginx</pre></section>

      <section class="chapter" id="example"><h2>13. Config แบบใช้งานจริง</h2><pre class="code">server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name example.com www.example.com;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    root /var/www/example.com;
    index index.html;

    location / { try_files $uri $uri/ =404; }
    location /api/ {
        proxy_pass http://127.0.0.1:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    location /static/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    gzip on;
    gzip_types text/css application/javascript application/json;
}</pre></section>

      <section class="chapter" id="roadmap"><h2>14. ลำดับการเรียนรู้ที่แนะนำ</h2><ol class="steps"><li>เข้าใจ context/block และการ install, start, stop, reload</li><li>เขียน server block เพื่อเสิร์ฟไฟล์ static</li><li>ฝึก location matching ให้แม่น</li><li>ทำ reverse proxy ไปยัง backend</li><li>เพิ่ม SSL ด้วย Let's Encrypt</li><li>เรียนรู้ load balancing และ upstream</li><li>เพิ่ม rate limiting, basic auth และ security header</li><li>อ่าน log และฝึก debug</li><li>ปรับแต่ง gzip, caching และ worker</li></ol></section>

      <section class="chapter" id="mistakes"><h2>15. ข้อผิดพลาดที่พบบ่อย</h2><ul><li>สับสนระหว่าง <b>root</b> กับ <b>alias</b></li><li>ลืมส่ง <span class="inline">proxy_set_header Host $host;</span> ทำให้ backend อ่านโดเมนผิด</li><li>แก้ config แล้วไม่ทดสอบด้วย <span class="inline">nginx -t</span> ก่อน reload</li><li>เข้าใจลำดับ location ผิด โดยเฉพาะ =, ^~, ~ และ ~*</li><li>ลืม escape อักขระพิเศษใน regex location</li></ul><div class="note warning">เริ่มจาก config เล็ก ๆ ทดสอบทีละส่วน และดู error log ทุกครั้งเมื่อผลลัพธ์ไม่เป็นไปตามที่คาด</div></section>

      <section class="chapter" id="multi-site"><h2>16. Multi-site, Default Server และ Firewall</h2><p>เครื่องเดียวสามารถให้บริการหลายโดเมนได้ โดยแยกหนึ่งไฟล์ต่อหนึ่งเว็บไซต์ใน <span class="inline">sites-available</span> แล้วสร้าง symlink ไปยัง <span class="inline">sites-enabled</span></p><pre class="code"># /etc/nginx/sites-available/app.example.com
server {
    listen 80;
    listen [::]:80;
    server_name app.example.com;
    root /var/www/app;
}

# รับ request ที่ไม่ตรงกับโดเมนใด
server {
    listen 80 default_server;
    server_name _;
    return 444;
}</pre><pre class="code">sudo ln -s /etc/nginx/sites-available/app.example.com \
  /etc/nginx/sites-enabled/app.example.com
sudo nginx -t && sudo systemctl reload nginx

# เปิดเฉพาะ SSH, HTTP และ HTTPS
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status</pre><div class="note">อย่าเปิด port ของ backend เช่น 3000 หรือ 9000 สู่ภายนอก หากต้องการให้เข้าได้ผ่าน Nginx เท่านั้น</div></section>

      <section class="chapter" id="proxy-deep"><h2>17. proxy_pass และ location เชิงลึก</h2><p>Trailing slash หลังปลายทางของ <span class="inline">proxy_pass</span> เปลี่ยน URI ที่ส่งให้ backend:</p><table><thead><tr><th>Config</th><th>Request</th><th>Backend ได้รับ</th></tr></thead><tbody><tr><td>location /api/ + proxy_pass http://app;</td><td>/api/users</td><td>/api/users</td></tr><tr><td>location /api/ + proxy_pass http://app/;</td><td>/api/users</td><td>/users</td></tr></tbody></table><pre class="code"># WebSocket
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

location /socket/ {
    proxy_pass http://app;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
}

# API หรือ SSE ที่ตอบช้า/ส่งข้อมูลต่อเนื่อง
location /events/ {
    proxy_pass http://app;
    proxy_buffering off;
    proxy_read_timeout 1h;
}</pre><h3>จำกัดไฟล์อัปโหลดและตั้ง Timeout</h3><pre class="code">client_max_body_size 20m;
proxy_connect_timeout 5s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;</pre></section>

      <section class="chapter" id="backends"><h2>18. เชื่อมต่อ Next.js และ PHP-FPM</h2><h3>Next.js</h3><pre class="code">upstream nextjs {
    server 127.0.0.1:3000;
    keepalive 32;
}

server {
    listen 80;
    server_name app.example.com;
    location / {
        proxy_pass http://nextjs;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
    }
}</pre><h3>PHP-FPM</h3><pre class="code">server {
    root /var/www/php-app/public;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
    }

    location ~ /\. { deny all; }
}</pre><div class="note warning">ตรวจเวอร์ชันและ path ของ PHP-FPM socket บนเครื่องจริงเสมอ เพราะชื่อไฟล์อาจต่างจากตัวอย่าง</div></section>

      <section class="chapter" id="docker"><h2>19. Nginx กับ Docker</h2><h3>Dockerfile สำหรับ Static Site</h3><pre class="code">FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80</pre><h3>Docker Compose ร่วมกับ Backend</h3><pre class="code">services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - app

  app:
    build: ./app
    expose:
      - "3000"</pre><pre class="code"># nginx.conf — ใช้ชื่อ service เป็น hostname
upstream backend {
    server app:3000;
}
server {
    listen 80;
    location / { proxy_pass http://backend; }
}</pre><ul><li>ใช้ volume แบบ read-only ด้วย <span class="inline">:ro</span></li><li>ใช้ <span class="inline">expose</span> สำหรับ backend แทนการ publish port สู่ host</li><li>ตรวจ config ด้วย <span class="inline">docker compose exec nginx nginx -t</span></li><li>ดู log ด้วย <span class="inline">docker compose logs -f nginx</span></li></ul></section>

      <section class="chapter" id="production-security"><h2>20. Production Security</h2><pre class="code"># ซ่อน version และจำกัด request
server_tokens off;
client_max_body_size 10m;
client_body_timeout 10s;
client_header_timeout 10s;

# ใช้ใน HTTPS server เท่านั้น
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# ไม่อนุญาตไฟล์ซ่อน เช่น .env และ .git
location ~ /\. { deny all; }</pre><p><b>CSP</b> ต้องออกแบบให้ตรงกับ script, style, font และ API ที่เว็บไซต์ใช้งาน อย่าคัดลอกค่าตัวอย่างไป Production โดยไม่ทดสอบ ส่วน <b>HSTS</b> ควรเปิดเมื่อมั่นใจว่าทุก subdomain รองรับ HTTPS แล้ว</p><div class="note warning">Nginx ไม่แทนที่การอัปเดตระบบ, Firewall, สิทธิ์ไฟล์, Secret management และความปลอดภัยในตัวแอปพลิเคชัน</div></section>

      <section class="chapter" id="performance"><h2>21. Performance Tuning</h2><pre class="code">worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 4096;
    multi_accept on;
}

http {
    sendfile on;
    tcp_nopush on;
    keepalive_timeout 65;
    keepalive_requests 1000;
    open_file_cache max=10000 inactive=60s;
    open_file_cache_valid 60s;
}</pre><ul><li>จำนวน connection โดยประมาณ = worker processes × worker connections แต่ยังถูกจำกัดด้วย file descriptor ของ OS</li><li>ใช้ upstream keepalive เพื่อลดการเปิด TCP connection ใหม่</li><li>เปิด HTTP/2 บน HTTPS และทดสอบว่า syntax ตรงกับ Nginx รุ่นที่ใช้งาน</li><li>Gzip เหมาะกับ text; รูป JPEG/PNG/วิดีโอที่บีบอัดแล้วมักไม่ได้ประโยชน์</li><li>ปรับค่าจากผลวัดจริง ไม่ควรคัดลอก tuning config โดยไม่ทำ load test</li></ul></section>

      <section class="chapter" id="proxy-cache"><h2>22. Proxy Cache และ Microcaching</h2><pre class="code"># วางใน http context
proxy_cache_path /var/cache/nginx
    levels=1:2 keys_zone=api_cache:10m
    max_size=1g inactive=60m use_temp_path=off;

server {
    location /api/public/ {
        proxy_pass http://backend;
        proxy_cache api_cache;
        proxy_cache_key "$scheme$request_method$host$request_uri";
        proxy_cache_valid 200 10s;
        proxy_cache_valid 404 1m;
        proxy_cache_lock on;
        add_header X-Cache-Status $upstream_cache_status always;

        proxy_cache_bypass $http_authorization;
        proxy_no_cache $http_authorization $cookie_session;
    }
}</pre><p>Microcaching เพียง 1–10 วินาทีช่วยลดโหลด API ที่มี traffic สูงได้มาก แต่ต้องหลีกเลี่ยง response ส่วนบุคคล เช่น dashboard, cart หรือข้อมูลที่ผูกกับ session</p><div class="note">ตรวจ header <span class="inline">X-Cache-Status</span>: MISS คือยังไม่มี cache, HIT คือใช้ cache และ BYPASS คือข้าม cache ตามเงื่อนไข</div></section>

      <section class="chapter" id="reliability"><h2>23. Reliability และ Zero-downtime</h2><pre class="code">upstream backend {
    server 10.0.0.1:3000 max_fails=3 fail_timeout=10s;
    server 10.0.0.2:3000 max_fails=3 fail_timeout=10s;
    server 10.0.0.3:3000 backup;
}

location / {
    proxy_pass http://backend;
    proxy_next_upstream error timeout http_502 http_503 http_504;
    proxy_next_upstream_tries 2;
}

error_page 502 503 504 /50x.html;
location = /50x.html {
    root /usr/share/nginx/html;
    internal;
}</pre><ol><li>Deploy backend รุ่นใหม่และรอ health check ผ่าน</li><li>ทดสอบ config ด้วย <span class="inline">nginx -t</span></li><li>ใช้ reload ไม่ใช่ restart เพื่อให้ worker เดิมทำ request ที่ค้างอยู่จนเสร็จ</li><li>ตรวจ error rate และ latency หลัง deploy</li></ol><p>Open-source Nginx มี passive health check เป็นหลัก ส่วน active health check ต้องใช้ความสามารถเพิ่มเติมหรือให้ Load Balancer/Orchestrator ภายนอกตรวจ</p></section>

      <section class="chapter" id="observability"><h2>24. Observability และ Structured Logs</h2><pre class="code">log_format json escape=json '{'
  '"time":"$time_iso8601",'
  '"request_id":"$request_id",'
  '"remote_addr":"$remote_addr",'
  '"request":"$request",'
  '"status":$status,'
  '"request_time":$request_time,'
  '"upstream_time":"$upstream_response_time",'
  '"upstream":"$upstream_addr"'
'}';

access_log /var/log/nginx/access.json json;
add_header X-Request-ID $request_id always;
proxy_set_header X-Request-ID $request_id;</pre><table><thead><tr><th>ค่า</th><th>ใช้วิเคราะห์</th></tr></thead><tbody><tr><td>$request_time</td><td>เวลารวมที่ Nginx ใช้กับ request</td></tr><tr><td>$upstream_response_time</td><td>เวลาที่ backend ใช้ตอบ</td></tr><tr><td>$upstream_addr</td><td>backend เครื่องที่รับ request</td></tr><tr><td>$request_id</td><td>เชื่อม log ระหว่าง Nginx กับแอป</td></tr></tbody></table><p>ส่ง structured log ไปยัง Loki/Grafana หรือ ELK และตั้ง alert เมื่อ 5xx, latency หรือ upstream timeout สูงผิดปกติ</p></section>

      <section class="chapter" id="troubleshooting"><h2>25. Troubleshooting Lab: 502, 504 และ Redirect Loop</h2><h3>502 Bad Gateway</h3><ol><li>ตรวจว่า backend รันอยู่: <span class="inline">curl -I http://127.0.0.1:3000</span></li><li>ตรวจ port/socket ใน <span class="inline">proxy_pass</span> หรือ <span class="inline">fastcgi_pass</span></li><li>ตรวจ permission ของ PHP-FPM socket</li><li>ดู <span class="inline">error.log</span> ว่า connection refused หรือ permission denied</li></ol><h3>504 Gateway Timeout</h3><ol><li>ตรวจ latency และ query ช้าที่ backend ก่อน</li><li>ตรวจ DNS และ network ระหว่าง Nginx กับ backend</li><li>เพิ่ม <span class="inline">proxy_read_timeout</span> เฉพาะเมื่อ request ควรทำงานนานจริง</li></ol><h3>Redirect Loop</h3><p>มักเกิดเมื่อ TLS จบที่ proxy ชั้นหน้า แต่ backend เข้าใจว่า request เป็น HTTP ให้ส่งและอ่าน <span class="inline">X-Forwarded-Proto</span> อย่างถูกต้อง</p><pre class="code">curl -v http://example.com/
curl -vk https://example.com/
curl -I -H 'Host: example.com' http://127.0.0.1/
sudo nginx -T
sudo tail -f /var/log/nginx/error.log
sudo ss -tlnp

# Load test จากเครื่องทดสอบ ไม่ใช่ Production โดยตรง
wrk -t4 -c100 -d30s https://example.com/</pre><div class="note"><b>ขั้นตอนมาตรฐาน:</b> ทำให้เกิดปัญหาซ้ำ → อ่าน error log → ตรวจ config ที่ถูก include ด้วย nginx -T → ทดสอบแต่ละ hop ด้วย curl → แก้ทีละจุด → nginx -t → reload</div></section>
    </article>
  </div>
</main></body></html>`;
