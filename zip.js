function zip(A)
{
	if (!A.length)
		return []
	const res = []
	for (let i = 0; i < A[i].length; i++) {
		res[i] = []
	}
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < A[i].length; j++) {
			res[j].push(A[i][j])
		}
	}
	return res
}

let res = zip([[1, 'a'], [2, 'b'], [3, 'c']])
console.log(res)

function unzip(A)
{
	if (!A.length)
		return []
	const res = []
	for (let i = 0; i < A[0].length; i++) {
		res[i] = []
	}
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < A[i].length; j++) {
			res[j].push(A[i][j])
		}
	}
	return res
}

console.log(unzip(res))