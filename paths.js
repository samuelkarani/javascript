// how many paths from start - end when you can only move down or right
function getPaths(start, end)
{
	let [a, b] = start
	let [x, y] = end
	if (x < a || y < b)
		return -1
	if (x == a || y == b)
		return 0;
	count = -1
	if (x > a)
		count += 1 + getPaths([a + 1, b], end)
	if (y > b)
		count += 1 + getPaths([a, b + 1], end)
	return count;
}

console.log(getPaths([0, 0], [2, 2]) + 1)