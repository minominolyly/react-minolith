import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface SectionProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseComponentProps<BaseComponentColorNameType> {}
