type AlertProps = {
  message: string
  type: 'info' | 'warning' | 'error'
  title?: string
}

export function Alert ({ title, message, type }: Readonly<AlertProps>) {
  if (type === 'error') {
    return (
      <div className="p-4 mb-4 text-sm rounded-lg bg-gray-800 text-red-400" role="alert">
        <span className="font-medium">{title ?? 'Danger alert!'}</span> {message}
      </div>
    )
  }

  if (type === 'warning') {
    return (
      <div className="p-4 mb-4 text-sm rounded-lg bg-gray-800 text-yellow-300" role="alert">
        <span className="font-medium">{title ?? 'Warning alert!'}</span> {message}
      </div>
    )
  }

  return (
    <div className="p-4 mb-4 text-sm rounded-lg bg-gray-800 text-blue-400" role="alert">
      <span className="font-medium">{title ?? 'Info alert!'}</span> {message}
    </div>
  )
}
