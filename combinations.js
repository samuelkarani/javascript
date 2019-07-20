function combinations(s, n, r = "")
{
	if (r.length === n)
		return console.log(r)
	for (let i = 0; i < s.length && i < n; i++)
		combinations(s.substring(i + 1), n, r + s[i])
}

combinations("12345", 3)