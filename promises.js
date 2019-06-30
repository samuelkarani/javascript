const wait = time => new Promise(res => setTimeout(res, time))

wait(1000).then(() => console.log("ok!"))

function promiseAll(...promises)
{
	return promises.reduce((prev, cur) => prev.then(cur), Promise.resolve())
}

const asyncFunc = (res, no) =>
	setTimeout(() =>
		res("timer completed for p" + no.toString()), no)

const p1 = () => new Promise(res => asyncFunc(res, 1))
const p2 = () => new Promise(res => asyncFunc(res, 2))

promiseAll(p1(), p2()).then(res => res.map(a => console.log(a)))