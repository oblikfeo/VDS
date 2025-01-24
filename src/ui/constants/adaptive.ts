export type BreakpointsType = {
  mobile: number;
  tablet: number;
  desktopS: number;
  desktopM: number;
  desktopL: number;
};

type BreakpointsMaxType = Omit<BreakpointsType, 'desktopL'>;

export type BreakpointsNames = keyof BreakpointsType;
export type BreakpointsNamesMax = keyof BreakpointsMaxType;

export const breakpoints: BreakpointsType = {
  desktopL: 1801,
  desktopM: 1441,
  desktopS: 961,
  tablet: 601,
  mobile: 0,
};

export const breakpointsMax: BreakpointsMaxType = {
  desktopM: breakpoints.desktopL - 0.05,
  desktopS: breakpoints.desktopM - 0.05,
  tablet: breakpoints.desktopS - 0.05,
  mobile: breakpoints.tablet - 0.05,
};
