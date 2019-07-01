const fs = require('fs')

function promisify(reader)
{
	return function read(...paths)
	{
		return Promise.all(paths.map(path =>
			new Promise((res, rej) =>
			{
				reader(path, (err, content) =>
				{
					if (err)
						rej(err)
					else
						res(content)
				})
			})
		))
	}
}

const readFilesPromise = promisify(fs.readFile)

readFilesPromise("file.txt", "file2.txt")
	.then((texts) =>
	{
		console.log('CONTENTS:', texts)
	})
	.catch((err) =>
	{
		console.log('ERROR:', err)
	})

function readerPromise(path)
{
	return new Promise((res, rej) => {
		fs.readFile(path, (err, content) =>
		{
			if (err)
				rej(err)
			else
				res(content)
		})
	})
}

Promise.all([readerPromise("file.txt"), readerPromise("file2.txt")])
	.then((texts) =>
	{
		console.log('CONTENTS:', texts)
	})
	.catch((err) =>
	{
		console.log('ERROR:', err)
	})
