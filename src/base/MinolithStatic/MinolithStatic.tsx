"use client";
import { useInsertionEffect, useMemo } from "react";
import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import Tabula from "../Tabula";
import "./MinolithStatic.scss";
import MinolithStaticProps from "./MinolithStaticProps";

/** @deprecated please use Minolith */
export default function MinolithStatic(props: MinolithStaticProps): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  const minolithStyles = useMemo(
    () =>
      minolithStyleUtility.getMinolithCssVariableStyles(props.cssVariableSetting),
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
    <Tabula {...assignedProps} />
  );
}
