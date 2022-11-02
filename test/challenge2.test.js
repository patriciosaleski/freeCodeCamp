function romanConvert(num) {
  const values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let roman = "",
    index

  for (index in values) {
    while (num >= values[index]) {
      roman += index
      num = num - values[index]
    }
  }
  return roman
}

test.each([
    [14, 'XIV'],
    [100, 'C'],
    [3999, 'MMMCMXCIX'],
    [354, 'CCCLIV']
])(
    "Number %p is %p in roman numerals",
    (number, expectedResult) => {
        const result = romanConvert(number)
        expect(result).toEqual(expectedResult)
    }
)
