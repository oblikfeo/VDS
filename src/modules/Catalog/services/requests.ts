import { ajax, SERVER_URL } from '@common/utils';

import { API_CATEGORIES_URL, API_PRODUCT_URL, API_PRODUCTS_CAROUSEL_URL, API_PRODUCTS_URL } from '../constants';
import { CarouselType, CategoryType, ProductsTypeResponse, ProductType } from '../types';

export const getProductCarouselDataRequest = async (type: CarouselType) => {
  try {
    const { data } = await ajax.request<ProductsTypeResponse>('GET', SERVER_URL, {
      params: { route: API_PRODUCTS_CAROUSEL_URL, type },
    });

    return data;
  } catch (e) {
    return undefined;
  }
};

export const getCategoryProductDataRequest = async (params: {
  category_id?: number;
  start: number;
  limit: number;
  sort: string;
  order: string;
}) => {
  try {
    const { data } = await ajax.request<ProductsTypeResponse>('GET', SERVER_URL, {
      params: { route: API_PRODUCTS_URL, ...params },
    });

    return data;
  } catch (e) {
    return undefined;
  }
};

export const getCategoriesDataRequest = async () => {
  try {
    const { data } = await ajax.request<CategoryType[]>('GET', SERVER_URL, {
      params: { route: API_CATEGORIES_URL },
    });

    return data;
  } catch (e) {
    return undefined;
  }
};

export const getProductDataRequest = async (productId: number) => {
  try {
    const { data } = await ajax.request<ProductType>('GET', SERVER_URL, {
      params: { route: API_PRODUCT_URL, productId },
    });

    return data;
  } catch (e) {
    return undefined;
  }
};
