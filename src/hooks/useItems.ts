import { useQuery } from '@tanstack/react-query'

import { fetchItems } from 'services/items'

export function useItems () {
  return useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  })
}
