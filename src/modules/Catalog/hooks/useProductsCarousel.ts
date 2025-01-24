import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useBasket } from '../../../common/hooks';
import { getQueryRequest } from '../../../common/utils';
import { API_PRODUCTS_CAROUSEL_URL } from '../constants';
import { CarouselType, ProductsTypeResponse } from '../types';
import { mapProducts } from '../utils';

export const useProductsCarousel = (type: CarouselType, initialData?: ProductsTypeResponse) => {
  const { products } = useBasket();

  const { isLoading, data } = useQuery(
    [API_PRODUCTS_CAROUSEL_URL, type],
    getQueryRequest<ProductsTypeResponse>({ params: { type } }),
    { initialData },
  );

  const list = useMemo(() => mapProducts(data?.list ?? [], products), [data?.list, products]);

  return { isLoading, list };
};
