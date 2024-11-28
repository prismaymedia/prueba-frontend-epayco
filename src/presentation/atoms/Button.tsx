interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
  }
  
  export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => (
    <button
      {...props}
      className={`px-4 py-2 rounded-md transition-colors ${
        variant === 'primary' 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {children}
    </button>
  );