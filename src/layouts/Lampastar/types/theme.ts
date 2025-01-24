import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

type Font = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export type TypographyNames =
  | 'big1'
  | 'big2'
  | 'big3'
  | 'big4'
  | 'title1'
  | 'title2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'bodyCTT'
  | 'bodyCTTB'
  | 'mini0'
  | 'mini1'
  | 'mini2'
  | 'main1'
  | 'main2'
  | 'listItem'
  | 'link';

export type Typography = {
  [name in TypographyNames]: Font;
};

export type TypographyColorType = {
  primary: string;
  secondary: string;
  tertiary: string;
  copyright: string;
  contrast: string;
  contrastLine: string;
  light: string;
  lightTwo: string;
  link: string;
};

export type StatusColorType = {
  success: string;
  warning: string;
  error: string;
};

export type IndentsType = {
  none: string;
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
};

export type SizesType = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
};

export type LoaderSizeType = {
  s: string;
  m: string;
  l: string;
};

export type ThemeType = {
  color: {
    background: {
      main: string;
      light: string;
      dark: string;
      primary: string;
      secondary: string;
      secondaryHover: string;
      secondaryHoverLight: string;
      tertiary: string;
      social: string;
      line: string;
      contrastLine: string;
      skeletonPrimary: string;
      skeletonSecondary: string;
    };
    status: StatusColorType;
    statusBackground: StatusColorType;
    border: {
      input: string;
      secondary: string;
    };
    opacity: {
      modal: string;
    };
    text: TypographyColorType;
    buttons: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      secondaryHover: string;
      secondaryActive: string;
      text: string;
      textHover: string;
      textActive: string;
      disabled: string;
    };
    tags: {
      new: string;
      hit: string;
      sale: string;
    };
    scroll: {
      menu: string;
    }
  };
  sizes: SizesType;
  indents: IndentsType;
  radius: {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
  };
  zIndex: {
    button: number;
    menu: number;
    modal: number;
    loader: number;
  };
  typography: Typography;
  loaderSize: LoaderSizeType;
};
