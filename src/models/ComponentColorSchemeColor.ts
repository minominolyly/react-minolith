import type ComponentStatePseudoClass from "./ComponentStatePseudoClass";

export default interface ComponentColorSchemeColor<
  ColorNameType extends string,
> {
  default?: ComponentStatePseudoClass<ColorNameType> | undefined;
  gray?: ComponentStatePseudoClass<ColorNameType> | undefined;
  red?: ComponentStatePseudoClass<ColorNameType> | undefined;
  coral?: ComponentStatePseudoClass<ColorNameType> | undefined;
  orange?: ComponentStatePseudoClass<ColorNameType> | undefined;
  yellow?: ComponentStatePseudoClass<ColorNameType> | undefined;
  lime?: ComponentStatePseudoClass<ColorNameType> | undefined;
  green?: ComponentStatePseudoClass<ColorNameType> | undefined;
  cyan?: ComponentStatePseudoClass<ColorNameType> | undefined;
  blue?: ComponentStatePseudoClass<ColorNameType> | undefined;
  violet?: ComponentStatePseudoClass<ColorNameType> | undefined;
  magenta?: ComponentStatePseudoClass<ColorNameType> | undefined;
}
