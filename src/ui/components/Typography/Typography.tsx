import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { StatusColorType, Typography as TypographyType, TypographyColorType } from '../../../layouts/Lampastar/types';

type Props = {
  tag?: string;
  variant?: keyof TypographyType;
  children?: ReactNode;
  color?: keyof TypographyColorType;
  status?: keyof StatusColorType;
};

const TypographyComponent = ({
  className,
  children,
  tag = 'span',
  ...props
}: Props & { className?: string } & React.HTMLAttributes<HTMLSpanElement>) =>
  React.createElement(tag, { ...props, className }, children);

export const Typography = styled(TypographyComponent)`
  ${({ theme, status }) => (status ? `color: ${theme.color.status[status]}` : '')};
  ${({ theme, color }) => (color ? `color: ${theme.color.text[color]}` : '')};
  ${({ theme, variant }) => variant && theme.typography[variant]};
`;

Typography.displayName = 'Typography';
