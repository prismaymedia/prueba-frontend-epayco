
type Props = {
  title:string
}

const SectionTitle = ({title}: Props) => {
  return (
    <div className="text-2xl font-bold text-secondary">{title}</div>
  )
}

export default SectionTitle