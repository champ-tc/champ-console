import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/tool-short-link';

export const metadata = { title: 'Short Link | champ-console' };

export default function ShortLinkPage() {
  return <DocumentPage title="Short Link" document={document} />;
}
