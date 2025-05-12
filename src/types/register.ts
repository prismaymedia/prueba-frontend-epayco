export interface InputProps {
    classList: string;
    placeholder: string;
    error: string | undefined;
    register: {
        name: string;
        ref: React.Ref<HTMLInputElement|HTMLTextAreaElement>;
        onChange: React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>;
        onBlur: React.FocusEventHandler<HTMLInputElement|HTMLTextAreaElement>;
    };
}