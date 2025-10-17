import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  placeholder?: string;
  id?: string;
  registration: UseFormRegisterReturn;
}

const TextArea = ({ placeholder = '', id = '', registration }: Props) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className="p-2 border border-gray-200 rounded-xl outline-none text-secondary"
      {...registration}
    />
  );
};

export default TextArea;