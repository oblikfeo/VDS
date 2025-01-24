'use client';

import React from 'react';

import { useAuthAccess } from '@common/hooks';
import { PageTitle } from '@layouts/Lampastar';
import { ProfileOrders as ProfileOrdersContainer } from '@modules/Profile';

export const ProfileOrdersPage = () => {
  useAuthAccess();
  return (
    <>
      <PageTitle>Мои заказы</PageTitle>
      <ProfileOrdersContainer />
    </>
  );
};
