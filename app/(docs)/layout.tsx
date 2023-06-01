import Link from 'next/link';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-20">
      <aside className="w-[240px]">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/demo">Demo</Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
