import Link from 'next/link';

export default function RootPage() {
  return (
    <div>
      <p>
        <Link href="/docs">docs</Link>
      </p>
      <p>
        <Link href="/live">live</Link>
      </p>
    </div>
  );
}
