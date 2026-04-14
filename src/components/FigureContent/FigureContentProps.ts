import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseFigureContentProps from "./BaseFigureContentProps";

export default interface FigureCaptionProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseFigureContentProps<BaseComponentColorNameType> {}
