import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-html-css-tailwind';

export const metadata = { title: 'เรียนรู้ HTML, CSS และ Tailwind CSS | champ-console' };

export default function HtmlCssTailwindLearnPage() {
  return <DocumentPage title="เรียนรู้ HTML, CSS และ Tailwind CSS" document={document} />;
}
