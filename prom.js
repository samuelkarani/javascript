const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 1000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  }, 3000);
});

p3.then(msg => {
  console.log(msg);
  console.log(p1);
  return p1;
}).then(msg => {
  console.log(msg);
});

p2.then(msg => {
  console.log(msg);
  console.log(p1);
  return p1;
}).then(msg => {
  console.log(msg);
});
