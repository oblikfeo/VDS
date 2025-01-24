import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => theme.typography.body5};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.div`
  flex-grow: 1;
`;

export const TitleIcon = styled.div``;

export const ContentContainer = styled.div<{ opened: boolean }>`
  ${({ opened }) =>
    opened
      ? css`
          overflow: auto;
          max-height: 400px;
        `
      : css`
          overflow: hidden;
          max-height: 0;
        `}
  transition: max-height 0.3s linear;
`;

export const InnerContainer = styled.div`
  padding: ${({ theme }) => theme.indents.m} 0;
  ${({ theme }) => theme.typography.mini2};
`;
