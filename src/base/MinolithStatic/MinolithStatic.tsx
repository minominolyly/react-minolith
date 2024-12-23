import MinolithCssVariableStylesProviderStatic from "../MinolithCssVariableStylesProviderStatic/MinolithCssVariableStylesProviderStatic";
import { Tabula } from "../Tabula";
import "./MinolithStatic.scss";
import MinolithStaticProps from "./MinolithStaticProps";

export default function MinolithStatic(props: MinolithStaticProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];
  return (
    <>
      <MinolithCssVariableStylesProviderStatic
        cssVariableSetting={props.cssVariableSetting}
      >
        <Tabula {...assignedProps} />
      </MinolithCssVariableStylesProviderStatic>
    </>
  );
}
