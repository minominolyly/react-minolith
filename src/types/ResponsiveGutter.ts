import type Gutter from "./Gutter";

type ResponsiveGutter =
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

export type { ResponsiveGutter as default };
