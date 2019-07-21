function promiseReduce(...promises)
{
	return promises.reduce((prev, f) => prev.then(f), Promise.resolve())
}

const p1 = () => new Promise(res => res(1))
const p2 = (no) => new Promise(res => res(no + 2))
const p3 = (no) => new Promise(res => res(no * 2))

promiseReduce(p1, p2, null, p3).then((res) => console.log(res))