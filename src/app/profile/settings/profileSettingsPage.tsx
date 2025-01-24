'use client';

import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { ProfileSettings as ProfileSettingsContainer } from '@modules/Profile';

export const ProfileSettingsPage = () => (
  <>
    <PageTitle>Настройки профиля</PageTitle>
    <ProfileSettingsContainer />
  </>
);
