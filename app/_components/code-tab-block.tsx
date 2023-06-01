'use client';

import React from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';

export default function CodeTabBlock({
  items,
}: {
  items: {
    filePath?: string;
    lang?: string;
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
                  'px-4 py-3 text-sm focus:outline-none',
                  !selected && 'text-muted-foreground'
                )
              }
              key={item.filePath}
            >
              {item.filePath?.replace('app/_previews/', '')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {items.map((item) => (
            <Tab.Panel key={item.filePath}>
              <div className="prose-pre:mt-0 prose-pre:border-t-0 prose-pre:rounded-t-none">
                <div
                  className="hidden dark:block"
                  dangerouslySetInnerHTML={{ __html: item.code.dark }}
                />
                <div
                  className="dark:hidden"
                  dangerouslySetInnerHTML={{ __html: item.code.light }}
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
