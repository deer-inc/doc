import { allPosts } from '@/.contentlayer/generated';
import { DocMap } from '@/doc.config';
import Link from 'next/link';
import React from 'react';

export default function SideNav() {
  console.log(allPosts);

  const items = DocMap.map((section) => {
    return (
      <div key={section.title}>
        <h2>{section.title}</h2>
        <ul>
          {section.items.map((slug) => {
            return (
              <li key={slug}>
                <Link href={`/docs/${slug}`}>
                  {allPosts.find((p) => p._id === slug + '.mdx')?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return <>{items}</>;
}
