import { Input } from "../atoms/Input";

interface FormFieldProps {
    register: any; // Para react-hook-form
    name: string;
    label: string;
    error?: string;
    type?: 'text' | 'textarea' | 'email';
    required?: boolean
  }
  
  export const FormField = ({ register, name, label, error, type = 'text', required }: FormFieldProps) => (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          {...register(name)}
          id={name}
          className="w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      ) : (
        <Input register={register} name={name} type={type} id={name} required={required}/>
      )}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );