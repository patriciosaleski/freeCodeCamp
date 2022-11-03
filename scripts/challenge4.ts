const challenge4Input = document.getElementById('challenge4-input') as HTMLInputElement
const challenge4Result = document.getElementById('challenge4-result') as HTMLInputElement
const validatorButton = document.getElementById('us-phone-validator') as HTMLInputElement

validatorButton.disabled = true

challenge4Input.addEventListener("keyup", () => {
  const excludeChars = /[a-zA-Z]/g
  const value = challenge4Input.value
  value.length > 0 && value.length <= 14 && !excludeChars.test(value)
    ? (validatorButton.disabled = false)
    : (validatorButton.disabled = true)
})

function checkPhone(str: string) {
  switch (str.length) {
    case 10:
    case 12:
    case 13:
    case 14:
      return true

    default:
      return false
  }
}

function phoneValidator(str: string) {
  if (checkPhone(str)) {
    const phoneRegEx = [
      /^[0-9]+$/,
      /((\([0-9]{3}\)) |(\([0-9]{3}\))|[0-9]{3}-)[0-9]{3}-[0-9]{4}/,
      /^([0-9]{3} |[0-9]{1} [0-9]{3} )([0-9]{3} [0-9]{4})/,
    ]
    return phoneRegEx.some((el) => el.test(str) === true)
  } else {
    challenge4Input.setCustomValidity(
      "Invalid phone number. Number should be 10, 12 to 14 in length."
    )
    challenge4Input.reportValidity()
    validatorButton.disabled = true
  }
}

validatorButton.addEventListener("click", () => {
  phoneValidator(challenge4Input.value as string)
    ? (challenge4Result.placeholder = "true")
    : (challenge4Result.placeholder = "false")
})
