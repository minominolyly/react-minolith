import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface SpanProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLSpanElement>,
    HTMLAttributes<HTMLSpanElement>,
    BaseComponentProps<BaseComponentColorNameType> {}
