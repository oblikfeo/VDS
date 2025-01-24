import { useQuery } from '@tanstack/react-query';

import { BASKET_DATA_QUERY_KEY } from '../../../common/hooks/useBasket';
import { getQueryRequest } from '../../../common/utils';
import { API_BASKET_URL } from '../constants';
import { BasketListResponse } from '../types';

const getBasketOptions = {
  url: API_BASKET_URL,
};
export const useBasket = () => {
  const { data, isLoading } = useQuery(
    [BASKET_DATA_QUERY_KEY, API_BASKET_URL],
    getQueryRequest<BasketListResponse>(getBasketOptions),
  );
  return { list: data?.products || [], basket: data?.basket, isLoading };
};
