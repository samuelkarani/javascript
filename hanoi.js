function hanoi(n, a, b, c)
{
    if (n > 0)
    {
        hanoi(n - 1, a, c, b)
        console.log(`Move from ${a} to ${c}`)
        hanoi(n - 1, b, a, c)
    }
}

hanoi(1, 'A', 'B', 'C')
console.log("")
hanoi(2, 'A', 'B', 'C')
console.log("")
hanoi(3, 'A', 'B', 'C')