import { forwardRef } from 'react';
import type { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from 'react';
import { Label } from './Label';

type InputPropsBase = {
    label?: string;
    errorMessage?: string;
};

type TextFieldProps = InputPropsBase &
    InputHTMLAttributes<HTMLInputElement> & {
        as?: 'input';
    };

type TextAreaProps = InputPropsBase &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as: 'textarea';
    };

export type InputProps = TextFieldProps | TextAreaProps;

const fieldClasses =
    'block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200';

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
    const fieldId = props.id || (props.label ? props.label.replace(/\s+/g, '-').toLowerCase() : undefined);

    if (props.as === 'textarea') {
        const { as, label, errorMessage, className = '', id, ...textareaProps } = props;
        const composedClassName = [fieldClasses, className].filter(Boolean).join(' ');

        return (
            <div className="flex flex-col gap-1">
                {label ? <Label htmlFor={fieldId}>{label}</Label> : null}
                <textarea
                    ref={ref as Ref<HTMLTextAreaElement>}
                    id={fieldId}
                    className={composedClassName}
                    {...textareaProps}
                />
                {errorMessage ? <span className="text-xs text-red-600">{errorMessage}</span> : null}
            </div>
        );
    }

    const { as = 'input', label, errorMessage, className = '', id, ...inputProps } = props;
    const composedClassName = [fieldClasses, className].filter(Boolean).join(' ');

    return (
        <div className="flex flex-col gap-1">
            {label ? <Label htmlFor={fieldId}>{label}</Label> : null}
            <input ref={ref as Ref<HTMLInputElement>} id={fieldId} className={composedClassName} {...inputProps} />
            {errorMessage ? <span className="text-xs text-red-600">{errorMessage}</span> : null}
        </div>
    );
});

Input.displayName = 'Input';