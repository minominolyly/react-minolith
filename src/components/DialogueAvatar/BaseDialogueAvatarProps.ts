import type { BaseComponentProps } from "../../models";

export default interface BaseDialogueAvatarProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  hasBorder?: boolean;
}
