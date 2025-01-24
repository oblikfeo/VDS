import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';

import { ApplicationSettingsPage } from './applicationSettingsPage';

export const metadata: Metadata = {
  title: `Настройки | ${DEFAULT_METADATA_TITLE}`,
  description: `Настройки | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  return <ApplicationSettingsPage />;
}
