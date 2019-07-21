function subArrays(arrays, n, idx = 0, res = [])
{
    if (idx == n)
        return console.log(res)
    for (let i = 0; i < arrays[idx].length; i++) {
        subArrays(arrays, n, idx + 1, [...res, arrays[idx][i]])
    }
}

let a = [1, 2, 3, 4]
let b = [5, 6, 7]
let c = [8, 9]
subArrays([a, b, c], 3)