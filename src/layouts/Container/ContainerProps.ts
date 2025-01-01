import { DivProps } from "../../components/Div";

export default interface ContainerProps extends DivProps {
  isFluid?: boolean;
  gutter?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterXSmall?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterSmallOrLess?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterSmall?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterSmallOrMore?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterMediumOrLess?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterMedium?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterMediumOrMore?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterLargeOrLess?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterLarge?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterLargeOrMore?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
  gutterXLarge?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
}
