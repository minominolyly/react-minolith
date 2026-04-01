import type { ColorLightness } from "../types";

export default interface ColorAttributes<ColorNameType extends string> {
  name: ColorNameType;
  lightness: ColorLightness;
  alpha?: number;
}
