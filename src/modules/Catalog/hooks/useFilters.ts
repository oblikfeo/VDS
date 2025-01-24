import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { API_FILTERS_URL } from '../constants';
import { FiltersResponseType } from '../types';

export const useFilters = (categoryId: number) => {
  const filtersOptions = { method: 'GET', url: API_FILTERS_URL, params: { id: categoryId } };

  const { data } = useQuery([API_FILTERS_URL, `${categoryId}`], getQueryRequest<FiltersResponseType>(filtersOptions));

  return { list: data?.list || [], priceLimits: data?.priceLimits };
};
