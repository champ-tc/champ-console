'use client';

import { useMemo, useState } from 'react';
import ToolShell from '../tool-shell';
import common from '../tool-ui.module.css';
import styles from './fix-keyboard.module.css';

type Direction = 'en-to-th' | 'th-to-en';

const englishKeys = "1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?";
const thaiKeys = 'ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ+๑๒๓๔ู฿๕๖๗๘๙๐"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ';

function createMap(from: string, to: string) {
  return new Map(Array.from(from).map((character, index) => [character, Array.from(to)[index]]));
}

const enToTh = createMap(englishKeys, thaiKeys);
const thToEn = createMap(thaiKeys, englishKeys);

function convertText(value: string, direction: Direction) {
  const map = direction === 'en-to-th' ? enToTh : thToEn;
  return Array.from(value, character => map.get(character) ?? character).join('');
}

export default function FixKeyboardTool() {
  const [direction, setDirection] = useState<Direction>('en-to-th');
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const output = useMemo(() => convertText(input, direction), [input, direction]);

  function selectDirection(next: Direction) {
    if (next === direction) return;
    setDirection(next);
    if (output) setInput(output);
  }

  async function copyResult() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <ToolShell icon="กA" title="แก้ภาษา" accent="พิมพ์ผิด" description="แปลงข้อความที่พิมพ์ผิดภาษา ด้วยผังแป้นพิมพ์ไทยเกษมณี">
      <div className={common.panel}>
        <div className={styles.tabs} role="group" aria-label="เลือกทิศทางการแปลงภาษา">
          <button className={`${styles.tab} ${direction === 'en-to-th' ? styles.active : ''}`} onClick={() => selectDirection('en-to-th')}>
            <span className={styles.language}>EN → ไทย</span>
            <small>ลืมเปลี่ยนเป็นภาษาไทย</small>
          </button>
          <button className={`${styles.tab} ${direction === 'th-to-en' ? styles.active : ''}`} onClick={() => selectDirection('th-to-en')}>
            <span className={styles.language}>ไทย → EN</span>
            <small>ลืมเปลี่ยนเป็นภาษาอังกฤษ</small>
          </button>
        </div>

        <div className={styles.editorGrid}>
          <div className={common.field}>
            <div className={styles.labelRow}><label htmlFor="mistyped-text">ข้อความที่พิมพ์ผิด</label><button onClick={() => setInput('')} disabled={!input}>ล้าง</button></div>
            <textarea id="mistyped-text" autoFocus value={input} onChange={event => setInput(event.target.value)} placeholder={direction === 'en-to-th' ? 'ตัวอย่าง: l;ylfu8iy[' : 'ตัวอย่าง: ้ำสสน'} />
          </div>
          <div className={styles.arrow} aria-hidden="true">→</div>
          <div className={common.field}>
            <div className={styles.labelRow}><label htmlFor="fixed-text">ข้อความที่แก้ไขแล้ว</label><span>{output.length.toLocaleString('th-TH')} ตัวอักษร</span></div>
            <textarea id="fixed-text" className={styles.output} readOnly value={output} placeholder="ผลลัพธ์จะแสดงที่นี่ทันที" />
          </div>
        </div>

        <div className={common.actions}>
          <button className={common.button} disabled={!output} onClick={copyResult}>{copied ? '✓ คัดลอกแล้ว' : 'คัดลอกผลลัพธ์'}</button>
          <button className={`${common.button} ${common.secondary}`} disabled={!output} onClick={() => setInput(output)}>ใช้ผลลัพธ์แก้ต่อ</button>
        </div>
        <p className={styles.note}>ระบบจะคงช่องว่าง ตัวเลข และอักขระที่ไม่ต้องแปลงไว้ตามเดิม</p>
      </div>
    </ToolShell>
  );
}
