function sumSubsets(A, v, res, i = A.length - 1)
{
    if (v == 0)
        return 1
    if (i == -1)
        return 0
    let a, b
    a = sumSubsets(A, v, res, i - 1)
    if (a)
        return 1
    if (v >= A[i])
    {
        res.push(A[i])
        b = sumSubsets(A, v - A[i], res, i - 1)
        if (b)
            return 1
        else
            res.pop()
    }
    return 0
}

let res = []
sumSubsets([5, 10, 12, 13, 15, 18], 30, res)
console.log(res)