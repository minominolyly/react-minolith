"use client";
import { useInsertionEffect, useMemo } from "react";
import { MinolithColorSchemeContext } from "../../contexts";
import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import Tabula from "../Tabula";
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

    const createMinolithCustomStyleElement = () => {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = minolithStyles.join();
      return style;
    };

    const setStyle = (element: HTMLElement) => {
      const currentCustomStyle = element.querySelector(`#${styleId}`);
      if (currentCustomStyle) {
        element.removeChild(currentCustomStyle);
      }

      const style = createMinolithCustomStyleElement();
      element.append(style);
    };

    if (document.querySelector(`#${styleId}`) === null) {
      setStyle(document.head);

      if (document.querySelector(`#${styleId}`) === null) {
        setStyle(document.body);
      }
    }
  }, [minolithStyles]);

  return (
    <MinolithColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Tabula {...assignedProps} />
    </MinolithColorSchemeContext.Provider>
  );
}
