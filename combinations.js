function combinations(s, n, r = "")
{
	if (r.length === n)
	{
		console.log(r)
		return
	}
	for (let i = 0; i < s.length && i < n; i++)
	{
		combinations(s.substring(i + 1), n, r + s[i])
	}
}

combinations("12345", 3)