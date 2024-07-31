import { Heading } from 'components/atoms/Heading'
import { Paragraph } from 'components/atoms/Paragraph'
import { SpinnerCard } from 'components/molecules/SpinnerCard'
import { ItemProps } from 'types'

export function Item ({ item }: ItemProps) {
  const { title, body, isLoading } = item

  return (
    <>
      {isLoading ? (
        <SpinnerCard title={title} body={body} />
      ) : (
        <article className="bg-gray-900 p-4 rounded-lg mb-4">
          <Heading level="h3" className="text-xl font-semibold mb-3">
            {title}
          </Heading>
          <Paragraph className="text-gray-300">{body}</Paragraph>
        </article>
      )}
    </>
  )
}
