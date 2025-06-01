import DivProps from "../Div/DivProps";

export default interface AccordionSummaryProps extends DivProps {
  as?: React.ElementType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

