import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/tool-random';

export const metadata = { title: 'Random Picker | champ-console' };

export default function RandomPage() {
  return <DocumentPage title="Random Picker" document={document} />;
}
