import type LightDarkColor from "./LightDarkColor";

export default interface ComponentPart<ColorNameType extends string> {
  fore?: LightDarkColor<ColorNameType> | undefined;
  back?: LightDarkColor<ColorNameType> | undefined;
  border?: LightDarkColor<ColorNameType> | undefined;
  shadow?: LightDarkColor<ColorNameType> | undefined;
  placeholder?: LightDarkColor<ColorNameType> | undefined;
}
