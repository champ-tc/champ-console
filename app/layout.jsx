import { Noto_Sans_Thai } from 'next/font/google';
import './globals.css';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata = {
  title: 'champ-console',
  description: 'พื้นที่รวมระบบ Work, Tools และ Learn'
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.className} antialiased`}>{children}</body>
    </html>
  );
}
