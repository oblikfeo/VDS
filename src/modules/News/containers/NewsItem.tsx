'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { NewsResponseType } from '@modules/News/types';

import { NewsDetail } from '../components/NewsDetail';
import { useNewsItem } from '../hooks';

type Props = {
  newsItemInitialData: NewsResponseType;
};

export const NewsItem = ({ newsItemInitialData }: Props) => {
  const { id } = useParams();

  const { data, isLoading: isLoadingItem } = useNewsItem({ id: id as string, initialData: newsItemInitialData });

  if (isLoadingItem || !data) return null;

  return <NewsDetail item={data} />;
};
