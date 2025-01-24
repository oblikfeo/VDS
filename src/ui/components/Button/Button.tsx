import React, { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

type Sizes = 's' | 'm' | 'l';

type ButtonType = {
  icon?: React.FC;
  iconRight?: boolean;
  disabled?: boolean;
  isFluid?: boolean;
  size?: Sizes;
  hideText?: boolean;
  secondary?: boolean;
};

type StyledButtonType = {
  disabled?: boolean;
  isFluid?: boolean;
  size?: Sizes;
  hideText?: boolean;
  secondary?: boolean;
};

type ButtonBaseType = {
  icon?: React.FC;
  iconRight?: boolean;
  children?: ReactNode;
};

const ICON_SIZES: Record<Sizes, string> = {
  s: '36px',
  m: '40px',
  l: '46px',
};

export const ButtonContained = styled.button<StyledButtonType>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, secondary, disabled }) =>
    (disabled && theme.color.buttons.disabled) ||
    (secondary && theme.color.buttons.secondary) ||
    theme.color.buttons.primary};
  height: ${({ size }) => (size ? ICON_SIZES[size] : ICON_SIZES.m)};
  padding: 0 ${({ theme, hideText }) => (hideText ? theme.indents.xs : theme.indents.xl)};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
  outline: none;
  color: ${({ disabled, theme, secondary }) =>
    disabled || secondary ? theme.color.text.secondary : theme.color.text.primary};
  width: ${({ isFluid }) => (isFluid ? '100%' : 'auto')};

  :hover {
    background: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryHover) ||
      theme.color.buttons.primaryHover};
  }

  :active {
    background: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryActive) ||
      theme.color.buttons.primaryActive};
  }
`;

const ButtonOutline = styled.button<StyledButtonType>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 40px;
  padding: 0 ${({ theme, hideText }) => (hideText ? theme.indents.xs : theme.indents.xl)};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid
    ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondary) ||
      theme.color.buttons.primary};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  white-space: nowrap;
  outline: none;
  width: ${({ isFluid }) => (isFluid ? '100%' : 'auto')};

  :hover {
    border-color: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryHover) ||
      theme.color.buttons.primaryHover};
  }

  :active {
    border-color: ${({ theme, secondary, disabled }) =>
      (disabled && theme.color.buttons.disabled) ||
      (secondary && theme.color.buttons.secondaryActive) ||
      theme.color.buttons.primaryActive};
  }
`;

const ButtonText = styled.button<StyledButtonType & { withPadding?: boolean }>`
  ${({ theme }) => theme.typography.body2}
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0 ${({ theme, withPadding }) => (withPadding ? theme.indents.xl : theme.indents.none)};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  color: ${({ theme, disabled, secondary }) =>
    (disabled && theme.color.buttons.disabled) ||
    (secondary && theme.color.buttons.secondary) ||
    theme.color.buttons.text};

  :hover {
    color: ${({ theme, disabled }) => (disabled && theme.color.buttons.disabled) || theme.color.buttons.textHover};
  }

  :active {
    color: ${({ theme, disabled }) => (disabled && theme.color.buttons.disabled) || theme.color.buttons.textActive};
  }
`;

const ButtonSpan = styled.span<{ isIconRight?: boolean; isIconLeft?: boolean }>`
  margin-left: ${({ isIconLeft, theme }) => (isIconLeft ? theme.indents.s : theme.indents.none)};
  margin-right: ${({ isIconRight, theme }) => (isIconRight ? theme.indents.s : theme.indents.none)};
`;

const ButtonInner = ({ icon: Icon, iconRight, children }: ButtonBaseType) => {
  const isIconLeft = Boolean(!iconRight && Icon);
  const isIconRight = Boolean(iconRight && Icon);
  const hasChildren = Boolean(children);

  return (
    <>
      {isIconLeft && Icon && <Icon />}
      <ButtonSpan isIconLeft={isIconLeft && hasChildren} isIconRight={isIconRight && hasChildren}>
        {children}
      </ButtonSpan>
      {isIconRight && Icon && <Icon />}
    </>
  );
};

const ButtonTextWithIcon = styled(
  ({
    icon,
    iconRight,
    children,
    ...props
  }: Omit<ButtonType, 'hideText'> & { className?: string } & React.HTMLAttributes<HTMLButtonElement>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonText {...props}>
      <ButtonInner icon={icon} iconRight={iconRight}>
        {children}
      </ButtonInner>
    </ButtonText>
  ),
)``;

const ButtonContainedWithIcon = styled(
  ({
    icon,
    iconRight,
    children,
    hideText,
    ...props
  }: ButtonType & {
    className?: string;
    ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null;
  } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonContained {...props} hideText={hideText}>
      <ButtonInner icon={icon} iconRight={iconRight}>
        {!hideText && children}
      </ButtonInner>
    </ButtonContained>
  ),
)``;

const ButtonOutlinedWithIcon = styled(
  ({
    icon,
    iconRight,
    children,
    hideText,
    ...props
  }: ButtonType & { className?: string } & React.HTMLAttributes<HTMLButtonElement>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonOutline {...props} hideText={hideText}>
      <ButtonInner icon={icon} iconRight={iconRight}>
        {!hideText && children}
      </ButtonInner>
    </ButtonOutline>
  ),
)``;

export const Button = {
  Text: ButtonTextWithIcon,
  Contained: ButtonContainedWithIcon,
  Outlined: ButtonOutlinedWithIcon,
};
