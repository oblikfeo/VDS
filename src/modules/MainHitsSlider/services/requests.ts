import { ajax, SERVER_URL } from '@common/utils';
import { API_PRODUCTS_HITS_URL } from '@modules/Catalog/constants';
import { ProductsTypeResponse } from '@modules/Catalog/types';

export const getMainHitsSliderDataRequest = async () => {
  try {
    const { data } = await ajax.request<ProductsTypeResponse>('GET', SERVER_URL, {
      params: { route: API_PRODUCTS_HITS_URL },
    });

    return data;
  } catch (e) {
    return undefined;
  }
};
