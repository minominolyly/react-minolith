import type { BaseComponentProps } from "../../models";
import type { ResponsiveFlexDirection, ResponsiveGutter } from "../../types";

export default interface BaseColumnsProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  flexDirection?: ResponsiveFlexDirection;
  gutter?: ResponsiveGutter;
}
