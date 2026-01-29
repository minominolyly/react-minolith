import AnimationCssVariable from "./AnimationCssVariable";
import BorderCssVariable from "./BorderCssVariable";
import ColorCssVariable from "./ColorCssVariable";
import ComponentsCssVariable from "./ComponentsCssVariable";
import MiscellaneousCssVariable from "./MiscellaneousCssVariable";
import TypographyCssVariable from "./TypographyCssVariable";

export default interface MinolithCssVariable {
  animation?: AnimationCssVariable | undefined;
  border?: BorderCssVariable | undefined;
  color?: ColorCssVariable | undefined;
  miscellaneous?: MiscellaneousCssVariable | undefined;
  typography?: TypographyCssVariable | undefined;
  components?: ComponentsCssVariable | undefined;
}
