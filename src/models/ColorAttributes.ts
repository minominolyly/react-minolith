import type { ColorLightness, ColorName } from "../types";

export default interface ColorAttributes<
  ColorNameType extends string = ColorName,
> {
  name: ColorNameType;
  lightness: ColorLightness;
  alpha?: number;
}
