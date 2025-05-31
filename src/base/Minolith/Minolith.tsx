import { minolithStyleUtility } from "../../utilities";
import { Tabula } from "../Tabula";
import "./Minolith.scss";
import MinolithProps from "./MinolithProps";

export default function Minolith(props: MinolithProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  const minolithStyles = minolithStyleUtility.getMinolithCssVariableStyles(
    props.cssVariableSetting
  );

  return (
    <>
      {minolithStyles.length > 0 && (
        <style suppressHydrationWarning={true}>{minolithStyles}</style>
      )}
      <Tabula {...assignedProps} />
    </>
  );
}
