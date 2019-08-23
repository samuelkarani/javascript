function maxtrix(A, B)
{
	if (A[0].length != B.length)
		return
	let C = new Array(A.length)
	for (let i = 0; i < A.length; i++) {
		C[i] = new Array(B[0].length)
	}
	let n = A[0].length
	for (let i = 0; i < A.length; i++)
		for (let j = 0; j < B[0].length; j++)
		{
			C[i][j] = 0
			for (let k = 0; k < n; k++)
				C[i][j] += A[i][k] * B[k][j]
		}
	return C
}

let A = [
	[1, 2, 3],
	[4, 5, 6]
]
let B = [
	[6, 3],
	[5, 2],
	[4, 1],
]

let C = maxtrix(A, B)
for (let i = 0; i < C.length; i++) {
	console.log(C[i])
}
