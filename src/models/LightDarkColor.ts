import { Property } from "csstype";
import ColorAttributes from "../types/ColorAttributes";
import ColorName from "../types/ColorName";

export default interface LightDarkColor<ColorNameType = ColorName> {
  light: Property.Color | ColorAttributes<ColorNameType>;
  dark: Property.Color | ColorAttributes<ColorNameType>;
}
