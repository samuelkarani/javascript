function combinations(s, n, r = "")
{
	if (r.length == n)
		return console.log(r)
	for (let i = 0; i < n && i < s.length; i++) {
		combinations(s.substring(i + 1), n, r + s.charAt(i))
	}
}

combinations("12345", 3)