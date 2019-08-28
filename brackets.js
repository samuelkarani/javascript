function brackets(s)
{
	let stack = [], c, d

	for (let i = 0; i < s.length; i++)
	{
		c = s[i]
		if (c == '(' || c == '[' || c == '{')
			stack.push(c)
		if (c == ')' || c == ']' || c == '}')
		{
			d = stack.pop()
			if ((c == ')' && d != '(') || (c == ']' && d != '[') || (c == '}' && d != '{'))
				return false;
		}
	}
	return !stack.length;
}

console.log(brackets("()"))
console.log(brackets("("))
console.log(brackets(")"))
console.log(brackets("((()))"))
console.log(brackets("({[]})"))
console.log(brackets("({[}])"))