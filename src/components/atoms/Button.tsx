type Type = "submit" | "reset" | "button";
interface Props {
  label: string;
  type?: Type;
  isDisabled?: boolean;
}

export const Button = ({
  label,
  type = "submit",
  isDisabled = false,
  } : Props) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className="button button--hover button--disabled"
    >
      {label}
    </button>
  );
};
