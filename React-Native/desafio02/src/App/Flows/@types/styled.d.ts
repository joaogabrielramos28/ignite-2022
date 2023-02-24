import "styled-components/native";
import { theme } from "../styles/theme";

declare module "styled-components/native" {
  type MyTheme = typeof theme;
  export interface DefaultTheme extends MyTheme {}
}
