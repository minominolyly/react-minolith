import ColorAttributes from "./ColorAttributes";
import ColorName from "./ColorName";

type ColorProps<ColorNameType = ColorName> = {
  default?: ColorAttributes<ColorNameType>;
  hover?: ColorAttributes<ColorNameType>;
  focus?: ColorAttributes<ColorNameType>;
  active?: ColorAttributes<ColorNameType>;
  disabled?: ColorAttributes<ColorNameType>;
  light?: {
    default?: ColorAttributes<ColorNameType>;
    hover?: ColorAttributes<ColorNameType>;
    focus?: ColorAttributes<ColorNameType>;
    active?: ColorAttributes<ColorNameType>;
    disabled?: ColorAttributes<ColorNameType>;
  };
  dark?: {
    default?: ColorAttributes<ColorNameType>;
    hover?: ColorAttributes<ColorNameType>;
    focus?: ColorAttributes<ColorNameType>;
    active?: ColorAttributes<ColorNameType>;
    disabled?: ColorAttributes<ColorNameType>;
  };
};

export default ColorProps;
