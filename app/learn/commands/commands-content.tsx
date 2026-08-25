'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './commands.module.css';

type BlockType = 'heading' | 'subheading' | 'text' | 'code' | 'toggle' | 'table';
type Language = 'javascript' | 'typescript' | 'php' | 'docker' | 'sql' | 'postgresql' | 'shell' | 'bash' | 'html' | 'css' | 'go' | 'json';
type Block = { id: string; type: BlockType; content: string; language?: Language; title?: string; rows?: string[][] };
type Article = { id: string; title: string; blocks: Block[] };

const STORAGE_KEY = 'CHAMP_COMMANDS_V1';
const languages: Language[] = ['javascript', 'typescript', 'php', 'docker', 'sql', 'postgresql', 'shell', 'bash', 'html', 'css', 'go', 'json'];
const blockLabels: Record<BlockType, string> = { heading: 'หัวข้อ', subheading: 'หัวข้อย่อย', text: 'ข้อความ', code: 'Code', toggle: 'Toggle', table: 'ตาราง' };
const makeId = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const initialArticles: Article[] = [{
  id: 'airflow', title: 'Apache Airflow', blocks: [
    { id: 'a1', type: 'text', content: 'ติดตั้ง Airflow แบบมาตรฐานด้วย Docker Compose ตามแนวทางที่เอกสารทางการแนะนำ' },
    { id: 'a2', type: 'heading', content: 'วิธีที่ 1: ติดตั้งแบบมาตรฐาน (แนะนำที่สุด)' },
    { id: 'a3', type: 'text', content: 'วิธีนี้ใช้ Docker Compose จึงได้ส่วนประกอบที่จำเป็นของ Airflow ครบ และเริ่มระบบได้ด้วยชุดคำสั่งเดียว' },
    { id: 'a4', type: 'subheading', content: '1. สร้างโฟลเดอร์สำหรับโปรเจกต์' },
    { id: 'a5', type: 'code', language: 'bash', content: 'mkdir airflow-docker\ncd airflow-docker' },
    { id: 'a6', type: 'subheading', content: '2. ดาวน์โหลดไฟล์ตั้งค่า docker-compose.yaml' },
    { id: 'a7', type: 'text', content: 'macOS / Linux' },
    { id: 'a8', type: 'code', language: 'bash', content: "curl -LfO 'https://airflow.apache.org/docs/apache-airflow/stable/docker-compose.yaml'" },
    { id: 'a9', type: 'text', content: 'Windows' },
    { id: 'a10', type: 'code', language: 'shell', content: 'curl.exe -LfO https://airflow.apache.org/docs/apache-airflow/stable/docker-compose.yaml' },
    { id: 'a11', type: 'subheading', content: '3. สร้างโฟลเดอร์สำหรับเก็บข้อมูล' },
    { id: 'a12', type: 'code', language: 'bash', content: 'mkdir -p ./dags ./logs ./plugins ./config\necho -e "AIRFLOW_UID=$(id -u)" > .env' },
    { id: 'a13', type: 'subheading', content: '4. เริ่มระบบและสร้าง User' },
    { id: 'a14', type: 'code', language: 'docker', content: 'docker compose up airflow-init' },
    { id: 'a15', type: 'subheading', content: '5. รัน Airflow' },
    { id: 'a16', type: 'code', language: 'docker', content: 'docker compose up -d' },
    { id: 'a17', type: 'heading', content: 'เข้าใช้งาน Airflow' },
    { id: 'a18', type: 'text', content: 'URL: http://localhost:8080\nUser: airflow\nPassword: airflow' },
  ],
}];

function loadArticles(): Article[] {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (!value) return initialArticles;
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.map(({ id, title, blocks }: Article & { category?: string }) => ({ id, title, blocks }))
      : initialArticles;
  } catch { return initialArticles; }
}

