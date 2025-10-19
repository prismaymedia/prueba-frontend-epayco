import {
  type MouseEventHandler,
  type ReactNode,
} from "react";

import { cn } from "@/utils";
type ButtonTypes = "button" | "submit" | "reset";
// Usar únicamente las variantes definidas globalmente para consistencia
type ButtonVariants = "solid" | "flat";
export type ColorsProps =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary";

interface BaseButtonProps {
  variant?: ButtonVariants;
  type?: ButtonTypes;
  isDisabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
  isLoading?: boolean;
  isFullWidth?: boolean;
  color: ColorsProps;
  children: ReactNode;
}

export function ButtonUI({
  color = "primary",
  variant = "solid",
  type = "button",
  isDisabled = false,
  className,
  isLoading = false,
  onClick,
  isFullWidth = false,
  children,
  ...props
}: BaseButtonProps) {


  const getVariantClasses = () => {
    switch (variant) {
      case "solid":
        return "hover:opacity-90";
      case "flat":
        return "border-2 hover:opacity-80";
      default:
        return "";
    }
  };

  const getColorClasses = (variant: ButtonVariants) => {
    switch (variant) {
      case "solid":
        switch (color) {
          case "default":
            return "border-2 border-slate-600 bg-slate-600 text-slate-50";
          case "primary":
            return "border-2 border-primary bg-primary text-primary-50";
          case "secondary":
            return "border-2 border-secondary bg-secondary text-secondary-50";
          case "tertiary":
            return "border-2 border-tertiary bg-tertiary text-tertiary-50";
          default:
            return "";
        }
      case "flat":
        switch (color) {
          case "default":
            return "bg-slate-200 border-slate-200 text-slate-800";
          case "primary":
            return "border-primary-100 bg-primary-100 text-primary-700";
          case "secondary":
            return "border-secondary-100 bg-secondary-100 text-secondary-700";
          case "tertiary":
            return "border-tertiary-100 bg-tertiary-100 text-tertiary-700";
          default:
            return "";
        }
      default:
        return "";
    }
  };


  const isButtonDisabled = isDisabled ?? false;

  const buttonClasses = () => {
    const baseClasses =
      "cursor-pointer rounded-md px-6 py-2 leading-none active:scale-95 inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses = getVariantClasses();
    const colorClasses = getColorClasses(variant);
    const fullWidthClass = isFullWidth ? "w-full" : null;


    return cn(
      baseClasses,
      colorClasses,
      variantClasses,
      fullWidthClass,
      className
    );
  };

  const componentProps = {
    className: buttonClasses(),
    disabled: isButtonDisabled,
    "aria-disabled": isButtonDisabled,
    onClick,
    ...props,
  };

  return (
    <button {...componentProps}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
