import type { BaseComponentProps } from "../../models";

export default interface BaseNavMenuProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  isActive?: boolean | undefined;
}
