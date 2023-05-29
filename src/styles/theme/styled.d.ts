import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary_color: string;
      secondary_color: string;
      tertiary_color: string;
      light_color: string;
      soft_grey: string;
      medium_grey: string;
      dark_grey: string;
      dark_grey: string;
      dark_black: string;
      error_red: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
