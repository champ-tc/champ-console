import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-nodejs';

export const metadata = { title: 'เรียนรู้ Node.js | champ-console' };

export default function NodeJsLearnPage() {
  return <DocumentPage title="เรียนรู้ Node.js" document={document} />;
}
