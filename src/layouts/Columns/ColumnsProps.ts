import { DivProps } from "../../components/Div";
import { Property } from "csstype";
import Gutter from "../../types/Gutter";

export default interface ColumnsProps extends DivProps {
  flexDirection?:
    | Property.FlexDirection
    | {
        default?: Property.FlexDirection;
        xsmall?: Property.FlexDirection;
        xsmallOrMore?: Property.FlexDirection;
        smallOrLess?: Property.FlexDirection;
        small?: Property.FlexDirection;
        smallOrMore?: Property.FlexDirection;
        mediumOrLess?: Property.FlexDirection;
        medium?: Property.FlexDirection;
        mediumOrMore?: Property.FlexDirection;
        largeOrLess?: Property.FlexDirection;
        large?: Property.FlexDirection;
        largeOrMore?: Property.FlexDirection;
        xlargeOrLess?: Property.FlexDirection;
        xlarge?: Property.FlexDirection;
      };
  gutter?:
    | Gutter
    | {
        default?: Gutter;
        xsmall?: Gutter;
        xsmallOrMore?: Gutter;
        smallOrLess?: Gutter;
        small?: Gutter;
        smallOrMore?: Gutter;
        mediumOrLess?: Gutter;
        medium?: Gutter;
        mediumOrMore?: Gutter;
        largeOrLess?: Gutter;
        large?: Gutter;
        largeOrMore?: Gutter;
        xlargeOrLess?: Gutter;
        xlarge?: Gutter;
      };
}
