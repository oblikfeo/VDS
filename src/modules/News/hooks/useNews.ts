import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { NEWS_URL } from '../constants';
import { NewsResponseType } from '../types';

type Props = {
  page?: number;
  count?: number;
  enabled?: boolean;
  initialData: NewsResponseType;
};

export const useNews = ({ page = 1, count = 10, enabled = true, initialData }: Props) => {
  const options = {
    params: { start: count * (page - 1), limit: count, type: 'p' },
  };

  const { data, isLoading } = useQuery([NEWS_URL, `${page}${count}`], getQueryRequest<NewsResponseType>(options), {
    enabled,
    initialData,
  });

  const totalPage = Math.ceil((data?.total || 0) / (count || 18));

  return { list: data?.list || [], totalPage, isLoading };
};
