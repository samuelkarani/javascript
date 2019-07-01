function factorialSlow(n)
{
	if (n <= 1)
		return n
	return n * factorialSlow(n - 1)
}

function helper(n, res)
{
	if (n == 0)
		return res
	return helper(n - 1, res * n)
}

function factorialFast(n)
{
	if (n < 0)
		return -helper(-n, 1)
	return helper(n, 1)
}

console.time('factorialSlow')
console.log(factorialSlow(5))
console.timeEnd('factorialSlow')
console.time('factorialFast')
console.log(factorialFast(5))
console.timeEnd('factorialFast')
console.log(factorialFast(-4))