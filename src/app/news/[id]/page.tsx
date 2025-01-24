import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { NewsItem } from '@modules/News/containers/NewsItem';
import { getNewsItemDataRequest } from '@modules/News/services/requests';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const newsItemInitialData = await getNewsItemDataRequest(params.id);

  const news = newsItemInitialData?.list?.[0];

  return {
    title: `${news?.title} | ${DEFAULT_METADATA_TITLE}` || '',
    description: news?.text || '',
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const newsItemInitialData = await getNewsItemDataRequest(params.id);

  return <NewsItem newsItemInitialData={newsItemInitialData} />;
}
