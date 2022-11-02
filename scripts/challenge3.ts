const decipherButton = document.getElementById('caesars-cipher') as HTMLInputElement
const challenge3Input = document.getElementById('challenge3-input') as HTMLInputElement
const challenge3Result = document.getElementById('challenge3-result') as HTMLInputElement

decipherButton.disabled = true

challenge3Input.addEventListener("keyup", () => {
  const value = challenge3Input.value
  console.log(value)
  value.length > 0
    ? (decipherButton.disabled = false)
    : (decipherButton.disabled = true)
})

function decipher(str: string) {
  const encrypted = str.toUpperCase().split("")
  const alphabetAtoM = "ABCDEFGHIJKLM".split("")
  const alphabetNtoZ = "NOPQRSTUVWXYZ".split("")
  const deciphered: string[] = []

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

decipherButton.addEventListener('click', () => {
    challenge3Result.placeholder = decipher(challenge3Input.value)
})
