import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/learn';

export const metadata = { title: 'Learn | champ-console' };

export default function LearnPage() {
  return <DocumentPage title="Learn" document={document} />;
}
