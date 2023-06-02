import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ogs from 'open-graph-scraper';

export default async function LinkTitle({ url }: { url: string }) {
  let title = url;

  try {
    const { result } = await ogs({
      url,
    });

    title = result.ogTitle || title;
  } catch (_) {}

  return (
    <a href={url} target="_blank">
      {title} <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-2 inline" />
    </a>
  );
}
