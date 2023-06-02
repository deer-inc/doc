import LinkPreview from '@/app/_components/link-preview';

export default function LinkPreviewDemo() {
  return (
    // @ts-expect-error Server Component
    <LinkPreview url="https://nextjs.org" />
  );
}
