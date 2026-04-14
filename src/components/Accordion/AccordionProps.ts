import type { ClassAttributes, DetailsHTMLAttributes } from "react";
import type BaseAccordionProps from "./BaseAccordionProps";

export default interface AccordionProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLDetailsElement>,
    DetailsHTMLAttributes<HTMLDetailsElement>,
    BaseAccordionProps<BaseComponentColorNameType> {
}
