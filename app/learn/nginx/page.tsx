import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-nginx';

export const metadata = { title: 'เรียนรู้ Nginx | champ-console' };

export default function NginxLearnPage() {
  return <DocumentPage title="เรียนรู้ Nginx" document={document} />;
}
