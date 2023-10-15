//@ts-check

/**
 * @typedef {Object} StorageItem
 * @property {number} weight
 */

/**
 * @typedef {Object} ShipStorage
 * @property {number} max
 * @property {StorageItem[]} items
 */

type S

/** @type ShipStorage */
const storage = {
	max: undefined,
	items: []
}

Object.defineProperty(storage, 'max', { writable: false, value: 5000 })

let currentStorage = undefined

function storageUsed() {
	if(currentStorage) {
		return currentStorage
	}
	currentStorage = 0
	
	for(let i = 0; i < storage.items.length; i++) {
		currentStorage += storage.items[i].weight
	}

	return currentStorage
}

/** @param {StorageItem} item */
function add(item) {
	if(storage.max - item.weight >= storageUsed()) {
		storage.items.push(item)
		currentStorage += item.weight
	}
}