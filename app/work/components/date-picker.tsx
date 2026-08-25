'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';

const months = Array.from({ length: 12 }, (_, month) =>
  new Intl.DateTimeFormat('th-TH', { month: 'long' }).format(new Date(2024, month, 1)),
);
const weekdays = ['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.', 'อา.'];
const pad = (value: number) => String(value).padStart(2, '0');
const toValue = (date: Date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const fromValue = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  return year && month && day ? new Date(year, month - 1, day, 12) : null;
};
const sameDay = (left: Date, right: Date) => toValue(left) === toValue(right);

export default function DatePicker({ value, onChange, label = 'เลือกวันที่' }: { value: string; onChange: (value: string) => void; label?: string }) {
  const selected = fromValue(value);
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(() => selected || today);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    if (selected) setView(selected);
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const days = useMemo(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const firstDay = new Date(year, month, 1, 12);
    const mondayOffset = (firstDay.getDay() + 6) % 7;
    return Array.from({ length: 42 }, (_, index) => new Date(year, month, index - mondayOffset + 1, 12));
  }, [view]);
  const years = useMemo(() => Array.from({ length: 21 }, (_, index) => view.getFullYear() - 10 + index), [view]);
  const displayValue = selected
    ? new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long', year: 'numeric' }).format(selected)
    : 'เลือกวันที่';

  const moveMonth = (amount: number) => setView(current => new Date(current.getFullYear(), current.getMonth() + amount, 1, 12));
  const choose = (date: Date) => {
    onChange(toValue(date));
    setView(date);
    setOpen(false);
  };

  return <div ref={rootRef} className="relative">
    <button
      type="button"
      aria-label={label}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls={dialogId}
      onClick={() => setOpen(current => !current)}
      className={`group flex w-full items-center gap-3 rounded-xl border bg-white px-3.5 py-2.5 text-left text-sm outline-none transition focus-visible:ring-4 focus-visible:ring-[#7561ef]/10 ${open ? 'border-[#7561ef] shadow-[0_0_0_3px_rgba(117,97,239,.08)]' : 'border-[#dfe3eb] hover:border-[#bdb6f4]'}`}
    >
      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-[10px] transition ${open ? 'bg-[#6d5df5] text-white' : 'bg-[#f1efff] text-[#6855e4] group-hover:bg-[#e8e4ff]'}`}>
        <CalendarIcon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-bold text-[#2f3240]">{displayValue}</span>
        <span className="mt-0.5 block text-[9px] font-semibold text-[#9a9eaa]">คลิกเพื่อเปิดปฏิทิน</span>
      </span>
      <ChevronIcon className={`text-[#999daa] transition ${open ? 'rotate-180 text-[#6d5df5]' : ''}`} />
    </button>

    {open && <div id={dialogId} role="dialog" aria-modal="false" aria-label={label} className="absolute right-0 z-50 mt-2 w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-[22px] border border-[#e4e2f4] bg-white p-3.5 shadow-[0_24px_60px_-18px_rgba(52,45,105,.35)]">
      <div className="flex items-center justify-between gap-2 px-1 pb-3">
        <button type="button" aria-label="เดือนก่อนหน้า" onClick={() => moveMonth(-1)} className="grid h-9 w-9 place-items-center rounded-xl border border-[#ececf2] text-[#676b78] transition hover:border-[#ccc6f6] hover:bg-[#f5f3ff] hover:text-[#6652dd]"><ArrowIcon /></button>
        <div className="flex min-w-0 items-center justify-center gap-1.5">
          <select aria-label="เลือกเดือน" value={view.getMonth()} onChange={event => setView(new Date(view.getFullYear(), Number(event.target.value), 1, 12))} className="cursor-pointer rounded-lg border-0 bg-[#f6f5fb] px-2 py-2 text-xs font-extrabold text-[#30333e] outline-none focus:ring-2 focus:ring-[#7561ef]/20">
            {months.map((month, index) => <option key={month} value={index}>{month}</option>)}
          </select>
          <select aria-label="เลือกปี" value={view.getFullYear()} onChange={event => setView(new Date(Number(event.target.value), view.getMonth(), 1, 12))} className="cursor-pointer rounded-lg border-0 bg-[#f6f5fb] px-2 py-2 text-xs font-extrabold text-[#30333e] outline-none focus:ring-2 focus:ring-[#7561ef]/20">
            {years.map(year => <option key={year} value={year}>{year + 543}</option>)}
          </select>
        </div>
        <button type="button" aria-label="เดือนถัดไป" onClick={() => moveMonth(1)} className="grid h-9 w-9 rotate-180 place-items-center rounded-xl border border-[#ececf2] text-[#676b78] transition hover:border-[#ccc6f6] hover:bg-[#f5f3ff] hover:text-[#6652dd]"><ArrowIcon /></button>
      </div>

      <div className="grid grid-cols-7 border-b border-[#f0eff5] pb-2" aria-hidden="true">
        {weekdays.map(day => <span key={day} className="text-center text-[9px] font-extrabold text-[#a1a4af]">{day}</span>)}
      </div>
      <div role="grid" className="mt-2 grid grid-cols-7 gap-0.5">
        {days.map(day => {
          const active = Boolean(selected && sameDay(day, selected));
          const isToday = sameDay(day, today);
          const inMonth = day.getMonth() === view.getMonth();
          return <button
            type="button"
            role="gridcell"
            aria-label={new Intl.DateTimeFormat('th-TH', { dateStyle: 'long' }).format(day)}
            aria-selected={active}
            key={toValue(day)}
            onClick={() => choose(day)}
            className={`relative grid aspect-square place-items-center rounded-xl text-xs font-bold transition focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7561ef] ${active ? 'bg-gradient-to-br from-[#7865f4] to-[#5946d7] text-white shadow-[0_6px_14px_rgba(102,82,221,.3)]' : inMonth ? 'text-[#3e414c] hover:bg-[#f0edff] hover:text-[#604bd7]' : 'text-[#c7c9d0] hover:bg-[#f7f6fb]'}`}
          >
            {day.getDate()}
            {isToday && !active && <span className="absolute bottom-1 h-1 w-1 rounded-full bg-[#725ee8]" />}
          </button>;
        })}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-[#f0eff5] px-1 pt-3">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-[#979aa7]"><i className="h-1.5 w-1.5 rounded-full bg-[#725ee8]" />วันนี้</span>
        <button type="button" onClick={() => choose(today)} className="rounded-xl bg-[#f0edff] px-3.5 py-2 text-[10px] font-extrabold text-[#624ed8] transition hover:bg-[#e5e0ff]">เลือกวันนี้</button>
      </div>
    </div>}
  </div>;
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3v3m10-3v3M4 9h16M5.5 5h13A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-12A1.5 1.5 0 0 1 5.5 5Z"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/></svg>;
}
function ChevronIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>;
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>;
}
