import { useSearchParams } from 'next/navigation';
import React from 'react';

import { useVerification } from '../hooks';

export const Verification = () => {
  const search = useSearchParams();

  const code = search.get('code');

  const { isSuccess, isError, isLoading } = useVerification(code);

  if (isLoading) return <>LOADING...</>;

  if (isError) return <>Код верификации уже использован или не существует</>;

  if (isSuccess) return <>Регистрация успешно подтверждена, можете авторизоваться используя свои логин и пароль</>;

  return <>Страница подтверждения учетной записи</>;
};
