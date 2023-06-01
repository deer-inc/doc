import CodeRender from '@/app/_components/code-render';
import { Tab } from '@headlessui/react';

export default async function CodeGroup({
  items,
}: {
  items: {
    filePath: string;
    code?: string;
  }[];
}) {
  return (
    <Tab.Group>
      <Tab.List>
        {items.map((item) => (
          <Tab key={item.filePath}>{item.filePath}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {items.map((item) => (
          <Tab.Panel key={item.filePath}>ss</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
