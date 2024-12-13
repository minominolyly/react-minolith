import { classNameUtility } from "../../utilities";
import classNames from "./Gingham.module.scss";
import GinghamProps from "./GinghamProps";

export default function Gingham(props: GinghamProps): JSX.Element {
  const assignedProps = { ...props };
  delete assignedProps["patternColor"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["spacing"];
  //#endregion BaseComponentProps

  const assignedClassNames = [classNames["gingham"]];
  if (props.patternColor) {
    const lightness =
      props.patternColor.lightness < 100
        ? `0${props.patternColor.lightness}`
        : props.patternColor.lightness;
    assignedClassNames.push(
      classNames[`is-${props.patternColor.name}-${lightness}`],
    );
  }

  assignedClassNames.push(...classNameUtility.getUtilityClassNames(props));
  props.className && assignedClassNames.push(props.className);

  return (
    <Gingham {...assignedProps} className={assignedClassNames.join(" ")} />
  );
}
