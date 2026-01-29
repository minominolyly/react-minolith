import ColorAttributes from "./ColorAttributes";
import ColorName from "./ColorName";

type ColorProps<ColorNameType = ColorName> = {
  default?: ColorAttributes<ColorNameType> | "transparent";
  hover?: ColorAttributes<ColorNameType> | "transparent";
  focus?: ColorAttributes<ColorNameType> | "transparent";
  active?: ColorAttributes<ColorNameType> | "transparent";
  disabled?: ColorAttributes<ColorNameType> | "transparent";
  light?: {
    default?: ColorAttributes<ColorNameType> | "transparent";
    hover?: ColorAttributes<ColorNameType> | "transparent";
    focus?: ColorAttributes<ColorNameType> | "transparent";
    active?: ColorAttributes<ColorNameType> | "transparent";
    disabled?: ColorAttributes<ColorNameType> | "transparent";
  };
  dark?: {
    default?: ColorAttributes<ColorNameType> | "transparent";
    hover?: ColorAttributes<ColorNameType> | "transparent";
    focus?: ColorAttributes<ColorNameType> | "transparent";
    active?: ColorAttributes<ColorNameType> | "transparent";
    disabled?: ColorAttributes<ColorNameType> | "transparent";
  };
};

export default ColorProps;
