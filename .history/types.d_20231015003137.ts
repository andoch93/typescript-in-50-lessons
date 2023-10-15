/**
 * @typedef {Object} StorageItem
 * @property {number} weight
 */
export type StorageItem = {
	weight: number
}


export type ShipStorage = {
	max: number,
	items: StorageItem[]
}
