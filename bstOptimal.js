function left(keys, values, i, d)
{
	let s = 0
	if (i >= 0)
		s = values[i] * d + left(keys, values, i - 1, d + 1)
	return s
}

function right(keys, values, i, d)
{
	let s = 0
	if (i <= values.length - 1)
		s = values[i] * d + right(keys, values, i + 1, d + 1)
	return s
}

function bstMinCost(keys, values, d = 1)
{
	let mx = Number.MAX_VALUE, s

	for (let i = 0; i < keys.length; i++) {
		s = values[i] + left(keys, values, i - 1, d + 1) + right(keys, values, i + 1, d + 1)
		if (s < mx)
			mx = s
	}
	return mx
}

console.log(bstMinCost([10, 12, 16, 21], [4, 2, 6, 3]))
