"use client";
import { useMemo } from "react";
import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import "./MinolithCssVariableStylesProviderStatic.scss";
import MinolithCssVariableStylesProviderStaticProps from "./MinolithCssVariableStylesProviderStaticProps";

export default function MinolithCssVariableStylesProviderStatic(
  props: MinolithCssVariableStylesProviderStaticProps
) {
  const minolithStyles = useMemo(
    () =>
      minolithStyleUtility.getMinolithCssVariableStyles(props.cssVariableSetting),
    [props.cssVariableSetting]
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
