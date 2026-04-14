import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseBreadcrumbsNavProps from "./BaseBreadcrumbsNavProps";

export default interface BreadcrumbsNavProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseBreadcrumbsNavProps<BaseComponentColorNameType> {}
