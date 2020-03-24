function solve(start, end, obj, cache, path) {
  if (obj[start].includes(end) || start === end) {
    path.push(end);
    return true;
  }
  cache.push(start);
  for (const key of obj[start]) {
    if (cache.includes(key)) continue;
    path.push(key);
    if (solve(key, end, obj, cache, path)) return true;
    else path.pop();
  }
  return false;
}

const obj = {
  a: ["b", "c", "d"],
  b: ["a", "c"],
  c: ["b", "a"],
  d: ["e"],
  e: ["d"]
};

const path = [];
console.log(solve("c", "e", obj, [], path));
console.log(path);
