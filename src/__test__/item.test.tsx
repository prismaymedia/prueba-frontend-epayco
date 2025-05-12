import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import Item from '../components/molecules/item/item';



const mockItem = { id: 1, title: 'Item 1', body: 'Description 1' };



describe('Item component', () => {
    it('should render the item title', () => {
        render(<Item item={mockItem} />);
        const titleElement = document.createElement('h3');

        titleElement.innerText = mockItem.title;
        expect(screen.getByText(mockItem.title)).toBeInTheDocument();
        
    });
    it('should render the item body', () => {
        render(<Item item={mockItem} />);
        const bodyElement = document.createElement('p');
        bodyElement.innerText = mockItem.body;
        expect(screen.getByText(mockItem.body)).toBeInTheDocument();
    })
});