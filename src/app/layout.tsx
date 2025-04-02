import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Gimiy Bridals',
  description: 'Sri Lankan famous bridal dress maker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
      </head>
      <body className={`${kanit.className} antialiased w-full`}>
        {children}
        <div className='flex items-center justify-center p-3 font-light'>
          All Rights Reserved. Created by{' '}
          <Link href={'https://www.ayodyabanukafernando.com'}>AB</Link>
        </div>
      </body>
    </html>
  );
}
