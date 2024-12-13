import { classNameUtility } from "../../utilities";
import classNames from "./CardFooter.module.scss";
import CardFooterProps from "./CardFooterProps";

export default function CardFooter(props: CardFooterProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["as"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["card-footer"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return props.as ? (
    <props.as {...assignedProps} className={assignedClassNames.join(" ")} />
  ) : (
    <div {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
