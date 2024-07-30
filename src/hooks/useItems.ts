import { useQuery } from '@tanstack/react-query'

import { fetchItems } from 'services/items'

export function useItems () {
  return useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  })
}
