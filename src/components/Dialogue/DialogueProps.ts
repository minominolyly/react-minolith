import {
  BorderWidth,
  ColorName,
  SemanticColorName,
} from "../../types";
import DivProps from "../Div/DivProps";
import { Property } from "csstype";

export default interface DialogueProps extends DivProps {
  colorName?: ColorName | SemanticColorName;
  avatarSize?: Property.Width;
  borderStyle?: Property.BorderStyle;
  borderWidth?: BorderWidth;
  isAvatarCircle?: boolean;
  isRight?: boolean;
}
