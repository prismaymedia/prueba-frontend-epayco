import React, { useEffect, useState } from 'react';

interface Props {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ message, onClose }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className='fixed top-5 right-25 p-4 mb-4 flex items-center text-sm text-green-800 rounded-lg bg-green-100'
    >
      <span>{message}</span>
      <button
        className='cursor-pointer ml-3 font-bold text-green-800'
        onClick={() => {
          setVisible(false);
          onClose();
        }}
      >
        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Alert;
