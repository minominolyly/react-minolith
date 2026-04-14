import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseStripeProps from "./BaseStripeProps";

export default interface StripeProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseStripeProps<BaseComponentColorNameType> {}
