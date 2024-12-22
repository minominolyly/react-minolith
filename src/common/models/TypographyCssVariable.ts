export default interface TypographyCssVariable {
  fontFamily?: {
    serif?: string | undefined;
    sansSerif?: string | undefined;
    monospace?: string | undefined;
    main?: string | undefined;
    heading?: string | undefined;
    code?: string | undefined;
  };
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
