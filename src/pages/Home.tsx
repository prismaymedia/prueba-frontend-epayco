import { HomeLayout } from 'components/templates/HomeLayout'
import { useItems } from 'hooks/useItems'
import { useAddItem } from 'hooks/useAddItem'
import { NewItem } from 'types'

export function Home () {
  const { data: items, error, isLoading } = useItems()
  const { mutate, error: errorMutation } = useAddItem()

  const handleFormSubmit = (data: NewItem) => {
    mutate(data)
  }

  return (
    <HomeLayout
      items={items}
      error={error}
      isLoading={isLoading}
      errorMutation={errorMutation}
      handleFormSubmit={handleFormSubmit}
    />
  )
}
