import AnimationCssVariables from "./AnimationCssVariables";
import BorderCssVariables from "./BorderCssVariables";
import ColorCssVariables from "./ColorCssVariables";
import ComponentCssVariables from "./ComponentCssVariables";
import MiscellaneousCssVariables from "./MiscellaneousCssVariables";
import TypographyCssVariables from "./TypographyCssVariables";

export default interface MinolithCssVariables {
  animation?: AnimationCssVariables | undefined;
  border?: BorderCssVariables | undefined;
  color?: ColorCssVariables | undefined;
  miscellaneous?: MiscellaneousCssVariables | undefined;
  typography?: TypographyCssVariables | undefined;
  components?: ComponentCssVariables | undefined;
}
