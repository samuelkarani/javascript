function knapSack1(left, value, i = 0)
{
    if (i == weights.length || left == 0)
        return value
    if (left < weights[i])
        return knapSack1(left, value, i + 1)
    else
        return Math.max(
            knapSack1(left, value, i + 1),
            knapSack1(left - weights[i], value + values[i], i + 1)
        )
}

function knapSack2(left, value, i = weights.length - 1)
{
    if (i == -1 || left == 0)
        return value
    if (left < weights[i])
        return knapSack2(left, value, i - 1)
    else    
        return Math.max(
            knapSack2(left, value, i - 1),
            knapSack2(left - weights[i], value + values[i], i - 1)
        )
}

function knapSack3(left, i = 0)
{
    if (i == weights.length || left == 0)
        return 0
    if (left < weights[i])
        return knapSack3(left, i + 1)
    else
        return Math.max(
            knapSack3(left, i + 1),
            values[i] + knapSack3(left - weights[i], i + 1)
        )
}

function knapSack4(left, i = weights.length - 1)
{
    if (i == -1 || left == 0)
        return 0
    if (left < weights[i])
        return knapSack4(left, i - 1)
    else    
        return Math.max(
            knapSack4(left, i - 1),
            values[i] + knapSack4(left - weights[i], i - 1)
        )
}

function knapSackMemo(left, value, cache, i = 0)
{
    if (i == weights.length || left == 0)
        return value
    if (cache[i][left] == -1)
    {
        if (left < weights[i])
            cache[i][left] = knapSackMemo(left, value, cache, i + 1)
        else    
            cache[i][left] = Math.max(
                knapSackMemo(left, value, cache, i + 1),
                knapSackMemo(left - weights[i], value + values[i], cache, i + 1)
            )
    }
    return cache[i][left]
}

function knapSackDynamicProgramming(left, value, cache, i = weights.length - 1)
{
    if (i == -1 || left == 0)
        return value
    if (cache[i][left] == -1)
    {
        if (left < weights[i])
            cache[i][left] = knapSackDynamicProgramming(left, value, cache, i - 1)
        else    
            cache[i][left] = Math.max(
                knapSackDynamicProgramming(left, value, cache, i - 1),
                knapSackDynamicProgramming(left - weights[i], value + values[i], cache, i - 1)
            )
    }
    return cache[i][left]
}

function getCache(r, c)
{
    let A = new Array(r)
    for (let i = 0; i < r; i++) {
        A[i] = (new Array(c)).fill(-1)
    }
    return A
}

function printCache(A, r, c)
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

let weights = [1, 2, 4, 2, 5]
let values = [5, 3, 5, 3, 2]

console.time("knapSack1")
console.log(knapSack1(10, 0))
console.timeEnd("knapSack1")

console.time("knapSack2")
console.log(knapSack2(10, 0))
console.timeEnd("knapSack2")

console.time("knapSack3")
console.log(knapSack3(10))
console.timeEnd("knapSack3")

console.time("knapSack4")
console.log(knapSack4(10))
console.timeEnd("knapSack4")

let cache = getCache(weights.length, 10 + 1)
console.time("knapSackMemo")
console.log(knapSackMemo(10, 0, cache))
console.timeEnd("knapSackMemo")
// printCache(cache, weights.length, 10)

cache = getCache(weights.length, 10 + 1)
console.time("knapSackDynamicProgramming")
console.log(knapSackDynamicProgramming(10, 0, cache))
console.timeEnd("knapSackDynamicProgramming")
// printCache(cache, weights.length, 10)
