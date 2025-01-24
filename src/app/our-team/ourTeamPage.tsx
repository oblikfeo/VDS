'use client';

import React from 'react';

import { PageTitle } from '@layouts/Lampastar';
import { Staff } from '@modules/Staff';

import { Divider } from './styled';

export const OurTeamPage = () => (
  <>
    <PageTitle>Наша команда</PageTitle>
    <Divider />
    <Staff />
  </>
);
