import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { OrderPage } from './orderPage';

export const metadata: Metadata = {
  title: `Оформление заказа | ${DEFAULT_METADATA_TITLE}`,
  description: `Оформление заказа | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <OrderPage />;
}
