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

function lcs2(s, r, sl = s.length - 1, rl = r.length - 1)
{
	if (sl == -1 || rl == -1)
		return 0
	if (s[sl] == r[rl])
		return 1 + lcs2(s, r, sl - 1, rl - 1)
	return Math.max(
		lcs2(s, r, sl - 1, rl),
		lcs2(s, r, sl, rl - 1)
	)
}

function lcs3(s, r, i = 0, j = 0, val = 0)
{
	if (i == s.length || j == r.length)
		return val
	if (s[i] == r[j])
		return lcs3(s, r, i + 1, j + 1, val + 1)
	else
		return Math.max(
			lcs3(s, r, i + 1, j, val),
			lcs3(s, r, i, j + 1, val)
		)
}

function lcs4(s, r, sl = s.length - 1, rl = r.length - 1, val = 0)
{
	if (sl == -1 || rl == -1)
		return val
	if (s[sl] == r[rl])
		return lcs4(s, r, sl - 1, rl - 1, val + 1)
	return Math.max(
		lcs4(s, r, sl - 1, rl, val),
		lcs4(s, r, sl, rl - 1, val)
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
	let cache = new Array(s.length)
	for (let i = 0; i < s.length; i++) {
		cache[i] = (new Array(r.length)).fill(-1)
	}
	let res = lcsMemoHelper(s, r, cache);
	// printTable(cache, s.length, r.length)
	return res
}

function lcsDPHelper(s, r, cache, i = s.length - 1, j = r.length - 1)
{
	if (i == -1 || j == -1)
		return 0
	if (cache[i][j] == -1)
	{
		if (s[i] == r[j])
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
	let cache = new Array(s.length)
	for (let i = 0; i < s.length; i++) {
		cache[i] = (new Array(r.length)).fill(-1)
	}
	let res = lcsDPHelper(s, r, cache)
	// printTable(cache, s.length, r.length)
	return res
}

function printTable(A, r, c)
{
	let s = ''
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			s += A[i][j] + ' '
		}
		s += '\n'
	}
	console.log(s)
}

console.time("lcs1")
console.log(lcs1("AGGTAB", "GXTXAYB"))
console.timeEnd("lcs1")

console.time("lcs2")
console.log(lcs2("AGGTAB", "GXTXAYB"))
console.timeEnd("lcs2")

console.time("lcs3")
console.log(lcs3("AGGTAB", "GXTXAYB"))
console.timeEnd("lcs3")

console.time("lcs4")
console.log(lcs4("AGGTAB", "GXTXAYB"))
console.timeEnd("lcs4")

console.time("lcsMemo")
console.log(lcsMemo("sally␣sells␣sea␣shells␣by␣the␣seashore", "sarah␣sold␣salt␣sellers␣at␣the␣salt␣mines"))
console.timeEnd("lcsMemo")

console.time("lcsDynamicProgramming")
console.log(lcsDynamicProgramming("sally␣sells␣sea␣shells␣by␣the␣seashore", "sarah␣sold␣salt␣sellers␣at␣the␣salt␣mines"))
console.timeEnd("lcsDynamicProgramming")