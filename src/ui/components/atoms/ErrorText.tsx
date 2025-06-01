interface ErrorTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ErrorText = ({ children, className = '' }: ErrorTextProps) => {
  if (!children) return null;

  return (
    <p className={`text-sm text-red-600 mt-1 ${className}`}>
      {children}
    </p>
  );
};