export default function CommandsContent() {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [activeId, setActiveId] = useState('airflow');
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);
  const active = articles.find(article => article.id === activeId) || articles[0];

  useEffect(() => { const stored = loadArticles(); setArticles(stored); setActiveId(stored[0]?.id || ''); setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(articles)); }, [articles, ready]);

  const updateArticle = (change: Partial<Article>) => {
    if (!active) return;
    setArticles(current => current.map(article => article.id === active.id ? { ...article, ...change } : article));
  };
  const updateBlock = (id: string, change: Partial<Block>) => {
    if (!active) return;
    updateArticle({ blocks: active.blocks.map(block => block.id === id ? { ...block, ...change } : block) });
  };
  const addBlock = (type: BlockType) => {
    if (!active) return;
    const block: Block = { id: makeId(), type, content: '' };
    if (type === 'code') block.language = 'javascript';
    if (type === 'toggle') block.title = 'ชื่อ Toggle';
    if (type === 'table') block.rows = [['หัวข้อ 1', 'หัวข้อ 2'], ['', '']];
    updateArticle({ blocks: [...active.blocks, block] });
    setEditing(true);
  };
  const removeBlock = (id: string) => {
    if (!active) return;
    updateArticle({ blocks: active.blocks.filter(block => block.id !== id) });
  };
  const moveBlock = (id: string, offset: -1 | 1) => {
    if (!active) return;
    const blocks = [...active.blocks], index = blocks.findIndex(block => block.id === id), target = index + offset;
    if (target < 0 || target >= blocks.length) return;
    [blocks[index], blocks[target]] = [blocks[target], blocks[index]];
    updateArticle({ blocks });
  };
  const addArticle = () => {
    const article: Article = { id: makeId(), title: 'หน้าใหม่', blocks: [{ id: makeId(), type: 'text', content: '' }] };
    setArticles(current => [...current, article]); setActiveId(article.id); setEditing(true);
  };
  const deleteArticle = () => {
    if (!active || !confirm(`ลบ “${active.title}” หรือไม่?`)) return;
    const next = articles.filter(article => article.id !== active.id);
    setArticles(next);
    setActiveId(next[0]?.id || '');
    setEditing(false);
  };

  return <main className={styles.page}>
    <header className={styles.topbar}><Link href="/learn" className={styles.brand}>CHAMP <span>• COMMANDS</span></Link><div className={styles.headerActions}><span className={styles.saved}>{ready ? 'บันทึกอัตโนมัติแล้ว' : 'กำลังโหลด...'}</span><button className={styles.editButton} onClick={() => setEditing(value => !value)}>{editing ? 'เสร็จสิ้น' : 'แก้ไขเนื้อหา'}</button><Link href="/" className={styles.back}>← หน้าแรก</Link></div></header>
    <div className={styles.layout}>
      <aside className={styles.sidebar}><div className={styles.sidebarTitle}><p className={styles.eyebrow}>หน้าทั้งหมด</p><button onClick={addArticle} title="เพิ่มหน้า">＋</button></div><nav aria-label="รายการหน้า">{articles.map(article => <button key={article.id} className={article.id === active.id ? styles.articleActive : styles.articleItem} onClick={() => { setActiveId(article.id); setEditing(false); }}><strong>{article.title}</strong></button>)}</nav><button className={styles.newPageButton} onClick={addArticle}>＋ เพิ่มหน้าใหม่</button><div className={styles.sidebarNote}>บันทึกอัตโนมัติใน Browser เครื่องนี้</div></aside>
      {active ? <article className={styles.article}>
        {editing ? <div className={styles.titleEditor}><label>ชื่อหน้า<input autoFocus value={active.title} onChange={event => updateArticle({ title: event.target.value })} /></label></div> : <div className={styles.hero}><div><p className={styles.eyebrow}>COMMAND NOTE</p><h1>{active.title}</h1></div></div>}
        <div className={styles.editor}>{active.blocks.map((block, index) => <ContentBlock key={block.id} block={block} editing={editing} onChange={change => updateBlock(block.id, change)} onDelete={() => removeBlock(block.id)} onMoveUp={() => moveBlock(block.id, -1)} onMoveDown={() => moveBlock(block.id, 1)} first={index === 0} last={index === active.blocks.length - 1} />)}</div>
        {editing && <div className={styles.addArea}><span>＋ เพิ่ม</span>{(Object.keys(blockLabels) as BlockType[]).map(type => <button className={styles.quickAddButton} key={type} onClick={() => addBlock(type)}>{type === 'heading' ? 'H1 ' : type === 'subheading' ? 'H2 ' : type === 'text' ? '¶ ' : type === 'code' ? '</> ' : type === 'toggle' ? '▸ ' : '▦ '}{blockLabels[type]}</button>)}<button className={styles.deleteArticle} onClick={deleteArticle}>ลบหน้านี้</button></div>}
      </article> : <section className={styles.emptyState}><p className={styles.eyebrow}>ยังไม่มีหัวข้อ</p><h1>สร้างหัวข้อแรกของคุณ</h1><p>หัวข้อเดิมถูกลบแล้ว คุณสามารถเริ่มหน้าใหม่ได้ทุกเมื่อ</p><button onClick={addArticle}>＋ เพิ่มหน้าใหม่</button></section>}
    </div>
  </main>;
}

