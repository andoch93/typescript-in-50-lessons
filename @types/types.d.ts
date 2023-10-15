/**
 * @typedef {Object} StorageItem
 * @property {number} weight
 */
export type StorageItem = {
	weight: number
}

/**
 * @typedef {Object} ShipStorage
 * @property {number} max
 * @property {StorageItem[]} items
 */
export type ShipStorage = {
	max: number,
	items: StorageItem[]
}
