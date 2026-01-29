import { DivProps } from "../../components/Div";
import Gutter from "../../types/Gutter";

export default interface ContainerProps extends DivProps {
  isFluid?: boolean;
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
