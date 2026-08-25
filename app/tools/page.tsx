import Link from 'next/link';
import styles from './tools.module.css';

export const metadata = { title: 'Tools | champ-console' };

const tools = [
  ['⌘','สุ่มรหัสผ่าน','สร้างรหัสผ่านที่แข็งแรงและปลอดภัย','/tools/password'], ['⌁','ระบบสุ่ม','เพิ่มรายชื่อแล้วสุ่มเลือกด้วยวงล้อ','/tools/random'],
  ['▦','สร้าง QR Code','แปลงข้อความหรือลิงก์เป็น QR Code','/tools/qrcode'], ['↗','ระบบย่อลิงก์','จัดเตรียมลิงก์สั้นที่อ่านง่าย','/tools/short-link'],
  ['✦','ลบพื้นหลัง','ลบพื้นหลังรูปภาพด้วย AI บนอุปกรณ์','/tools/remove-background'], ['⇣','บีบอัดไฟล์','ลดขนาด Word, PDF, JPG และ PNG','/tools/compress'],
  ['⌘','เข้ารหัสและ Bcrypt','เข้ารหัส ถอดรหัส และ Hash password','/tools/crypto'],
  ['กA','แก้ภาษาพิมพ์ผิด','แปลงข้อความที่ลืมสลับภาษาไทย–อังกฤษ','/tools/fix-keyboard'],
];
export default function ToolsPage(){return <main className={styles.page}><div className={styles.shell}><div className={styles.top}><strong>CHAMP • TOOLS</strong><Link href="/">← หน้าแรก</Link></div><section className={styles.card}><header className={styles.header}><div className={styles.magic}>⌁</div><div><h1>เครื่องมือ <span>TOOLS</span></h1><p>เครื่องมือเล็ก ๆ ที่ช่วยให้งานประจำวันง่ายขึ้น</p></div></header><div className={styles.grid}>{tools.map(([icon,title,description,href])=><Link className={styles.tool} href={href} key={href}><div className={styles.icon}>{icon}</div><h2>{title}</h2><p>{description}</p><b>เปิดเครื่องมือ →</b></Link>)}</div><div className={styles.foot}>CHAMP PERSONAL UTILITIES</div></section></div></main>}
