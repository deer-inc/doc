import { Tweet } from 'react-tweet';

export default function TweetComponent({ id }: { id: string }) {
  return <Tweet id={id} />;
}
