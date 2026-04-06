import type { DivProps } from "../../components/Div";
import type { ResponsiveFlexDirection, ResponsiveGutter } from "../../types";

export default interface ColumnsProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  flexDirection?: ResponsiveFlexDirection;
  gutter?: ResponsiveGutter;
}
