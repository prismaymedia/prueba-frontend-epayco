export function Skeleton () {
  return (
    <output className="max-w-sm animate-pulse">
      <div className="h-36 bg-gray-200 rounded-lg dark:bg-gray-700 w-auto mb-4"></div>
      <div className="h-36 bg-gray-200 rounded-lg dark:bg-gray-700 w-auto mb-4"></div>
      <span className="sr-only">Loading...</span>
    </output>
  )
}
