import { useMutation, useQuery } from '@tanstack/react-query';

import { getQueryRequest } from '../../../common/utils';
import { API_CHECK_RESET_CODE_URL, API_GET_RESET_PASSWORD_URL, API_RESET_PASSWORD_URL } from '../constants';
import { ResetFormValuesType } from '../types';

const requestOptions = {
  method: 'POST',
  url: API_GET_RESET_PASSWORD_URL,
};

const resetOptions = {
  method: 'POST',
  url: API_RESET_PASSWORD_URL,
};

export const useForgot = (code: string | null) => {
  const checkOptions = { params: { code } };

  const {
    isLoading: isLoadingCheck,
    isError: isErrorCheck,
    isSuccess: isSuccessCheck,
  } = useQuery([API_CHECK_RESET_CODE_URL], getQueryRequest(checkOptions), {
    enabled: !!code,
  });

  const {
    isLoading: isLoadingRequestCode,
    isSuccess: isSuccessRequestCode,
    mutate: mutateRequestCode,
  } = useMutation(getQueryRequest<unknown[], { email: string }>(requestOptions));

  const {
    isLoading: isLoadingReset,
    isSuccess: isSuccessReset,
    mutate: mutateReset,
  } = useMutation(getQueryRequest<unknown[], ResetFormValuesType>({ ...resetOptions, params: { code } }));

  const handleRequest = (email: string) => {
    mutateRequestCode({ email });
  };

  const handleReset = (values: ResetFormValuesType) => {
    mutateReset(values);
  };
  console.log(isLoadingRequestCode && !!code, isLoadingCheck, isLoadingReset);
  return {
    isLoading: (isLoadingCheck && !!code) || isLoadingRequestCode || isLoadingReset,
    isSuccessRequestCode,
    isSuccessReset,
    isErrorCheck,
    isSuccessCheck,
    handleReset,
    handleRequest,
  };
};
