'use client';

import { allPosts } from '@/.contentlayer/generated';
import { DocMap } from '@/doc.config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SideNav() {
  const pathname = usePathname();

  const items = DocMap.map((section) => {
    return (
      <div key={section.title}>
        <h2 className="text-sm font-semibold mb-2">{section.title}</h2>
        <ul>
          {section.items.map((slug) => {
            return (
              <li key={slug}>
                <Link
                  href={`/docs/${slug}`}
                  className={cn(
                    'border-l px-4 py-1 block text-sm',
                    slug !== pathname.replace('/docs/', '') &&
                      'text-muted-foreground hover:text-white'
                  )}
                >
                  {allPosts.find((p) => p._id === slug + '.mdx')?.title}
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
