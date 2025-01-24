import { FiltersValuesType, OrderType, SortType } from '../types';

export const generateQueryParamsString = ({
  filters,
  sort,
  order,
  search,
  tag,
}: {
  filters?: FiltersValuesType;
  sort?: SortType;
  order?: OrderType;
  search?: string;
  tag?: string;
}) => {
  const params = new URLSearchParams();

  if (filters) {
    const keys = Object.keys(filters);

    for (let i = 0; i < keys.length; i++) {
      params.set(`filter_${keys[i]}${filters[keys[i]].between ? '_b' : ''}`, filters[keys[i]].values.join(','));
    }
  }

  if (sort) params.set('sort', sort);
  if (order) params.set('order', order);
  if (tag) params.set('tag', tag);
  if (search) params.set('search', search);

  return params.toString();
};
