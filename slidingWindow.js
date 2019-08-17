function  slidingWindow(A, n)
{
	let dequeue = []
	for (let i = 0; i < A.length; i++) {
		if (dequeue[0] + n <= i)
			dequeue.shift()
		while (dequeue.length > 0 && A[dequeue[dequeue.length - 1]] < A[i])
			dequeue.pop()
		dequeue.push(i)
		if (i >= n - 1)
			console.log(A[dequeue[0]])
	}
}

slidingWindow([10, -2, 2, 21, -5, 42, 3, -6, 17, 11], 4)
