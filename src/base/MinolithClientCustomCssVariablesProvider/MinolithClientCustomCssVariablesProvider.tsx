"use client";

import { ReactElement, useInsertionEffect, useMemo } from "react";
import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import MinolithClientCustomCssVariablesProviderProps from "./MinolithClientCustomCssVariablesProviderProps";

export default function MinolithClientCustomCssVariablesProvider(
  props: MinolithClientCustomCssVariablesProviderProps,
): ReactElement {
  const minolithStyles = useMemo(
    () =>
      minolithStyleUtility.getMinolithCssVariableStyles(
        props.minolithCssVariables,
      ),
    [props.minolithCssVariables],
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

  return <>{props.children}</>;
}
