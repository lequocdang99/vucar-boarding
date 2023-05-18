import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vucar | Nền tảng mua bán ô tô cũ ứng dụng AI',
  description:
    'Vucar Vietnam - Kênh mua bán ô tô cũ, giá tốt, sử dụng công nghệ AI tiên tiến. Mang lại trải nghiệm an toàn, minh bạch và đáng tin cậy trong quá trình mua bán xe.',
  keywords:
    'Mua ô tô cũ,Mua xe hơi cũ,Xe hơi cũ,ô tô cũ,Kiểm định xe cũ,xe cũ giá rẻ,ô tô giá rẻ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
