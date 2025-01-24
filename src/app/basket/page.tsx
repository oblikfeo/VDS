import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { BasketPage } from './basketPage';

export const metadata: Metadata = {
  title: `Корзина | ${DEFAULT_METADATA_TITLE}`,
  description: `Корзина | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <BasketPage />;
}
