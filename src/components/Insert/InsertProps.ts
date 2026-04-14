import type { InsHTMLAttributes, ClassAttributes } from "react";
import type BaseInsertProps from "./BaseInsertProps";

export default interface InsertProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLModElement>,
    InsHTMLAttributes<HTMLModElement>,
    BaseInsertProps<BaseComponentColorNameType> {}
