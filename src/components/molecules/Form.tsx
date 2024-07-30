import { useForm } from 'react-hook-form'

import { Input } from 'components/atoms/Input'
import { TextArea } from 'components/atoms/TextArea'
import { Button } from 'components/atoms/Button'
import { Paragraph } from 'components/atoms/Paragraph'
import { NewItem } from 'types'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  handleFormSubmit: (data: NewItem) => void;
}

export function Form ({ handleFormSubmit, ...props }: Readonly<FormProps>) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewItem>()

  return (
    <form {...props} onSubmit={handleSubmit((data) => {
      handleFormSubmit(data)
      reset()
    })}>
      <Input
        {...register('userId', {
          required: "UserId is required.",
          pattern: {
            value: /\d+/,
            message: "UserId is number only."
          }
        })}
        placeholder="User ID"
        name="userId"
      />
      {errors.userId && <Paragraph className='text-red-600'>{`⚠ ${errors.userId.message}`}</Paragraph>}

      <Input
        {...register('title', {
          required: "Title is required.",
        })}
        placeholder="Title"
        name="title"
      />
      {errors.title && <Paragraph className='text-red-600'>{`⚠ ${errors.title.message}`}</Paragraph>}

      <TextArea
        {...register('body', {
          required: "Body is required.",
        })}
        placeholder="Body"
        name="body"
        className='size-80 max-lg:size-52'
      />
      {errors.body && <Paragraph className='text-red-600'>{`⚠ ${errors.body.message}`}</Paragraph>}

      <Button
        type="submit"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-200 border-gray-600 hover:text-white hover:bg-gray-700"
      >
        Add Item
      </Button>
    </form>
  )
}
