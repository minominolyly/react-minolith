import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseParagraphProps from "./BaseParagraphProps";

export default interface ParagraphProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLParagraphElement>,
    HTMLAttributes<HTMLParagraphElement>,
    BaseParagraphProps<BaseComponentColorNameType> {}
