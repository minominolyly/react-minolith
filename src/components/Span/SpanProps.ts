import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseSpanProps from "./BaseSpanProps";

export default interface SpanProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLSpanElement>,
    HTMLAttributes<HTMLSpanElement>,
    BaseSpanProps<BaseComponentColorNameType> {}