function ContentBlock({ block, editing, onChange, onDelete, onMoveUp, onMoveDown, first, last }: { block: Block; editing: boolean; onChange: (change: Partial<Block>) => void; onDelete: () => void; onMoveUp: () => void; onMoveDown: () => void; first: boolean; last: boolean }) {
  const [copied, setCopied] = useState(false);
  const textArea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => { if (textArea.current) { textArea.current.style.height = 'auto'; textArea.current.style.height = `${textArea.current.scrollHeight}px`; } }, [block.content, editing]);
  const input = (className: string, placeholder: string) => <textarea ref={textArea} className={className} value={block.content} placeholder={placeholder} rows={1} onChange={event => onChange({ content: event.target.value })} />;
  if (!editing) {
    if (block.type === 'heading') return <h2 className={styles.contentHeading}>{block.content}</h2>;
    if (block.type === 'subheading') return <h3 className={styles.contentSubheading}>{block.content}</h3>;
    if (block.type === 'text') return <p className={styles.contentText}>{block.content}</p>;
    if (block.type === 'toggle') return <details className={styles.toggleBlock}><summary><span>{block.title || 'หัวข้อ Toggle'}</span></summary><div className={styles.toggleContent}>{block.content || 'ยังไม่มีเนื้อหา'}</div></details>;
    if (block.type === 'table') return <TableView rows={block.rows || []} />;
    return <div className={styles.codeBlock}><div className={styles.codeHeader}><span>{block.language}</span><button onClick={async () => { await navigator.clipboard.writeText(block.content); setCopied(true); window.setTimeout(() => setCopied(false), 1400); }}>{copied ? 'คัดลอกแล้ว ✓' : 'คัดลอก'}</button></div><pre><code>{block.content}</code></pre></div>;
  }
  return <div className={styles.editBlock}><div className={styles.blockControls}><span>{blockLabels[block.type]}</span><div><button disabled={first} onClick={onMoveUp}>↑</button><button disabled={last} onClick={onMoveDown}>↓</button><button className={styles.trash} onClick={onDelete}>ลบ</button></div></div>{block.type === 'heading' && input(styles.headingInput, 'พิมพ์หัวข้อ...')}{block.type === 'subheading' && input(styles.subheadingInput, 'พิมพ์หัวข้อย่อย...')}{block.type === 'text' && input(styles.textInput, 'พิมพ์ข้อความ...')}{block.type === 'code' && <div className={styles.codeEditor}><div><select value={block.language} onChange={event => onChange({ language: event.target.value as Language })}>{languages.map(language => <option key={language}>{language}</option>)}</select><span>CODE</span></div><textarea ref={textArea} value={block.content} onChange={event => onChange({ content: event.target.value })} placeholder="วางโค้ดที่นี่..." spellCheck={false} rows={4} /></div>}{block.type === 'toggle' && <div className={styles.toggleEditor}><label>หัวข้อใหญ่ที่จะแสดงบนหน้า<input value={block.title || ''} onChange={event => onChange({ title: event.target.value })} placeholder="พิมพ์หัวข้อ Toggle" /></label><label>เนื้อหาที่ซ่อนไว้ด้านใน<textarea value={block.content} onChange={event => onChange({ content: event.target.value })} placeholder="เนื้อหานี้จะแสดงหลังจากกดเปิด..." rows={4} /></label></div>}{block.type === 'table' && <TableEditor rows={block.rows || [['', '']]} onChange={rows => onChange({ rows })} />}</div>;
}

function TableView({ rows }: { rows: string[][] }) {
  if (!rows.length) return null;
  return <div className={styles.tableScroll}><table className={styles.contentTable}><thead><tr>{rows[0].map((cell, index) => <th key={index}>{cell}</th>)}</tr></thead><tbody>{rows.slice(1).map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function TableEditor({ rows, onChange }: { rows: string[][]; onChange: (rows: string[][]) => void }) {
  const columnCount = rows[0]?.length || 2;
  const updateCell = (rowIndex: number, columnIndex: number, value: string) => onChange(rows.map((row, ri) => ri === rowIndex ? row.map((cell, ci) => ci === columnIndex ? value : cell) : row));
  const addRow = () => onChange([...rows, Array(columnCount).fill('')]);
  const addColumn = () => onChange(rows.map(row => [...row, '']));
  const removeRow = () => { if (rows.length > 1) onChange(rows.slice(0, -1)); };
  const removeColumn = () => { if (columnCount > 1) onChange(rows.map(row => row.slice(0, -1))); };
  return <div className={styles.tableEditor}><div className={styles.tableScroll}><table><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, columnIndex) => <td key={columnIndex}><input value={cell} onChange={event => updateCell(rowIndex, columnIndex, event.target.value)} placeholder={rowIndex === 0 ? `หัวข้อ ${columnIndex + 1}` : 'ข้อมูล'} /></td>)}</tr>)}</tbody></table></div><div className={styles.tableActions}><button onClick={addRow}>＋ แถว</button><button onClick={addColumn}>＋ คอลัมน์</button><button onClick={removeRow} disabled={rows.length <= 1}>− แถว</button><button onClick={removeColumn} disabled={columnCount <= 1}>− คอลัมน์</button></div></div>;
}
