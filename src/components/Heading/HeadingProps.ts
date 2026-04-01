import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface HeadingProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLHeadingElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
