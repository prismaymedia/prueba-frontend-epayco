interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
  }
  
  export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => (
    <button 
      className={`px-4 py-2 rounded ${
        variant === 'primary' 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      {...props}
    >
      {children}
    </button>
  );