import type { DivProps } from "../Div";

export default interface NavMenuProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  isActive?: boolean | undefined;
}
