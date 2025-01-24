import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileHomePage } from './profileHomePage';

export const metadata: Metadata = {
  title: `Профиль пользователя | ${DEFAULT_METADATA_TITLE}`,
  description: `Профиль пользователя | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileHomePage />;
}
