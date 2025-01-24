'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useProfile } from '@common/hooks/useProfile';

export const useAuthAccess = (needAuth = true) => {
  const router = useRouter();

  const { isAuthorized, isLoading } = useProfile();

  useEffect(() => {
    if (!isLoading && !needAuth && isAuthorized) {
      router.push('/profile');
    }
    if (!isLoading && needAuth && !isAuthorized) {
      router.push('/profile/login');
    }
  }, [isAuthorized, router, isLoading]);
};
