import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <textarea {...props} ref={ref} />
})
