/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  placeholder: string;
  register: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, register, error }) => {
  return (
    <div>
      <input
        {...register}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
