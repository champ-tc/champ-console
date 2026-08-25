import type { ReactNode } from 'react';

export function Icon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${className}`}>{children}</svg>;
}

export const icons = {
  dashboard: <Icon><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></Icon>,
  tasks: <Icon><path d="m4 7 2 2 4-4"/><path d="M12 7h8"/><path d="m4 15 2 2 4-4"/><path d="M12 15h8"/></Icon>,
  systems: <Icon><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/></Icon>,
  calendar: <Icon><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/></Icon>,
  projects: <Icon><path d="M3 7h7l2 2h9v10H3Z"/><path d="M3 7V5h7l2 2"/></Icon>,
  plus: <Icon><path d="M12 5v14M5 12h14"/></Icon>,
  close: <Icon><path d="m6 6 12 12M18 6 6 18"/></Icon>
};
