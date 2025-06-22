import ColorLightness from "./ColorLightness";
import ColorName from "./ColorName";

type ColorAttributes<ColorNameType = ColorName> = {
  name: ColorNameType;
  lightness: ColorLightness;
  alpha?: number;
};

export default ColorAttributes;
