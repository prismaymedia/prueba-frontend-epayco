import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function TextArea (props: Readonly<TextAreaProps>) {
  return <textarea {...props} />
}
