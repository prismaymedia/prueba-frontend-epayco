import Label from '../../atoms/label'
import InputText, { INPUT_TEXT_TYPES } from '../../atoms/inputText'
import TextArea from '../../atoms/textarea'
import { FieldErrors, UseFormRegister, FieldValues, Path, get } from 'react-hook-form';

export enum INPUT_TYPES {
    INPUT = 'input',
    TEXTAREA = 'textarea'
}

type FormFieldProps<TFieldValues extends FieldValues> = {
    label: string;
    name: Path<TFieldValues>;
    placeholder?: string;
    id?: string;
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    validations?: object;
} & ({
    type: INPUT_TYPES.INPUT;
    inputTextType: INPUT_TEXT_TYPES;
} | {
    type: INPUT_TYPES.TEXTAREA;
})

const FormField = <TFieldValues extends FieldValues>(props: FormFieldProps<TFieldValues>) => {
    const { label, name, placeholder, id, register, validations, errors } = props;

    return (
        <div className='mt-6 mb-4 flex flex-col gap-2.5'>
            <Label title={label} />
            {props.type === INPUT_TYPES.INPUT && (
                <InputText
                    type={props.inputTextType}
                    placeholder={placeholder}
                    id={id}
                    registration={register(name, validations)}
                />
            )}
            {props.type === INPUT_TYPES.TEXTAREA && (
                <TextArea
                    placeholder={placeholder}
                    id={id}
                    registration={register(name, validations)}
                />
            )}
            {get(errors, name) && <span className="text-red-500 text-xs">el campo es requerido</span>}
        </div>
    )
}

export default FormField