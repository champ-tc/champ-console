import type { Project, ProjectFolder, SystemLog, Task, WorkData } from './types';
import { defaultAgency, defaultVmSystems, defaultWebsiteSystems } from './system-inventory-data';

const projects: Project[] = [
  { id:'project-console', name:'Champ Console', description:'พัฒนาและปรับปรุงพื้นที่รวมระบบส่วนตัวให้ใช้งานง่ายขึ้น', status:'active', color:'#6d5df5', createdAt:'2026-07-02T09:00:00.000Z' },
  { id:'project-workflow', name:'ปรับ Workflow ทีม', description:'ลดขั้นตอนงานซ้ำและจัดรูปแบบการส่งต่องานให้ชัดเจน', status:'active', color:'#2f9ee5', createdAt:'2026-07-08T03:30:00.000Z' },
  { id:'project-content', name:'Content Library', description:'รวบรวมไอเดียและจัดระบบคลังคอนเทนต์สำหรับหลายช่องทาง', status:'active', color:'#ed6b8d', createdAt:'2026-07-15T05:00:00.000Z' },
  { id:'project-client', name:'Client Portal', description:'ออกแบบพื้นที่ให้ลูกค้าติดตามงานและดาวน์โหลดไฟล์ได้สะดวก', status:'paused', color:'#f0a33b', createdAt:'2026-06-20T04:15:00.000Z' },
  { id:'project-finance', name:'ระบบสรุปค่าใช้จ่าย', description:'จัดหมวดหมู่และสร้างภาพรวมรายรับรายจ่ายประจำเดือน', status:'active', color:'#36b88a', createdAt:'2026-07-22T02:00:00.000Z' },
  { id:'project-archive', name:'ย้ายคลังเอกสาร', description:'จัดระเบียบเอกสารเก่าและกำหนดโครงสร้างโฟลเดอร์ใหม่', status:'done', color:'#7a8799', createdAt:'2026-05-10T08:00:00.000Z' },
  { id:'project-brand', name:'Brand Refresh', description:'ปรับภาพลักษณ์ สี และองค์ประกอบให้เป็นระบบเดียวกัน', status:'paused', color:'#b45ee8', createdAt:'2026-06-12T06:00:00.000Z' },
  { id:'project-automation', name:'งานอัตโนมัติ', description:'ทดลองระบบช่วยลดงานประจำและแจ้งเตือนสิ่งที่ต้องติดตาม', status:'active', color:'#20b8b1', createdAt:'2026-08-01T01:30:00.000Z' },
  { id:'project-routine', name:'งานประจำ', description:'รวมงานทั่วไปและสิ่งที่ต้องจัดการเป็นประจำ', status:'active', color:'#9297a5', createdAt:'2026-08-05T01:30:00.000Z' },
];

const sampleFolders: Record<string,string> = {'task-01':'folder-console-frontend','task-02':'folder-console-backend','task-03':'folder-console-frontend','task-04':'folder-console-frontend','task-05':'folder-console-database'};
const task = (id:string,title:string,details:string,status:Task['status'],_oldImportance:string,projectId:string,category:string,createdAt:string): Task => ({ id,title,details,detailType:'text',status,projectId,folderId:sampleFolders[id]||'',category,createdAt });

