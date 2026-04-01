import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface DivProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseComponentProps<BaseComponentColorNameType> {}
