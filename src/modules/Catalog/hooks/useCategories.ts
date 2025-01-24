import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getQueryRequest } from '../../../common/utils';
import { API_CATEGORIES_URL } from '../constants';
import { CategoryType } from '../types';
import { getCategoriesRecursive } from '../utils';

type Props = {
  categoryId?: number;
  parentId?: number;
};

export const useCategories = (props?: Props) => {
  const { categoryId, parentId = 0 } = props || {};

  const { isLoading, data } = useQuery(
    [API_CATEGORIES_URL, `${parentId}`],
    getQueryRequest<CategoryType[] | undefined>(),
    {
      retry: false,
      refetchOnWindowFocus: false,
      retryOnMount: false,
    },
  );

  const category = useMemo(() => (categoryId && data?.find(({ id }) => id === categoryId)) || null, [data, categoryId]);

  const categoriesMap = useMemo(() => getCategoriesRecursive(data ?? [], parentId), [data, parentId]);

  const currentList = useMemo(
    () => getCategoriesRecursive(data ?? [], category?.parentId ?? 0),
    [data, category?.parentId],
  );

  const notFound = !!categoryId && !category;

  return { isLoading, list: data, map: categoriesMap, category, currentList, notFound };
};
