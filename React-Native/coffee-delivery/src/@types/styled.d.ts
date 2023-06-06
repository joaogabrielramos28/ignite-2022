import "styled-components";

import { theme } from "../theme/index";

declare module "styled-components" {
  const themeType = typeof theme;

  export interface DefaultTheme extends themeType {}
}
