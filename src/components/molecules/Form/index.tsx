import React from 'react'

type FormProps = React.HtmlHTMLAttributes<HTMLFormElement>;

const Form = ({children, ...rest}: FormProps) => {
  return (
    <form className="w-full lg:max-w-lg mx-auto flex flex-col gap-4 bg-white p-6 rounded shadow mb-8 border border-gray-100" {...rest}>
        {children}
    </form>
  )
}

export default Form