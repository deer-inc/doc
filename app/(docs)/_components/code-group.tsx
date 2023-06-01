import { Tab } from '@headlessui/react';
import React from 'react';

export default function CodeGroup({
  items,
}: {
  items: {
    fileName: string;
    code?: string;
  }[];
}) {
  return (
    <Tab.Group>
      <Tab.List>
        {items.map((item) => (
          <Tab key={item.fileName}>{item.fileName}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {items.map((item) => (
          <Tab.Panel key={item.fileName}>{item.code}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
