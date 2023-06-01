import MdxComponent from '@/app/_components/mdx-component';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

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
      <p className="italic text-muted-foreground text-right text-sm">
        {format(new Date(post.date), 'yyyy年MM月dd日更新')}
      </p>
      <h1>{post.title}</h1>
      <MdxComponent code={post.body.code} />
    </div>
  );
}
