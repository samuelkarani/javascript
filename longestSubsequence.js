function lcs1(s, r, i = 0, j = 0)
{
	if (i == s.length || j == r.length)
		return 0
	if (s[i] == r[j])
		return 1 + lcs1(s, r, i + 1, j + 1)
	else
		return Math.max(
			lcs1(s, r, i + 1, j),
			lcs1(s, r, i, j + 1)
		)
}

function lcs2(s, r, sl = s.length, rl = r.length)
{
	if (sl == 0 || rl == 0)
		return 0
	if (s[sl - 1] == r[rl -1])
		return 1 + lcs2(s, r, sl - 1, rl - 1)
	return Math.max(
		lcs2(s, r, sl - 1, rl),
		lcs2(s, r, sl, rl - 1)
	)
}

function lcsMemoHelper(s, r, cache, i = 0, j = 0)
{
	if (i == s.length || j == r.length)
		return 0
	if (cache[i][j] == -1)
	{
		if (s[i] == r[j])
			cache[i][j] = 1 + lcsMemoHelper(s, r, cache, i + 1, j + 1)
		else
			cache[i][j] = Math.max(
				lcsMemoHelper(s, r, cache, i + 1, j),
				lcsMemoHelper(s, r, cache, i, j + 1)
			)
	}
	return cache[i][j]
}

function lcsMemo(s, r)
{
	let cache = new Array(s.length + 1)
	for (let i = 0; i < s.length + 1; i++) {
		cache[i] = (new Array(r.length + 1)).fill(-1)
	}
	return lcsMemoHelper(s, r, cache);
}

function lcsDPHelper(s, r, cache, i = s.length, j = r.length)
{
	if (i == 0 || j == 0)
		return 0
	if (cache[i][j] == -1)
	{
		if (s[i - 1] == r[j - 1])
			cache[i][j] = 1 + lcsDPHelper(s, r, cache, i - 1, j - 1)
		else
			cache[i][j] = Math.max(
				lcsDPHelper(s, r, cache, i - 1, j),
				lcsDPHelper(s, r, cache, i, j - 1)
			)
	}
	return cache[i][j]
}

function lcsDynamicProgramming(s, r)
{
	let cache = new Array(s.length + 1)
	for (let i = 0; i < s.length + 1; i++) {
		cache[i] = (new Array(r.length + 1)).fill(-1)
	}
	return lcsDPHelper(s, r, cache)
}

console.time("lcs1")
console.log(lcs1("AGGTAB", "GXTXAYB"))
console.timeEnd("lcs1")

console.time("lcs2")
console.log(lcs2("AGGTAB", "GXTXAYB"))
console.timeEnd("lcs2")

console.time("lcsMemo")
console.log(lcsMemo("sally␣sells␣sea␣shells␣by␣the␣seashore", "sarah␣sold␣salt␣sellers␣at␣the␣salt␣mines"))
console.timeEnd("lcsMemo")

console.time("lcsDynamicProgramming")
console.log(lcsDynamicProgramming("sally␣sells␣sea␣shells␣by␣the␣seashore", "sarah␣sold␣salt␣sellers␣at␣the␣salt␣mines"))
console.timeEnd("lcsDynamicProgramming")