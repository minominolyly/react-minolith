import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseFigureCaptionProps from "./BaseFigureCaptionProps";

export default interface FigureCaptionProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseFigureCaptionProps<BaseComponentColorNameType> {}
