
type Props = {
  text: string
}

const HeaderSubtitle = ({text}: Props) => {
  return (
    <div className="text-base text-secondary-light">{text}</div>
  )
}

export default HeaderSubtitle