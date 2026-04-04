import type ComponentPart from "./ComponentPart";

export default interface ComponentStatePseudoClass<ColorNameType extends string> {
  default?: ComponentPart<ColorNameType> | undefined;
  disabled?: ComponentPart<ColorNameType> | undefined;
  hover?: ComponentPart<ColorNameType> | undefined;
  focus?: ComponentPart<ColorNameType> | undefined;
  active?: ComponentPart<ColorNameType> | undefined;
}
