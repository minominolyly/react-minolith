import { BorderStyle, BorderWidth, ColorName } from "../../types";
import DivProps from "../Div/DivProps";

export default interface DialogueProps extends DivProps {
  colorName?: ColorName;
  avatarSize?: "large" | "small";
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  isAvatarCircle?: boolean;
  isRight?: boolean;
}
