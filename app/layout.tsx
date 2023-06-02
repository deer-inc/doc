import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import ThemeProvider from './_components/theme-provider';
import './globals.css';

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
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
