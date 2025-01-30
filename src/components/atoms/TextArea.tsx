/* eslint-disable @typescript-eslint/no-explicit-any */
interface TextAreaProps {
  placeholder: string;
  register: any;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  register,
  error,
}) => {
  return (
    <div>
      <textarea
        {...register}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextArea;
