

import { PostForm } from "../components/molecules/post-form/post-form";
import { SkeletonPostList } from "../components/organisms/skeleton/skeleton-post-list";
import { SubmitHandler, useForm } from "react-hook-form";
import { Post } from "../../domain/entities/post";
import { usePostManager } from "../hooks/use-post-manager";
import ErrorMessage from "../components/organisms/error-messages/error-messages";
import { PostsList } from "../components/organisms/post/post-list";
import { useState } from "react";
import { MessageAlert } from "../components/molecules/message-alert/message-alert";

type Messages = {
    text: string;
    type: "success" | "error"
} | null


type FormData = Omit<Post, "id">;
const Home = (): JSX.Element => {
    const [message, setMessage] = useState<Messages>(null);
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({ mode: "onChange" });
    const {
        postsToRender,
        showOnlyNew,
        handleAddPost,
        handleShowAll,
        mutation,
        isLoading,
        error,
    } = usePostManager();

    const handleSuccess = (): void => {
        setMessage({ text: "Post creado exitosamente ✅", type: "success" });
        reset();
    };

    const handleError = ({ message }: Error): void => {
        setMessage({ text: `Error al crear el post ${message}`, type: "error" });
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setMessage(null);
        handleAddPost(data, handleSuccess, handleError);
    };



    if (isLoading) return <SkeletonPostList />;
    if (error) return <ErrorMessage message={error.message}></ErrorMessage>;

    return (
        <div className="min-h-screen bg-gray-500 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    {message && <MessageAlert text={message.text} type={message.type} />}
                    <PostForm
                        handleSubmit={handleSubmit}
                        register={register}
                        errors={errors}
                        isValid={isValid}
                        showOnlyNew={showOnlyNew}
                        mutation={mutation}
                        onSubmit={onSubmit}
                        handleShowAll={() => {
                            reset(undefined, { keepErrors: false, keepDirty: false });
                            handleShowAll();
                            setMessage(null);
                        }}
                    />
                </div>

                <PostsList posts={postsToRender} />
            </div>
        </div>
    );

}

export default Home;