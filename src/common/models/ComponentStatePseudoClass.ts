import ComponentPart from "./ComponentPart";

export default interface ComponentStatePseudoClass {
  default?: ComponentPart | undefined;
  disabled?: ComponentPart | undefined;
  hover?: ComponentPart | undefined;
  focus?: ComponentPart | undefined;
  active?: ComponentPart | undefined;
}
