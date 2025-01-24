import { useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { API_VERIFICATION_REGISTRATION_URL } from '../constants';

type VerificationResponseType = {
  success?: string;
  error?: string;
};

type VerificationRequestType = {
  code?: string;
};

export const useVerification = (code: string | null) => {
  const { isLoading, isSuccess, isError } = useQuery(
    [API_VERIFICATION_REGISTRATION_URL, code || ''],
    getQueryRequest<VerificationResponseType, VerificationRequestType>({ params: { code } }),
    { enabled: !!code, retry: false, refetchOnMount: false },
  );

  return { isLoading, isSuccess, isError };
};
