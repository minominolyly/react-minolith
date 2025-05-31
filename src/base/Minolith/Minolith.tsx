"use client";
import { useInsertionEffect, useMemo } from "react";
import { minolithStyleUtility } from "../../utilities";
import { Tabula } from "../Tabula";
import "./Minolith.scss";
import MinolithProps from "./MinolithProps";

export default function Minolith(props: MinolithProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  const minolithStyles = useMemo(
    () =>
      minolithStyleUtility.getMinolithCssVariableStyles(
        props.cssVariableSetting
      ),
    [props.cssVariableSetting]
  );

  useInsertionEffect(() => {
    const styleId = "minolith-custom-css-variables";

    const currentCustomStyle = document.head.querySelector(`#${styleId}`);
    if (currentCustomStyle) {
      document.head.removeChild(currentCustomStyle);
    }

    const style = document.createElement("style");
    style.id = styleId;
    style.innerText = minolithStyles.join();
    document.head.appendChild(style);
  }, [minolithStyles]);

  return (
    <>
      {minolithStyles.length > 0 && (
        <style suppressHydrationWarning={true}>{minolithStyles}</style>
      )}
      <Tabula {...assignedProps} />
    </>
  );
}
