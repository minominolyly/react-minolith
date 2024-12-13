import ColorAttributes from "./ColorAttributes";

type ColorProps = {
  default?: ColorAttributes;
  hover?: ColorAttributes;
  focus?: ColorAttributes;
  active?: ColorAttributes;
  disabled?: ColorAttributes;
  light?: {
    default?: ColorAttributes;
    hover?: ColorAttributes;
    focus?: ColorAttributes;
    active?: ColorAttributes;
    disabled?: ColorAttributes;
  };
  dark?: {
    default?: ColorAttributes;
    hover?: ColorAttributes;
    focus?: ColorAttributes;
    active?: ColorAttributes;
    disabled?: ColorAttributes;
  };
};

export default ColorProps;
