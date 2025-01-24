import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { PaymentAndDeliveryPage } from './paymentAndDeliveryPage';

export const metadata: Metadata = {
  title: `Оплата и доставка | ${DEFAULT_METADATA_TITLE}`,
  description: `Информация о способах оплаты и способах доставки | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <PaymentAndDeliveryPage />;
}
