import { useForm } from 'react-hook-form'

import { Input } from 'components/atoms/Input'
import { TextArea } from 'components/atoms/TextArea'
import { Button } from 'components/atoms/Button'
import { NewItem } from 'types'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  handleFormSubmit: (data: NewItem) => void;
}

export function Form ({ handleFormSubmit, ...props }: Readonly<FormProps>) {
  const { register, handleSubmit, reset } = useForm<NewItem>()

  return (
    <form {...props} onSubmit={handleSubmit((data) => {
      handleFormSubmit(data)
      reset()
    })}>
      <Input {...register('userId')} placeholder="User ID" name="userId" required />
      <Input {...register('title')} placeholder="Title" name="title" required />
      <TextArea {...register('body')} placeholder="Body" name="body" required className='size-80' />
      <Button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-200 border-gray-600 hover:text-white hover:bg-gray-700">Add Item</Button>
    </form>
  )
}
