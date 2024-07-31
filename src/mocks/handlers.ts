
import { http, HttpResponse } from 'msw'

import { ITEMS } from './data'
import { API_URL_JSON_PLACE_HOLDER } from '../constants';
import { Item } from 'types';

export const handlers = [
  http.get(API_URL_JSON_PLACE_HOLDER, () => HttpResponse.json(ITEMS)),

  http.post(API_URL_JSON_PLACE_HOLDER, async ({ request }) => {
    const newPost = await request.json() as Item

    return HttpResponse.json({ ...newPost, id: 4 }, { status: 201 })
  })
]
