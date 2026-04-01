"use client";

import type { ReactElement } from "react";
import { MinolithColorSchemeContext } from "../../contexts";
import type { ColorName, SemanticColorName } from "../../types";
import Tabula from "../Tabula";
import "./Minolith.scss";
import type MinolithProps from "./MinolithProps";

export default function Minolith<
  BaseComponentColorNameType extends string =
    | ColorName
    | SemanticColorName
    | "rainbow",
>(props: MinolithProps<BaseComponentColorNameType>): ReactElement {
  const assignedProps = { ...props };

  return (
    <MinolithColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Tabula {...assignedProps} />
    </MinolithColorSchemeContext.Provider>
  );
}
