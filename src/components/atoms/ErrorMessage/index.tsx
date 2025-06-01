import React from "react";

interface ErrorMessageProps {
    children: React.ReactNode;
    mode?: 'paragraph' | 'fullScreen';
}

const defaultStyles = "text-red-500 w-full";
const fullScreenStyles = "min-h-screen flex items-center justify-center";
const paragraphStyles = "text-center py-8";

const modeStylesMap = {
    paragraph: paragraphStyles,
    fullScreen: fullScreenStyles
}

const ErrorMessage = ({ children, mode = 'paragraph' }: ErrorMessageProps) => {
    return (
        <div className={`${defaultStyles} ${modeStylesMap[mode]}`}>{children}</div>
    )
}

export default ErrorMessage