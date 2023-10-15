//@ts-check
const storage = {
	max: undefined,
	items: []
}

Object.defineProperty(storage, 'max', { writable: false, value: 5000 })

let currentStorage = 'undefined'

function storageUsed() {
	if(currentStorage) {
		return currentStorage
	}
	
}