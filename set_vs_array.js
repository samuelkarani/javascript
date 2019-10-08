function test(n = 10000000) {
  const array = [];
  const set = new Set();
  for (let i = 0; i < n; i++) {
    array.push(i);
    set.add(i);
  }
  console.time("array");
  array.includes(n);
  console.timeEnd("array");

  console.time("set");
  set.has(n);
  console.timeEnd("set");
}

test();
