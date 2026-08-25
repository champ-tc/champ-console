import type { Project, Task } from '../types';
import { Empty, PrimaryButton, SectionTitle } from './ui';
import { ProjectCard } from './projects-view';

const statusCards = [
  { status:'todo', label:'ยังไม่ได้ดำเนินการ', detail:'งานที่รอเริ่มดำเนินการ', color:'#3298e8', soft:'bg-[#eaf6ff]', border:'border-[#d6edff]', icon:<><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 9h8M8 13h5"/></> },
  { status:'doing', label:'กำลังทำ', detail:'งานที่อยู่ระหว่างดำเนินการ', color:'#ed9a2d', soft:'bg-[#fff6e6]', border:'border-[#ffe7bd]', icon:<><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></> },
  { status:'done', label:'ทำเสร็จ', detail:'งานที่ดำเนินการเรียบร้อย', color:'#27a779', soft:'bg-[#eaf9f3]', border:'border-[#d2f0e4]', icon:<><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></> },
] as const;

export default function Dashboard({ tasks, projects, onAddTask, onAddProject, onEditProject }: { tasks:Task[]; projects:Project[]; onAddTask:()=>void; onAddProject:()=>void; onEditProject:(project:Project)=>void }) {
  const activeProjects=projects.filter(project=>project.status==='active').length;
  return <>
    <SectionTitle eyebrow="WORKSPACE OVERVIEW" title={<>ภาพรวม<span className="bg-gradient-to-r from-[#427ce9] via-[#6c55f5] to-[#1ab48c] bg-clip-text text-transparent">งานทั้งหมด</span></>} description="ดูสถานะงานทั้งหมดแบบชัดเจน แล้วเลือกโปรเจกต์ที่ต้องการจัดการต่อ" actions={<><button onClick={onAddProject} className="rounded-full border border-[#e4e6ed] bg-white px-5 py-3 text-xs font-bold transition hover:border-[#cbc7fa] hover:bg-[#f8f7ff]">＋ โปรเจกต์</button><PrimaryButton onClick={onAddTask}>＋ งานใหม่</PrimaryButton></>}/>

    <section className="rounded-[26px] border border-[#e9eaf0] bg-white p-5 shadow-[0_8px_24px_rgba(31,35,48,.04)] sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[9px] font-extrabold tracking-[.16em] text-[#9a9eac]">TASK STATUS</p><h2 className="mt-1 text-xl font-extrabold">สถานะงาน</h2></div><div className="rounded-full bg-[#f5f6f8] px-3 py-1.5 text-[10px] font-bold text-[#737786]">ทั้งหมด {tasks.length} งาน</div></div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">{statusCards.map(card=>{const amount=tasks.filter(task=>task.status===card.status).length;return <div key={card.status} className={`relative overflow-hidden rounded-[22px] border p-5 ${card.soft} ${card.border}`}><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm" style={{color:card.color}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">{card.icon}</svg></span><strong className="text-4xl tracking-[-.06em]" style={{color:card.color}}>{amount}</strong></div><h3 className="mt-6 text-sm font-extrabold">{card.label}</h3><p className="mt-1 text-[11px] text-[#7d8290]">{card.detail}</p></div>})}</div>
    </section>

    <section className="mt-8 border-t border-[#e9eaf0] pt-8">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[9px] font-extrabold tracking-[.16em] text-[#9a9eac]">MY PROJECTS</p><h2 className="mt-1 text-2xl font-extrabold tracking-[-.03em]">เรื่องและโปรเจกต์</h2><p className="mt-1 text-xs text-[#858996]">เลือกการ์ดเพื่อดูรายละเอียดหรือแก้ไขโปรเจกต์</p></div><div className="flex gap-2 text-[10px] font-bold"><span className="rounded-full bg-[#f0eeff] px-3 py-1.5 text-[#6653df]">ทั้งหมด {projects.length}</span><span className="rounded-full bg-[#fff6e6] px-3 py-1.5 text-[#c47713]">กำลังทำ {activeProjects}</span></div></div>
      {projects.length?<div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><ProjectCard key={project.id} project={project} tasks={tasks.filter(task=>task.projectId===project.id)} onEdit={()=>onEditProject(project)}/>)}</div>:<div className="mt-5 rounded-[26px] border border-[#e9eaf0] bg-white"><Empty title="ยังไม่มีโปรเจกต์" detail="สร้างโปรเจกต์ก่อนเพิ่มงาน"/></div>}
    </section>
  </>;
}
