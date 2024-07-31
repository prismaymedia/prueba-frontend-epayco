import { Alert } from "components/atoms/Alert";
import { Heading } from "components/atoms/Heading";
import { Skeleton } from "components/atoms/Skeleton";
import { FormContainer } from "components/organisms/FormContainer";
import { ItemList } from "components/organisms/ItemList";
import { SectionContainer } from "components/organisms/SectionContainer";
import { Item, NewItem } from "types";

type HomeLayoutProps = {
  items?: Item[]
  error: Error | null
  errorMutation: Error | null
  isLoading: boolean
  handleFormSubmit: (data: NewItem) => void
}

export function HomeLayout ({ items, error, errorMutation, isLoading, handleFormSubmit }: Readonly<HomeLayoutProps>) {

  return (
    <main className='container mx-auto p-4 grid grid-cols-2 max-md:grid-cols-1'>
      <SectionContainer>
        <FormContainer handleFormSubmit={handleFormSubmit} />
      </SectionContainer>

      <SectionContainer>
        <Heading level="h2" className="text-2xl font-bold mb-4">Items List</Heading>
        {isLoading && <Skeleton />}
        {error && <Alert type="error" message={error.message} />}
        {errorMutation && <Alert type="error" message={errorMutation.message} />}
        {!isLoading && !error && <ItemList items={items} />}
      </SectionContainer>
    </main>
  )
}
