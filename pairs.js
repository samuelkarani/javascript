function pairs(strings, n, res = [], idx = 0)
{
    if (idx == n)
        return console.log(res)
    for (let i = 0; i < strings[idx].length; i++) {
    {
		res[idx] = strings[idx][i]
		pairs(strings, n, res, idx + 1)
	}
    }
}

pairs(["abc", "xyz"], 2)