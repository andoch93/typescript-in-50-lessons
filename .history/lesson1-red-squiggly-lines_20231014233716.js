//@ts-check
const storage = {
	max: undefined,
	items: []
}

Object.defineProperty(storage, 'max', { writable: false, value: 5000})
// Object.defineProperty(storage, 'max', { readonly: true, val: 5000 })
