import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDescriptionListProps from "./BaseDescriptionListProps";

export default interface DescriptionListProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDListElement>,
    HTMLAttributes<HTMLDListElement>,
    BaseDescriptionListProps<BaseComponentColorNameType> {}
