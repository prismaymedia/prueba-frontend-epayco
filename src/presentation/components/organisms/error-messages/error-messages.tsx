
type Props = {
    message: string
}

const ErrorMessage = ({ message }: Props): JSX.Element => (
    <div className="w-full flex justify-center items-center p-6 bg-gray-500 min-h-screen ">
        <div className="border bg-red-600 p-3.5 text-white">{message}</div>
    </div>
);
export default ErrorMessage