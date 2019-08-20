// how many paths from start - end when you can only move down or right
// print all paths
function helper(start, end)
{
	let [a, b] = start
	let [x, y] = end
	let count = -1
	if (x == a && y == b)
		return 0;
	if (x > a)
		count += 1 + helper([a + 1, b], end)
	if (y > b)
		count += 1 + helper([a, b + 1], end)
	return count;
}

function getPaths(start, end)
{
	let [a, b] = start
	let [x, y] = end
	if (x < a || y < b)
		return -1
	if (x == a && y == b)
		return 0;
	return 1 + helper(start, end)
}

console.log(getPaths([0, 0], [0, 0]))
console.log(getPaths([0, 0], [1, 1]))
console.log(getPaths([0, 0], [2, 2]))
console.log(getPaths([0, 0], [3, 3]))

// start = 0, 0
function getPaths2(x, y)
{
	if (x == 0 && y == 0)
		return 0
	if (x == 0 || y == 0)
		return 1
	return getPaths2(x - 1, y) + getPaths2(x, y - 1)
}

console.log(getPaths2(1, 1))
console.log(getPaths2(2, 2))
console.log(getPaths2(3, 3))

console.time("getPaths2")
console.log(getPaths2(10, 10))
console.timeEnd("getPaths2")

function getPathsDP(x, y, table)
{
	if (table == undefined)
	{
		table = new Array(x + 1)
		for (let i = 0; i < x + 1; i++) {
			table[i] = new Array(y + 1)
			for (let j = 0; j < y + 1; j++) {
				table[i][j] = 0;
			}
		}
	}
	if (table[x][y])
		return table[x][y]
	if (x == 0 && y == 0)
		return 0
	if (x == 0 || y == 0)
		return 1
	return table[x][y] = getPathsDP(x - 1, y, table) + getPathsDP(x, y - 1, table)
}

console.log(getPathsDP(1, 1))
console.log(getPathsDP(2, 2))
console.log(getPathsDP(3, 3))
console.time("getPathsDP")
console.log(getPathsDP(10, 10))
console.timeEnd("getPathsDP")