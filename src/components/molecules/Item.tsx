import { Heading } from "components/atoms/Heading"
import { Paragraph } from "components/atoms/Paragraph"
import { ItemProps } from "types"


export function Item ({ item }: ItemProps) {
  const { title, body } = item

  return (
    <>
      <Heading level="h3">{title}</Heading>
      <Paragraph>{body}</Paragraph>
    </>
  )
}
