import { FC } from 'react';
import { items } from '../models/models';

type dataItem = {
    title: string,
	body?: string,
}

export const Item: FC<dataItem> = ({title, body }) => {
    // console.log(title,body)
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};