import React from 'react';
import styled from 'styled-components';

import { Loader } from '../Loader';
import { ButtonSkeleton } from '../Skeleton';

const StyledButtonSkeleton = styled(ButtonSkeleton)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductCardActionsSkeleton = () => (
  <StyledButtonSkeleton>
    <Loader size="s" />
  </StyledButtonSkeleton>
);
