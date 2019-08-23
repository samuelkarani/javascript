function bstOptimal(keys, values)
{
	let table = Array(keys.length)
	for (let i = 0; i < keys.length; i++)
		table[i] = (new Array(keys.length)).fill(0)
	for (let k = 0; k < keys.length; k++)
	{
		for (let i = 0, j = k; i < keys.length && j < keys.length; i++, j++)
		{
			if (i == j)
				table[i][j] = values[i]
			else
			{
				let sum = 0
				for (let l = i; l <= j; l++)
					sum += values[l]
				let mn = Number.MAX_VALUE
				let c
				for (let l = i; l <= j; l++)
				{
					c = 0
					if (l - 1 >= 0)
						c += table[i][l - 1]
					if (l + 1 < keys.length)
						c += table[l + 1][j]
					if (c < mn)
						mn = c
				}
				table[i][j] = sum + mn
			}
		}
	}
	for (let i = 0; i < table.length; i++)
		console.log(table[i])
	return table[0][keys.length - 1]
}

console.log(bstOptimal([10, 12, 16, 21], [4, 2, 6, 3]))