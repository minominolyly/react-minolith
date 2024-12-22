import { DivProps } from "../../components/Div";

export default interface ColumnProps extends DivProps {
  isFull?: boolean;
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
