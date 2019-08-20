class List
{
	constructor(value, next = null)
	{
		this.value = value
		this.next = next
	}
	add(value)
	{
		let node = this;
		while (node.next != null)
			node = node.next
		node.next = new List(value)
	}
	print()
	{
		let r = ''
		for (let node = this; node; node = node.next)
			r += node.value + ' '
		console.log(r)
	}
}

function ndremove(list, value)
{
	if (list == null)
		return null
	if (list.value == value)
		return ndremove(list.next, value)
	return new List(list.value, ndremove(list.next, value))
}

function dRemove(list, value)
{
	if (list == null)
		return null
	if (list.value == value)
		return dRemove(list.next, value)
	list.next = dRemove(list.next, value)
	return list
}

let list = new List(1, null)
for (let i = 2; i < 10; i++) {
	list.add(i);
}

list.print()
let newList = ndremove(list, 3)
newList.print()

dRemove(list, 4)
list.print()