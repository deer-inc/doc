import Link from 'next/link';

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="inline-flex items-center gap-4 font-bold text-xl md:text-2xl"
    >
      <img src="/logo.svg" className="dark:invert h-9 md:h-10" alt="" />
      Doc
    </Link>
  );
}
