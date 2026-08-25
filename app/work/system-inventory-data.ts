import type { SystemAgency, VmSystem, WebsiteSystem } from './types';

export const defaultAgency: SystemAgency = {id:'agency-envocc',name:'กองโรคจากการประกอบอาชีพและสิ่งแวดล้อม',shortName:'ENVOCC',createdAt:'2026-08-21T00:00:00.000Z'};
const agencyId=defaultAgency.id;
export const defaultVmSystems: VmSystem[] = [
  {id:'VM-001',agencyId,status:'เปิด',serverName:'ENVOCC_Service',thaiName:'แบบฟอร์มการให้บริการด้านสารสนเทศ',urls:['https://envocc-service.ddc.moph.go.th/']},
  {id:'VM-002',agencyId,status:'เปิด',serverName:'Envocc_survey',thaiName:'ระบบประเมินสถานประกอบการ ปลอดโรค ปลอดภัย กายใจเป็นสุข',urls:['https://twhp.ddc.moph.go.th/']},
  {id:'VM-003',agencyId,status:'เปิด',serverName:'ENOVCC_gauditorHSH',thaiName:'หลักสูตรพัฒนาศักยภาพทีมผู้ประเมินสถานประกอบการปลอดโรค ปลอดภัย กายใจเป็นสุข',urls:['https://e-learningauditorHSH.ddc.moph.go.th']},
  {id:'VM-004',agencyId,status:'เปิด',serverName:'Envocc_BasicOH_training',thaiName:'หลักสูตรอาชีวอนามัยพื้นฐานออนไลน์ สำหรับเจ้าหน้าที่สาธารณสุข',urls:['https://basicoh-training.ddc.moph.go.th']},
  {id:'VM-005',agencyId,status:'เปิด',serverName:'ENVOCC_OHSP',thaiName:'Occupation Health Smart Package',urls:['https://ohspdigitalpg.ddc.moph.go.th/']},
  {id:'VM-006',agencyId,status:'เปิด',serverName:'rankdmeesuk',thaiName:'แรงดีมีสุข',urls:['https://rankdmeesuk.ddc.moph.go.th']},
  {id:'VM-007',agencyId,status:'เปิด',serverName:'ENVOCC_Card',thaiName:'บัตรประจำตัวพนักงานเจ้าหน้าที่ตามพระราชบัญญัติควบคุมโรคจากการประกอบอาชีพและสิ่งแวดล้อม พ.ศ. 2562',urls:['https://envocc-card.ddc.moph.go.th/']},
  {id:'VM-008',agencyId,status:'เปิด',serverName:'pm25-patients',thaiName:'(PM2.5 Patient Database) ฐานข้อมูลผู้ป่วยโรคจาก PM2.5',urls:['https://pm25-patients.ddc.moph.go.th']},
  {id:'VM-009',agencyId,status:'เปิด',serverName:'Intranet',thaiName:'อินทราเน็ต / ระบบสำนักงานอัจฉริยะ',urls:['https://inenvocc.ddc.moph.go.th/']},
  {id:'VM-010',agencyId,status:'เปิด',serverName:'DDC-Media-Envocc',thaiName:'คลังสื่อประชาสัมพันธ์ กองโรคจากการประกอบอาชีพและสิ่งแวดล้อม',urls:['https://media-envocc.ddc.moph.go.th']},
  {id:'VM-011',agencyId,status:'เปิด',serverName:'envocc-elearning',thaiName:'หลักสูตร E-learning ด้านเวชศาสตร์สิ่งแวดล้อม โรคจากการประกอบอาชีพ และหน่วยปฏิบัติการควบคุมโรค',urls:['https://envocc-elearning.ddc.moph.go.th/basicenvmed/','https://envocc-elearning.ddc.moph.go.th/envoccofficer/','https://envocc-elearning.ddc.moph.go.th/envocccu/']},
  {id:'VM-012',agencyId,status:'เปิด',serverName:'envocc-test',thaiName:'ใช้เป็น server test',urls:['https://demo-envocc-card.ddc.moph.go.th','https://demo-twhp.ddc.moph.go.th','https://demo-envocc-office.ddc.moph.go.th']},
];

