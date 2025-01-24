import React from 'react';
import styled from 'styled-components';

import { ButtonSkeleton, CardSkeleton, ImageSkeleton, TextSkeletonSecondary } from '../../../../ui/components';

const StyledCardSkeleton = styled(CardSkeleton)`
  padding: ${({ theme }) => theme.indents.m};
  height: 372px;
`;

const StyledImageSkeleton = styled(ImageSkeleton)`
  width: 170px;
  height: 170px;
  margin: 0 auto ${({ theme }) => theme.indents.m};
`;

const StyledTextSkeletonSecondary = styled(TextSkeletonSecondary)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const StyledTextSkeletonPrice = styled(TextSkeletonSecondary)`
  margin-top: ${({ theme }) => theme.indents.xl};
  margin-bottom: ${({ theme }) => theme.indents.s};
  margin-left: auto;
`;

export const ProductCardSkeleton = () => (
  <StyledCardSkeleton>
    <StyledImageSkeleton />
    <StyledTextSkeletonSecondary />
    <StyledTextSkeletonSecondary width="65%" />
    <StyledTextSkeletonPrice width="40%" size="main1" />
    <ButtonSkeleton />
  </StyledCardSkeleton>
);
