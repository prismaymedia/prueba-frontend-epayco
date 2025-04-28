import React from "react";
import { ErrorMessageProps } from "../../types/Error";

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-red-500">{message}</p>
      </div>
    </div>
  );
};
