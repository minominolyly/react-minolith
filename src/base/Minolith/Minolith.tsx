import MinolithCssVariableStylesProvider from "../MinolithCssVariableStylesProvider/MinolithCssVariableStylesProvider";
import { Tabula } from "../Tabula";
import "./Minolith.scss";
import MinolithProps from "./MinolithProps";

export default function Minolith(props: MinolithProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];
  return (
    <>
      <MinolithCssVariableStylesProvider
        cssVariableSetting={props.cssVariableSetting}
      >
        <Tabula {...assignedProps} />
      </MinolithCssVariableStylesProvider>
    </>
  );
}
