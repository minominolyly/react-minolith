import type { ClassAttributes, HTMLAttributes } from "react";
import type BaseAccordionSummaryProps from "./BaseAccordionSummaryProps";

export default interface AccordionSummaryProps<
  BaseComponentColorNameType extends string,
>
  extends
    ClassAttributes<HTMLElement>,
    HTMLAttributes<HTMLElement>,
    BaseAccordionSummaryProps<BaseComponentColorNameType> {}
