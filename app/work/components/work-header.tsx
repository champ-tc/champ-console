import Link from 'next/link';
import type { WorkSection } from '../types';
import { icons } from './icons';

const sections: { id: WorkSection; label: string; icon: React.ReactNode }[] = [
  { id:'dashboard', label:'ภาพรวม', icon:icons.dashboard }, { id:'tasks', label:'งานแยกตามเรื่อง', icon:icons.tasks }, { id:'systems', label:'จัดการระบบ', icon:icons.systems }, { id:'calendar', label:'ปฏิทิน', icon:icons.calendar }
];

export default function WorkHeader({ active, onChange }: { active: WorkSection; onChange:(section:WorkSection)=>void }) {
  return <>
    <header className="sticky top-0 z-30 border-b border-[#eff0f5] bg-white/95 backdrop-blur-xl">
      <div className="flex h-[70px] items-center gap-4 px-5 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 no-underline"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#171923] text-sm font-extrabold text-white">C</span><strong className="hidden text-sm font-extrabold sm:block sm:text-[15px]">champ-console</strong></Link>
        <nav className="no-scrollbar hidden flex-1 items-center justify-center gap-1 overflow-x-auto text-[12px] font-semibold text-[#737786] md:flex">
          <div className="flex rounded-full bg-[#f5f6f9] p-1">{sections.map(item=><button key={item.id} onClick={()=>onChange(item.id)} className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 transition ${active===item.id?'bg-white text-[#171923] shadow-sm':'hover:bg-white/70 hover:text-[#171923]'}`}><span className="hidden lg:block">{item.icon}</span>{item.label}</button>)}</div>
        </nav>
        <span className="ml-auto flex items-center gap-2 rounded-full bg-[#edfbf5] px-3 py-2 text-[10px] font-bold text-[#168b6d] before:h-2 before:w-2 before:rounded-full before:bg-[#26c99b] before:shadow-[0_0_0_4px_rgba(38,201,155,.12)] before:content-[''] md:ml-0">WORK</span>
      </div>
    </header>
    <nav className="fixed inset-x-4 bottom-4 z-40 flex justify-around rounded-full border border-white bg-white/95 p-2 shadow-[0_16px_45px_rgba(31,35,48,.18)] backdrop-blur-xl md:hidden">
      {sections.map(item=><button aria-label={item.label} key={item.id} onClick={()=>onChange(item.id)} className={`grid h-11 w-11 place-items-center rounded-full transition ${active===item.id?'bg-[#171923] text-white':'text-[#8a8e9d]'}`}>{item.icon}</button>)}
    </nav>
  </>;
}
