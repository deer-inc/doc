'use client';

import { Button } from '@/app/_components/button';
import React from 'react';

export default function SendEmailDemo() {
  const sendEmail = () => {
    fetch('/api/send', {
      method: 'GET',
    }).then(() => {
      alert('send mail');
    });
  };

  return (
    <div>
      <Button onClick={sendEmail}>メール送信</Button>
    </div>
  );
}
