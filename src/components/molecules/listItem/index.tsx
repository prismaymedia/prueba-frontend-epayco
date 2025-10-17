import React from 'react'
import ItemTitle from '../../atoms/itemTitle'
import Pharagraph from '../../atoms/pharagraph'

type Props = {
  itemTitle: string
  itemDescription: string
}

const ListItem = ({itemTitle, itemDescription}: Props) => {
  return (
    <div className='py-3.5 pl-5 pr-2.5 border-l-4 border-primary my-8'>
        <ItemTitle text={itemTitle}/>
        <Pharagraph text={itemDescription}/>
    </div>
  )
}

export default ListItem