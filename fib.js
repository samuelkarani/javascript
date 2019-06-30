function fibSlow(n)
{
	if (n < 0)
		return 0
	if (n <= 1)
		return n
	return fibSlow(n - 1) + fibSlow(n - 2)
}

function helper(n, cache)
{
	if (n < 0)
		return 0
	if (n <= 1)
		return n
	if (cache[n])
		return cache[n]
	else
	{
		cache[n] = helper(n - 1, cache) + helper(n - 2, cache)
		return cache[n]
	}
}

function fibFast(n)
{
	const cache = {}
	const res = helper(n, cache)
	// console.log(cache)
	return res
}

console.time('fibSlow')
console.log(fibSlow(42))
console.timeEnd('fibSlow')

console.time('fibFast')
console.log(fibFast(42))
console.timeEnd('fibFast')