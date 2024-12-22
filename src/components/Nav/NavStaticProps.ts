import { DivProps } from "../Div";

export default interface NavStaticProps extends DivProps {
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
