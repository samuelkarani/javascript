function print(n) {
  console.log(`${n} `);
}

function solve(matrix, i, j) {
  if (i >= j) return;
  for (let k = i; k < j; k++) print(matrix[i][k]);
  for (let k = i + 1; k < j; k++) print(matrix[k][j - 1]);
  for (let k = j - 2; k >= i; k--) print(matrix[j - 1][k]);
  for (let k = j - 2; k > i; k--) print(matrix[k][i]);
  solve(matrix, i + 1, j - 1);
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

solve(matrix, 0, matrix.length);
