
import { Post } from "../../../../domain/entities/post";


interface Props {
    item: Post;
}

export const PostComponent = ({ item }: Props): JSX.Element => {
    return (

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">

            <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-white"> {item.title} </span>
                </div>

                <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item.body}</a>
                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                    </div>

                    <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
                </div>
            </div>
        </div>
    );
};
