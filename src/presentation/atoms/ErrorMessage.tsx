interface ErrorMessageProps {
    error: Error | unknown;
  }
  
  export const ErrorMessage = ({ error }: ErrorMessageProps) => (
    <div className="text-red-500 p-4">
      Error: {error instanceof Error ? error.message : 'An error occurred'}
    </div>
  );