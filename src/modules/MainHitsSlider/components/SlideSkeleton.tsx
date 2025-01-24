'use client';

import React from 'react';
import styled from 'styled-components';

import { CardSkeleton, ImageSkeleton, TextSkeletonSecondary } from '../../../ui/components';

const Wrapper = styled.div`
  height: 332px;
  padding-bottom: ${({ theme }) => theme.indents.xxl};
`;

const StyledCardSkeleton = styled(CardSkeleton)`
  padding: ${({ theme }) => theme.indents.m};
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
  margin-top: ${({ theme }) => theme.indents.xxl};
  margin-bottom: ${({ theme }) => theme.indents.s};
  margin-left: auto;
`;

export const SlideSkeleton = () => (
  <Wrapper>
    <StyledCardSkeleton>
      <StyledImageSkeleton />
      <StyledTextSkeletonSecondary width="65%" />
      <StyledTextSkeletonPrice width="40%" size="main1" />
    </StyledCardSkeleton>
  </Wrapper>
);
