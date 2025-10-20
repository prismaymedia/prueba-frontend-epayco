


type Props = {
    text: string;
    type: "success" | "error";
};

export const MessageAlert = ({ text, type }: Props): JSX.Element => {
    return (
        <div
            className={`flex flex-col mb-4 p-3 rounded w-xs sm:w-2xl ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
        >
            {text}
        </div>
    );
};
