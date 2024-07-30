import { Heading } from 'components/atoms/Heading'
import { ItemList } from 'components/organisms/ItemList'
import { useItems } from 'hooks/useItems'
import { useAddItem } from 'hooks/useAddItem'
import { Form } from 'components/molecules/Form'
import { NewItem } from 'types'

export function Home () {
  const { data: items, error, isLoading } = useItems()
  const { mutate } = useAddItem()

  const onSubmit = (data: NewItem) => {
    mutate(data)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <main>
      <Heading level="h1">Add New Item</Heading>
      <Form onSubmit={onSubmit} />
      <Heading level="h2">Items List</Heading>
      <ItemList items={items} />
    </main>
  )
}
