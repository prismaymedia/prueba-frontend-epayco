import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addItem } from 'services/items'

export function useAddItem () {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addItem,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['items'], exact: true })

      const previousItems = queryClient.getQueryData(['items'])
      const randomNumber = Math.floor(Math.random() * 900) + 101
      const newItem = { id: randomNumber, isLoading: true, ...variables }

      queryClient.setQueryData(['items'], () => [newItem])

      return { previousItems }
    },
    onSuccess: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['items'], exact: true })
      queryClient.setQueryData(['items'], () => [data])
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(['items'], context?.previousItems)
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['items'] })
    }
  })
}
