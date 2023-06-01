'use client';

import CodeGroup from '@/app/_components/code-group';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import React from 'react';

const mdxComponents: MDXComponents = {
  a: ({ href, children }) =>
    href?.startsWith('http') ? (
      <a href={href}>{children}</a>
    ) : (
      <Link href={href as string}>{children}</Link>
    ),
  // @ts-expect-error Server Component
  CodeGroup: ({ items }) => <CodeGroup items={items} />,
};

export default function MdxComponent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
