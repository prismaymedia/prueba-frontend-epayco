import {vi,it,describe, expect } from 'vitest';
import { addItem } from '../services/addItem';
import { ItemInterface } from '../types/item';
import axios from 'axios';


vi.mock('axios');

afterEach(() => {
  vi.clearAllMocks();
});

const mockItem:ItemInterface = { title: 'Item 1', body: 'Description 1' };


describe('addItem', () => {
    it('Devuelve un item', async () => {
        const response = { data: { id: 1, title: 'Item 1', body: 'Description 1' } };
        (axios.post as jest.Mock).mockResolvedValue(response);
        const result = await addItem(mockItem);
        expect(result).toEqual(response.data);
        expect(axios.post).toHaveBeenCalledWith(import.meta.env.VITE_URL_API, mockItem);
        expect(axios.post).toHaveBeenCalledTimes(1);
    });
    it('Devuelve un error', async () => {
        const error = new Error('Error');
        (axios.post as jest.Mock).mockRejectedValue(error);
        await expect(addItem(mockItem)).rejects.toThrow(error);
        expect(axios.post).toHaveBeenCalledWith(import.meta.env.VITE_URL_API, mockItem);
    })
});