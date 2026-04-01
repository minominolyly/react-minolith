import type { Property } from "csstype";
import type ColorAttributes from "./ColorAttributes";

export default interface LightDarkColor<
  BaseComponentColorNameType extends string,
> {
  light: Property.Color | ColorAttributes<BaseComponentColorNameType>;
  dark: Property.Color | ColorAttributes<BaseComponentColorNameType>;
}
