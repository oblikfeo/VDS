import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ProfileSettingsPage } from './profileSettingsPage';

export const metadata: Metadata = {
  title: `Контакты | ${DEFAULT_METADATA_TITLE}`,
  description: `Контакты компании, телефон, почта, адрес | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ProfileSettingsPage />;
}
