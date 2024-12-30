import ComponentSchemeColor from "./ComponentSchemeColor";

export default interface SchemeColorComponents {
  accordion?: ComponentSchemeColor & {
    accordionSummary?: ComponentSchemeColor | undefined;
    accordionDetails?: ComponentSchemeColor | undefined;
  } | undefined;
  badge?: ComponentSchemeColor | undefined;
  button?: ComponentSchemeColor | undefined;
  card?: ComponentSchemeColor & {
    cardHeader?: ComponentSchemeColor | undefined;
    cardBody?: ComponentSchemeColor | undefined;
    cardFooter?: ComponentSchemeColor | undefined;
  };
  dialogue?: ComponentSchemeColor & {
    dialogueAvatar?: ComponentSchemeColor | undefined;
    dialogueName?: ComponentSchemeColor | undefined;
    dialogueMessage?: ComponentSchemeColor | undefined;
  };
  header?: ComponentSchemeColor | undefined;
  label?: ComponentSchemeColor | undefined;
  link?: ComponentSchemeColor | undefined;
  loader?: ComponentSchemeColor | undefined;
  message?: ComponentSchemeColor & {
    messageHeader?: ComponentSchemeColor | undefined;
    messageBody?: ComponentSchemeColor | undefined;
  };
  progress?: ComponentSchemeColor | undefined;
}
