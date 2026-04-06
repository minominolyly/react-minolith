import type { Property } from "csstype";

type ResponsiveFlexDirection =
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

export type { ResponsiveFlexDirection as default };
