import { useMemo } from 'react';

import { useBasket } from '../../../common/hooks';
import { ProductsTypeResponse } from '../types';
import { mapProducts } from '../utils';

type Props = {
  category?: number;
  count?: number;
  initialData?: ProductsTypeResponse;
};

export const useProducts = ({ category, count = 18, initialData }: Props) => {
  const { products } = useBasket();

  const totalPage = Math.ceil((initialData?.total || 0) / (count || 18));

  const list = useMemo(() => mapProducts(initialData?.list ?? [], products), [initialData?.list, products]);

  return { list, category, totalPage, breadcrumbs: initialData?.breadcrumbs || [] };
};
