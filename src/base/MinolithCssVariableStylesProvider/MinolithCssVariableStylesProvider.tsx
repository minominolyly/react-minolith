import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import "./MinolithCssVariableStylesProvider.scss";
import MinolithCssVariableStylesProviderProps from "./MinolithCssVariableStylesProviderProps";

export default function MinolithCssVariableStylesProvider(
  props: MinolithCssVariableStylesProviderProps
) {
  const minolithStyles = minolithStyleUtility.getMinolithCssVariableStyles(
    props.cssVariableSetting
  );

  return (
    <>
      {minolithStyles.length > 0 && (
        <style suppressHydrationWarning={true}>{minolithStyles}</style>
      )}
      {props.children}
    </>
  );
}
