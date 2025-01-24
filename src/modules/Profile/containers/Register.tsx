'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useProfile } from '../../../common/hooks';
import { Button } from '../../../ui/components';
import { RegisterForm } from '../components';
import { REGISTER_FIELDS } from '../constants';
import { RegisterFormValuesType } from '../types';

export const Register = () => {
  const router = useRouter();

  const { isAuthorized, register, isSuccessRegister, isErrorRegister, registerError, resetRegister } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      router.push('/profile');
    }
  }, [isAuthorized, router]);

  const handleSubmit = (values: RegisterFormValuesType) => {
    const data = {
      firstname: values[REGISTER_FIELDS.FIRST_NAME],
      lastname: values[REGISTER_FIELDS.LAST_NAME],
      email: values[REGISTER_FIELDS.EMAIL],
      telephone: values[REGISTER_FIELDS.PHONE],
      password: values[REGISTER_FIELDS.NEW_PASSWORD],
      confirm: values[REGISTER_FIELDS.NEW_PASSWORD_CONFIRM],
      subscribe: values[REGISTER_FIELDS.SUBSCRIBE_NEWS],
      agree: values[REGISTER_FIELDS.ACCEPT_POLICY],
    };

    register(data);
  };

  if (isAuthorized) return null;

  if (isErrorRegister) {
    return (
      <>
        <div>
          {
            // @ts-ignore
            registerError?.error
          }
        </div>
        <div>
          <Button.Contained onClick={resetRegister}>OK</Button.Contained>
        </div>
      </>
    );
  }

  if (isSuccessRegister)
    return <>Вы успешно зарегистрировали. На указанную почту было направлено письмо для подтверждения регистрации.</>;

  return <RegisterForm onSubmit={handleSubmit} />;
};
