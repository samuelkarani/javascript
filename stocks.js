function pickStocks(A)
{
	if (A.length < 2)
		return null
	const res = [0, 1]
	let smallest = 0
	let diff = A[1] - A[0]
	for (let i = 1; i < A.length; i++)
	{
		if (i > 1 && A[i] - A[smallest] > diff)
		{
			res[0] = smallest
			res[1] = i
			diff = A[i] - A[smallest]
		}
		if (A[i] < A[smallest])
			smallest = i;
	}
	return res
}

function pickStocks2(A)
{
	let smallest, largest
	smallest = 0
	largest = 1
	for (let i = 2; i < A.length; i++)
	{
		if (A[i - 1] < A[smallest])
			smallest = i - 1
		if (A[i] > A[largest])
			largest = i
	}
	return [smallest, largest]
}

console.log(pickStocks([17, 4, 8, 1]))
console.log(pickStocks2([17, 4, 8, 1]))

console.log(pickStocks([4, 2, 0, 1, 3, 5]))
console.log(pickStocks2([4, 2, 0, 1, 3, 5]))

console.log(pickStocks([2, 4, 1, 2, 5]))
console.log(pickStocks2([2, 4, 1, 2, 5]))