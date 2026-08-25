import Link from 'next/link';
import styles from './tool-ui.module.css';

export default function ToolShell({ icon, title, accent, description, children }: { icon: string; title: string; accent: string; description: string; children: React.ReactNode }) {
  return <main className={styles.page}><div className={styles.shell}><div className={styles.top}><strong>CHAMP • TOOLS</strong><Link href="/tools">← Tools</Link></div><section className={styles.card}><header className={styles.header}><div className={styles.icon}>{icon}</div><div><h1>{title} <span className={styles.gradient}>{accent}</span></h1><p>{description}</p></div></header>{children}</section></div></main>;
}
