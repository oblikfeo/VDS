import { DefaultTheme } from 'styled-components';

type GetterStyleProps = {
  theme: DefaultTheme;
};
export const getSidebarMargin = ({ theme }: GetterStyleProps) => theme.indents.m;
