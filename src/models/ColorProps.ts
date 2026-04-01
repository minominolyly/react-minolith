import type ColorAttributes from "./ColorAttributes";

export default interface ColorProps<ColorNameType extends string> {
  default?: ColorAttributes<ColorNameType> | "transparent";
  hover?: ColorAttributes<ColorNameType> | "transparent";
  focus?: ColorAttributes<ColorNameType> | "transparent";
  active?: ColorAttributes<ColorNameType> | "transparent";
  disabled?: ColorAttributes<ColorNameType> | "transparent";
  colorScheme?: {
    light: {
      default?: ColorAttributes<ColorNameType> | "transparent";
      hover?: ColorAttributes<ColorNameType> | "transparent";
      focus?: ColorAttributes<ColorNameType> | "transparent";
      active?: ColorAttributes<ColorNameType> | "transparent";
      disabled?: ColorAttributes<ColorNameType> | "transparent";
    };
    dark: {
      default?: ColorAttributes<ColorNameType> | "transparent";
      hover?: ColorAttributes<ColorNameType> | "transparent";
      focus?: ColorAttributes<ColorNameType> | "transparent";
      active?: ColorAttributes<ColorNameType> | "transparent";
      disabled?: ColorAttributes<ColorNameType> | "transparent";
    };
  };
}
