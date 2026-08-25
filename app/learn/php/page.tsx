import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn-php';

export const metadata = { title: 'เรียนรู้ PHP | champ-console' };

export default function PhpLearnPage() {
  return <DocumentPage title="เรียนรู้ PHP" document={document} />;
}
