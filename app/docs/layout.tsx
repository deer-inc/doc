import SideNav from '@/app/_components/sidenav';
import ToggleThemeButton from '@/app/_components/toggle-theme';
import { SiTwitter } from '@icons-pack/react-simple-icons';
import Logo from '@/app/_components/logo';

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container max-w-4xl flex gap-10 my-10">
        <aside className="w-[240px]">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <ToggleThemeButton />
          </div>
          <SideNav />
        </aside>
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
      <footer className="border-t container py-6 text-muted-foreground text-center text-sm mt-20">
        <p>
          <a
            href="http://twitter.com/d151005"
            target="_blank"
            className="hover:text-foreground transition"
          >
            <SiTwitter size={20} className="inline" />
          </a>
        </p>
      </footer>
    </>
  );
}
