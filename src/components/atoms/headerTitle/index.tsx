type Props = {
  title: string
  variant?: 'h1' | 'h2' | 'p'
}

const HeaderTitle = ({ title, variant: Tag = 'h1' }: Props) => {
  return (
    <Tag className='text-primary font-bold text-4xl'>{title}</Tag>
  )
}

export default HeaderTitle