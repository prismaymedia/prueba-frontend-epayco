// import { useForm } from 'react-hook-form'

import { Heading } from 'components/atoms/Heading'
import { ItemList } from 'components/organisms/ItemList'
import { useItems } from 'hooks/useItems'
// import { useAddItem } from '../../hooks/useAddItem'

export function Home () {
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
    <main>
      <Heading level="h1">Add New Item</Heading>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="Title" required />
        <textarea {...register('body')} placeholder="Body" required />
        <button type="submit">Add Item</button>
      </form> */}
      <Heading level="h2">Items List</Heading>
      <ItemList items={items} />
    </main>
  )
}
