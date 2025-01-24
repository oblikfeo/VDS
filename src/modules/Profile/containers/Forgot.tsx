'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useProfile } from '../../../common/hooks';
import { ForgotForm } from '../components';

export const Forgot = () => {
  const router = useRouter();

  const { isAuthorized } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      router.push('/profile');
    }
  }, [isAuthorized, router]);

  const goToLogin = () => router.push('');

  if (isAuthorized) return null;

  return <ForgotForm goToLogin={goToLogin} />;
};
