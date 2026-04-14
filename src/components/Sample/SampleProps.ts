import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseSampleProps from "./BaseSampleProps";

export default interface SampleProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseSampleProps<BaseComponentColorNameType> {}
