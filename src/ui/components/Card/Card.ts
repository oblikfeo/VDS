import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Card = styled.div<{
  height?: number;
  clickable?: boolean;
  disabled?: boolean;
  info?: boolean;
  mini?: boolean;
}>`
  background: ${({ theme, disabled, info }) =>
    disabled || info ? theme.color.background.light : theme.color.background.primary};
  padding: ${({ theme, mini }) => mini && theme.indents.xs} ${({ theme }) => theme.indents.m};
  border: 1px solid ${({ theme }) => theme.color.background.main};
  border-radius: ${({ theme }) => theme.radius.xs};
  height: ${({ height }) => (height ? `${height}px` : '')};

  ${({ disabled }) => disabled && 'cursor: no-drop'};

  ${({ clickable, disabled }) =>
    clickable &&
    !disabled &&
    css`
      cursor: pointer;

      :hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.color.background.secondaryHover};
      }
    `}
`;

export const CardLink = styled(Link)<{
  height?: number;
  clickable?: boolean;
  disabled?: boolean;
  info?: boolean;
  mini?: boolean;
}>`
  background: ${({ theme, disabled, info }) =>
    disabled || info ? theme.color.background.light : theme.color.background.primary};
  padding: ${({ theme, mini }) => mini && theme.indents.xs} ${({ theme }) => theme.indents.m};
  border: 1px solid ${({ theme }) => theme.color.background.main};
  border-radius: ${({ theme }) => theme.radius.xs};
  height: ${({ height }) => (height ? `${height}px` : '')};

  ${({ disabled }) => disabled && 'cursor: no-drop'};

  ${({ clickable, disabled }) =>
    clickable &&
    !disabled &&
    css`
      display: block;
      text-decoration: none;
      cursor: pointer;

      :hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.color.background.secondaryHover};
      }
    `}
`;
