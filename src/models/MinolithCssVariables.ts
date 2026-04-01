import type AnimationCssVariables from "./AnimationCssVariables";
import type BorderCssVariables from "./BorderCssVariables";
import type ColorCssVariables from "./ColorCssVariables";
import type ComponentCssVariables from "./ComponentCssVariables";
import type MiscellaneousCssVariables from "./MiscellaneousCssVariables";
import type TypographyCssVariables from "./TypographyCssVariables";

export default interface MinolithCssVariables {
  animation?: AnimationCssVariables | undefined;
  border?: BorderCssVariables | undefined;
  color?: ColorCssVariables | undefined;
  miscellaneous?: MiscellaneousCssVariables | undefined;
  typography?: TypographyCssVariables | undefined;
  components?: ComponentCssVariables | undefined;
}
