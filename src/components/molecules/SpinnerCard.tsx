import { Heading } from "components/atoms/Heading"
import { Paragraph } from "components/atoms/Paragraph"
import { Spinner } from "components/atoms/Spinner"

type SpinnerCardProps = {
  title: string
  body: string
}

export function SpinnerCard ({ title, body }: SpinnerCardProps) {
  return (
    <div className="relative items-center block mx-auto p-6 border rounded-lg shadow-md bg-gray-800 border-gray-800 hover:bg-gray-700">
      <Heading level='h5' className="mb-2 text-2xl font-bold tracking-tight text-white opacity-20">{title}</Heading>
      <Paragraph className="font-normal text-gray-400 opacity-20">{body}</Paragraph>
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <Spinner className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
