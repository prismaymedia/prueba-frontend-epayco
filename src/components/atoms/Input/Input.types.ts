export type InputProps = {
  type: "text" | "email" | "password" | "number"; //
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
};
