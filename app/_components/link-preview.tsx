import { unfurl } from 'unfurl.js';

export default async function LinkPreview({ url }: { url: string }) {
  try {
    const result = await unfurl(url);

    const imageURL =
      result.open_graph.images?.[0].url || result.twitter_card?.images?.[0].url;

    return (
      <div className="overflow-hidden not-prose relative rounded-lg border p-4">
        {imageURL && (
          <img src={imageURL} alt="" className="block rounded-md mb-4" />
        )}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">
            <a href={url} target="_blank">
              {result.open_graph.title || result.title}
              <span className="absolute inset-0" />
            </a>
          </h3>
          <p className="text-muted-foreground">
            {result.open_graph.description}
          </p>
          <p className="text-sm text-muted-foreground/60 mt-4">{url}</p>
        </div>
      </div>
    );
  } catch (_) {
    return (
      <a href={url} target="_blank">
        {url}
      </a>
    );
  }
}
