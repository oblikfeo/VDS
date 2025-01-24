'use client';

import React from 'react';
import styled from 'styled-components';

import { ButtonSkeleton, CardSkeleton } from '../../../ui/components';

const Wrapper = styled.div`
  height: 332px;
  padding-bottom: ${({ theme }) => theme.indents.xxl};
`;
const StyledCardSkeleton = styled(CardSkeleton)`
  position: relative;
`;

const StyledButtonSkeleton = styled(ButtonSkeleton)`
  width: 100px;
  position: absolute;
  left: ${({ theme }) => theme.indents.m};
  bottom: ${({ theme }) => theme.indents.m};
  z-index: 3;
`;

export const SlideSkeleton = () => (
  <Wrapper>
    <StyledCardSkeleton>
      <StyledButtonSkeleton />
    </StyledCardSkeleton>
  </Wrapper>
);
