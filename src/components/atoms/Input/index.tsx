import React from "react";

type InputProps = React.ComponentPropsWithRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({...rest}, ref) => {
  return (
    <input ref={ref}className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200" {...rest}/>
  )
})

export default Input