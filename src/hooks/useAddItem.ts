import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addItem } from '../services/items'

export function useAddItem () {
  const queryClient = useQueryClient()

  return useMutation({mutationFn: addItem, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['items']})
    }
  })
}
