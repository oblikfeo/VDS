import { ajax, SERVER_URL } from '@common/utils';

import { API_BANNERS_URL } from '../constants';
import { BannersResponseType } from '../types';

export const getPromoSliderDataRequest = async () => {
  try {
    const { data } = await ajax.request<BannersResponseType>('GET', SERVER_URL, {
      params: { route: API_BANNERS_URL },
    });

    return data;
  } catch (e) {
    return undefined;
  }
};
