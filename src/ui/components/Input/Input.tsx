import React, { ReactNode, RefObject } from 'react';
import styled, { css } from 'styled-components';

import { Typography } from '../Typography';

const inputBorderStyles = css<{ isError?: boolean }>`
  outline: none;
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid ${({ theme, isError }) => (isError ? theme.color.status.error : theme.color.border.input)};
`;

const inputStyles = css`
  ${inputBorderStyles};
  flex-grow: 1;
  padding: 0 ${({ theme }) => theme.indents.xs};
  height: 40px;
  width: 100%;
  ${({ theme }) => theme.typography.body4}

  ::placeholder {
    ${({ theme }) => theme.typography.body4}
  }

  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  ${inputStyles};
  resize: none;
  height: 100%;
  padding-top: ${({ theme }) => theme.indents.xs};
  padding-bottom: ${({ theme }) => theme.indents.xs};
`;

const CustomCheckBox = styled.label<{ checked: boolean; withText: boolean }>`
  display: flex;
  margin: ${({ theme }) => theme.indents.none};
  cursor: pointer;
  position: relative;

  ::before {
    content: '';
    display: inline-block;
    min-width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme.radius.xxs};
    border: 1px solid ${({ theme }) => theme.color.border.input};
    background: ${({ theme }) => theme.color.background.primary};
    margin-right: ${({ theme, withText }) => (withText ? theme.indents.xs : theme.indents.none)};
  }

  ::after {
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    position: absolute;
    content: '';
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSA3LjVMNy4wOTU5NCAxMy4wOTU5TDE4LjExMjIgMi4wNzk3MSIgc3Ryb2tlPSIjRkY3NzNEIiBzdHJva2Utd2lkdGg9IjIuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=');
    min-width: 20px;
    height: 16px;
    left: 3px;
    top: -1px;
  }
`;

const FakeInputCheckBox = styled.input`
  display: none;
`;

export const CheckBox = styled(
  ({
    children,
    className,
    value,
    ref,
    ...props
  }: {
    children?: ReactNode;
    className?: string;
    value?: boolean;
    ref?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null;
  } & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value'>) => {
    const withText = Boolean(children);

    return (
      <CustomCheckBox checked={!!value} className={className} withText={withText}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FakeInputCheckBox checked={!!value} {...props} type="checkbox" />
        {withText && <Typography variant="mini2">{children}</Typography>}
      </CustomCheckBox>
    );
  },
)``;

export const ToggleCheckBox = styled.label<{
  checked: boolean;
}>`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.indents.none};
  cursor: pointer;
  position: relative;
  height: 18px;

  ::before {
    content: '';
    display: inline-block;
    min-width: 36px;
    width: 36px;
    height: 18px;
    border-radius: 9px;
    border: 1px solid ${({ theme }) => theme.color.border.input};
    background: ${({ theme }) => theme.color.background.primary};
  }

  ::after {
    position: absolute;
    transition: left ease 0.3s;
    content: '';
    border-radius: 50%;
    background: ${({ theme, checked }) =>
      checked ? theme.color.background.contrastLine : theme.color.background.main};
    min-width: 10px;
    width: 10px;
    height: 10px;
    ${({ checked }) =>
      checked
        ? css`
            left: calc(100% - 14px);
          `
        : css`
            left: 4px;
          `};
    top: 4px;
  }
`;
