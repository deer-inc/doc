'use client';

import React from 'react';
import { Tab } from '@headlessui/react';

export default function CodeTabBlock({
  items,
}: {
  items: {
    filePath?: string;
    lang?: string;
    code: string;
  }[];
}) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="not-prose rounded-t-md border">
          {items.map((item) => (
            <Tab className="px-4 py-3 text-sm" key={item.filePath}>
              {item.filePath?.replace('app/_previews/', '')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {items.map((item) => (
            <Tab.Panel key={item.filePath}>
              <div
                className="prose-pre:mt-0 prose-pre:border-t-0 prose-pre:rounded-t-none"
                dangerouslySetInnerHTML={{ __html: item.code }}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
