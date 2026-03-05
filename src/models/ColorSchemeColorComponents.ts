import ComponentColorSchemeColor from "./ComponentColorSchemeColor";

export default interface ColorSchemeColorComponents {
  accordion?:
    | (ComponentColorSchemeColor & {
        accordionSummary?: ComponentColorSchemeColor | undefined;
        accordionDetails?: ComponentColorSchemeColor | undefined;
      })
    | undefined;
  badge?: ComponentColorSchemeColor | undefined;
  button?: ComponentColorSchemeColor | undefined;
  card?: ComponentColorSchemeColor & {
    cardHeader?: ComponentColorSchemeColor | undefined;
    cardBody?: ComponentColorSchemeColor | undefined;
    cardFooter?: ComponentColorSchemeColor | undefined;
  };
  dialogue?: ComponentColorSchemeColor & {
    dialogueAvatar?: ComponentColorSchemeColor | undefined;
    dialogueName?: ComponentColorSchemeColor | undefined;
    dialogueMessage?: ComponentColorSchemeColor | undefined;
  };
  header?: ComponentColorSchemeColor | undefined;
  label?: ComponentColorSchemeColor | undefined;
  link?: ComponentColorSchemeColor | undefined;
  loader?: ComponentColorSchemeColor | undefined;
  message?: ComponentColorSchemeColor & {
    messageHeader?: ComponentColorSchemeColor | undefined;
    messageBody?: ComponentColorSchemeColor | undefined;
  };
  progress?: ComponentColorSchemeColor | undefined;
}
