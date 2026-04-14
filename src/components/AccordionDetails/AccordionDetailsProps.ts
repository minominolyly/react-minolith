import type { ClassAttributes, DetailsHTMLAttributes } from "react";
import type BaseAccordionDetailsProps from "./BaseAccordionDetailsProps";

export default interface AccordionDetailsProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDetailsElement>,
    DetailsHTMLAttributes<HTMLDetailsElement>,
    BaseAccordionDetailsProps<BaseComponentColorNameType> {
}
