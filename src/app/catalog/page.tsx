import { redirect, RedirectType } from 'next/navigation';
import React from 'react';

export default function Page() {
  redirect('/', RedirectType.replace);
}
