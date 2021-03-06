function swap(A, i, j)
{
    let tmp = A[i]
    A[i] = A[j]
    A[j] = tmp
}

function partitionLomuto(A, s, e)
{
    let idx = s
    for (let i = s; i < e; i++) {
        if (A[i] < A[e])
            swap(A, i, idx++)
    }
    swap(A, idx, e)
    return idx
}

function quickSortLomuto(A, s = 0, e = A.length - 1)
{
    if (s < e)
    {
        let idx = partitionLomuto(A, s, e)
        quickSortLomuto(A, s, idx - 1)
        quickSortLomuto(A, idx + 1, e)
    }
}

function partitionHoare(A, s, e)
{
    let p = A[Math.ceil((s + e) / 2)]
    while (1)
    {
        while (A[s] < p)
            s++
        while (A[e] > p)
            e--
        if (s >= e)
            return s
        swap(A, s++, e--)
    }
}

function quickSortHoare(A, s = 0, e = A.length - 1)
{
    if (s < e)
    {
        let idx = partitionHoare(A, s, e)
        quickSortHoare(A, s, idx - 1)
        quickSortHoare(A, idx, e)
    }
}

function printArray(A)
{
    let s = ""
    for (let i = 0; i < A.length; i++) {
        s += A[i] + ' '
    }
    console.log(s)
}

const randomArray = n => Array.from({ length: n }, () => Math.floor(Math.random() * n))
let A = randomArray(50)
printArray(A)
console.time("quickSortLomuto")
quickSortLomuto(A)
console.timeEnd("quickSortLomuto")
printArray(A)

A = randomArray(50)
printArray(A)
console.time("quickSortHoare")
quickSortHoare(A)
console.timeEnd("quickSortHoare")
printArray(A)