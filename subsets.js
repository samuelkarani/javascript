function subsets(s, r = "")
{
	if (s.length == 0)
	{
		console.log(r)
		return
	}
	let rst = s.substring(1)
	subsets(rst, r + s[0])
	subsets(rst, r)
}

subsets("abc")
subsets("apple")

function bitSubsets(N)
{
	for (let i = 0; i < Math.pow(2, N); i++) {
		let res = ''
		for (let j = 0; j < N; j++) {
			if (i & (1 << j))
				res += '1'
			else
				res += '0'
		}
		console.log(res)
	}
}

bitSubsets(3)