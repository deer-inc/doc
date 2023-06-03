import SideNav from '@/app/_components/sidenav';
import ToggleThemeButton from '@/app/_components/toggle-theme';
import { SiTwitter } from '@icons-pack/react-simple-icons';
import Logo from '@/app/_components/logo';
import MobileNav from '@/app/_components/mobile-nav';

export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="container flex gap-10 md:my-10">
        <aside className="w-[240px] hidden md:block">
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
