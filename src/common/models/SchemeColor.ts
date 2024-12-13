import ComponentStatePseudoClass from "./ComponentStatePseudoClass";

export default interface SchemeColor {
  default?: ComponentStatePseudoClass | undefined;
  gray?: ComponentStatePseudoClass | undefined;
  red?: ComponentStatePseudoClass | undefined;
  orange?: ComponentStatePseudoClass | undefined;
  yellow?: ComponentStatePseudoClass | undefined;
  green?: ComponentStatePseudoClass | undefined;
  cyan?: ComponentStatePseudoClass | undefined;
  blue?: ComponentStatePseudoClass | undefined;
  violet?: ComponentStatePseudoClass | undefined;
  magenta?: ComponentStatePseudoClass | undefined;
  button?: {
    default?: ComponentStatePseudoClass | undefined;
    gray?: ComponentStatePseudoClass | undefined;
    red?: ComponentStatePseudoClass | undefined;
    orange?: ComponentStatePseudoClass | undefined;
    yellow?: ComponentStatePseudoClass | undefined;
    green?: ComponentStatePseudoClass | undefined;
    cyan?: ComponentStatePseudoClass | undefined;
    blue?: ComponentStatePseudoClass | undefined;
    violet?: ComponentStatePseudoClass | undefined;
    magenta?: ComponentStatePseudoClass | undefined;
  };
}
