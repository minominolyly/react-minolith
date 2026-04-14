import type { Property } from "csstype";
import type { BaseComponentProps } from "../../models";
import type { BorderWidth, ColorName, SemanticColorName } from "../../types";

export default interface BaseDialogueProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  avatarSize?: Property.Width;
  borderStyle?: Property.BorderStyle;
  borderWidth?: BorderWidth;
  isAvatarCircle?: boolean;
  isRight?: boolean;
}
