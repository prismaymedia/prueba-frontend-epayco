import FormField, { INPUT_TYPES } from '../../molecules/formField'
import SectionTitle from '../../atoms/sectionTitle'
import Card from '../../atoms/card'
import { INPUT_TEXT_TYPES } from '../../atoms/inputText'
import Button from '../../atoms/button'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddItem } from '../../../hooks/useAddItem'

interface IFormInputs {
  title: string;
  body: string;
}

const AddElementForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();
  const mutation = useAddItem();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <Card className='max-w-11/12 md:max-w-[720px] my-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle title='+ Añadir Nuevo Item' />
        <FormField<IFormInputs>
          label="Título"
          type={INPUT_TYPES.INPUT}
          inputTextType={INPUT_TEXT_TYPES.TEXT}
          name='title'
          placeholder='Introduce el título del item'
          register={register}
          errors={errors}
          validations={{ required: true }}
        />
        <FormField<IFormInputs>
          label='Cuerpo'
          type={INPUT_TYPES.TEXTAREA}
          name='body'
          placeholder='Describe tu item aquí...'
          register={register}
          errors={errors}
          validations={{ required: true }}
        />
        <Button buttonText='+ Añadir Item' buttonType='submit' />
      </form>
    </Card>
  )
}

export default AddElementForm