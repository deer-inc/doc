'use client';

import { Button } from '@/app/_components/button';
import Logo from '@/app/_components/logo';
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/sheet';
import SideNav from '@/app/_components/sidenav';
import ToggleThemeButton from '@/app/_components/toggle-theme';
import { SidebarOpen } from 'lucide-react';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="px-6 py-4 flex items-center gap-4">
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <SidebarOpen className="h-6 w-6" />
            <span className="sr-only">メニュー開閉</span>
          </Button>
        </SheetTrigger>
        <Logo />
      </div>
      <SheetContent position="left" size="full">
        <div className="flex mb-6 items-center gap-6">
          <Logo onClick={() => setOpen(false)} />
          <ToggleThemeButton />
        </div>
        <SideNav onClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}
