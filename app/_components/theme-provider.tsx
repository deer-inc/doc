'use client';

import React from 'react';
import { ThemeProvider as Provider } from 'next-themes';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider attribute="class">{children}</Provider>;
}
