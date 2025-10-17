
type Props = {
  buttonType: 'submit' | 'reset' | 'button';
  buttonText: string
  className?: string
}

const Button = (props: Props) => {
  return (
    <button className={`bg-primary py-2 px-6 rounded-lg text-white font-semibold cursor-pointer ${props.className ?? ''}`} type={props.buttonType} >{props.buttonText}</button>
  )
}

export default Button