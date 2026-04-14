import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseBreadcrumbsProps from "./BaseBreadcrumbsProps";

export default interface BreadcrumbsProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLUListElement>,
    HTMLAttributes<HTMLUListElement>,
    BaseBreadcrumbsProps<BaseComponentColorNameType> {}