const tasks: Task[] = [
  task('task-01','ปรับหน้า Dashboard','จัดลำดับข้อมูลสำคัญและตรวจ responsive บนมือถือ','doing','high','project-console','ออกแบบ','2026-08-18T03:20:00.000Z'),
  task('task-02','ตรวจระบบบันทึกข้อมูล','ทดสอบการเพิ่ม แก้ไข และลบข้อมูลใน local storage','todo','urgent','project-console','พัฒนา','2026-08-18T04:10:00.000Z'),
  task('task-03','เขียนคู่มือใช้งาน Work','สรุปวิธีสร้างงาน จัดโปรเจกต์ และดูรายงาน','todo','medium','project-console','เอกสาร','2026-08-17T07:00:00.000Z'),
  task('task-04','ออกแบบไอคอนเมนูใหม่','ปรับน้ำหนักเส้นและขนาดให้สม่ำเสมอ','done','low','project-console','ออกแบบ','2026-08-12T03:00:00.000Z'),
  task('task-05','เก็บ feedback รอบแรก','รวบรวมข้อสังเกตจากการใช้งานจริงและจัดกลุ่มปัญหา','done','medium','project-console','รีเสิร์ช','2026-08-10T06:45:00.000Z'),
  task('task-06','สรุปขั้นตอนรับงาน','ทำแผนภาพตั้งแต่รับคำขอจนถึงส่งมอบ','done','high','project-workflow','วางแผน','2026-08-01T02:00:00.000Z'),
  task('task-07','สร้างแบบฟอร์ม Brief','กำหนดคำถามที่ช่วยลดข้อมูลตกหล่นก่อนเริ่มงาน','doing','urgent','project-workflow','เอกสาร','2026-08-14T05:25:00.000Z'),
  task('task-08','กำหนดสถานะมาตรฐาน','จัดชุดสถานะที่ทุกทีมเข้าใจตรงกัน','todo','medium','project-workflow','วางแผน','2026-08-16T09:10:00.000Z'),
  task('task-09','ทดลอง workflow กับงานจริง','เลือกงานหนึ่งชุดเพื่อทดลองและจดปัญหาที่พบ','todo','high','project-workflow','ทดสอบ','2026-08-19T01:40:00.000Z'),
  task('task-10','รวบรวมหัวข้อคอนเทนต์','นำไอเดียจากแชทและโน้ตเก่ามารวมไว้จุดเดียว','doing','medium','project-content','คอนเทนต์','2026-08-11T04:30:00.000Z'),
  task('task-11','จัดหมวดหมู่คลังไอเดีย','แบ่งตามช่องทาง รูปแบบ และวัตถุประสงค์','todo','low','project-content','คอนเทนต์','2026-08-13T08:20:00.000Z'),
  task('task-12','ทำเทมเพลตบทความ','สร้างโครงสำหรับบทความสั้นและบทความเชิงลึก','done','medium','project-content','เทมเพลต','2026-08-05T03:15:00.000Z'),
  task('task-13','คัดไอเดียที่พร้อมผลิต','เลือกหัวข้อที่ข้อมูลครบและเริ่มทำต่อได้ทันที','todo','high','project-content','คอนเทนต์','2026-08-19T06:00:00.000Z'),
  task('task-14','ทำ wireframe หน้าแรก','วางโครงส่วนสรุปสถานะ ไฟล์ และข้อความล่าสุด','done','high','project-client','ออกแบบ','2026-07-10T02:10:00.000Z'),
  task('task-15','ออกแบบหน้ารวมไฟล์','ทดลองการแยกไฟล์ตามประเภทและเวอร์ชัน','doing','medium','project-client','ออกแบบ','2026-07-18T07:30:00.000Z'),
  task('task-16','เตรียมข้อความต้อนรับ','เขียนข้อความแนะนำการใช้งานสำหรับลูกค้าใหม่','todo','low','project-client','คอนเทนต์','2026-07-20T04:00:00.000Z'),
  task('task-17','นำเข้ารายการค่าใช้จ่าย','รวบรวมรายการตัวอย่างจากหลายแหล่ง','done','medium','project-finance','ข้อมูล','2026-08-02T01:00:00.000Z'),
  task('task-18','ตรวจสูตรสรุปรายเดือน','เช็กยอดรวมและกรณีรายการไม่มีหมวดหมู่','doing','urgent','project-finance','ตรวจสอบ','2026-08-15T05:40:00.000Z'),
  task('task-19','ออกแบบกราฟภาพรวม','เลือกกราฟที่อ่านง่ายทั้งบนเดสก์ท็อปและมือถือ','todo','high','project-finance','ออกแบบ','2026-08-17T02:50:00.000Z'),
  task('task-20','กำหนดหมวดหมู่ค่าใช้จ่าย','จัดหมวดหลักและหมวดย่อยสำหรับใช้งานจริง','done','low','project-finance','วางระบบ','2026-08-06T06:20:00.000Z'),
  task('task-21','สำรองเอกสารเก่า','ทำสำเนาก่อนเริ่มย้ายและตรวจจำนวนไฟล์','done','urgent','project-archive','เอกสาร','2026-05-12T01:10:00.000Z'),
  task('task-22','ย้ายไฟล์ตามโครงสร้างใหม่','แยกไฟล์ตามปี ประเภท และเจ้าของงาน','done','high','project-archive','เอกสาร','2026-05-16T03:45:00.000Z'),
  task('task-23','ตรวจลิงก์เอกสาร','สุ่มตรวจการเข้าถึงและแก้ shortcut ที่เสีย','done','medium','project-archive','ตรวจสอบ','2026-05-20T08:05:00.000Z'),
  task('task-24','สรุปแนวทางการใช้สี','กำหนดสีหลัก สีรอง และตัวอย่างการจับคู่','done','medium','project-brand','แบรนด์','2026-06-15T04:40:00.000Z'),
  task('task-25','ทดลองฟอนต์ภาษาไทย','เปรียบเทียบความอ่านง่ายในหัวข้อและเนื้อหา','todo','low','project-brand','ออกแบบ','2026-06-18T05:30:00.000Z'),
  task('task-26','ทำรายการงานซ้ำประจำ','รวบรวมงานที่ทำทุกวัน ทุกสัปดาห์ และทุกเดือน','done','medium','project-automation','รีเสิร์ช','2026-08-03T02:25:00.000Z'),
  task('task-27','สร้างต้นแบบแจ้งเตือน','ทดลองข้อความและเงื่อนไขสำหรับรายการที่ต้องติดตาม','doing','high','project-automation','พัฒนา','2026-08-16T03:35:00.000Z'),
  task('task-28','ทดสอบกรณีข้อมูลไม่ครบ','ตรวจว่าระบบยังทำงานได้เมื่อบางช่องว่าง','todo','urgent','project-automation','ทดสอบ','2026-08-18T08:10:00.000Z'),
  task('task-29','ตอบอีเมลค้าง','ไล่ตอบเฉพาะอีเมลที่ต้องตัดสินใจหรือส่งข้อมูลเพิ่ม','todo','high','project-routine','งานประจำ','2026-08-19T02:30:00.000Z'),
  task('task-30','จัดโต๊ะและไฟล์ดาวน์โหลด','ล้างไฟล์ชั่วคราวและแยกของที่ต้องเก็บ','done','low','project-routine','งานประจำ','2026-08-19T09:00:00.000Z'),
  task('task-31','อ่านสรุปประชุมทีม','ทบทวนประเด็นตัดสินใจและงานที่ได้รับมอบหมาย','doing','medium','project-routine','งานประจำ','2026-08-20T01:15:00.000Z'),
  task('task-32','เตรียมหัวข้อคุยรอบถัดไป','จดคำถามและประเด็นที่ต้องขอข้อสรุป','todo','medium','project-routine','งานประจำ','2026-08-20T02:05:00.000Z'),
];

