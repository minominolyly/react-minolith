import type { BaseComponentProps } from "../../models";

export default interface BaseOutputProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {}
