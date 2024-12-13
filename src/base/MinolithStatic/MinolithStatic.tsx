import MinolithCssVariableStylesProviderStatic from "../MinolithCssVariableStylesProviderStatic/MinolithCssVariableStylesProviderStatic";
import { Tabula } from "../Tabula";
import "./MinolithStatic.scss";
import MinolithStaticProps from "./MinolithStaticProps";

export default function MinolithStatic(props: MinolithStaticProps) {
  return (
    <>
      <MinolithCssVariableStylesProviderStatic
        cssVariableSetting={props.cssVariableSetting}
      >
        <Tabula colorScheme={props.colorScheme}>{props.children}</Tabula>
      </MinolithCssVariableStylesProviderStatic>
    </>
  );
}
