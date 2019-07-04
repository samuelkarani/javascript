function lcs(s, i, r, j)
{
	if (i == s.length || j == r.length)
		return 0
	if (s[i] == r[j])
	{
		return 1 + lcs(s, i + 1, r, j + 1)
	}
	else
	{
		return Math.max(
			lcs(s, i + 1, r, j),
			lcs(s, i, r, j + 1)
		)
	}
}

function helper(s, i, r, j, cache)
{
	if (i == 0 || j == 0)
		return 0
	if (cache[i][j] == -1)
	{
		if (s[i - 1] == r[j - 1])
		{
			cache[i][j] = 1 + lcs(s, i - 1, r, j - 1)
		}
		else
		{
			cache[i][j] = Math.max(
				lcs(s, i - 1, r, j),
				lcs(s, i, r, j - 1)
			)
		}

	}
	return cache[i][j]
}

function lcsFast(s, r)
{
	let cache = new Array(s.length + 1);
	for (let i = 0; i < s.length + 1; i++) {
		cache[i] = new Array(r.length + 1);
		cache[i].fill(-1)
	}
	return helper(s, s.length, r, r.length, cache)
}

console.time("lcs")
console.log(lcs("AGGTAB", 0, "GXTXAYB", 0))
console.timeEnd("lcs")
console.time("lcsFast")
console.log(lcsFast("AGGTAB","GXTXAYB"))
console.timeEnd("lcsFast")
console.log(lcsFast("sally␣sells␣sea␣shells␣by␣the␣seashore", "sarah␣sold␣salt␣sellers␣at␣the␣salt␣mines"))
console.log(lcsFast("ACGGTGTCGTGCTATGCTGATGCTGACTTATATGCTA", "CGTTCGGCTATCGTACGTTCTATTCTATGATTTCTAA"))