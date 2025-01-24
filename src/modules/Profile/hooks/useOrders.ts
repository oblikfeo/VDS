import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { API_GET_PROFILE_ORDERS_URL } from '../constants';
import { OrdersResponseType } from '../types';

export const useOrders = () => {
  const { data, isLoading } = useQuery([API_GET_PROFILE_ORDERS_URL], getQueryRequest<OrdersResponseType>());

  return { orders: data?.list || [], isLoading };
};
