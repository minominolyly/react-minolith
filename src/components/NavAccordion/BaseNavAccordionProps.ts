import type { BaseComponentProps } from "../../models";

export default interface BaseNavAccordionProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  isXSmall?: boolean | undefined;
  isSmallOrLess?: boolean | undefined;
  isSmall?: boolean | undefined;
  isSmallOrMore?: boolean | undefined;
  isMediumOrLess?: boolean | undefined;
  isMedium?: boolean | undefined;
  isMediumOrMore?: boolean | undefined;
  isLargeOrLess?: boolean | undefined;
  isLarge?: boolean | undefined;
  isLargeOrMore?: boolean | undefined;
  isXLarge?: boolean | undefined;
}
