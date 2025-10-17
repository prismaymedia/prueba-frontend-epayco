
import { UseFormRegisterReturn } from 'react-hook-form';

export enum INPUT_TEXT_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEL = 'tel'
}
type Props = {
  placeholder?: string;
  id?: string;
  type: INPUT_TEXT_TYPES;
  registration: UseFormRegisterReturn;
}

const InputText = ({ placeholder = '', id = '', type = INPUT_TEXT_TYPES.TEXT, registration }: Props) => {
  return (
    <input className="p-2 border border-gray-200 rounded-xl outline-none text-secondary" placeholder={placeholder} id={id} type={type} {...registration} />
  )
}

export default InputText