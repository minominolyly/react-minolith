import type { ClassAttributes, ImgHTMLAttributes } from "react";
import type { BaseComponentProps } from "../../react-minolith";

export default interface DialogueAvatarProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLImageElement>,
    ImgHTMLAttributes<HTMLImageElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  hasBorder?: boolean;
}
