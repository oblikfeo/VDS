import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { NEWS_CAROUSEL_URL } from '../constants';
import { NewsResponseType } from '../types';

export const useNewsCarousel = (initialData?: NewsResponseType) => {
  const options = {
    params: { type: 'p' },
  };

  const { data, isLoading } = useQuery([NEWS_CAROUSEL_URL], getQueryRequest<NewsResponseType>(options), {
    initialData,
  });

  return { list: data?.list || [], isLoading };
};
