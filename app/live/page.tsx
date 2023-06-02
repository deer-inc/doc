import Logo from '@/app/_components/logo';
import ToggleThemeButton from '@/app/_components/toggle-theme';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="container flex items-center h-16 justify-between">
        <Logo />
        <ToggleThemeButton />
      </header>
      <main className="container">
        <Link href="/docs/installation">demo</Link>
      </main>
    </div>
  );
}
