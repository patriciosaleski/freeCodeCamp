function checkPalindrome(str) {
  const regEx = /[_\W]+/g
  const string = str.replace(regEx, "").toLowerCase()

  if (string.length == 0) return false

  const reverseString = string.split("").reverse().join("")

  return string === reverseString
}

test.each([
  ["AHkfjasiu248[[AS¨S**]!aa", false],
  ["12227!_!!2221", true],
  ["_!%_", false],
  ["", false],
  ["Was it a car or a cat I saw?", true]]
)(
  "given %p, checkPalindrome returns %p",
  (string, expectedResult) => {
    const result = checkPalindrome(string)
    expect(result).toEqual(expectedResult)
  }
)
