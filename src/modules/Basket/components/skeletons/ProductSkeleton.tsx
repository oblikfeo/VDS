import React from 'react';
import styled from 'styled-components';

import { CardSkeleton, ImageSkeleton } from '../../../../ui/components';

const StyledCardSkeleton = styled(CardSkeleton)`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const StyledImageSkeleton = styled(ImageSkeleton)`
  width: 96px;
  height: 96px;
`;
export const ProductSkeleton = () => (
  <StyledCardSkeleton>
    <StyledImageSkeleton />
  </StyledCardSkeleton>
);
