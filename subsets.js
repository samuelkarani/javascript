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