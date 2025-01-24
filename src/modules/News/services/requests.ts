import { ajax, SERVER_URL } from '@common/utils';

import { NEWS_CAROUSEL_URL, NEWS_DETAIL_URL, NEWS_URL } from '../constants';
import { NewsResponseType } from '../types';

export const getNewsCarouselDataRequest = async () => {
  try {
    const { data } = await ajax.request<NewsResponseType>('GET', SERVER_URL, {
      params: { route: NEWS_CAROUSEL_URL, type: 'p' },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};

export const getNewsDataRequest = async () => {
  try {
    const { data } = await ajax.request<NewsResponseType>('GET', SERVER_URL, {
      params: { route: NEWS_URL, type: 'p', start: 0, limit: 10 },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};

export const getNewsItemDataRequest = async (id: string) => {
  try {
    const { data } = await ajax.request<NewsResponseType>('GET', SERVER_URL, {
      params: { route: NEWS_DETAIL_URL, id },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};
