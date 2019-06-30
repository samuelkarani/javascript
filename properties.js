function properties(obj)
{
	let res = []
	for (let o = obj; o != null; o = Object.getPrototypeOf(o))
	{
		res = res.concat(Object.getOwnPropertyNames(o))
		break ;
	}
	return res
}

console.log(properties({ foo: 'bar' }))