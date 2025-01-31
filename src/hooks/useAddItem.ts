import { useQueryClient, useMutation } from 'react-query';
import { ItemInterface } from '../interfaces/models'
import axios from 'axios';

export const useAddItem = () => {
    const addItem = async (newItem: ItemInterface) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
        return response.data;
    };

    const queryClient = useQueryClient();
    return useMutation(addItem, {
        onSuccess: () => {
            queryClient.invalidateQueries('items');
        },
    });
};