import React from 'react';

interface AlertProps {
  successMessage?: string,
  setSuccessMessage: Function
}

const Alert: React.FC<AlertProps> = ({ successMessage, setSuccessMessage }) => {
  return (
    <div
      id="alert-border-3"
      className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 fixed top-4 right-4 animate-fadeIn"
      role="alert"
    >
      <div className="ms-3 text-sm font-medium">
        {successMessage}
      </div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-border-3"
        aria-label="Close"
        onClick={() => setSuccessMessage(null)}
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  )
}

export default Alert