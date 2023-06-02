import { Metadata } from 'next';
import './globals.css';
import ThemeProvider from './_components/theme-provider';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import SideNav from '@/app/_components/sidenav';
import ToggleThemeButton from '@/app/_components/toggle-theme';

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
          <div className="container max-w-4xl flex gap-10 my-10">
            <aside className="w-[240px]">
              <div className="flex items-center justify-between mb-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-4 font-bold text-3xl"
                >
                  <img src="/logo.svg" className="dark:invert h-12" alt="" />
                  Doc
                </Link>
                <ToggleThemeButton />
              </div>
              <SideNav />
            </aside>
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
