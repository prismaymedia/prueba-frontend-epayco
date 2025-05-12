import { InputProps } from "../../../types/register";

export default function TextArea({ classList, placeholder, register, error }: InputProps) {
    
    const { name, ref, onChange, onBlur } = register as {
        name: string;
        ref: React.RefObject<HTMLTextAreaElement>;
        onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
        onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
    };
    
    return (
        <div className="grid-rows-1 w-full">
            <textarea
                className={classList}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                placeholder={placeholder}
                required
            />
            { error && <span className="text-red-500">{error}</span>}
        </div>
    );
}