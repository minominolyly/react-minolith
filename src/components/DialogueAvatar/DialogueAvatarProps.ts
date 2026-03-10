import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { BaseComponentProps } from "../../react-minolith";

export default interface DialogueAvatarProps
  extends
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    BaseComponentProps {
  hasBorder?: boolean;
}
