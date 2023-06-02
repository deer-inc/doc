import MdxComponent from '@/app/_components/mdx-component';
import { allDocs } from 'contentlayer/generated';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="prose prose-img:rounded-md prose-sm prose-code:text-sm prose-pre:bg-transparent max-w-full dark:prose-invert prose-pre:border !prose-pre:bg-transparent">
      <p className="italic text-muted-foreground text-right text-sm">
        {format(new Date(doc.date), 'yyyy年MM月dd日更新')}
      </p>
      <h1>{doc.title}</h1>
      <MdxComponent code={doc.body.code} />
    </div>
  );
}
