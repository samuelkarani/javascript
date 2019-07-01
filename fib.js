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
	return helper(n, {})
}

function* generator()
{
	yield 0;
	let [prev, cur] = [0, 1]
	while (true)
	{
		[prev, cur] = [cur, prev + cur]
		yield cur
	}
}

function fibGenerator(n)
{
	if (n < 0)
		return 0
	let i;
	for (i of generator())
	{
		n--;
		if (n == 0)
			break
	}
	return i;
}

console.time('fibSlow')
console.log(fibSlow(11))
console.timeEnd('fibSlow')

console.time('fibFast')
console.log(fibFast(11))
console.timeEnd('fibFast')

console.time('fibGenerator')
console.log(fibGenerator(11))
console.timeEnd('fibGenerator')