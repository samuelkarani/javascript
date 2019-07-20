function factorialSlow(n)
{
	let sign = 1
	if (n < 0)
	{
		sign = -1
		n = -n
	}
	if (n <= 1)
		return n
	return sign * n * factorialSlow(n - 1)
}

function factorialTailRecursion(n, res = 1, sign = 1)
{
	if (n < 0)
	{
		sign = -1
		n = -n
	}
	if (n == 0)
		return res * sign
	return factorialTailRecursion(n - 1, res * n, sign)
}

console.log(factorialSlow(-4))
console.log(factorialSlow(-5))
console.time('factorialSlow')
console.log(factorialSlow(5))
console.timeEnd('factorialSlow')
console.time('factorialTailRecursion')
console.log(factorialTailRecursion(5))
console.timeEnd('factorialTailRecursion')
console.log(factorialTailRecursion(-4))
console.log(factorialTailRecursion(-5))