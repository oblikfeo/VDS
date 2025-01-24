import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useToasts } from './useToasts';
import { CHECK_AUTHORIZE_API } from '../constants';
import { ToastStatusEnum } from '../types';
import { getQueryRequest } from '../utils';

type RegisterOrLoginResponseType = {
  success?: string;
  error?: string;
};

type RegisterOrLoginRequestType = {
  [p: string]: any;
};

const LOGOUT_PROFILE_API = '/profile/login/logout';
const REGISTER_PROFILE_API = '/profile/register';
const LOGIN_PROFILE_API = '/profile/login';

const registerOptions = {
  url: REGISTER_PROFILE_API,
  method: 'POST',
};

const loginOptions = {
  url: LOGIN_PROFILE_API,
  method: 'POST',
};

const logoutOptions = {
  url: LOGOUT_PROFILE_API,
};

export const useProfile = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToasts();

  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: [CHECK_AUTHORIZE_API],
    queryFn: getQueryRequest<RegisterOrLoginResponseType>(),
    refetchInterval: 30 * 1000,
  });

  const {
    mutateAsync: registerAsync,
    isSuccess: isSuccessRegister,
    isError: isErrorRegister,
    error: registerError,
    reset: resetRegister,
  } = useMutation({
    mutationFn: getQueryRequest<RegisterOrLoginResponseType, RegisterOrLoginRequestType>(registerOptions),
  });

  const { mutateAsync: loginAsync } = useMutation({
    mutationFn: getQueryRequest<RegisterOrLoginResponseType, RegisterOrLoginRequestType>(loginOptions),
  });

  const { mutateAsync: logoutAsync } = useMutation({
    mutationFn: getQueryRequest(logoutOptions),
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: [CHECK_AUTHORIZE_API] });

  const logout = () => {
    logoutAsync({})
      .then(() => invalidate())
      .catch(() => addToast({ message: 'Logout Error', status: ToastStatusEnum.ERROR }));
  };

  const register = (data: any) => {
    registerAsync(data)
      .then(() => invalidate())
      .catch(() => addToast({ message: 'Register Error', status: ToastStatusEnum.ERROR }));
  };

  const login = (data: any) => {
    loginAsync(data)
      .then(() => invalidate())
      .catch((data) => addToast({ message: data?.error, status: ToastStatusEnum.ERROR }));
  };

  const isAuthorized = isSuccess && !isError && !!data?.success;

  return {
    isAuthorized,
    isSuccessRegister,
    isErrorRegister,
    registerError,
    resetRegister,
    invalidate,
    logout,
    register,
    login,
    isLoading,
  };
};
