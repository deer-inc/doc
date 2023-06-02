import LinkPreview from '@/app/_components/link-preview';
import React from 'react';

export default function LinkPreviewDemo() {
  return (
    // @ts-expect-error Server Component
    <LinkPreview url="https://nextjs.org" />
  );
}
