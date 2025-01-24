import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileVerificationPage } from './profileVerificationPage';

export const metadata: Metadata = {
  title: `Подтверждение регистрация | ${DEFAULT_METADATA_TITLE}`,
  description: `Подтверждение регистрация | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileVerificationPage />;
}
