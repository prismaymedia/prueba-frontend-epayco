import {
  type ChangeEventHandler,
  type ReactNode,
  useId,
  forwardRef,
  type InputHTMLAttributes,
} from "react";
import { cn } from "@/utils";



interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "color">{
  color?: "default" | "primary" | "secondary" | "tertiary";
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  description?: string;
  errorMessage?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const InputUI = forwardRef<HTMLInputElement, InputProps>(function InputUI({
  color = "default",
  label,
  type = "text",
  placeholder,
  id,
  name,
  isDisabled,
  isRequired,
  value,
  onChange,
  onBlur,
  className,
  description,
  errorMessage,
  leftIcon,
  rightIcon,
  ...rest
}: InputProps, ref) {
  const generatedId = useId();
  const controlId = id || name || generatedId;
  const isControlDisabled = isDisabled ?? false;
  const isControlRequired = isRequired ?? false;
  const hasError = Boolean(errorMessage);
  const descriptionId = description ? `${controlId}-description` : undefined;
  const errorId = hasError ? `${controlId}-error` : undefined;
  const describedBy =
    [descriptionId, errorId].filter(Boolean).join(" ") || undefined;
  
  const defaultClasses =
    "block px-6 py-3 rounded-lg field-sizing-content w-full disabled:cursor-not-allowed disabled:opacity-50 transition-all ease-in-out duration-200";
  const getColorClasses = () => {
    switch (color) {
      case "default":
        return "bg-slate-100 border-slate-200 placeholder-slate-400 text-slate-700";
      case "primary":
        return "text-primary-700 bg-primary-50 border-primary-300 placeholder-primary-400";
      case "secondary":
        return "text-secondary-700 bg-secondary-50 border-secondary-300 placeholder-secondary-400";
      case "tertiary":
        return "text-tertiary-700 bg-tertiary-50 border-tertiary-300 placeholder-tertiary-400";
      default:
        return "";
    }
  };

  const inputClasses = cn(defaultClasses, getColorClasses(), className);

  return (
    <div>
      {label && (
        <label
          htmlFor={controlId}
          className="mb-1 block font-medium text-gray-500"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          id={controlId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          className={cn(
            inputClasses,
            leftIcon && "pl-10",
            rightIcon && "pr-10"
          )}
          disabled={isControlDisabled}
          aria-disabled={isControlDisabled}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          onChange={onChange}
          onBlur={onBlur}
          required={isControlRequired}
          {...rest}
        />
        {rightIcon && (
          <span className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400">
            {rightIcon}
          </span>
        )}
      </div>
      {description && (
        <span
          id={descriptionId}
          className="text-gray-400 mt-1 block text-xs"
        >
          {description}
        </span>
      )}
      {errorMessage && (
        <span
          id={errorId}
          role="alert"
          className="text-red-600 mt-1 block text-xs"
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
});
