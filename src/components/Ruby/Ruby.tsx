import { classNameUtility } from "../../utilities";
import classNames from "./Ruby.module.scss";
import RubyProps from "./RubyProps";
import RubyText from "./RubyText";

export default function Ruby(props: RubyProps): React.ReactElement {
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

  const assignedClassNames: string[] = ["ruby", classNames["element"]];
  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  const assignedRubyTextClassNames: string[] = [
    "ruby-text",
    classNames["element"],
  ];

  if (props.rubyText) {
    assignedRubyTextClassNames.push(
      ...classNameUtility.getUtilityClassNames(props)
    );
    props.className && assignedRubyTextClassNames.push(props.className);
  }

  return (
    <ruby {...assignedProps} className={assignedClassNames.join(" ")}>
      {props.children}
      {props.rubyText ? (
        <RubyText className={assignedRubyTextClassNames.join(" ")}>
          {props.rubyText}
        </RubyText>
      ) : (
        <></>
      )}
    </ruby>
  );
}
