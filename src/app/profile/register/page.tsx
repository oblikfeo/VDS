import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileRegisterPage } from './profileRegisterPage';

export const metadata: Metadata = {
  title: `Регистрация | ${DEFAULT_METADATA_TITLE}`,
  description: `Регистрация | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileRegisterPage />;
}
