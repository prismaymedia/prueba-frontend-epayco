interface Props {
    message: string;
}

export const ErrorMessage = ({ message }: Props) => {
    return (
        <div className="text-center text-red-500 py-8 text-lg">
            Error: {message}
        </div>
    );
};
