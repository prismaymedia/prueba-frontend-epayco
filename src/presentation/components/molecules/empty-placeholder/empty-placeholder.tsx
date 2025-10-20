

type Props = {
    message: React.ReactNode;
}

export const EmptyPlaceholder = ({
    message = "No hay publicaciones aún.",
}: Props): JSX.Element => (
    <div className="flex flex-col items-center justify-center text-center bg-gray-800 border border-gray-500/50 rounded-lg p-8 shadow-md transition-all hover:shadow-lg max-w-md mx-auto">
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-100">{message}</h3>
        </div>
    </div>
);
