import type { DivProps } from "../../components/Div";
import type { ResponsiveGutter } from "../../types";

export default interface ContainerProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  isFluid?: boolean;
  gutter?: ResponsiveGutter;
}
