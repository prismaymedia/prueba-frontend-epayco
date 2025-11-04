import type { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    requiredMark?: boolean;
}

export const Label = ({ requiredMark = false, className = '', children, ...rest }: LabelProps) => {
    const composedClassName = ['text-sm font-medium text-gray-700', className].filter(Boolean).join(' ');
    return (
        <label className={composedClassName} {...rest}>
            {children}
            {requiredMark ? <span className="ml-1 text-red-600">*</span> : null}
        </label>
    );
};