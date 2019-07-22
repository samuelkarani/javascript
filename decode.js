function print(r)
{
    s = ""
    for (let i = 0; i < r.length; i++) {
        s += String.fromCharCode(Number(r[i]) + 96)
    }
    console.log(s)
}

function decode(s, r = [], i = 0)
{
    let count = 0
    if (i >= s.length)
    {
        print(r)
        return 1
    }
    else
    {
        count += decode(s, [...r, s[i]], i + 1)
        if (i + 2 <= s.length)
        {
            let t = s.substring(i, i + 2)
            let n = Number(t)
            if (n >= 1 && n <= 26)
                count += decode(s, [...r, t], i + 2)
        }
    }
    return count
}

console.log(decode("1123"))

console.log(decode("1111222334"))