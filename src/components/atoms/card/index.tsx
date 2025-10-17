import { ReactNode, ElementType } from "react"

interface Props {
  children: ReactNode
  variant?: ElementType
  className?: string
}

const Card = ({ children, variant: Tag = 'div', className }: Props) => {
  return (
    <Tag className={`bg-white rounded-lg shadow-md border border-gray-100 p-6 w-full ${className ?? ''}`}>
      {children}
    </Tag>
  )
}

export default Card