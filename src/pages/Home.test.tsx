import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Home } from './Home'

describe('Home Page', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    queryClient.clear()
    cleanup()
  })

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

  test('renders Home Page', () => {
    render(<Home />, { wrapper })

    const titleForm = screen.getByRole('heading', { name: /Add New Item/i })
    expect(titleForm).toBeDefined()
    expect(titleForm.textContent).toBe('Add New Item')

    const titleItemsList = screen.getByRole('heading', { name: /Items List/i })
    expect(titleItemsList).toBeDefined()
    expect(titleItemsList.textContent).toBe('Items List')
  })

  test('renders Home Page with items', async () => {
    render(<Home />, { wrapper })

    const itemTitle = await screen.findByRole('heading', { name: /The Great Gatsby/i })

    expect(itemTitle).toBeDefined()
    expect(itemTitle.textContent).toBe('The Great Gatsby')

    const itemBody = await screen.findByText(/The Great Gatsby is a 1925 novel/i)
    expect(itemBody).toBeDefined()
    expect(itemBody.textContent).toBe('The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.')
  })

  test('add new item', async () => {
    render(<Home />, { wrapper })

    const inputUserId = screen.getByPlaceholderText('User ID')
    await userEvent.type(inputUserId, '1')

    const inputTitle = screen.getByPlaceholderText('Title')
    await userEvent.type(inputTitle, 'This is a test Title')

    const textArea = screen.getByPlaceholderText('Body')
    await userEvent.type(textArea, 'This is a test Body')

    const button = screen.getByRole('button', { name: /Add Item/i })
    userEvent.click(button)

    const itemTitle = await screen.findByRole('heading', { name: /This is a test Title/i })
    expect(itemTitle).toBeDefined()
    expect(itemTitle.textContent).toBe('This is a test Title')

    const itemBody = await screen.findByText(/This is a test Body/i)
    expect(itemBody).toBeDefined()
    expect(itemBody.textContent).toBe('This is a test Body')
  })
})
