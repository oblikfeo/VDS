import styled, { keyframes } from 'styled-components';

import { LoaderSizeType } from '../../../layouts/Lampastar/types';

const loaderKeyFrame = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div<{ size?: keyof LoaderSizeType }>`
  border: calc(${({ size, theme }) => theme.loaderSize[size || 'm']} / 5) solid
    ${({ theme }) => theme.color.background.primary};
  border-top: calc(${({ size, theme }) => theme.loaderSize[size || 'm']} / 5) solid
    ${({ theme }) => theme.color.background.tertiary};
  border-radius: 50%;
  width: ${({ size, theme }) => theme.loaderSize[size || 'm']};
  height: ${({ size, theme }) => theme.loaderSize[size || 'm']};
  animation: ${loaderKeyFrame} 2s linear infinite;
`;
