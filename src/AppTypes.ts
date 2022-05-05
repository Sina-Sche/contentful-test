export interface Theme {
  colors: Colors;
  fonts: Fonts;
  fontsize: Fontsizes;
}

interface Colors {
  primary: string;
  secondary: string;
  dark: string;
}

interface Fonts {
  heading: string;
  recipe: string;
}

interface Fontsizes {
  large: number;
}
