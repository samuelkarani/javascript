const p1 = new Promise(res => res(1)).then(22).catch(console.log("!")).then(v => v * 9)
const p2 = new Promise(res => res(null))

const p3 = new Promise((res, rej) => rej(res('?')))

const p4 = new Promise((res) => 4)

Promise.resolve(p1)

Promise.all([p1, p2, p3]).then(vs => console.log(vs))

Promise.resolve(p4).then(() => console.log('never resolves')).finally(console.log("finally!"))

Promise.reject(Promise.resolve(1)).then(() => console.log('no')).catch(e => console.log(e, "catch"))

Promise.resolve(90).then((v) => new Promise(res => res(v + 1))).then(v => console.log(v))