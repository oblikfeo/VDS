import { notFound } from 'next/navigation';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { ORDER_TYPE, SORT_TYPE } from '@modules/Catalog/constants';
import { getCategoriesDataRequest, getCategoryProductDataRequest } from '@modules/Catalog/services/requests';
import { FiltersValuesType, OrderType, SortType } from '@modules/Catalog/types';

import { CatalogCategoryPage } from './catalogCategoryPage';

export async function generateMetadata({ params }: { params: { categoryId: string; page: string } }) {
  const { categoryId } = params;
  const categories = await getCategoriesDataRequest();

  const category = categories?.find?.(({ id }) => id === Number(categoryId));

  if (!category)
    return {
      title: `Категория не найдена | ${DEFAULT_METADATA_TITLE}` || '',
      description: 'Категория не найдена',
    };

  return {
    title: `${category?.name} | ${DEFAULT_METADATA_TITLE}` || '',
    description: category?.description || '',
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { categoryId: string; page: string };
  searchParams: { [key: string]: string };
}) {
  const { categoryId, page = 1 } = params;

  const count = 18;

  const filtersSearchParams = Object.keys(searchParams)
    .filter((paramName) => paramName.includes('filter_'))
    .reduce((acc, currentKey) => ({ ...acc, [currentKey]: searchParams[currentKey] }), {});

  const sortSearchParams = (searchParams.sort as SortType) ?? SORT_TYPE.price;
  const orderSearchParams = (searchParams.order as OrderType) ?? ORDER_TYPE.ASC;

  const props = {
    category_id: Number(categoryId),
    start: count * (Number(page) - 1),
    limit: count,
    sort: sortSearchParams,
    order: orderSearchParams,
    ...filtersSearchParams,
  };

  const categories = await getCategoriesDataRequest();

  const category = categories?.find?.(({ id }) => id === Number(categoryId));

  if (!category) return notFound();

  const filtersValues: FiltersValuesType = {};

  for (const key in filtersSearchParams) {
    const [, filterId, filterBetween] = key.split('_');

    if (filterBetween) {
      filtersValues[filterId] = { values: searchParams[key].split(','), between: true };
    }

    if (searchParams[key]) {
      filtersValues[filterId] = { values: searchParams[key].split(',') };
    }
  }

  const initialData = await getCategoryProductDataRequest(props);

  return (
    <CatalogCategoryPage
      initialData={initialData}
      filtersValues={filtersValues}
      sort={sortSearchParams}
      order={orderSearchParams}
    />
  );
}
