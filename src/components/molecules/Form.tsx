import { useForm } from 'react-hook-form'

import { Input } from 'components/atoms/Input'
import { TextArea } from 'components/atoms/TextArea'
import { Button } from 'components/atoms/Button'
import { NewItem } from 'types'

interface FormProps {
  onSubmit: (data: NewItem) => void;
}

export function Form ({ onSubmit }: Readonly<FormProps>) {
  const { register, handleSubmit, reset } = useForm<NewItem>()

  return (
    <form onSubmit={handleSubmit((data) => {
      onSubmit(data)
      reset()
    })}>
      <Input {...register('userId')} placeholder="User ID" name="userId" required />
      <Input {...register('title')} placeholder="Title" name="title" required />
      <TextArea {...register('body')} placeholder="Body" name="body" required />
      <Button type="submit">Add Item</Button>
    </form>
  )
}
