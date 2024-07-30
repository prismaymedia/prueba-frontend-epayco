interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export function Paragraph (props: Readonly<ParagraphProps>) {

  return <p {...props} />
}
