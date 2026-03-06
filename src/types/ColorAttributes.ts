import ColorLightness from "./ColorLightness";
import ColorName from "./ColorName";

type ColorAttributes<ColorNameType extends string = ColorName> = {
  name: ColorNameType;
  lightness: ColorLightness;
  alpha?: number;
};

export default ColorAttributes;
