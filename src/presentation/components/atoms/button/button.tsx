import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export const Button = ({ children, loading, disabled, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            disabled={disabled || loading} // 👈 deshabilita si loading o si explicitamente está disabled
            {...props}
            className={`bg-blue-600 text-white py-2 mt-1.5 px-4 rounded hover:bg-blue-700 transition cursor-pointer
        ${disabled || loading ? "opacity-60 cursor-not-allowed hover:bg-blue-600" : ""}`}
        >
            {loading ? "Cargando..." : children}
        </button>
    );
};

