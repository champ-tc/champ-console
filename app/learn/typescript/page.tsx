import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-typescript';

export const metadata = { title: 'เรียนรู้ TypeScript | champ-console' };

export default function TypeScriptLearnPage() {
  return <DocumentPage title="เรียนรู้ TypeScript" document={document} />;
}
