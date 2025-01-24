import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileLoginPage } from './profileLoginPage';

export const metadata: Metadata = {
  title: `Войти в профиль | ${DEFAULT_METADATA_TITLE}`,
  description: `Войти в профиль | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileLoginPage />;
}
