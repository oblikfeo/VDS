'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { CatalogMain as CatalogCategoryComponent } from '@modules/Catalog';
import { OrderType, ProductsTypeResponse, SortType } from '@modules/Catalog/types';

type Props = {
  initialData?: ProductsTypeResponse;
  sort: SortType;
  order: OrderType;
  search: string;
};

export const CatalogSearchPage = ({ initialData, search, sort, order }: Props) => {
  const { page } = useParams<{ categoryId: string; page: string }>();

  return (
    <CatalogCategoryComponent
      key={search}
      page={page ? Number(page) : 1}
      search={search}
      productInitialData={initialData}
      sort={sort}
      order={order}
    />
  );
};
