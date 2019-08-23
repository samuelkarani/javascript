function distance(s, r, i = s.length, j = r.length)
{
	if (i < 0 || j < 0)
		return 0
	if (s[i - 1] == r[j - 1])
		return distance(s, r, i - 1, j - 1)
	else
		return 1 + Math.min(
			distance(s, r, i - 1, j - 1),
			distance(s, r, i - 1, j),
			distance(s, r, i, j - 1)
		)
}

console.log(distance("car", "cop"))
console.log(distance("intention", "execution"))
console.log(distance("elephant", "relevant"))
console.log(distance("cart", "match"))