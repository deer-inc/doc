import type { MDXComponents } from 'mdx/types';
import CodeGroup from './app/(docs)/_components/code-group';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 className="text-red-500">{children}</h1>,
    CodeGroup: ({ items }) => <CodeGroup items={items} />,
    ...components,
  };
}
