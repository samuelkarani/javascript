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

const readFilesAsync = promisify(fs.readFile);

readFilesAsync("file.txt", "file2.txt")
	.then((texts) =>
	{
		console.log('CONTENTS:', texts);
	})
	.catch((err) =>
	{
		console.log('ERROR:', err);
	});
