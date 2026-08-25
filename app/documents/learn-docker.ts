export const document = `<!DOCTYPE html>
<html lang="th"><head><base target="_top"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#eef0f6;color:#171a21;font-family:'Noto Sans Thai',sans-serif;line-height:1.75}.shell{width:min(1080px,100%);min-height:100vh;margin:auto;background:#fff}.top{padding:22px 20px;border-bottom:1px solid #e8eaf0;display:flex;align-items:center;justify-content:space-between}.brand{font-weight:800;font-size:14px}.back{color:#667085;text-decoration:none;font-size:13px;font-weight:700}.hero{padding:52px 20px 34px;background:linear-gradient(135deg,#eaf4ff,#fff 68%)}.eyebrow{color:#1677e8;font-size:11px;font-weight:800;letter-spacing:.12em}.hero h1{margin:6px 0 8px;font-size:clamp(32px,7vw,52px);line-height:1.2}.hero h1 span{color:#1677e8}.hero p{max-width:710px;margin:0;color:#667085}.layout{display:grid;grid-template-columns:1fr}.toc{padding:22px 20px;background:#f7faff;border-bottom:1px solid #e8eaf0}.toc strong{font-size:13px}.toc ol{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px 20px;margin:10px 0 0;padding-left:20px}.toc a{color:#4b5563;text-decoration:none;font-size:12px}.content{min-width:0;padding:12px 20px 60px}.chapter{padding:32px 0;border-bottom:1px solid #eceef2}.chapter:last-child{border:0}.chapter h2{margin:0 0 16px;font-size:24px;line-height:1.35}.chapter h3{margin:26px 0 8px;font-size:17px}.chapter p{margin:9px 0}.chapter li{margin:5px 0}.chapter ul,.chapter ol{padding-left:24px}.note{margin:18px 0;padding:14px 16px;border-left:4px solid #1677e8;border-radius:0 12px 12px 0;background:#eaf4ff}.warning{border-color:#f59e0b;background:#fffaeb}.danger{border-color:#dc2626;background:#fff0f0}.code{overflow-x:auto;margin:14px 0;padding:17px;border-radius:14px;background:#171a21;color:#e6edf3;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}.inline{padding:2px 6px;border-radius:5px;background:#eef0f3;font:12px ui-monospace,monospace}table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px}th,td{padding:10px 12px;border:1px solid #e3e6eb;text-align:left;vertical-align:top}th{background:#f4f8fd}.cards{display:grid;gap:10px}.card{padding:15px;border:1px solid #e5e8ec;border-radius:14px}.card strong{color:#1677e8}.flow{padding:14px;border-radius:12px;background:#171a21;color:#fff;text-align:center;font:700 12px/1.8 ui-monospace,monospace}.steps{counter-reset:step;list-style:none;padding:0!important}.steps li{counter-increment:step;position:relative;padding:11px 12px 11px 46px;border-radius:12px;background:#f7f8fa}.steps li:before{content:counter(step);position:absolute;left:12px;top:10px;display:grid;width:25px;height:25px;place-items:center;border-radius:50%;background:#1677e8;color:#fff;font-size:12px;font-weight:800}@media(min-width:760px){body{padding:34px 20px}.shell{border-radius:28px;overflow:hidden;box-shadow:0 30px 60px -25px #14171f33}.top,.hero{padding-left:40px;padding-right:40px}.layout{grid-template-columns:240px minmax(0,1fr)}.toc{position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;border:0;border-right:1px solid #e8eaf0}.toc ol{display:block}.toc li{margin:7px 0}.content{padding:12px 42px 70px}.cards{grid-template-columns:repeat(2,1fr)}}
</style></head><body><main class="shell">
<nav class="top"><div class="brand">CHAMP • LEARN</div><a class="back" href="/learn">← หัวข้อทั้งหมด</a></nav>
<header class="hero"><div class="eyebrow">CONTAINER • IMAGE • COMPOSE</div><h1>เรียนรู้ <span>Docker</span></h1><p>คู่มือฉบับสมบูรณ์ ตั้งแต่พื้นฐาน Container และ Dockerfile ไปจนถึง Compose, Networking, Security และการแก้ปัญหาในงานจริง</p></header>
<div class="layout"><aside class="toc"><strong>สารบัญบทเรียน</strong><ol><li><a href="#basics">พื้นฐานและสถาปัตยกรรม</a></li><li><a href="#install">การติดตั้ง</a></li><li><a href="#commands">คำสั่ง Docker</a></li><li><a href="#dockerfile">Dockerfile</a></li><li><a href="#compose">Docker Compose</a></li><li><a href="#network">Networking เชิงลึก</a></li><li><a href="#storage">Storage เชิงลึก</a></li><li><a href="#security">Security Checklist</a></li><li><a href="#buildkit">BuildKit และ Buildx</a></li><li><a href="#resources">Log และ Resource</a></li><li><a href="#troubleshooting">Troubleshooting</a></li><li><a href="#cheatsheet">Cheat Sheet</a></li><li><a href="#roadmap">Roadmap</a></li><li><a href="#lifecycle">Lifecycle และ PID 1</a></li><li><a href="#registry">Registry และ Image</a></li><li><a href="#backup">Backup และ Restore</a></li><li><a href="#dev-workflow">Development Workflow</a></li><li><a href="#cicd">CI/CD Pipeline</a></li><li><a href="#advanced-security">Advanced Security</a></li><li><a href="#daemon">Production Host</a></li><li><a href="#labs">Hands-on Labs</a></li></ol></aside><article class="content">

<section class="chapter" id="basics"><h2>1. พื้นฐานและสถาปัตยกรรม</h2><p>Docker เป็นแพลตฟอร์มสำหรับพัฒนา จัดส่ง และรันแอปภายใน <b>container</b> ซึ่งแยกการทำงานจาก host แต่ใช้ kernel ร่วมกัน จึงมีขนาดเล็กและเริ่มทำงานเร็วกว่า Virtual Machine</p><div class="flow">Docker Client → REST API → Docker Daemon → containerd → runc → Container</div><div class="cards"><div class="card"><strong>Docker Client</strong><br>CLI ที่รับคำสั่ง docker run, build และคำสั่งอื่น</div><div class="card"><strong>Docker Daemon</strong><br>จัดการ image, container, network และ volume</div><div class="card"><strong>Registry</strong><br>ที่เก็บ image เช่น Docker Hub, GHCR และ ECR</div><div class="card"><strong>containerd + runc</strong><br>Runtime ที่ควบคุม lifecycle และสร้าง container ตามมาตรฐาน OCI</div></div><h3>Container เทียบกับ Virtual Machine</h3><table><thead><tr><th>หัวข้อ</th><th>Container</th><th>Virtual Machine</th></tr></thead><tbody><tr><td>Kernel</td><td>ใช้ร่วมกับ host</td><td>มีของตัวเอง</td></tr><tr><td>ขนาด/เวลาบูต</td><td>MB / วินาที</td><td>GB / นาที</td></tr><tr><td>Isolation</td><td>ระดับ process</td><td>ระดับ hardware</td></tr><tr><td>Performance</td><td>ใกล้ native</td><td>มี hypervisor overhead</td></tr></tbody></table><h3>เทคโนโลยี Linux เบื้องหลัง</h3><ul><li><b>Namespaces</b> แยก PID, Network, Mount และมุมมองของแต่ละ process</li><li><b>cgroups</b> จำกัดและวัด CPU, Memory และ Disk I/O</li><li><b>OverlayFS</b> ซ้อน image layers แบบ read-only และเพิ่ม writable layer ตอนรัน</li></ul><h3>คำศัพท์หลัก</h3><table><tbody><tr><th>Image</th><td>Template แบบ read-only ที่ใช้สร้าง container</td></tr><tr><th>Container</th><td>Instance ที่กำลังรันจาก image</td></tr><tr><th>Dockerfile</th><td>ขั้นตอนสำหรับ build image</td></tr><tr><th>Tag</th><td>ชื่อเวอร์ชัน เช่น nginx:1.25</td></tr><tr><th>Volume</th><td>พื้นที่เก็บข้อมูลถาวร</td></tr><tr><th>Compose</th><td>นิยามหลาย container ด้วย YAML</td></tr></tbody></table></section>

<section class="chapter" id="install"><h2>2. การติดตั้ง</h2><p>Windows และ macOS ใช้ Docker Desktop ส่วน Linux ใช้ Docker Engine จาก package repository ที่เป็นทางการของ distribution</p><pre class="code"># ตรวจหลังติดตั้ง
docker --version
docker version
docker info
docker run --rm hello-world</pre><div class="note warning">การเพิ่มผู้ใช้เข้า group <b>docker</b> ให้สิทธิ์ระดับใกล้เคียง root บน host ควรทำเฉพาะผู้ใช้ที่ไว้ใจได้ และควรติดตั้งตามคู่มือทางการของระบบปฏิบัติการ</div></section>

<section class="chapter" id="commands"><h2>3. คำสั่ง Docker ที่ใช้บ่อย</h2><h3>Image</h3><pre class="code">docker pull nginx:alpine
docker image ls
docker build -t myapp:1.0 .
docker build -f Dockerfile.dev -t myapp:dev .
docker tag myapp:1.0 registry.example.com/myapp:1.0
docker push registry.example.com/myapp:1.0
docker history myapp:1.0
docker inspect myapp:1.0
docker save -o myapp.tar myapp:1.0
docker load -i myapp.tar
docker image prune</pre><h3>สร้างและควบคุม Container</h3><pre class="code">docker run -d --name web -p 8080:80 nginx:alpine
docker run --rm -it ubuntu:24.04 bash
docker run -e NODE_ENV=production --env-file .env myapp
docker run --memory=512m --cpus=1 --restart=unless-stopped myapp

docker ps
docker ps -a
docker start web
docker stop web
docker restart web
docker rm web</pre><h3>Log และ Debug</h3><pre class="code">docker logs -f --tail 100 web
docker exec -it web sh
docker inspect web
docker top web
docker stats
docker diff web
docker port web
docker cp web:/app/report.txt ./report.txt
docker events</pre><h3>Volume, Network และพื้นที่</h3><pre class="code">docker volume create mydata
docker volume ls
docker network create appnet
docker network inspect appnet
docker system df
docker image prune
docker container prune
docker network prune</pre><div class="note danger"><b>ระวังคำสั่ง prune, rm -f และ down -v:</b> ตรวจ target และ backup ข้อมูลก่อนเสมอ โดยเฉพาะ volume ซึ่งอาจเก็บฐานข้อมูลที่กู้คืนไม่ได้</div></section>

<section class="chapter" id="dockerfile"><h2>4. Dockerfile แบบละเอียด</h2><pre class="code">FROM node:20-alpine AS base
WORKDIR /app

ARG BUILD_ENV=production
ENV NODE_ENV=$BUILD_ENV

COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \\
  CMD wget -qO- http://localhost:3000/health || exit 1
CMD ["node", "server.js"]</pre><table><thead><tr><th>Instruction</th><th>หน้าที่</th></tr></thead><tbody><tr><td>FROM</td><td>เลือก base image และเริ่ม stage</td></tr><tr><td>WORKDIR</td><td>กำหนด directory ทำงาน</td></tr><tr><td>COPY / ADD</td><td>นำไฟล์เข้า image; ควรเลือก COPY เป็นหลัก</td></tr><tr><td>RUN</td><td>รันคำสั่งตอน build และสร้าง layer</td></tr><tr><td>ENV / ARG</td><td>ตัวแปร runtime / ตัวแปรเฉพาะตอน build</td></tr><tr><td>USER</td><td>กำหนดผู้ใช้ ไม่ควรรันแอปเป็น root</td></tr><tr><td>EXPOSE</td><td>บันทึกว่าแอปฟัง port ใด แต่ไม่ได้ publish port</td></tr><tr><td>CMD</td><td>คำสั่งหรือ argument เริ่มต้น ซึ่ง override ได้</td></tr><tr><td>ENTRYPOINT</td><td>Executable หลักที่ argument จาก CMD/run จะต่อท้าย</td></tr><tr><td>HEALTHCHECK</td><td>ตรวจสถานะ healthy/unhealthy</td></tr></tbody></table><h3>Multi-stage Build</h3><pre class="code">FROM golang:1.22 AS builder
WORKDIR /src
COPY . .
RUN go build -o app .

FROM alpine:3.19
COPY --from=builder /src/app /app
USER 10001
ENTRYPOINT ["/app"]</pre><h3>.dockerignore และ Layer Cache</h3><pre class="code">node_modules
.git
*.log
.env
dist</pre><p>เรียงคำสั่งจากไฟล์ที่เปลี่ยนน้อยไปมาก เช่น copy package manifest และติดตั้ง dependency ก่อน copy source code ทั้งหมด เพื่อให้ layer cache ทำงานได้ดี</p></section>

<section class="chapter" id="compose"><h2>5. Docker Compose</h2><pre class="code">services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env
    depends_on:
      db:
        condition: service_healthy
    networks: [appnet]
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    volumes:
      - dbdata:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: change-me
      POSTGRES_DB: mydb
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      retries: 5
    networks: [appnet]

volumes:
  dbdata:
networks:
  appnet:</pre><pre class="code">docker compose config
docker compose up -d --build
docker compose ps
docker compose logs -f web
docker compose exec web sh
docker compose run --rm web npm test
docker compose stop
docker compose start
docker compose down</pre><p>แยก config Development และ Production ด้วยหลายไฟล์:</p><pre class="code">docker compose -f compose.yml -f compose.prod.yml up -d</pre><div class="note danger"><span class="inline">docker compose down -v</span> จะลบ named volumes ของโปรเจกต์ด้วย ห้ามใช้กับฐานข้อมูล Production โดยไม่ตรวจสอบและสำรองข้อมูล</div></section>

<section class="chapter" id="network"><h2>6. Networking เชิงลึก</h2><ul><li>Container ใน user-defined bridge เดียวกันติดต่อผ่าน <b>ชื่อ service/container</b> ด้วย internal DNS</li><li>แอปเชื่อม PostgreSQL ด้วย <span class="inline">db:5432</span> ไม่ใช่ <span class="inline">localhost:5432</span></li><li>Port mapping จำเป็นเมื่อ host หรือระบบภายนอกต้องเข้าถึงเท่านั้น</li><li>ใช้ <span class="inline">docker network inspect</span> ตรวจสมาชิกและ IP เมื่อเชื่อมต่อไม่ได้</li></ul><table><thead><tr><th>Driver</th><th>การใช้งาน</th></tr></thead><tbody><tr><td>bridge</td><td>Container บน host เดียวกัน</td></tr><tr><td>host</td><td>ใช้ network stack ของ host โดยตรง ลด isolation</td></tr><tr><td>none</td><td>ปิด network</td></tr><tr><td>overlay</td><td>เชื่อมหลาย host ใน Swarm</td></tr><tr><td>macvlan</td><td>ให้ container ดูเหมือนอุปกรณ์จริงบน LAN</td></tr></tbody></table><pre class="code">docker network create appnet
docker run -d --name api --network appnet myapi
docker run --rm --network appnet curlimages/curl http://api:3000/health
docker network inspect appnet</pre></section>

<section class="chapter" id="storage"><h2>7. Storage เชิงลึก</h2><table><thead><tr><th>ประเภท</th><th>เหมาะสำหรับ</th></tr></thead><tbody><tr><td>Named Volume</td><td>ฐานข้อมูลและข้อมูลที่ต้องคงอยู่</td></tr><tr><td>Bind Mount</td><td>Development, sync source code หรือ config จาก host</td></tr><tr><td>tmpfs</td><td>ข้อมูลชั่วคราวใน RAM ที่ไม่ต้อง persist</td></tr><tr><td>Anonymous Volume</td><td>Mount ที่ไม่มีชื่อและจัดการยากกว่า</td></tr></tbody></table><pre class="code">docker run -v mydata:/var/lib/mysql mysql:8
docker run --mount type=bind,src=./src,dst=/app/src node:20
docker run --tmpfs /app/cache myapp</pre><h3>แนวทางสำหรับฐานข้อมูล</h3><ul><li>ใช้ named volume และตั้ง backup schedule</li><li>ทดสอบ restore เป็นระยะ เพราะมี backup อย่างเดียวไม่พอ</li><li>อย่าลบ volume เพื่อแก้ปัญหา container start ไม่ขึ้น</li><li>อย่าแก้ไฟล์ภายใน volume ของฐานข้อมูลด้วยมือ</li></ul></section>

<section class="chapter" id="security"><h2>8. Security Checklist</h2><ol class="steps"><li>ใช้ USER เพื่อไม่รัน process เป็น root</li><li>เลือก official/trusted image และ pin version หรือ digest</li><li>สแกน CVE ด้วย Docker Scout หรือ Trivy</li><li>ไม่เก็บ secret ใน Dockerfile, ARG, ENV หรือ image layer</li><li>ใช้ read-only filesystem เมื่อแอปรองรับ</li><li>จำกัด CPU และ Memory ทุก service</li><li>หลีกเลี่ยงการ mount docker.sock ซึ่งเท่ากับควบคุม host</li><li>ใส่ .env, private key และ credential ใน .dockerignore</li><li>ใช้ cap_drop ALL แล้วเพิ่มเฉพาะ capability ที่จำเป็น</li><li>อัปเดต base image และ rebuild อย่างสม่ำเสมอ</li></ol><pre class="code">docker run --read-only \
  --tmpfs /tmp \
  --cap-drop=ALL \
  --security-opt=no-new-privileges:true \
  --memory=512m --cpus=1 \
  myapp:1.0</pre></section>

<section class="chapter" id="buildkit"><h2>9. BuildKit และ Buildx</h2><p>BuildKit ช่วย build แบบขนาน ใช้ cache ได้มีประสิทธิภาพ และ mount cache/secret โดยไม่บันทึก secret ลงใน image layer</p><pre class="code"># syntax=docker/dockerfile:1
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# secret มีอยู่เฉพาะระหว่างคำสั่ง RUN นี้
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci</pre><pre class="code">docker build --secret id=npmrc,src=$HOME/.npmrc -t myapp .

docker buildx create --use
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t registry.example.com/myapp:1.0 --push .</pre><div class="note">Multi-platform build สำคัญเมื่อพัฒนาบน Apple Silicon แต่ deploy บน x86_64 หรือเมื่อ image ต้องรองรับหลายสถาปัตยกรรม</div></section>

<section class="chapter" id="resources"><h2>10. Log, Resource และ Restart Policy</h2><pre class="code">docker run -d \
  --log-driver=json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  --memory=512m --memory-swap=1g --cpus=1.5 \
  --restart=unless-stopped \
  myapp</pre><table><thead><tr><th>Restart Policy</th><th>พฤติกรรม</th></tr></thead><tbody><tr><td>no</td><td>ไม่ restart อัตโนมัติ</td></tr><tr><td>on-failure:5</td><td>Restart เมื่อ process exit ด้วย error ไม่เกิน 5 ครั้ง</td></tr><tr><td>always</td><td>Restart เสมอ รวมหลัง daemon เริ่มใหม่</td></tr><tr><td>unless-stopped</td><td>เหมือน always ยกเว้นผู้ใช้สั่งหยุดเอง</td></tr></tbody></table><p>ตรวจการใช้ resource ด้วย <span class="inline">docker stats</span> และตั้ง log rotation เพื่อป้องกันไฟล์ log ใช้พื้นที่ disk จนเต็ม</p></section>

<section class="chapter" id="troubleshooting"><h2>11. ปัญหาที่พบบ่อยและวิธีแก้</h2><table><thead><tr><th>ปัญหา</th><th>ตรวจสอบและแก้ไข</th></tr></thead><tbody><tr><td>Container หยุดทันที</td><td>ดู docker logs และตรวจว่า PID 1 เป็น foreground process</td></tr><tr><td>เข้า Container ไม่ได้</td><td>ดู docker ps -a; container ต้องรันก่อน exec</td></tr><tr><td>เข้า Port ไม่ได้</td><td>ตรวจ docker port, port mapping, firewall และ port ชน</td></tr><tr><td>ข้อมูลหาย</td><td>ตรวจว่า path ข้อมูลถูก mount ด้วย volume หรือไม่</td></tr><tr><td>Build ช้า</td><td>ลด build context, ใช้ .dockerignore และจัดลำดับ layer</td></tr><tr><td>Container คุยกันไม่ได้</td><td>ตรวจ network และใช้ชื่อ service แทน localhost</td></tr><tr><td>Disk เต็ม</td><td>ใช้ docker system df ระบุว่า image, volume หรือ log ใช้พื้นที่</td></tr><tr><td>Permission denied</td><td>ตรวจ UID/GID ของ process และสิทธิ์ bind mount บน host</td></tr></tbody></table><pre class="code">docker ps -a
docker logs --tail 200 myapp
docker inspect myapp
docker stats --no-stream
docker network inspect appnet
docker system df
docker events --since 10m</pre><div class="note"><b>Workflow:</b> ดูสถานะ → อ่าน log → inspect config → ตรวจ network/storage → ทำให้ปัญหาเกิดซ้ำด้วยคำสั่งเล็กที่สุด → แก้และทดสอบใหม่</div></section>

<section class="chapter" id="cheatsheet"><h2>12. Cheat Sheet</h2><pre class="code">docker ps -a
docker image ls
docker run -d -p 8080:80 --name web nginx:alpine
docker exec -it web sh
docker logs -f web
docker stop web
docker rm web
docker build -t myapp:1.0 .
docker system df

docker compose config
docker compose up -d --build
docker compose ps
docker compose logs -f
docker compose down</pre></section>

<section class="chapter" id="roadmap"><h2>13. เส้นทางเรียนรู้</h2><ol class="steps"><li><b>สัปดาห์ที่ 1:</b> เข้าใจ image/container และฝึก pull, run, ps, logs, exec</li><li><b>สัปดาห์ที่ 2:</b> เขียน Dockerfile, เข้าใจ layer cache และ multi-stage build</li><li><b>สัปดาห์ที่ 3:</b> ทำโปรเจกต์ Compose ที่มี Web, Database, Network และ Volume</li><li><b>สัปดาห์ที่ 4:</b> ฝึก Security scanning, resource limit, logging และ BuildKit</li><li><b>ขั้นถัดไป:</b> ทำ CI/CD เพื่อ build และ push image แล้วเรียนรู้ Kubernetes เมื่อจำเป็นต้อง orchestrate หลาย workload</li></ol><div class="note warning">คำสั่งและความสามารถบางส่วนเปลี่ยนตาม Docker Engine/Compose version ควรตรวจ <span class="inline">docker --help</span> และเอกสารของเวอร์ชันที่ใช้งานประกอบเสมอ</div></section>

<section class="chapter" id="lifecycle"><h2>14. Container Lifecycle และ PID 1</h2><p>Process หลักของ container คือ PID 1 เมื่อ process นี้จบ container จะหยุดทันที และ PID 1 มีหน้าที่รับ signal รวมถึงเก็บ child process ที่จบแล้วไม่ให้กลายเป็น zombie</p><h3>Shell form กับ Exec form</h3><pre class="code"># Shell form: signal อาจไปหยุดที่ /bin/sh
CMD node server.js

# Exec form: Node เป็น PID 1 และรับ signal โดยตรง
CMD ["node", "server.js"]</pre><h3>Graceful Shutdown</h3><pre class="code"># Docker ส่ง SIGTERM แล้วรอตาม timeout ก่อน SIGKILL
docker stop --time 30 myapp

# Compose
services:
  app:
    stop_grace_period: 30s
    init: true</pre><p>แอปควรดัก <b>SIGTERM</b>, หยุดรับ request ใหม่, รอ request ที่กำลังทำงาน, ปิด database connection แล้วจึง exit ส่วน <span class="inline">init: true</span> ใช้ init process ขนาดเล็กช่วยส่งต่อ signal และเก็บ zombie process</p><div class="note warning">อย่าใช้ <span class="inline">docker kill</span> เป็นวิธี deploy ปกติ เพราะ process ไม่มีเวลาปิดงานหรือ flush ข้อมูลอย่างปลอดภัย</div></section>

<section class="chapter" id="registry"><h2>15. Registry และการจัดการ Image</h2><pre class="code">docker login ghcr.io
docker tag myapp:local ghcr.io/acme/myapp:1.4.2
docker push ghcr.io/acme/myapp:1.4.2
docker pull ghcr.io/acme/myapp:1.4.2

# ดู digest ที่ระบุ content จริงของ image
docker image inspect ghcr.io/acme/myapp:1.4.2 \
  --format '{{json .RepoDigests}}'</pre><table><thead><tr><th>Tag</th><th>วัตถุประสงค์</th></tr></thead><tbody><tr><td>1.4.2</td><td>Release ที่มนุษย์อ่านง่าย</td></tr><tr><td>sha-a1b2c3d</td><td>ย้อนกลับไปยัง source commit ได้แน่นอน</td></tr><tr><td>main / staging</td><td>Environment channel ที่เปลี่ยนค่าได้</td></tr><tr><td>latest</td><td>เป็นเพียง tag ธรรมดา ไม่ได้หมายถึงใหม่ที่สุดเสมอ</td></tr></tbody></table><ul><li>Production ควร deploy ด้วย immutable tag หรือ digest ไม่ใช้ <span class="inline">latest</span></li><li>กำหนด retention policy ลบ untagged image เก่าใน Registry</li><li>เก็บ credential ใน credential helper หรือ CI secret store</li><li>สร้าง SBOM, สแกน CVE และลงนาม image ก่อน promote ไป Production</li></ul></section>

<section class="chapter" id="backup"><h2>16. Backup และ Restore</h2><h3>Named Volume</h3><pre class="code"># Backup volume เป็น tar.gz ใน directory ปัจจุบัน
docker run --rm \
  -v app_data:/data:ro \
  -v "$PWD":/backup \
  alpine tar czf /backup/app_data.tar.gz -C /data .

# Restore เข้า volume ใหม่ก่อนตรวจสอบ
docker volume create app_data_restored
docker run --rm \
  -v app_data_restored:/data \
  -v "$PWD":/backup:ro \
  alpine tar xzf /backup/app_data.tar.gz -C /data</pre><h3>PostgreSQL</h3><pre class="code">docker compose exec -T db \
  pg_dump -U postgres -Fc appdb > appdb.dump

docker compose exec -T db \
  pg_restore -U postgres -d appdb --clean --if-exists \
  < appdb.dump</pre><h3>MySQL</h3><pre class="code">docker compose exec -T db \
  mysqldump -u root -p appdb > appdb.sql

docker compose exec -T db \
  mysql -u root -p appdb < appdb.sql</pre><div class="note danger"><b>Backup ที่ไม่เคยทดสอบ Restore ยังถือว่าเชื่อถือไม่ได้</b> ควร restore ไปยัง volume/database แยก ตรวจ schema, row count และการเปิดแอปก่อนกำหนดว่า backup สำเร็จ</div></section>

<section class="chapter" id="dev-workflow"><h2>17. Development Workflow</h2><h3>แยก Development และ Production</h3><pre class="code"># Dockerfile — production image
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
USER node
COPY --from=builder --chown=node:node /app/dist ./dist
CMD ["node", "dist/server.js"]</pre><pre class="code"># compose.dev.yml — hot reload
services:
  app:
    build:
      context: .
      target: deps
    command: npm run dev
    volumes:
      - .:/app
      - node_modules:/app/node_modules
    ports:
      - "3000:3000"

volumes:
  node_modules:</pre><ul><li>Bind mount source code เฉพาะ Development</li><li>อย่า mount ทับไฟล์ build หรือ dependency ใน Production</li><li>ใช้ Compose profiles แยก service เสริม เช่น debugger หรือ admin UI</li><li>ใช้ <span class="inline">docker compose config</span> ตรวจ config ที่ merge แล้ว</li><li>เลือก Dev Containers เมื่อทีมต้องการ toolchain ที่เหมือนกันทั้งหมด</li></ul></section>

<section class="chapter" id="cicd"><h2>18. CI/CD: Build, Scan, Push และ Deploy</h2><div class="flow">Test → Build → SBOM/Scan → Sign → Push → Deploy → Health Check → Rollback</div><pre class="code"># ตัวอย่างลำดับคำสั่งใน CI
IMAGE=registry.example.com/myapp
TAG=$GIT_COMMIT_SHA

docker buildx build \
  --cache-from type=registry,ref=$IMAGE:buildcache \
  --cache-to type=registry,ref=$IMAGE:buildcache,mode=max \
  --tag $IMAGE:$TAG \
  --tag $IMAGE:staging \
  --push .

trivy image --exit-code 1 --severity CRITICAL $IMAGE:$TAG</pre><h3>หลักการ Pipeline ที่ดี</h3><ol><li>Build image เพียงครั้งเดียว แล้ว promote digest เดิมผ่านแต่ละ environment</li><li>Tag ด้วย commit SHA เพื่อ trace กลับ source code ได้</li><li>ไม่ส่ง Registry password ผ่าน command argument หรือ log</li><li>สแกน dependency/image และสร้าง SBOM เป็น artifact</li><li>Deploy แล้วรอ health check ก่อนสลับ traffic</li><li>เก็บ image รุ่นก่อนเพื่อ rollback ด้วย digest เดิมได้ทันที</li></ol><div class="note">Migration ฐานข้อมูลควรออกแบบให้ backward-compatible กับแอปรุ่นก่อนหน้า เพื่อให้ rolling deploy และ rollback ทำงานได้จริง</div></section>

<section class="chapter" id="advanced-security"><h2>19. Advanced Container Security</h2><pre class="code">docker run --rm \
  --user 10001:10001 \
  --read-only \
  --tmpfs /tmp:rw,noexec,nosuid,size=64m \
  --cap-drop ALL \
  --security-opt no-new-privileges=true \
  --pids-limit 200 \
  --memory 512m --cpus 1 \
  myapp:1.0</pre><table><thead><tr><th>กลไก</th><th>หน้าที่</th></tr></thead><tbody><tr><td>Capabilities</td><td>แยกสิทธิ์ root เป็นส่วนย่อย; ลบทั้งหมดแล้วเพิ่มเท่าที่จำเป็น</td></tr><tr><td>Seccomp</td><td>จำกัด Linux system calls ที่ container ใช้ได้</td></tr><tr><td>AppArmor/SELinux</td><td>ควบคุมการเข้าถึงไฟล์และทรัพยากรด้วย policy</td></tr><tr><td>Rootless Docker</td><td>รัน daemon/container โดยไม่ใช้ root ของ host</td></tr><tr><td>User namespaces</td><td>Map root ใน container ไปเป็น unprivileged UID บน host</td></tr><tr><td>SBOM</td><td>รายการ package เพื่อ audit และตอบสนอง CVE</td></tr></tbody></table><h3>Build Secret</h3><pre class="code"># syntax=docker/dockerfile:1
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci

docker build --secret id=npmrc,src=.npmrc -t myapp .</pre><div class="note danger">Environment variable ไม่ใช่ secret vault และอาจปรากฏผ่าน inspect, crash dump หรือ log ควรรับ secret จาก secret manager เป็นไฟล์หรือ short-lived credential เมื่อระบบรองรับ</div></section>

<section class="chapter" id="daemon"><h2>20. Docker Daemon และ Production Host</h2><pre class="code">// /etc/docker/daemon.json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "live-restore": true,
  "userland-proxy": false,
  "metrics-addr": "127.0.0.1:9323",
  "experimental": true
}</pre><p>หลังแก้ config ให้ validate JSON, ตรวจว่า option รองรับใน Docker รุ่นนั้น และวางแผนผลกระทบก่อน restart daemon</p><ul><li><b>Log rotation:</b> ป้องกัน container log ใช้ disk จนเต็ม</li><li><b>Live restore:</b> ช่วยให้ container ทำงานต่อระหว่าง daemon หยุดบางกรณี</li><li><b>Data root:</b> ย้ายได้เมื่อ disk เดิมไม่เพียงพอ แต่ต้องหยุดระบบและย้ายข้อมูลอย่างระมัดระวัง</li><li><b>Registry mirror:</b> ลดเวลา pull และ traffic ออกอินเทอร์เน็ต</li><li><b>Metrics/Events:</b> ติดตาม disk, container restart, OOM และ daemon health</li></ul><h3>Production Checklist</h3><ol><li>แยก filesystem สำหรับ Docker data และตั้ง disk alert</li><li>ตั้ง resource limits และ log rotation ทุก workload</li><li>เปิดเฉพาะ port ที่จำเป็นผ่าน firewall</li><li>Patch host kernel และ Docker Engine ตามรอบ</li><li>สำรอง volume/config และทดสอบ restore</li><li>ไม่เปิด Docker API บน TCP โดยไม่มี mTLS และ network restriction</li></ol></section>

<section class="chapter" id="labs"><h2>21. Hands-on Labs</h2><h3>Lab 1: Next.js Production Image</h3><ol><li>เปิด standalone output ใน Next.js config</li><li>สร้าง multi-stage Dockerfile สำหรับ dependencies, build และ runner</li><li>รันด้วย non-root user พร้อม health check และ resource limit</li><li>ตรวจขนาด image, layer history และ CVE</li></ol><h3>Lab 2: Next.js + Nginx + Compose</h3><pre class="code">services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      app:
        condition: service_healthy
    networks: [frontend]

  app:
    build: .
    expose: ["3000"]
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3000/"]
      interval: 10s
      retries: 5
    networks: [frontend, backend]

  db:
    image: postgres:16-alpine
    volumes: ["dbdata:/var/lib/postgresql/data"]
    networks: [backend]

volumes:
  dbdata:
networks:
  frontend:
  backend:
    internal: true</pre><h3>Lab 3–8</h3><ol class="steps"><li>PHP-FPM + Nginx พร้อม static caching</li><li>API + PostgreSQL + Redis แยก frontend/backend network</li><li>เพิ่ม HTTPS และ certificate renewal</li><li>Backup database แล้ว restore ไปยัง environment ใหม่</li><li>จำลอง crash, OOM, unhealthy และ disk full แล้วฝึกวิเคราะห์</li><li>Build และ push image แบบ AMD64/ARM64 ด้วย CI/CD</li></ol><h3>เกณฑ์ผ่านแต่ละ Lab</h3><ul><li>Rebuild และ deploy ได้ด้วยคำสั่งที่บันทึกไว้</li><li>ไม่มี secret อยู่ใน image history หรือ repository</li><li>Container รันแบบ non-root และมี resource limit</li><li>ข้อมูลยังอยู่หลัง recreate container และ restore backup ได้</li><li>ตรวจสุขภาพ, log และ rollback ได้เมื่อ deploy ล้มเหลว</li></ul></section>

</article></div></main></body></html>`;
