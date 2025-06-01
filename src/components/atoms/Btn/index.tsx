type BtnProps = React.HTMLAttributes<HTMLButtonElement>

const Btn = ({children, ...rest}: BtnProps) => {
  return (
    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 hover:cursor-pointer transition-colors" {...rest}>
        {children}
    </button>
  )
}

export default Btn;