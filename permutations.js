function permutations(s, r = "")
{
    if (!s.length)
        return console.log(r);
    for (let i = 0; i < s.length; i++) {
        permutations(s.substring(0, i) + s.substring(i + 1), r + s[i]);
    }
}

permutations("123")