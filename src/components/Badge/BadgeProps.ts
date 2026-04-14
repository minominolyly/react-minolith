import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseBadgeProps from "./BaseBadgeProps";

export default interface BadgeProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLSpanElement>,
    HTMLAttributes<HTMLSpanElement>,
    BaseBadgeProps<BaseComponentColorNameType> {}
