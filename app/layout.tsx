import { Metadata } from 'next';
import './globals.css';
import ThemeProvider from './_components/theme-provider';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Deer Doc',
    template: '%s | Deer Doc',
  },
  description: '',
  openGraph: {
    title: 'Deer Doc',
    description: '',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="mask-icon" href="/icon.svg" color="#000000" />
      </head>
      <body>
        <ThemeProvider>
          <div className="container max-w-4xl flex gap-20">
            <aside className="w-[240px]">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/docs/installation">Installation</Link>
                </li>
              </ul>
            </aside>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
