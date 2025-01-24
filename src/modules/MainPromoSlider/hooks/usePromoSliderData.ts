import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getQueryRequest } from '../../../common/utils';
import { API_BANNERS_URL } from '../constants';
import { BannersResponseType } from '../types';
import { mapBanners } from '../utils';

export const usePromoSliderData = (initialData: any) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: [API_BANNERS_URL],
    queryFn: getQueryRequest<BannersResponseType>(),
    initialData,
  });

  const bannerList = useMemo(() => (data?.list ? mapBanners(data.list) : []), [data]);

  return { slides: bannerList, isLoading, isError };
};
