import React from 'react'

type Props = {
  text: string
}

const Pharagraph = ({ text }: Props) => {
  return (
    <p>{text}</p>
  )
}

export default Pharagraph