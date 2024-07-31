interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading ({ level, ...props }: Readonly<HeadingProps>) {
  const Tag = level

  return <Tag {...props} />
}
