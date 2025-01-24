import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useProfile } from '../../hooks';

type Props = { children: ReactNode; title: string; isAuthorized?: boolean };

export const RouteComponent = ({ title, children, isAuthorized }: Props) => {
  const { isAuthorized: isAuthorizedUser, isLoading } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (isAuthorized && !isAuthorizedUser && !isLoading) {
      router.push('/profile/login');
    }
  }, [isAuthorized, isAuthorizedUser, isLoading]);

  if (isAuthorized && !isAuthorizedUser) return null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};
