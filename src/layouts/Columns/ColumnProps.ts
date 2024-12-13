import { DivProps } from "../../components/Div";

export default interface ColumnProps extends DivProps {
  isFull?: boolean;
  size?: number | undefined;
  sizeXSmall?: number | undefined;
  sizeXSmallUp?: number | undefined;
  sizeSmallDown?: number | undefined;
  sizeSmall?: number | undefined;
  sizeSmallUp?: number | undefined;
  sizeMediumDown?: number | undefined;
  sizeMedium?: number | undefined;
  sizeMediumUp?: number | undefined;
  sizeLargeDown?: number | undefined;
  sizeLarge?: number | undefined;
  sizeLargeUp?: number | undefined;
  sizeXLargeDown?: number | undefined;
  sizeXLarge?: number | undefined;
}
