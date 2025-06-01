import React from "react";

type TextAreaProps = React.ComponentPropsWithRef<'textarea'>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({...rest}, ref) => {
  return (
    <textarea ref={ref} className="w-full min-h-20 resize-none border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200" {...rest}/>
  )
})

export default TextArea;
