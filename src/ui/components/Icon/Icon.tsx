import React from 'react';
import styled, { css } from 'styled-components';

import { IndentsType, SizesType, TypographyColorType } from '../../../layouts/Lampastar/types';

type Props = {
  size?: keyof SizesType;
  color?: keyof TypographyColorType;
  mr?: keyof IndentsType;
  ml?: keyof IndentsType;
  icon: React.FC;
};

const IconBase = styled.i<{
  size?: keyof SizesType;
  color?: keyof TypographyColorType;
  mr?: keyof IndentsType;
  ml?: keyof IndentsType;
}>`
  display: flex;
  align-content: center;
  justify-content: center;

  svg {
    ${({ theme, size }) =>
      size
        ? css`
            width: ${theme.sizes[size]};
            height: ${theme.sizes[size]};
          `
        : ''};
    ${({ theme, color }) => (color ? `color: ${theme.color.text[color]}` : '')};
    ${({ theme, mr }) => (mr ? `margin-right: ${theme.indents[mr]}` : '')};
    ${({ theme, ml }) => (ml ? `margin-left: ${theme.indents[ml]}` : '')};
  }
`;

export const Icon = ({ icon: IconComponent, ...props }: Props) => (
  <IconBase {...props}>
    <IconComponent />
  </IconBase>
);
