import React from 'react';
import styled from 'styled-components';

import { CardSkeleton, TextSkeletonSecondary } from '../../../../ui/components';

const Wrapper = styled.div`
  height: 257px;
`;

const StyledCardSkeleton = styled(CardSkeleton)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.indents.xs};
  border-radius: ${({ theme }) => theme.radius.xs};
`;

const StyledTextSkeletonSecondary = styled(TextSkeletonSecondary)`
  margin-top: ${({ theme }) => theme.indents.xs};
`;

export const CarouselSlideSkeleton = () => (
  <Wrapper>
    <StyledCardSkeleton>
      <StyledTextSkeletonSecondary width="65%" size="body1" />
      <StyledTextSkeletonSecondary width="100%" size="mini2" />
      <StyledTextSkeletonSecondary width="75%" size="mini2" />
      <StyledTextSkeletonSecondary width="85%" size="mini2" />
    </StyledCardSkeleton>
  </Wrapper>
);
