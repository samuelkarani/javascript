function cloneDeep(O, res={})
{
	for (const prop of Object.keys(O)) {
		if (typeof O[prop] === 'object')
			res[prop] = cloneDeep(O[prop])
		else
			res[prop] = O[prop]
	}
	return res;
}

const obj = {
	a: 1,
	b: '2',
	c: {
		d: {
			e: {
				f: 'g'
			}
		},
		h: 'i'
	},
	j: 3
}

console.log(obj)
console.log(cloneDeep(obj))