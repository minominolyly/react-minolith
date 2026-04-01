import { BorderWidth, ColorName, SemanticColorName } from "../../types";
import type { DivProps } from "../Div";
import type { Property } from "csstype";

export default interface DialogueProps<
  BaseComponentColorNameType extends string,
> extends DivProps<BaseComponentColorNameType> {
  colorName?: ColorName | SemanticColorName;
  avatarSize?: Property.Width;
  borderStyle?: Property.BorderStyle;
  borderWidth?: BorderWidth;
  isAvatarCircle?: boolean;
  isRight?: boolean;
}
