import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { StaffItemType } from '../types';

const API_STAFF_URL = '/additional/staff';

export const useStaff = () => {
  const { isLoading, isError, data } = useQuery([API_STAFF_URL], getQueryRequest<{ list: StaffItemType[] }>());

  return { isLoading, list: data?.list || [], isError };
};
