"use client";

import { type ReactElement, useInsertionEffect, useMemo } from "react";
import minolithStyleUtility from "../../utilities/minolithStyleUtility";
import type MinolithClientCustomCssVariablesProviderProps from "./MinolithClientCustomCssVariablesProviderProps";
import type { ColorName } from "../../types";

export default function MinolithClientCustomCssVariablesProviderh<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
>(
  props: MinolithClientCustomCssVariablesProviderProps<BaseComponentColorNameType>,
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

    setStyle(document.head);

    if (document.querySelector(`#${styleId}`) === null) {
      setStyle(document.body);
    }
  }, [minolithStyles]);

  return <>{props.children}</>;
}