const folders: ProjectFolder[] = [
  {id:'folder-console-frontend',projectId:'project-console',name:'Frontend',createdAt:'2026-08-01T01:00:00.000Z'},
  {id:'folder-console-backend',projectId:'project-console',name:'Backend',createdAt:'2026-08-01T01:05:00.000Z'},
  {id:'folder-console-database',projectId:'project-console',name:'Database',createdAt:'2026-08-01T01:10:00.000Z'},
];

const systemLogs: SystemLog[] = [
  {id:'system-log-01',kind:'vm',systemName:'Production VM',activity:'check',details:'ตรวจ CPU, RAM, Disk และ service หลัก ทุกอย่างทำงานปกติ',date:'2026-08-21',completed:true,createdAt:'2026-08-21T01:15:00.000Z'},
  {id:'system-log-02',kind:'website',systemName:'Champ Console',activity:'bugfix',details:'แก้ปัญหาหน้า Work รีเฟรชแล้วกลับหน้าแรก',date:'2026-08-21',completed:true,createdAt:'2026-08-21T02:40:00.000Z'},
  {id:'system-log-03',kind:'vm',systemName:'Database VM',activity:'backup',details:'สำรองฐานข้อมูลรายวันและตรวจสอบไฟล์ backup',date:'2026-08-21',completed:false,createdAt:'2026-08-21T03:10:00.000Z'},
  {id:'system-log-04',kind:'website',systemName:'Client Portal',activity:'update',details:'อัปเดต dependencies และทดสอบหน้าเข้าสู่ระบบ',date:'2026-08-20',completed:true,createdAt:'2026-08-20T06:20:00.000Z'},
];

export const mockWorkData: WorkData = { projects, tasks, folders, systemLogs, systemAgencies:[defaultAgency], vmSystems:defaultVmSystems, websiteSystems:defaultWebsiteSystems };
