import MdxComponent from '@/app/_components/mdx-component';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="prose prose-pre:bg-transparent max-w-full dark:prose-invert prose-pre:border !prose-pre:bg-transparent">
      <MdxComponent code={post.body.code} />
    </div>
  );
}
