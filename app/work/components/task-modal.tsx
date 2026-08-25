import { useEffect, useState } from 'react';
import type { Project, ProjectFolder, Task } from '../types';
import { icons } from './icons';

const blank: Omit<Task,'id'|'createdAt'> = { title:'', details:'', detailType:'text', status:'todo', projectId:'', folderId:'', category:'งาน' };

export default function TaskModal({ open, task, projects, folders, onClose, onSave, onDelete }: { open:boolean; task:Task|null; projects:Project[]; folders:ProjectFolder[]; onClose:()=>void; onSave:(task:Omit<Task,'id'|'createdAt'>)=>void; onDelete?:(id:string)=>void }) {
  const [form,setForm]=useState(blank);
  useEffect(()=>{setForm(task?{title:task.title,details:task.details,detailType:task.detailType||'text',status:task.status,projectId:task.projectId,folderId:task.folderId||'',category:task.category}:{...blank,projectId:sessionStorage.getItem('CHAMP_TASK_PROJECT')||'',folderId:sessionStorage.getItem('CHAMP_TASK_FOLDER')||''})},[task,open]);
  if(!open)return null;
  const field='w-full rounded-xl border border-[#dfe3ec] bg-[#fafbfc] px-3 py-2.5 text-sm outline-none focus:border-[#7864ef] focus:bg-white';

  return <div className="fixed inset-0 z-50 grid place-items-center bg-[#161827]/50 p-4 backdrop-blur-sm">
    <form onSubmit={e=>{e.preventDefault();if(form.title.trim())onSave({...form,title:form.title.trim()})}} className="w-full max-w-xl rounded-[26px] bg-white p-6 shadow-2xl">
      <div className="flex items-center justify-between"><div><p className="text-[10px] font-extrabold tracking-[.17em] text-[#725df1]">TASK</p><h2 className="mt-1 text-xl font-extrabold">{task?'แก้ไขงาน':'สร้างงานใหม่'}</h2></div><button type="button" aria-label="ปิด" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4f5f8] text-[#777b89]">{icons.close}</button></div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold sm:col-span-2">ชื่องาน<input required autoFocus className={`${field} mt-2`} value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></label>
        <div className="sm:col-span-2"><div className="flex items-center justify-between gap-3"><span className="text-xs font-bold">รายละเอียด</span><div className="flex rounded-full bg-[#f2f3f6] p-1"><button type="button" onClick={()=>setForm({...form,detailType:'text'})} className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition ${form.detailType==='text'?'bg-white text-[#171923] shadow-sm':'text-[#898d99]'}`}>ข้อความ</button><button type="button" onClick={()=>setForm({...form,detailType:'code'})} className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition ${form.detailType==='code'?'bg-[#171923] text-white shadow-sm':'text-[#898d99]'}`}>Code</button></div></div><textarea rows={form.detailType==='code'?8:4} spellCheck={form.detailType!=='code'} className={`${field} mt-2 resize-y ${form.detailType==='code'?'border-[#303544] bg-[#11131b] font-mono text-[14px] leading-7 text-[#f8fafc] caret-white placeholder:text-[#9ca3af] focus:border-[#7060ed] focus:bg-[#11131b]':''}`} value={form.details} onChange={e=>setForm({...form,details:e.target.value})} placeholder={form.detailType==='code'?'วางหรือเขียน code ที่นี่...':'เขียนรายละเอียดของงาน...'}/></div>
        <label className="text-xs font-bold sm:col-span-2">สถานะ<select className={`${field} mt-2`} value={form.status} onChange={e=>setForm({...form,status:e.target.value as Task['status']})}><option value="todo">ยังไม่ได้ดำเนินการ</option><option value="doing">กำลังทำ</option><option value="done">ทำเสร็จ</option></select></label>
        {!task&&<label className="text-xs font-bold sm:col-span-2">โปรเจกต์<select required className={`${field} mt-2`} value={form.projectId} onChange={e=>setForm({...form,projectId:e.target.value})}><option value="" disabled>เลือกโปรเจกต์</option>{projects.map(project=><option key={project.id} value={project.id}>{project.name}</option>)}</select></label>}
        <label className="text-xs font-bold sm:col-span-2">โฟลเดอร์<select className={`${field} mt-2`} value={form.folderId} onChange={e=>setForm({...form,folderId:e.target.value})}><option value="">ไม่อยู่ในโฟลเดอร์</option>{folders.filter(folder=>folder.projectId===form.projectId).map(folder=><option key={folder.id} value={folder.id}>{folder.name}</option>)}</select></label>
      </div>
      <div className="mt-6 flex justify-between gap-2">{task&&onDelete?<button type="button" onClick={()=>onDelete(task.id)} className="rounded-xl bg-[#fff0f2] px-4 py-3 text-xs font-bold text-[#d43f58]">ลบงาน</button>:<span/>}<div className="flex gap-2"><button type="button" onClick={onClose} className="rounded-xl bg-[#f3f4f7] px-4 py-3 text-xs font-bold">ยกเลิก</button><button className="rounded-xl bg-[#6d5df5] px-5 py-3 text-xs font-bold text-white">บันทึกงาน</button></div></div>
    </form>
  </div>;
}
