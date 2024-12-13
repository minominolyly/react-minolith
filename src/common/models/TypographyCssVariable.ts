export default interface TypographyCssVariable {
  fontSize?: {
    xsmall?: string | undefined;
    small?: string | undefined;
    normal?: string | undefined;
    medium?: string | undefined;
    large?: string | undefined;
    xlarge?: string | undefined;
    xxlarge?: string | undefined;
    xxxlarge?: string | undefined;
    xxxxlarge?: string | undefined;
    xxxxxlarge?: string | undefined;
  };
  fontWeight?: {
    light?: number | undefined;
    normal?: number | undefined;
    medium?: number | undefined;
    semibold?: number | undefined;
    bold?: number | undefined;
  };
}
