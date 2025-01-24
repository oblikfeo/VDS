'use client';

import styled from 'styled-components';

export const PageTitle = styled.h1`
  ${({ theme }) => theme.typography.title1};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.indents.xxl};
`;
