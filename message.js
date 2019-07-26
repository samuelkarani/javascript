'use strict'
function contains(dict, prop)
{
	return dict.hasOwnProperty(prop)
}

function resolveMessage(message, dict, res)
{
	let j, cur, rst
	j = 2
	while (j <= message.length)
	{
		cur = message.substring(0, j)
		if (contains(dict, cur))
		{
			res.push(cur)
			rst = message.substring(j, message.length)
			if (j == message.length || resolveMessage(rst, dict, res))
				return res
			else
				res.pop()
		}
		j++;
	}
	return null
}

const res = []
const dict = {
	plan: "",
	plane: "",
	hi: "",
	hip: "",
	planet: "",
	ear: "",
	earth: "",
	tea: "",
	tear: "",
	lane: "",
	net :"",
	the: ""
}
resolveMessage("hiplanetearth", dict, res)
console.log(res.join(" "))