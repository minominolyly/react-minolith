import MinolithCssVariableStylesProvider from "../MinolithCssVariableStylesProvider/MinolithCssVariableStylesProvider";
import { Tabula } from "../Tabula";
import "./Minolith.scss";
import MinolithProps from "./MinolithProps";

export default function Minolith(props: MinolithProps) {
  return (
    <>
      <MinolithCssVariableStylesProvider
        cssVariableSetting={props.cssVariableSetting}
      >
        <Tabula colorScheme={props.colorScheme}>{props.children}</Tabula>
      </MinolithCssVariableStylesProvider>
    </>
  );
}
