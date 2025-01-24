import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { API_PRODUCT_URL } from '../constants';
import { ProductType } from '../types';

export const useProduct = (id: number, initialData: ProductType) => {
  const options = {
    params: {
      productId: id,
    },
  };
  const { data, isLoading, isError } = useQuery([API_PRODUCT_URL, `${id}`], getQueryRequest<ProductType>(options), {
    initialData,
  });

  return { isLoading, product: data, isError };
};
