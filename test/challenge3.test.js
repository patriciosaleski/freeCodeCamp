function decipher(str) {
  const encrypted = str.toUpperCase().split("")
  const alphabetAtoM = "ABCDEFGHIJKLM".split("")
  const alphabetNtoZ = "NOPQRSTUVWXYZ".split("")
  const deciphered = []

  encrypted.forEach((el) => {
    if (alphabetAtoM.indexOf(el) !== -1) {
      deciphered.push(alphabetNtoZ[alphabetAtoM.indexOf(el)])
    } else if (alphabetNtoZ.indexOf(el) !== -1) {
      deciphered.push(alphabetAtoM[alphabetNtoZ.indexOf(el)])
    } else {
      deciphered.push(el)
    }
  })

  return deciphered.join("")
}

test.each([
  ["SERR PBQR PNZC", "FREE CODE CAMP"],
  ["SERR CVMMN!", "FREE PIZZA!"],
  ["SERR YBIR?", "FREE LOVE?"],
])("%p equals to %p with Caesars cipher", (string, expectedResult) => {
  const result = decipher(string)
  expect(result).toEqual(expectedResult)
})
