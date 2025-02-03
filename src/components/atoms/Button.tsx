import React from 'react';

interface Props {
  htmlType?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  text: string;
}

export const Button: React.FC<Props> = ({
  htmlType = 'button',
  disabled = false,
  onClick,
  text
}) => {
  return (
    <button
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg cursor-pointer text-white font-medium text-sm px-5 py-2.5 text-center bg-blue-700 hover:bg-blue-800`}
    >
      {text}
    </button>
  );
};
