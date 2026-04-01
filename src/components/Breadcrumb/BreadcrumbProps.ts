import { ClassAttributes, LiHTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface BreadcrumbProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLLIElement>,
    LiHTMLAttributes<HTMLLIElement>,
    BaseComponentProps<BaseComponentColorNameType> {}
