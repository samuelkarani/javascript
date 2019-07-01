function getAllProperties(obj)
{
	let res = []
	for (let o = obj; o != null; o = Object.getPrototypeOf(o))
	{
		res = res.concat(Object.getOwnPropertyNames(o))
	}
	return res
}

console.log(getAllProperties({ foo: 'bar' }))