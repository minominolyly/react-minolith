import type { BaseComponentProps } from "../../models";
import type { ResponsiveGutter } from "../../types";

export default interface BaseContainerProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  isFluid?: boolean;
  gutter?: ResponsiveGutter;
}
