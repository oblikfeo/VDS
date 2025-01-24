import styled from 'styled-components';

import { breakpoints, BreakpointsType, breakpointsMax } from '../../constants';

export const adaptive = {
  minWidth: {
    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
    desktopS: `@media screen and (min-width: ${breakpoints.desktopS}px)`,
    desktopM: `@media screen and (min-width: ${breakpoints.desktopM}px)`,
    desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
  },
  maxWidth: {
    mobile: `@media screen and (max-width: ${breakpointsMax.mobile}px)`,
    tablet: `@media screen and (max-width: ${breakpointsMax.tablet}px)`,
    desktopS: `@media screen and (max-width: ${breakpointsMax.desktopS}px)`,
    desktopM: `@media screen and (max-width: ${breakpointsMax.desktopM}px)`,
  },
};

export const Container = styled.div`
  width: 100%;
`;

export const Col = styled.div<Partial<BreakpointsType>>`
  min-width: ${({ mobile }) => (mobile ? `${8.33333333 * mobile}%` : '100%')};
  max-width: ${({ mobile }) => (mobile ? `${8.33333333 * mobile}%` : '100%')};

  ${({ tablet }) =>
    tablet
      ? `
    ${adaptive.minWidth.tablet} {
      min-width: ${8.33333333 * tablet}%;
      max-width: ${8.33333333 * tablet}%;
    }
  `
      : ''};

  ${({ desktopS }) =>
    desktopS
      ? `
    ${adaptive.minWidth.desktopS} {
      min-width: ${8.33333333 * desktopS}%;
      max-width: ${8.33333333 * desktopS}%;
    }
  `
      : ''};

  ${({ desktopM }) =>
    desktopM
      ? `
    ${adaptive.minWidth.desktopM} {
      min-width: ${8.33333333 * desktopM}%;
      max-width: ${8.33333333 * desktopM}%;
    }
  `
      : ''};

  ${({ desktopL }) =>
    desktopL
      ? `
    ${adaptive.minWidth.desktopL} {
      min-width: ${8.33333333 * desktopL}%;
      max-width: ${8.33333333 * desktopL}%;
    }
  `
      : ''};
`;

export const Row = styled.div<{ indent?: number; isWrap?: boolean }>`
  margin: 0 -${({ indent }) => indent || 15}px;
  display: flex;
  flex-wrap: ${({ isWrap = true }) => (isWrap ? 'wrap' : 'nowrap')};

  ${Col} {
    padding: 0 ${({ indent }) => indent || 15}px;
  }
`;
