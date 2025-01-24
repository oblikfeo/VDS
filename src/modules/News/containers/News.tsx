'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { NewsResponseType } from '@modules/News/types';

import { PageTitle } from '../../../layouts/Lampastar';
import { NewsList, PaginationPanel } from '../components';
import { useNews } from '../hooks';

type Props = {
  newsInitialData: NewsResponseType;
};

export const News = ({ newsInitialData }: Props) => {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const { list, isLoading: isLoadingList, totalPage } = useNews({ page, enabled: true, initialData: newsInitialData });

  if (isLoadingList) return null;

  const handleClick = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <>
      <PageTitle>Новости</PageTitle>
      <NewsList list={list} onClick={handleClick} />
      <PaginationPanel total={totalPage} page={page} setPage={setPage} />
    </>
  );
};
