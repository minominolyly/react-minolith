import type { Property } from "csstype";

export default interface TypographyCssVariables {
  fontFamily?: {
    serif?: string | undefined;
    sansSerif?: string | undefined;
    monospace?: string | undefined;
    main?: string | undefined;
    heading?: string | undefined;
    code?: string | undefined;
  };
  fontSize?: {
    xsmall?: Property.FontSize | undefined;
    small?: Property.FontSize | undefined;
    normal?: Property.FontSize | undefined;
    medium?: Property.FontSize | undefined;
    large?: Property.FontSize | undefined;
    xlarge?: Property.FontSize | undefined;
    xxlarge?: Property.FontSize | undefined;
    xxxlarge?: Property.FontSize | undefined;
    xxxxlarge?: Property.FontSize | undefined;
    xxxxxlarge?: Property.FontSize | undefined;
  };
  fontWeight?: {
    light?: number | undefined;
    normal?: number | undefined;
    medium?: number | undefined;
    semibold?: number | undefined;
    bold?: number | undefined;
  };
}
