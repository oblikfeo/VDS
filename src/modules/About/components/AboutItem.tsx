'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Typography } from '../../../ui/components';

type Props = {
  icon: ReactNode;
  text: ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.color.buttons.primary};
  border-radius: ${({ theme }) => theme.radius.xs};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.xs};
  color: ${({ theme }) => theme.color.text.secondary};
`;

const StyledText = styled(Typography).attrs({ color: 'secondary', variant: 'body4' })`
  margin-left: ${({ theme }) => theme.indents.xs};
`;

export const AboutItem = ({ icon, text }: Props) => (
  <Wrapper>
    {icon}
    <StyledText>{text}</StyledText>
  </Wrapper>
);
