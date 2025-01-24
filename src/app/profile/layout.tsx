import React, { ReactNode } from 'react';

import { ProfileNavigation } from '@modules/Profile';

import { ProfileContentContainer, ProfileSidebarContainer, ProfileWrapper } from './styled';

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <ProfileWrapper>
      <ProfileContentContainer>{children}</ProfileContentContainer>
      <ProfileSidebarContainer>
        <ProfileNavigation />
      </ProfileSidebarContainer>
    </ProfileWrapper>
  );
}
