import { classNameUtility } from "../../utilities";
import RubyProps from "./RubyProps";

export default function Ruby(props: RubyProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["rubyText"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <ruby {...assignedProps} className={assignedClassNames.join(" ")}>
      {props.children}
      <rp>(</rp>
      <rt>{props.rubyText}</rt>
      <rp>)</rp>
    </ruby>
  );
}
