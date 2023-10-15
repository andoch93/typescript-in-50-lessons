//@
const storage = {
	max: undefined,
	items: []
}

Object.defineProperty(storage, 'max', { readonly: true, val: 5000 })
