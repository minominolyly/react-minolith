import { classNameUtility, minolithStyleUtility } from "../../utilities";
import classNames from "./Tabula.module.scss";
import TabulaProps from "./TabulaProps";

export default function Tabula(props: TabulaProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorScheme"];
  delete assignedProps["as"];
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

  const assignedClassNames = [classNames["tabula"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const css = minolithStyleUtility.getEmotionCss(props);

  return props.as ? (
    <props.as
      {...assignedProps}
      data-color-scheme={props.colorScheme}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <div
      {...assignedProps}
      data-color-scheme={props.colorScheme}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
