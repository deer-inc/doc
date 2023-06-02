import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-4 font-bold text-2xl"
    >
      <img src="/logo.svg" className="dark:invert h-10" alt="" />
      Doc
    </Link>
  );
}
