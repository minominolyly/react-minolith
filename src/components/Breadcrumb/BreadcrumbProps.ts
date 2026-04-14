import type { ClassAttributes, LiHTMLAttributes } from "react";
import type BaseBreadcrumbProps from "./BaseBreadcrumbProps";

export default interface BreadcrumbProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLLIElement>,
    LiHTMLAttributes<HTMLLIElement>,
    BaseBreadcrumbProps<BaseComponentColorNameType> {}
