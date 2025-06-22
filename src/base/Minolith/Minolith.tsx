"use client";
import { useInsertionEffect, useMemo } from "react";
import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import Tabula from "../Tabula";
import "./Minolith.scss";
import MinolithProps from "./MinolithProps";
import { MinolithColorSchemeContext } from "../../contexts";

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
    <MinolithColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Tabula {...assignedProps} />
    </MinolithColorSchemeContext.Provider>
  );
}
