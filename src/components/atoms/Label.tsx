import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
}
export const Label = ({ label, children }: Props) => {
  return (
    <label className="label">
      {label}:{children}
    </label>
  );
};
