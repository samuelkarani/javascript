"use strict"
function numc(c)
{
    return c.charCodeAt(0) - 48
}

function num(s, i)
{
    return s.charCodeAt(i) - 48
}

function chr(n)
{
    return String.fromCharCode(n + 48)
}

function zeros(s)
{
    let i = 0, neg = 0
    if (s[i] == '-')
    {
        i++
        neg = 1
    }
    for ( ; i < s.length; i++) {
        if (!(s[i] == '0' && i + 1 < s.length))
            break 
    }
    s = s.slice(i)
    if (neg && s[0] != '0')
        typeof s == 'string' ? s = '-' + s : s.unshift('-')
    return s
}

function add(a, b, neg)
{
    let i, j, c, res, sum, idx, as, bs
    i = a.length - 1, j = b.length - 1
    idx = Math.max(a.length, b.length) + 1 + neg
    res = new Array(idx)
    c = 0
    while (i >= 0 || j >= 0)
    {
        as = i >= 0 ? num(a, i) : 0
        bs = j >= 0 ? num(b, j) : 0
        sum = as + bs + c
        c = sum >= 10 ? 1 : 0
        res[--idx] = chr(sum % 10)
        i--
        j--
    }
    if (c)
        res[--idx] = c.toString(10)
    if (neg)
        res[--idx] = '-'
    return zeros(res).join('')
}

function shift(a, i)
{
    return a + '0'.repeat(i)
}

function prod(a, b)
{
    let i, c, idx, res, md, p
    idx = a.length + 1
    res = new Array(idx)
    c = 0
    i = a.length - 1
    while (i >= 0)
    {
        p = num(a, i) * numc(b) + c
        md = p % 10
        c = Math.floor(p / 10)
        res[--idx] = chr(md)
        i--
    }
    if (c)
        res[--idx] = c.toString(10)
    return res.join('')
}

function muliply(a, b, neg)
{
    let i, c, res, idx, j
    idx = neg + a.length + b.length
    res =  '0'.repeat(idx)
    j = c = 0
    i = b.length - 1
    while (i >= 0)
    {
        c = prod(a, b[i])
        c = shift(c, j++)
        res = add(res, c, 0)
        i--;
    }
    if (neg)
        res = '-' + res
    return zeros(res)
}

function infiniteMultiply(a, b)
{
    let aneg, bneg, neg
    aneg = a[0] == '-' ? 1 : 0
    bneg = b[0] == '-' ? 1 : 0
    neg = ((aneg  && !bneg) || (bneg && !aneg)) ? 1 : 0
    a = zeros(a), b = zeros(b)
    a = aneg ? a.slice(1) : a
    b = bneg ? b.slice(1) : b
    return muliply(a, b, neg)
}

console.log(infiniteMultiply("11", "97") === "1067")
console.log(infiniteMultiply("-11", "97") === "-1067")
console.log(infiniteMultiply("11", "-97") === "-1067")
console.log(infiniteMultiply("-11", "-97") === "1067")
let s
console.log((s = infiniteMultiply("879879087", "67548976597")) === "59434931855952726939" ? "ok":  s)
console.log((s = infiniteMultiply("-876435", "987143265")) === "-865166907460275" ? "ok":  s)
console.log((s = infiniteMultiply("-807965", "-34532")) === "27900647380" ? "ok":  s)
console.log((s = infiniteMultiply("-807965", "0")) === "0" ? "ok":  s)
