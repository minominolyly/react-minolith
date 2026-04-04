import type Gradation from "./Gradation";
import type ColorSchemeColor from "./ColorSchemeColor";

export default interface ColorCssVariables<
  ColorNameType extends string,
> {
  gray?: Gradation | undefined;
  red?: Gradation | undefined;
  coral?: Gradation | undefined;
  orange?: Gradation | undefined;
  yellow?: Gradation | undefined;
  lime?: Gradation | undefined;
  green?: Gradation | undefined;
  cyan?: Gradation | undefined;
  blue?: Gradation | undefined;
  violet?: Gradation | undefined;
  magenta?: Gradation | undefined;
  colorScheme?: ColorSchemeColor<ColorNameType> | undefined;
}