export const defaultWebsiteSystems: WebsiteSystem[] = [
  {id:'WEB-001',agencyId,status:'เปิด',vm:'Envocc_BasicOH_training',thaiName:'หลักสูตรอาชีวอนามัยพื้นฐานออนไลน์ สำหรับเจ้าหน้าที่สาธารณสุข',url:'https://basicoh-training.ddc.moph.go.th/',development:'จ้างพัฒนา',responsibleGroup:'กลุ่มอาชีวอนามัย',responsible:'นายศิริพงษ์ โคตรบรรเทา'},
  {id:'WEB-002',agencyId,status:'เปิด',vm:'rankdmeesuk',thaiName:'แรงดีมีสุข',url:'https://rankdmeesuk.ddc.moph.go.th/',development:'จ้างพัฒนา',responsibleGroup:'กลุ่มอาชีวอนามัย',responsible:'นางสาวชไมพร ชารี'},
  {id:'WEB-003',agencyId,status:'เปิด',vm:'Envocc_survey',thaiName:'ระบบประเมินสถานประกอบการ ปลอดโรค ปลอดภัย กายใจเป็นสุข',url:'https://twhp.ddc.moph.go.th/',development:'พัฒนาเอง',responsibleGroup:'กลุ่มอาชีวอนามัย',responsible:'นางสาวกมลชนก สุขอนันต์'},
  {id:'WEB-004',agencyId,status:'เปิด',vm:'ENOVCC_gauditorHSH',thaiName:'หลักสูตรพัฒนาศักยภาพทีมผู้ประเมินสถานประกอบการปลอดโรค ปลอดภัย กายใจเป็นสุข',url:'https://e-learningauditorhsh.ddc.moph.go.th',development:'จ้างพัฒนา',responsibleGroup:'กลุ่มอาชีวอนามัย',responsible:'นางสาวสุภาพร วรวงศ์'},
  {id:'WEB-005',agencyId,status:'เปิด',vm:'ENVOCC_OHSP',thaiName:'แพ็กเกจจัดการโรคจากการประกอบอาชีพ Occupation Health Smart Package',url:'https://ohspdigitalpg.ddc.moph.go.th',development:'จ้างพัฒนา',responsibleGroup:'กลุ่มอาชีวอนามัย',responsible:'นางสาวสุภาพร วรวงศ์'},
  {id:'WEB-006',agencyId,status:'เปิด',vm:'envocc-elearning',thaiName:'หลักสูตรการอบรมเวชศาสตร์สิ่งแวดล้อมพื้นฐาน (E-learning)',url:'https://envocc-elearning.ddc.moph.go.th/basicenvmed/',development:'จ้างพัฒนา',responsibleGroup:'เวชศาสตร์สิ่งแวดล้อม',responsible:'นางสาวจงรัก บ่อทรัพย์'},
  {id:'WEB-007',agencyId,status:'เปิด',vm:'envocc-elearning',thaiName:'หลักสูตรพัฒนาศักยภาพบุคลากรสาธารณสุข ด้านโรคจากอาการประกอบอาชีพ และโรคจากสิ่งแวดล้อม กรมควบคุมโรค',url:'https://envocc-elearning.ddc.moph.go.th/envoccofficer/',development:'จ้างพัฒนา',responsibleGroup:'สำนักงานเลขา',responsible:'นางสาวเมธิรา เกตุดี'},
  {id:'WEB-008',agencyId,status:'เปิด',vm:'envocc-elearning',thaiName:'หลักสูตรพัฒนาศักยภาพหน่วยปฏิบัติการควบคุมโรคจากการประกอบอาชีพและโรคจากสิ่งแวดล้อม',url:'https://envocc-elearning.ddc.moph.go.th/envocccu/',development:'จ้างพัฒนา',responsibleGroup:'สำนักงานเลขา',responsible:'นางสาวศศิธร ศรจันทร์'},
  {id:'WEB-009',agencyId,status:'เปิด',vm:'ENVOCC_Card',thaiName:'บัตรประจำตัวพนักงานเจ้าหน้าที่ตามพระราชบัญญัติควบคุมโรคจากการประกอบอาชีพและสิ่งแวดล้อม พ.ศ. 2562',url:'https://envocc-card.ddc.moph.go.th/',development:'พัฒนาเอง',responsibleGroup:'สำนักงานเลขา',responsible:'นางสาวเมธิรา เกตุดี'},
  {id:'WEB-0010',agencyId,status:'เปิด',vm:'Intranet',thaiName:'ระบบสำนักงานอัจฉริยะ กองโรคจากการประกอบอาชีพและสิ่งแวดล้อม',url:'https://inenvocc.ddc.moph.go.th/e-office/',development:'จ้างพัฒนา',responsibleGroup:'เฝ้าระวัง',responsible:'นายอาฮามะลูกี ปูเยาะ'},
  {id:'WEB-0011',agencyId,status:'เปิด',vm:'pm25-patients',thaiName:'(PM2.5 Patient Database) ฐานข้อมูลผู้ป่วยโรคจาก PM2.5',url:'https://pm25-patients.ddc.moph.go.th',development:'พัฒนาเอง',responsibleGroup:'เฝ้าระวัง',responsible:'นางสาวจันจิรา ชินศรี'},
  {id:'WEB-0015',agencyId,status:'เปิด',vm:'DDC-Media-Envocc',thaiName:'คลังสื่อประชาสัมพันธ์ กองโรคจากการประกอบอาชีพและสิ่งแวดล้อม',url:'https://media-envocc.ddc.moph.go.th',development:'พัฒนาเอง',responsibleGroup:'สื่อสาร',responsible:'นางสาวภัทรวดี ขาวจันทร์'},
  {id:'WEB-0016',agencyId,status:'เปิด',vm:'envocc-test',thaiName:'ใช้เป็น server test',url:'https://demo-envocc-card.ddc.moph.go.th',development:'พัฒนาเอง',responsibleGroup:'เฝ้าระวัง',responsible:'นายธีรยุทธ ชูพุทธพงศ์'},
  {id:'WEB-0017',agencyId,status:'เปิด',vm:'envocc-test',thaiName:'ใช้เป็น server test',url:'https://demo-twhp.ddc.moph.go.th',development:'พัฒนาเอง',responsibleGroup:'เฝ้าระวัง',responsible:'นายธีรยุทธ ชูพุทธพงศ์'},
  {id:'WEB-0018',agencyId,status:'เปิด',vm:'envocc-test',thaiName:'ใช้เป็น server test',url:'https://demo-envocc-office.ddc.moph.go.th',development:'พัฒนาเอง',responsibleGroup:'เฝ้าระวัง',responsible:'นายธีรยุทธ ชูพุทธพงศ์'},
  {id:'WEB-0019',agencyId,status:'กำลังพัฒนา',vm:'ENVOCC_Service',thaiName:'แบบฟอร์มการให้บริการด้านสารสนเทศ',url:'https://envocc-service.ddc.moph.go.th',development:'พัฒนาเอง',responsibleGroup:'เฝ้าระวัง',responsible:'นายธีรยุทธ ชูพุทธพงศ์'},
];
