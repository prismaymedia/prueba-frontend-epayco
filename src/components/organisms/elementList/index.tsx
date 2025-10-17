

import { ItemType } from '../../../types'
import Card from '../../atoms/card'
import SectionTitle from '../../atoms/sectionTitle'
import ListItem from '../../molecules/listItem'

type Props = {
  items: ItemType[]
}
const ElementList = ({ items }: Props) => {
  return (
    <Card className='max-w-11/12 md:max-w-[720px]'>
      <SectionTitle title='✓ Lista de Items' />
      {items.map((item, index) => {
        return (
          <ListItem key={`listitem-${item.title}-${index}`} itemTitle={item.title} itemDescription={item.body} />
        )
      })}
    </Card>
  )
}

export default ElementList