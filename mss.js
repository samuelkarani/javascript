// find the largest sum of from all possible subarrays (subarray sizes are 1-n inclusive)

function mssDivideAndConquer(A, s = 0, e = A.length)
{
    if (e - s < 1)
        return
    if (e - s == 1)
        return A[0]
    let m, a, b, leftSum, rightSum, sum
    m = (s + e) / 2
    a = mssDivideAndConquer(A, s, m)
    b = mssDivideAndConquer(A, m, e)
    leftSum = rightSum = Number.MIN_VALUE
    sum = 0
    for (let i = m - 1; i >= 0; i--)
    {
        sum += A[i]
        if (sum > leftSum)
            leftSum = sum
    }
    sum = 0
    for (let i = m; i < e; i++)
    {
        sum += A[i]
        if (sum > rightSum)
            rightSum = sum
    }
    return Math.max(leftSum + rightSum, a, b);
}

function mssDynamicProgramming(A)
{
    let sum, maxSum = Number.MIN_VALUE;
    for (let i = 0; i < A.length; i++)
    {
        sum = 0
        for (let j = i; j < A.length; j++)
        {
            sum += A[j]
            if (sum > maxSum)
                maxSum = sum
        }
    }
    return maxSum
}

function mssBruteForce(A)
{
    let sum, maxSum = Number.MIN_VALUE;
    for (let i = 1; i <= A.length; i++)
    {
        for (let j = 0; j < A.length; j++)
        {
            sum = 0
            for (let k = j; k < j + i; k++)
                sum += A[k]
            if (sum > maxSum)
                maxSum = sum
        }
    }
    return maxSum
}

console.log(mssBruteForce([3, -2, 5, -1]))
console.log(mssBruteForce([3, 2, 5, -1]))

console.log(mssDynamicProgramming([3, -2, 5, -1]))
console.log(mssDynamicProgramming([3, 2, 5, -1]))

console.log(mssDivideAndConquer([3, -2, 5, -1]))
console.log(mssDivideAndConquer([3, 2, 5, -1]))