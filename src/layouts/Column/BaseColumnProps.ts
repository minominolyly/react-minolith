import type { BaseComponentProps } from "../../models";

export default interface BaseColumnProps<
  BaseComponentColorNameType extends string,
> extends BaseComponentProps<BaseComponentColorNameType> {
  isFull?: boolean | undefined;
  size?: number | undefined;
  sizeXSmall?: number | undefined;
  sizeSmallOrLess?: number | undefined;
  sizeSmall?: number | undefined;
  sizeSmallOrMore?: number | undefined;
  sizeMediumOrLess?: number | undefined;
  sizeMedium?: number | undefined;
  sizeMediumOrMore?: number | undefined;
  sizeLargeOrLess?: number | undefined;
  sizeLarge?: number | undefined;
  sizeLargeOrMore?: number | undefined;
  sizeXLarge?: number | undefined;
}
