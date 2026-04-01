import type { Property } from "csstype";
import type ColorAttributes from "./ColorAttributes";
import type { ColorName } from "../types";

export default interface LightDarkColor<BaseComponentColorNameType extends string = ColorName> {
  light: Property.Color | ColorAttributes<BaseComponentColorNameType>;
  dark: Property.Color | ColorAttributes<BaseComponentColorNameType>;
}
