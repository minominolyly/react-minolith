import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseDescriptionListItemProps from "./BaseDescriptionListItemProps";

export default interface DescriptionListItemProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseDescriptionListItemProps<BaseComponentColorNameType> {}
