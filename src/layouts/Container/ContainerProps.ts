import { DivProps } from "../../components/Div";

export default interface ContainerProps extends DivProps {
  isFluid?: boolean;
  gutter?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterXSmall?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterSmallOrLess?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterSmall?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterSmallOrMore?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterMediumOrLess?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterMedium?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterMediumOrMore?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterLargeOrLess?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterLarge?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterLargeOrMore?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
  gutterXLarge?:
    | `${number}rem`
    | {
        x?: `${number}rem`;
        y?: `${number}rem`;
      };
}
