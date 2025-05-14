import {forwardRef} from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className="border p-2 w-full" {...props} />;
});
