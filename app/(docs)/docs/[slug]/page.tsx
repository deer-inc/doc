import LinkTitle from '@/app/_components/link-title';
import MdxComponent from '@/app/_components/mdx-component';
import { siteConfig } from '@/config/site.config';
import { allDocs } from 'contentlayer/generated';
import { format } from 'date-fns';
import { NextTweet } from 'next-tweet';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allDocs.map((doc) => ({
    slug: doc._raw.flattenedPath,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug);

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description || siteConfig.description,
    openGraph: {
      title: doc.title,
      description: doc.description || siteConfig.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      creator: siteConfig.creator,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);

  if (!doc) {
    notFound();
  }

  console.log(doc.tweets);

  return (
    <div className="flex flex-col md:flex-row gap-14">
      <div className="flex-1 overflow-hidden">
        <div className="prose md:prose-h2:mt-16 prose-img:rounded-md prose-sm prose-code:text-sm prose-pre:bg-transparent max-w-full dark:prose-invert prose-pre:border !prose-pre:bg-transparent prose-code:before:hidden prose-code:after:hidden">
          <div className="italic text-muted-foreground justify-end not-prose text-sm flex items-center gap-2">
            <p>{format(new Date(doc.date), 'yyyy年MM月dd日更新')}</p>
            <span>/</span>
            <a
              href={`https://github.com/deer-inc/doc/edit/main/docs/${doc._id}`}
              target="_blank"
            >
              編集
            </a>
          </div>
          <h1 className="mt-3 md:mt-0">{doc.title}</h1>
          <MdxComponent code={doc.body.code} />

          {Boolean(doc.links?.length) && (
            <div>
              <h2>参考リンク</h2>
              <ul>
                {doc.links?.map((link) => (
                  <li key={link}>
                    {/* @ts-expect-error Server Component */}
                    <LinkTitle url={link} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-[320px]">
        {Boolean(doc.tweets?.length) && (
          <>
            <h2 className="text-muted-foreground mb-4">関連ツイート</h2>
            <div className="space-y-6 text-sm">
              {doc.tweets?.map((id) => (
                <NextTweet key={id} id={id} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
