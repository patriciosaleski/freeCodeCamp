function checkPhone(str) {
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

function phoneValidator(str) {
  const excludeChars = /[a-zA-Z]/g
  if (!excludeChars.test(str)) {
    if (checkPhone(str)) {
      const phoneRegEx = [
        /^[0-9]+$/,
        /((\([0-9]{3}\)) |(\([0-9]{3}\))|[0-9]{3}-)[0-9]{3}-[0-9]{4}/,
        /^([0-9]{3} |[0-9]{1} [0-9]{3} )([0-9]{3} [0-9]{4})/,
      ]
      return phoneRegEx.some((el) => el.test(str) === true)
    } else return null
  } else return null
}

test.each([
  ["1 555 555 5555", true],
  ["AIGYFSAGUSIF", null],
  ["5555555555", true],
  ["5555555", null],
  ["(555)555-5555", true]
])("Phone number %p should return %p", (string, expectedResult) => {
  const result = phoneValidator(string)
  expect(result).toEqual(expectedResult)
})
