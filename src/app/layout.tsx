import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';



import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Letterhead',
  description: 'create a new letterhead',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        
        {children}
       
      </body>
    </html>
  );
}
