import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-javascript';

export const metadata = { title: 'เรียนรู้ JavaScript | champ-console' };

export default function JavaScriptLearnPage() {
  return <DocumentPage title="เรียนรู้ JavaScript" document={document} />;
}
