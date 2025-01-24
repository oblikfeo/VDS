import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.indents.s};
`;

export const Tab = ({ children }: Props) => <Wrapper>{children}</Wrapper>;
