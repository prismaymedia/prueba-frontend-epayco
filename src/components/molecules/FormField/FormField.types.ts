import { InputProps } from "../../atoms/Input/Input.types";
import { LabelProps } from "../../atoms/Label/Label.types";

export type FormFieldProps = {
  label: LabelProps;
  input: InputProps;
  errorMessage?: string;
};
