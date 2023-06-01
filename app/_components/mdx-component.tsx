import CodeGroup from '@/app/_components/code-group';
import Preview from '@/app/_components/preview';
import { previews } from '@/app/_previews';
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
  div: (props) => {
    if ('data-rehype-pretty-code-title' in props) {
      return (
        <div
          {...props}
          className="text-sm border border-t rounded-t-md px-4 py-3"
        />
      );
    } else {
      return <div {...props} />;
    }
  },
  pre: (props) => (
    <pre
      {...props}
      className="[[data-rehype-pretty-code-title]+&]:mt-0 [[data-rehype-pretty-code-title]+&]:border-t-0 [[data-rehype-pretty-code-title]+&]:rounded-t-none"
    />
  ),
  // @ts-expect-error Server Component
  CodeGroup: ({ items }) => <CodeGroup items={items} />,
  Preview: (props) => <Preview {...props} />,
  ...previews,
};

export default function MdxComponent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
