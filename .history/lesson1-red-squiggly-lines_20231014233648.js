//@ts-check
const storage = {
	max: undefined,
	items: []
}

Object.defineProperty(storage, 'max', {writable: false, })
// Object.defineProperty(storage, 'max', { readonly: true, val: 5000 })
