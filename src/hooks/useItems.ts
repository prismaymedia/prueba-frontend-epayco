import { useQuery } from 'react-query';
import axios from 'axios';

export const useItems = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return useQuery('items', fetchData, {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });
}