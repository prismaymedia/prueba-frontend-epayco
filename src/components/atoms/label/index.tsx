import React from 'react'

type Props = {
  title: string
}

const Label = ({title}: Props) => {
  return (
    <label className='text-sm font-semibold text-secondary'>{title}</label>
  )
}

export default Label