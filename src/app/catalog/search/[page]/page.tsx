import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { ORDER_TYPE, SORT_TYPE } from '@modules/Catalog/constants';
import { getCategoryProductDataRequest } from '@modules/Catalog/services/requests';
import { OrderType, SortType } from '@modules/Catalog/types';

import { CatalogSearchPage } from './catalogSearchPage';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { [key: string]: string };
}) {
  const { page } = params;

  return {
    title: `Поиск - ${searchParams.search} - страница ${page} | ${DEFAULT_METADATA_TITLE}`,
    description: `Поиск - ${searchParams.search} - страница ${page} | ${DEFAULT_METADATA_TITLE}`,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { categoryId: string; page: string };
  searchParams: { [key: string]: string };
}) {
  const { page } = params;

  const count = 18;

  const sortSearchParams = (searchParams.sort as SortType) ?? SORT_TYPE.price;
  const orderSearchParams = (searchParams.order as OrderType) ?? ORDER_TYPE.ASC;

  const props = {
    start: count * (Number(page) - 1),
    limit: count,
    sort: sortSearchParams,
    order: orderSearchParams,
    search: searchParams.search,
    tag: searchParams.tag,
  };

  const initialData = await getCategoryProductDataRequest(props);

  return (
    <CatalogSearchPage
      initialData={initialData}
      sort={sortSearchParams}
      order={orderSearchParams}
      search={searchParams.search}
    />
  );
}
