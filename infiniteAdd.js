"use strict"
function val(s, i)
{
    return s.charCodeAt(i) - 48
}

function str(n)
{
    return String.fromCharCode(n + 48)
}

function bigger(a, b, aneg, bneg)
{
    if (a.length - aneg == b.length - bneg)
        return (val(a, aneg) - val(b, aneg) > 0) ? a : b
    return a.length - aneg > b.length - bneg ? a : b
}

function rneg(s)
{
    if (s[0] == '-')
        return s.slice(1)
    return s
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
    if (neg)
        typeof s == 'string' ? s = '-' + s : s.unshift('-')
    return s
}

function sub(a, b, neg)
{
    let i, j, borrow, res, idx, av, bv, c
    idx = Math.max(a.length, b.length) + neg
    res = new Array(idx)
    i = a.length - 1, j = b.length - 1
    borrow = 0
    while (i >= 0 || j >= 0)
    {
        av = i >= 0 ? val(a, i) : 0
        if (borrow)
        {
            if (av == 0)
            {
                av = 9
                borrow = 1
            }
            else
            {
                av -= 1
                borrow = 0
            }
        }
        bv = j >= 0 ? val(b, j) : 0
        if (av < bv)
        {
            borrow = 1
            c = av + 10 - bv
        }
        else
            c = av - bv
        res[--idx] = c
        i--
        j--
    }
    if (neg && s[0] != '0')
        res[--idx] = '-'
    return zeros(res).join('')
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
        as = i >= 0 ? val(a, i) : 0
        bs = j >= 0 ? val(b, j) : 0
        sum = as + bs + c
        c = sum >= 10 ? 1 : 0
        res[--idx] = str(sum % 10)
        i--
        j--
    }
    if (c)
        res[--idx] = '1'
    if (neg)
        res[--idx] = '-'
    return zeros(res).join('')
}

function infiniteAdd(a, b)
{
    let aneg, bneg, res, big, small, neg
    aneg = a[0] == '-' ? 1 : 0
    bneg = b[0] == '-' ? 1 : 0
    a = zeros(a)
    b = zeros(b)
    if (aneg && bneg)
        res = add(a.slice(1), b.slice(1), 1)
    else if (!aneg && !bneg)
        res = add(a, b, 0)
    else
    {
        big = bigger(a, b, aneg, bneg)
        small = big === a ? b : a
        neg = big[0] == '-' ? 1 : 0
        res = sub(rneg(big), rneg(small), neg)
    }
    return res
}

console.log(infiniteAdd("11", "89") == "100")
console.log(infiniteAdd("100", "99") == "199")
console.log(infiniteAdd("-100", "99") == "-1")
console.log(infiniteAdd("-100", "-99") == "-199")
console.log(infiniteAdd("100", "-99") == "1")

console.log(infiniteAdd("879879087", "67548976597") == "68428855684")
console.log(infiniteAdd("-876435", "987143265") == "986266830")
console.log(infiniteAdd("-807965", "-34532") == "-842497")