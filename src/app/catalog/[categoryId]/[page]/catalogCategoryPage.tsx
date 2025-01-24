'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { CatalogCategory as CatalogCategoryComponent } from '@modules/Catalog';
import { FiltersValuesType, OrderType, ProductsTypeResponse, SortType } from '@modules/Catalog/types';

type Props = {
  initialData?: ProductsTypeResponse;
  filtersValues: FiltersValuesType;
  sort: SortType;
  order: OrderType;
};

export const CatalogCategoryPage = ({ initialData, filtersValues, sort, order }: Props) => {
  const { categoryId, page } = useParams<{ categoryId: string; page: string }>();

  return (
    <CatalogCategoryComponent
      key={categoryId}
      page={page ? Number(page) : 1}
      categoryId={categoryId ? Number(categoryId) : 0}
      productInitialData={initialData}
      filtersValues={filtersValues}
      sort={sort}
      order={order}
    />
  );
};
