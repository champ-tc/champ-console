import { useMemo, useState } from 'react';
import type { Project, SystemLog, Task } from '../types';
import { SectionTitle } from './ui';

const dayNames=['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
const dateKey=(date:Date)=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
const taskDate=(value:string)=>value.slice(0,10);

export default function WorkCalendar({tasks,projects,systemLogs}:{tasks:Task[];projects:Project[];systemLogs:SystemLog[]}){
  const now=new Date(),[month,setMonth]=useState(()=>new Date(now.getFullYear(),now.getMonth(),1)),[selected,setSelected]=useState(()=>dateKey(now));
  const cells=useMemo(()=>{const first=new Date(month.getFullYear(),month.getMonth(),1),start=new Date(first);start.setDate(1-first.getDay());return Array.from({length:42},(_,index)=>{const date=new Date(start);date.setDate(start.getDate()+index);return date})},[month]);
  const monthTitle=new Intl.DateTimeFormat('th-TH',{month:'long',year:'numeric'}).format(month);
  const selectedDate=new Date(`${selected}T12:00:00`);
  const selectedTitle=new Intl.DateTimeFormat('th-TH',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(selectedDate);
  const selectedTasks=tasks.filter(task=>taskDate(task.createdAt)===selected);
  const selectedLogs=systemLogs.filter(log=>log.date===selected);
  const moveMonth=(offset:number)=>{const next=new Date(month.getFullYear(),month.getMonth()+offset,1);setMonth(next);setSelected(dateKey(next))};
  return <>
    <SectionTitle eyebrow="WORK CALENDAR" title={<>ปฏิทิน<span className="bg-gradient-to-r from-[#6655ee] via-[#398de1] to-[#1aa77c] bg-clip-text text-transparent">งาน</span></>} description="ดูงานที่สร้างและประวัติงานระบบแยกตามวัน โดยไม่ผูกกับกำหนดส่ง"/>
    <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <section className="overflow-hidden rounded-[24px] border border-[#e2e5ed] bg-white shadow-[0_8px_24px_rgba(31,35,48,.04)]">
        <header className="flex items-center justify-between border-b border-[#eceef3] px-4 py-4 sm:px-6"><button onClick={()=>moveMonth(-1)} aria-label="เดือนก่อนหน้า" className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e5ed] text-xl text-[#666a78] hover:bg-[#f5f3ff]">‹</button><div className="text-center"><h2 className="text-lg font-extrabold sm:text-xl">{monthTitle}</h2><button onClick={()=>{const current=new Date();setMonth(new Date(current.getFullYear(),current.getMonth(),1));setSelected(dateKey(current))}} className="mt-1 text-[10px] font-bold text-[#6957df]">กลับมาวันนี้</button></div><button onClick={()=>moveMonth(1)} aria-label="เดือนถัดไป" className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e5ed] text-xl text-[#666a78] hover:bg-[#f5f3ff]">›</button></header>
        <div className="grid grid-cols-7 border-b border-[#eceef3] bg-[#fafbfc]">{dayNames.map(day=><div key={day} className="py-3 text-center text-[10px] font-extrabold text-[#858997]">{day}</div>)}</div>
        <div className="grid grid-cols-7">{cells.map(date=>{const key=dateKey(date),inMonth=date.getMonth()===month.getMonth(),isToday=key===dateKey(now),isSelected=key===selected,dayTasks=tasks.filter(task=>taskDate(task.createdAt)===key),dayLogs=systemLogs.filter(log=>log.date===key);return <button key={key} onClick={()=>setSelected(key)} className={`relative min-h-[82px] border-b border-r border-[#eff0f4] p-1.5 text-left transition sm:min-h-[112px] sm:p-2.5 ${isSelected?'bg-[#f3f1ff]':'hover:bg-[#faf9ff]'} ${inMonth?'':'bg-[#fafbfc] text-[#b7bac3]'}`}><span className={`grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold ${isToday?'bg-[#171923] text-white':isSelected?'text-[#6655dd]':''}`}>{date.getDate()}</span><div className="mt-1 space-y-1">{dayTasks.length>0&&<CalendarBadge color="#338fd5" label={`${dayTasks.length} งาน`}/>} {dayLogs.length>0&&<CalendarBadge color="#25a078" label={`${dayLogs.length} งานระบบ`}/>}</div></button>})}</div>
      </section>
      <aside className="rounded-[24px] border border-[#e2e5ed] bg-white p-5 xl:sticky xl:top-24"><p className="text-[10px] font-extrabold tracking-[.12em] text-[#7561ef]">รายการของวันที่เลือก</p><h2 className="mt-2 text-lg font-extrabold leading-7">{selectedTitle}</h2><div className="mt-5 space-y-3">{selectedTasks.map(task=>{const project=projects.find(item=>item.id===task.projectId);return <article key={task.id} className="rounded-2xl border border-[#e5e8ee] p-3"><div className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#338fd5]"/><span className="text-[9px] font-extrabold text-[#338fd5]">งาน</span></div><h3 className="mt-2 text-sm font-extrabold">{task.title}</h3><p className="mt-1 text-[10px] text-[#8a8e9b]">{project?.name||'งานทั่วไป'} · {statusLabel(task.status)}</p></article>})}{selectedLogs.map(log=><article key={log.id} className="rounded-2xl border border-[#e5e8ee] p-3"><div className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#25a078]"/><span className="text-[9px] font-extrabold text-[#25a078]">งานระบบ · {log.kind==='vm'?'VM':'Website'}</span></div><h3 className="mt-2 text-sm font-extrabold">{log.systemName}</h3><p className="mt-1 text-[10px] leading-4 text-[#8a8e9b]">{log.otherActivity||log.details||'ไม่มีรายละเอียด'}</p></article>)}{selectedTasks.length===0&&selectedLogs.length===0&&<div className="grid min-h-40 place-items-center rounded-2xl border border-dashed border-[#dfe2e9] text-center"><div><span className="text-2xl text-[#a2a6b1]">○</span><p className="mt-2 text-xs font-bold text-[#777b88]">ไม่มีรายการในวันนี้</p></div></div>}</div></aside>
    </div>
  </>;
}

function CalendarBadge({color,label}:{color:string;label:string}){return <span className="flex items-center gap-1 truncate rounded-md bg-white px-1.5 py-1 text-[8px] font-bold shadow-sm sm:text-[9px]" style={{color}}><i className="h-1.5 w-1.5 shrink-0 rounded-full" style={{background:color}}/>{label}</span>}
function statusLabel(status:Task['status']){return status==='todo'?'ยังไม่ได้ดำเนินการ':status==='doing'?'กำลังทำ':'ทำเสร็จแล้ว'}
