import type ComponentStatePseudoClass from "./ComponentStatePseudoClass";
import type ColorSchemeColorComponents from "./ColorSchemeColorComponents";

export default interface ColorSchemeColor {
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
  components?: ColorSchemeColorComponents | undefined;
}
