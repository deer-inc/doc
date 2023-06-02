'use client';

import React from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';
import CodeCopy from '@/app/_components/code-copy';

export default function CodeTabBlock({
  items,
}: {
  items: {
    filePath?: string;
    lang?: string;
    title?: string;
    baseCode: string;
    code: {
      light: string;
      dark: string;
    };
  }[];
}) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="not-prose rounded-t-md border">
          {items.map((item) => (
            <Tab
              className={({ selected }) =>
                cn(
                  'px-3 py-2 text-sm focus:outline-none',
                  !selected && 'text-muted-foreground'
                )
              }
              key={item.filePath}
            >
              {item.title ||
                item.filePath
                  ?.replace('app/_previews/', '')
                  .replace('app/_components/', '')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {items.map((item) => (
            <Tab.Panel key={item.filePath} className="relative">
              <div className="prose-pre:mt-0 prose-pre:border-t-0 relative prose-pre:rounded-t-none">
                <div
                  className="hidden dark:block"
                  dangerouslySetInnerHTML={{ __html: item.code.dark }}
                />
                <div
                  className="dark:hidden"
                  dangerouslySetInnerHTML={{ __html: item.code.light }}
                />
              </div>

              <CodeCopy text={item.baseCode} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
