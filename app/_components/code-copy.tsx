'use client';

import { cn } from '@/lib/utils';
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodeCopy({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const iconClass =
    'w-4 h-4 absolute top-1/2 left-1/2 -translate-y-1/2 duration-700 -translate-x-1/2 opacity-100 transition scale-100 block text-muted-foreground';

  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        if (copied) return;

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
    >
      <button className="rounded bg-muted top-[7px] absolute right-2 w-6 h-6 border">
        <span className={cn(iconClass, copied && 'scale-0 opacity-0')}>
          <ClipboardIcon className="block w-full h-full scale-100" />
        </span>
        <span className={cn(iconClass, !copied && 'scale-0 opacity-0')}>
          <CheckIcon className="block w-full h-full scale-100" />
        </span>
      </button>
    </CopyToClipboard>
  );
}
