import { InputProps } from "../../../types/register";


export default function Input({ classList, placeholder, register, error }: InputProps) {
    const { name, ref, onChange, onBlur } = register;
    return (
        <div className="grid-rows-1 w-full">
            <input
                type="text"
                className={classList}
                ref={ref as React.LegacyRef<HTMLInputElement>}
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