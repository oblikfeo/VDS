import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { OurTeamPage } from './ourTeamPage';

export const metadata: Metadata = {
  title: `Наша команда | ${DEFAULT_METADATA_TITLE}`,
  description: `Наша команда | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <OurTeamPage />;
}
