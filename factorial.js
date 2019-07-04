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

function factorialFast(n, res = 1, sign = 1)
{
	if (n < 0)
	{
		sign = -1
		n = -n
	}
	if (n == 0)
		return res * sign
	return factorialFast(n - 1, res * n, sign)
}

console.log(factorialSlow(-4))
console.log(factorialSlow(-5))
console.time('factorialSlow')
console.log(factorialSlow(5))
console.timeEnd('factorialSlow')
console.time('factorialFast')
console.log(factorialFast(5))
console.timeEnd('factorialFast')
console.log(factorialFast(-4))
console.log(factorialFast(-5))