import type { ClassAttributes, FormHTMLAttributes } from "react";
import type BaseFormProps from "./BaseFormProps";

export default interface FormProps<BaseComponentColorNameType extends string>
  extends
    ClassAttributes<HTMLFormElement>,
    FormHTMLAttributes<HTMLFormElement>,
    BaseFormProps<BaseComponentColorNameType> {}
