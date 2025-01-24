'use client';

import styled from 'styled-components';

import { getSidebarMargin, MIN_SIDEBAR_WIDTH } from '@layouts/Lampastar';
import { adaptive } from '@ui/components';

export const ProfileWrapper = styled.div`
  display: flex;

  ${adaptive.maxWidth.tablet} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ProfileContentContainer = styled.div`
  flex-grow: 1;
`;

export const ProfileSidebarContainer = styled.div`
  margin-left: ${getSidebarMargin};
  min-width: ${MIN_SIDEBAR_WIDTH};
  width: ${MIN_SIDEBAR_WIDTH};

  ${adaptive.maxWidth.tablet} {
    margin-top: ${({ theme }) => theme.indents.m};
    margin-left: unset;
    width: 100%;
  }
`;
