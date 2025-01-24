'use client';

import React from 'react';

import { useAuthAccess } from '@common/hooks/useAuthAccess';
import { PageTitle } from '@layouts/Lampastar';
import { ProfileDashboard as ProfileDashboardContainer } from '@modules/Profile';

export const ProfileHomePage = () => {
  useAuthAccess();

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <ProfileDashboardContainer />
    </>
  );
};
