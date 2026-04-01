import type { DivProps } from "../../components/Div";
import type { ColorScheme } from "../../types";

export default interface TabulaProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorScheme?: ColorScheme;
}
