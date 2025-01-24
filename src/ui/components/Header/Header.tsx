import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  title: ReactNode;
  additionalContent?: ReactNode;
  className?: string;
};

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  flex-grow: 1;
`;

export const Header = styled(({ title, additionalContent, className }: Props) => (
  <Wrapper className={className}>
    <Title>{title}</Title>
    {additionalContent}
  </Wrapper>
))``;
