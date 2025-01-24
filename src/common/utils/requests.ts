import { QueryKey } from '@tanstack/query-core/src';
import { AxiosRequestConfig } from 'axios';

import { ajax } from './ajax';

export const getQueryRequest =
  <T, U = unknown>(options?: AxiosRequestConfig) =>
  async (queryData?: { queryKey?: QueryKey } & U): Promise<T> => {
    const { queryKey, ...requestData } = queryData || {};
    const { url, params, ...rest } = options || {};
    try {
      const { data } = await ajax.request<T, U>('GET', '', {
        params: { route: url || queryKey?.[0], ...params },
        data: requestData,
        ...rest,
      });

      return data;
    } catch (e) {
      console.log(e);
      // @ts-ignore
      // eslint-disable-next-line no-throw-literal
      throw e?.response?.data as T;
    }
  };
