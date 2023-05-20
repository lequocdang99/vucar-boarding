import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Head } from './head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vucar | Nền tảng mua bán ô tô cũ ứng dụng AI',
  description:
    'Vucar Vietnam - Kênh mua bán ô tô cũ, giá tốt, sử dụng công nghệ AI tiên tiến. Mang lại trải nghiệm an toàn, minh bạch và đáng tin cậy trong quá trình mua bán xe.',
  keywords:
    'Mua ô tô cũ,Mua xe hơi cũ,Xe hơi cũ,ô tô cũ,Kiểm định xe cũ,xe cũ giá rẻ,ô tô giá rẻ',
  openGraph: {
    url: 'https://vucar.vn',
    title: 'Vucar | Nền tảng mua bán ô tô cũ ứng dụng AI',
    description:
      'Vucar Vietnam - Kênh mua bán ô tô cũ, giá tốt, sử dụng công nghệ AI tiên tiến. Mang lại trải nghiệm an toàn, minh bạch và đáng tin cậy trong quá trình mua bán xe.',
    images: {
      url: 'https://storage.googleapis.com/vucar-user-assets/public-assets/vucar-logo.webp',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
