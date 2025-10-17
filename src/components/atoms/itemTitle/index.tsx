
type Props = {
  text:string
}

const ItemTitle = ({text}: Props) => {
  return (
    <h5 className="font-bold text-lg text-primary mb-3">{text}</h5>
  )
}

export default ItemTitle