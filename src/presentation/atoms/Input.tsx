interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register?: any; 
    name: string;
    label?: string;
  }
  
  export const Input = ({ register, name, label, ...props }: InputProps) => (
    <input
      {...register(name)}
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );