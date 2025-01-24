import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { AboutPage } from './aboutPage';

export const metadata: Metadata = {
  title: `О нас | ${DEFAULT_METADATA_TITLE}`,
  description: `Информация о компании | ${DEFAULT_METADATA_TITLE}`,
};
export default async function Page() {
  return <AboutPage />;
}
