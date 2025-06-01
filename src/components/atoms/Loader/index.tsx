interface LoaderProps {
    children?: React.ReactNode;
}

const Loader = ({children}: LoaderProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <div className="inline-block h-8 w-8 border-4 border-current border-r-transparent rounded-full animate-spin text-blue"/ >
            <span className="mt-2 mb-4 text-center">{children}</span>
        </div>
    </div>
  )
}

export default Loader