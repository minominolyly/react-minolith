import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface ParagraphProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLParagraphElement>,
    HTMLAttributes<HTMLParagraphElement>,
    BaseComponentProps<BaseComponentColorNameType> {}
