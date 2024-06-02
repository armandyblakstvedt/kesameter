import type { Metadata } from 'next';
import { Scope_One } from 'next/font/google';
import './globals.css';

const inter = Scope_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kesameter',
  description: 'Følg med hvor mange kesamer som blir konsumert',
};

export const revalidate = 10800; // revalidate at most every third hour

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='no'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
