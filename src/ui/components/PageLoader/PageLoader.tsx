'use client';

import React from 'react';
import styled from 'styled-components';

import { Loader } from '../Loader';

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.loader};
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  bottom: 0;
  left: -10px;
  right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`;

type Props = {
  isLoading?: boolean;
};

export const PageLoader = ({ isLoading = true }: Props) => {
  if (!isLoading) return null;

  return (
    <Wrapper>
      <Loader size="l" />
    </Wrapper>
  );
};

export const ContentLoader = ({ isLoading = true }: Props) => {
  if (!isLoading) return null;

  return (
    <ContentWrapper>
      <Loader size="l" />
    </ContentWrapper>
  );
};
