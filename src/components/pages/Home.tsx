// import { useForm } from 'react-hook-form'

import { useItems } from '../../hooks/useItems'
import { ItemsProps, ItemProps } from '../../types'
// import { useAddItem } from '../../hooks/useAddItem'

function Item ({ item }: ItemProps) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  )
}

function ItemList({ items }: ItemsProps) {
  return (
    <div>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export function Home() {
  const { data: items, error, isLoading } = useItems()
  // const { register, handleSubmit, reset } = useForm()
  // const mutation = useAddItem()

  // const onSubmit = (data) => {
  //   mutation.mutate(data)
  //   reset()
  // }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Add New Item</h1>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="Title" required />
        <textarea {...register('body')} placeholder="Body" required />
        <button type="submit">Add Item</button>
      </form> */}
      <h2>Items List</h2>
      <ItemList items={items} />
    </div>
  )
}
