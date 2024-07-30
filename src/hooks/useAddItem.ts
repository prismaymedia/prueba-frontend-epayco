import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addItem } from 'services/items'

export function useAddItem () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addItem,
    onSuccess: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['items'], exact: true })
      queryClient.setQueryData(['items'], () => [data])
    }
  })
}
