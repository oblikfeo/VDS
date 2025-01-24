'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { useAuthAccess } from '@common/hooks/useAuthAccess';

import { useProfile } from '../../../common/hooks';
import { Tabs } from '../../../ui/components';
import { LoginEmailForm, LoginPhoneForm } from '../components';

type LoginDataType = { telephone?: string; email?: string; password: string };
export const Login = () => {
  const router = useRouter();

  const { isAuthorized, login } = useProfile();

  useAuthAccess();

  const handleSubmit = (values: LoginDataType) => {
    login(values);
  };

  const goToForgotPassword = () => router.push('login/forgot');

  if (isAuthorized) return null;

  const tabs = [
    {
      label: 'По номеру телефона',
      content: <LoginPhoneForm onSubmit={handleSubmit} forgotPassword={goToForgotPassword} />,
    },
    {
      label: 'По e-mail',
      content: <LoginEmailForm onSubmit={handleSubmit} forgotPassword={goToForgotPassword} />,
    },
  ];

  return <Tabs tabs={tabs} />;
};
