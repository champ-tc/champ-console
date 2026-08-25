import DocumentPage from '@/app/components/document-page';
import { document } from '@/app/documents/tool-password';

export const metadata = { title: 'Password Generator | champ-console' };

export default function PasswordPage() {
  const initialTwelve = document
    .replace('id=\"lengthValue\">16', 'id=\"lengthValue\">12')
    .replace('max=\"64\" value=\"16\"', 'max=\"64\" value=\"12\"');
  return <DocumentPage title="Password Generator" document={initialTwelve} />;
}
