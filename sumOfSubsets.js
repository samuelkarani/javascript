function sumSubsets(A, v, res = [], i = A.length - 1)
{
    if (v == 0)
        return console.log(res)
    if (i == -1)
        return
    sumSubsets(A, v, res, i - 1)
    if (v >= A[i])
    {
        res.push(A[i])
        sumSubsets(A, v - A[i], res, i - 1)
        res.pop()
    }
    return 0
}

sumSubsets([5, 10, 12, 13, 15, 18], 30)