function helper(A, res)
{
  for (let i = 0; i < A.length; i++)
  {
    if (Array.isArray(A[i]))
      helper(A[i], res)
    else
      res.push(A[i])
  }
}

function flatten(A)
{
  const res = [];
  helper(A, res)
  return res
}

const a = flatten([1, [2, [4], 3, [5, [6], 7]], 8])
const b = [1, 2, 3]
console.log(a)
console.log(b)