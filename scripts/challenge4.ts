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
    const regEx = /^([+]?1[\s]?)?(((\(\d{3}\)[ ]{0,1}|\d{3}[\s-]))\d{3}[\s|-]\d{4}|\d{10}$)/
    return regEx.test(str)
  } else {
    challenge4Input.setCustomValidity(
      "Invalid phone number. Check and try again."
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
