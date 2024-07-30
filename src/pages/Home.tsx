import { Heading } from 'components/atoms/Heading'
import { ItemList } from 'components/organisms/ItemList'
import { useItems } from 'hooks/useItems'
import { useAddItem } from 'hooks/useAddItem'
import { Form } from 'components/molecules/Form'
import { NewItem } from 'types'

export function Home () {
  const { data: items, error, isLoading } = useItems()
  const { mutate } = useAddItem()

  const handleFormSubmit = (data: NewItem) => {
    mutate(data)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <main className='container mx-auto p-4 grid h-screen grid-cols-2 max-md:grid-cols-1'>
      <section className='col-span-1 p-8'>
        <div className="flex flex-col items-center bg-gray-900 py-10 rounded-lg">
          <Heading level="h1" className="text-2xl font-bold mb-10">Add New Item</Heading>
          <Form className="max-w-xl m-auto flex flex-col space-y-10" handleFormSubmit={handleFormSubmit} />
        </div>
      </section>
      <section className='col-span-1 p-8'>
        <Heading level="h2" className="text-xl font-bold mb-4">Items List</Heading>
        <ItemList items={items} />
      </section>
    </main>
  )
}
