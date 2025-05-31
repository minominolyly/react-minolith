import { classNameUtility, minolithStyleUtility } from "../../utilities";
import classNames from "./Input.module.scss";
import InputProps from "./InputProps";

export default function Input(props: InputProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["borderRadius"];
  delete assignedProps["borderWidth"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["input"]];
  props.colorName &&
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  props.borderRadius &&
    assignedClassNames.push(
      classNames[`is-border-radius-${props.borderRadius}`]
    );
  props.borderWidth &&
    assignedClassNames.push(classNames[`is-border-width-${props.borderWidth}`]);
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = minolithStyleUtility.getEmotionCss(props);

  return (
    <input
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
