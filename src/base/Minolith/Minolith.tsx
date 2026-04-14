"use client";

import type { ReactElement } from "react";
import { MinolithColorSchemeContext } from "../../contexts";
import type { ColorName } from "../../types";
import Tabula from "../Tabula";
import type BaseMinolithProps from "./BaseMinolithProps";
import "./Minolith.scss";
import type MinolithProps from "./MinolithProps";

export default function Minolith<
  BaseComponentColorNameType extends string = ColorName | "rainbow",
  PropsType extends BaseMinolithProps<BaseComponentColorNameType> =
    MinolithProps<BaseComponentColorNameType>,
>(props: PropsType): ReactElement {
  const assignedProps = {
    ...props,
  };

  return (
    <MinolithColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Tabula<BaseComponentColorNameType> {...assignedProps} />
    </MinolithColorSchemeContext.Provider>
  );
}
