import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

type ItemProps = {
  children: ReactNode;
  onClick: () => void;
};

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.background.secondary};
  bottom: 0;
  width: 100%;
  flex-grow: 1;
  padding: ${({ theme }) => theme.indents.m} 0 ${({ theme }) => theme.indents.xs};
  color: ${({ theme }) => theme.color.text.secondary};
  border-radius: ${({ theme }) => theme.radius.m} ${({ theme }) => theme.radius.m} 0 0;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.body5};
  padding: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.m} ${({ theme }) => theme.indents.m};
`;

const Item = styled.div`
  padding: ${({ theme }) => theme.indents.m} ${({ theme }) => theme.indents.m};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.color.background.secondaryHoverLight};
  }
`;

const DownSheetMain = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

const DownSheetTitle = ({ children }: Props) => <Title>{children}</Title>;

const DownSheetItem = ({ children, onClick }: ItemProps) => <Item onClick={onClick}>{children}</Item>;

export const DownSheet = Object.assign(DownSheetMain, { DownSheetTitle, DownSheetItem });
