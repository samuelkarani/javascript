function fibSlow(n)
{
	if (n < 0)
		return 0
	if (n <= 1)
		return n
	return fibSlow(n - 1) + fibSlow(n - 2)
}

function fibMemo(n, cache = {})
{
	if (n < 0)
		return 0
	if (n <= 1)
		return n
	if (cache[n])
		return cache[n]
	else
	{
		cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache)
		return cache[n]
	}
}

function fibDynamicProgramming(n)
{
	if (n <= 0)
		return 0
	let [prev, cur] = [0, 1]
	while (--n > 0)
		[prev, cur] = [cur, prev + cur]
	return cur
}

function* generatorDP()
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
	for (i of generatorDP())
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

console.time('fibMemo')
console.log(fibMemo(11))
console.timeEnd('fibMemo')

console.time('fibDynamicProgramming')
console.log(fibDynamicProgramming(11))
console.timeEnd('fibDynamicProgramming')

console.time('fibGenerator')
console.log(fibGenerator(11))
console.timeEnd('fibGenerator')