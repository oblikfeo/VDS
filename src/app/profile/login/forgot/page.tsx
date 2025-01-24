import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileForgotPage } from './profileForgotPage';

export const metadata: Metadata = {
  title: `Востанавление пароля | ${DEFAULT_METADATA_TITLE}`,
  description: `Востанавление пароля | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileForgotPage />;
}
