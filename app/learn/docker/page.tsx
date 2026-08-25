import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-docker';

export const metadata = { title: 'เรียนรู้ Docker | champ-console' };

export default function DockerLearnPage() {
  return <DocumentPage title="เรียนรู้ Docker" document={document} />;
}
