import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDescriptionDetailsProps from "./BaseDescriptionDetailsProps";

export default interface DescriptionDetailsProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseDescriptionDetailsProps<BaseComponentColorNameType> {}
