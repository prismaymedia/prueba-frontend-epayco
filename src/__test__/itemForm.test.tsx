import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ItemForm from '../components/organisms/itemForm/itemForm';
import Provider from '../context/store';


describe('ItemForm component', () => {
    it('debe renderizar un formulario', () => {
        render(<Provider><ItemForm /></Provider>);
        const titleElement = document.createElement('h2');
        titleElement.innerText = 'Add New Item';
        expect(screen.getByText('Add New Item')).toBeInTheDocument();
        const inputElement = document.createElement('input');
        inputElement.placeholder = 'Title';
        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
        const textAreaElement = document.createElement('textarea');
        textAreaElement.placeholder = 'Body';
        expect(screen.getByPlaceholderText('Body')).toBeInTheDocument();
        const buttonElement = document.createElement('button');
        buttonElement.innerText = 'Add Item';
        expect(screen.getByText('Add Item')).toBeInTheDocument();
    });
});