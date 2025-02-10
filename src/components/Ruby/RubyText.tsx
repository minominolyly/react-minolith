import { classNameUtility } from "../../utilities";
import classNames from "./Ruby.module.scss";
import RubyTextProps from "./RubyTextProps";

export default function RubyText(props: RubyTextProps): React.ReactElement {
  const assignedProps = { ...props };
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["element"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <>
      <rp>(</rp>
      <rt {...assignedProps} className={assignedClassNames.join(" ")} />
      <rp>)</rp>
    </>
  );
}
