import { CHECK_AUTHORIZE_API } from '../constants';
import { ajax } from '../utils';

export const getCheckAuth = async () => {
  try {
    const { data } = await ajax.request('GET', '', {
      params: { route: CHECK_AUTHORIZE_API },
    });

    return data;
  } catch (e) {
    console.log(e);
    // @ts-ignore
    // eslint-disable-next-line no-throw-literal
    throw e?.response?.data as T;
  }
};
