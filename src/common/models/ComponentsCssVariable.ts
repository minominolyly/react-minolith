import { FontSize } from "../literalTypes";

export default interface ComponentsCssVariable {
  button?: {
    paddingX?: `${number}rem`;
    paddingY?: `${number}rem`;
  };
  dialogue?: {
    avatarSizeDefault?: `${number}rem`;
    avatarSizeSmall?: `${number}rem`;
    avatarSizeLarge?: `${number}rem`;
    avatarTopOffset?: `${number}rem`;
    nameFontSize?: `${number}rem` | FontSize;
    namePaddingX?: `${number}rem`;
    namePaddingY?: `${number}rem`;
    messageArrowWidth?: `${number}rem`;
    messageArrowHeight?: `${number}rem`;
    messageInnerPaddingX?: `${number}rem`;
    messageInnerPaddingY?: `${number}rem`;
  };
  heading?: {
    fontFamily?: string;
  }
}
