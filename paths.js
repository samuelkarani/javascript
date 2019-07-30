// how many paths from start - end when you can only move down or right
// print all paths
function helper(start, end)
{
	let [a, b] = start
	let [x, y] = end
	let count = -1

	if (x < a || y < b)
		return -1
	if (x == a || y == b)
		return 0;
	if (x > a)
		count += 1 + helper([a + 1, b], end)
	if (y > b)
		count += 1 + helper([a, b + 1], end)
	return count;
}

function getPaths(start, end)
{
	return 1 + helper(start, end)
}

console.log(getPaths([0, 0], [0, 0]))
console.log(getPaths([0, 0], [1, 1]))
console.log(getPaths([0, 0], [2, 2]))
console.log(getPaths([0, 0], [3, 3]))