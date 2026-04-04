import type ComponentColorSchemeColor from "./ComponentColorSchemeColor";

export default interface ColorSchemeColorComponents<
  ColorNameType extends string,
> {
  accordion?:
    | (ComponentColorSchemeColor<ColorNameType> & {
        accordionSummary?: ComponentColorSchemeColor<ColorNameType> | undefined;
        accordionDetails?: ComponentColorSchemeColor<ColorNameType> | undefined;
      })
    | undefined;
  badge?: ComponentColorSchemeColor<ColorNameType> | undefined;
  button?: ComponentColorSchemeColor<ColorNameType> | undefined;
  card?: ComponentColorSchemeColor<ColorNameType> & {
    cardHeader?: ComponentColorSchemeColor<ColorNameType> | undefined;
    cardBody?: ComponentColorSchemeColor<ColorNameType> | undefined;
    cardFooter?: ComponentColorSchemeColor<ColorNameType> | undefined;
  };
  dialogue?: ComponentColorSchemeColor<ColorNameType> & {
    dialogueAvatar?: ComponentColorSchemeColor<ColorNameType> | undefined;
    dialogueName?: ComponentColorSchemeColor<ColorNameType> | undefined;
    dialogueMessage?: ComponentColorSchemeColor<ColorNameType> | undefined;
  };
  header?: ComponentColorSchemeColor<ColorNameType> | undefined;
  label?: ComponentColorSchemeColor<ColorNameType> | undefined;
  link?: ComponentColorSchemeColor<ColorNameType> | undefined;
  loader?: ComponentColorSchemeColor<ColorNameType> | undefined;
  message?: ComponentColorSchemeColor<ColorNameType> & {
    messageHeader?: ComponentColorSchemeColor<ColorNameType> | undefined;
    messageBody?: ComponentColorSchemeColor<ColorNameType> | undefined;
  };
  progress?: ComponentColorSchemeColor<ColorNameType> | undefined;
}
