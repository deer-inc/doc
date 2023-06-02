import { NextTweet } from 'next-tweet';

export default function Tweet({ id }: { id: string }) {
  return <NextTweet id={id} />;
}
