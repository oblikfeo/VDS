import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { News } from '@modules/News';
import { getNewsDataRequest } from '@modules/News/services/requests';

export const metadata: Metadata = {
  title: `Новости | ${DEFAULT_METADATA_TITLE}`,
  description: `Новости | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  const newsInitialData = await getNewsDataRequest();

  return <News newsInitialData={newsInitialData} />;
}
