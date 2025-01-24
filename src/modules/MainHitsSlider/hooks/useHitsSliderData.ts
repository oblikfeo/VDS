'use client';

import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { API_PRODUCTS_HITS_URL } from '../../Catalog/constants';
import { ProductsTypeResponse } from '../../Catalog/types';

export const useHitsSliderData = (initialData?: ProductsTypeResponse) => {
  const { isLoading, data } = useQuery(
    [API_PRODUCTS_HITS_URL, 'main-hits-slider'],
    getQueryRequest<ProductsTypeResponse>(),
    { initialData },
  );

  return { isLoading, list: data?.list || [] };
};
