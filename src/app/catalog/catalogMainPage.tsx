'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import { CatalogMain as CatalogMainComponent } from '@modules/Catalog';

export const CatalogMainPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');
  const tag = searchParams.get('tag');

  return <CatalogMainComponent search={search || ''} tag={tag || ''} />;
};
