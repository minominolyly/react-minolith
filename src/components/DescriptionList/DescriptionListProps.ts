import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseComponentProps } from "../../models";

export default interface DescriptionListProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDListElement>,
    HTMLAttributes<HTMLDListElement>,
    BaseComponentProps<BaseComponentColorNameType> {
  hasMarker?: boolean;
}
