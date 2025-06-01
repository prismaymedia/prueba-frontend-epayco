import { SubmitHandler, useForm } from 'react-hook-form';
import Title from '../../atoms/Title';
import Form from '../../molecules/Form';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import Btn from '../../atoms/Btn';
import { usePostsContext } from '../../../hooks/userPostContext';

interface FormData {
    title: string;
    body: string;
}

const PostForm = () => {
    const {addPost} = usePostsContext();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        addPost(data.title, data.body)
        reset();
    };

    return (
        <>
            <Title level={1}>Add New Item</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    {...register('title', {
                        required: 'Title is required',
                        minLength: { value: 6, message: 'Title must be more than 5 characters' }
                    })}
                    placeholder='Title'
                />
                {errors.title && (
                    <div className="text-red-500 text-sm">{errors.title.message as string}</div>
                )}
                <TextArea 
                    {...register('body', {
                        required: 'Body is required',
                        minLength: { value: 6, message: 'Body must be more than 5 characters' }
                    })}
                    placeholder='Body'
                />
                {errors.body && (
                    <div className="text-red-500 text-sm">{errors.body.message as string}</div>
                )}
                <Btn>Add Item</Btn>
            </Form>
        </>
    )
}

export default PostForm