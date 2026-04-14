import type { BaseComponentProps } from "../../models";

export default interface BaseHeadingProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
