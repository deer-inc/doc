'use client';

import { allDocs } from '@/.contentlayer/generated';
import { docConfig } from '@/config/doc.config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SideNav({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();

  const items = docConfig.map((section) => {
    return (
      <div key={section.title}>
        <h2 className="text-sm font-semibold mb-2">{section.title}</h2>
        <ul>
          {section.items.map((slug) => {
            return (
              <li key={slug}>
                <Link
                  onClick={onClick}
                  href={`/docs/${slug}`}
                  className={cn(
                    'border-l px-4 py-1.5 block text-sm',
                    slug !== pathname.replace('/docs/', '') &&
                      'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {allDocs.find((doc) => doc._id === slug + '.mdx')?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return <div className="space-y-6">{items}</div>;
}
