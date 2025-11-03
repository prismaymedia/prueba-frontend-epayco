export const StatusView = ({
  isLoading,
  error,
}: {
  isLoading: boolean;
  error: Error | null;
}) => (
  <div
    className={`min-h-screen flex justify-center items-center ${
      isLoading ? "bg-gray-300" : "bg-red-100"
    }`}
  >
    <h1
      className={`text-3xl font-mono font-bold ${
        isLoading ? "text-[#870412]" : "text-red-600"
      }`}
    >
      {isLoading ? "Loading..." : `Error: ${error?.message}`}
    </h1>
  </div>
);
