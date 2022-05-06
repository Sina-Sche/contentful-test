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

export interface RecipeProps {
  image: ImageObject;
  headline: string;
  duration: number;
  veggie: boolean;
}

interface ImageObject {
  fields: any;
}
