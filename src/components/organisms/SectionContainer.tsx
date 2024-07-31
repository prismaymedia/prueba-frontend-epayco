import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
}

export function SectionContainer ({ children }: Readonly<SectionContainerProps>) {
  return (
    <section className='col-span-1 p-8'>
      {children}
    </section>
  )
}
