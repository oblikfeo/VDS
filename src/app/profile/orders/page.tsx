import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileOrdersPage } from './profileOrdersPage';

export const metadata: Metadata = {
  title: `Мои заказы | ${DEFAULT_METADATA_TITLE}`,
  description: `Мои заказы | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileOrdersPage />;
}
