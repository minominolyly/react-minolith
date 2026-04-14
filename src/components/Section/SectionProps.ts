import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseSectionProps from "./BaseSectionProps";

export default interface SectionProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseSectionProps<BaseComponentColorNameType> {}
