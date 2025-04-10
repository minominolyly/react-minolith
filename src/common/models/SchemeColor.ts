import ComponentStatePseudoClass from "./ComponentStatePseudoClass";
import SchemeColorComponents from "./SchemeColorComponents";

export default interface SchemeColor {
  default?: ComponentStatePseudoClass | undefined;
  gray?: ComponentStatePseudoClass | undefined;
  red?: ComponentStatePseudoClass | undefined;
  coral?: ComponentStatePseudoClass | undefined;
  orange?: ComponentStatePseudoClass | undefined;
  yellow?: ComponentStatePseudoClass | undefined;
  lime?: ComponentStatePseudoClass | undefined;
  green?: ComponentStatePseudoClass | undefined;
  cyan?: ComponentStatePseudoClass | undefined;
  blue?: ComponentStatePseudoClass | undefined;
  violet?: ComponentStatePseudoClass | undefined;
  magenta?: ComponentStatePseudoClass | undefined;
  components?: SchemeColorComponents | undefined;
}
