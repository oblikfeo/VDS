import { ThemeType } from "./layouts/Lampastar/types";

declare module "styled-components" {
  // TODO-Firsaev разобраться с линтером
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
