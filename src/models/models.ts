export interface Register {
	title: string,
	body?: string,
}

export interface ItemResponse {
	items: items[],
	
}
export type items = {
	id: number,
	item: dataItem[]
}
export type dataItem = [
	title: string,
	body?: string,
]

type error = {
	message?: string,
}


