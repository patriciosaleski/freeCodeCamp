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
      const regEx = /^([+]?1[\s]?)?(((\(\d{3}\)[ ]{0,1}|\d{3}[\s-]))\d{3}[\s|-]\d{4}|\d{10}$)/
      return regEx.test(str)
    } else return null
  } else return null
}

test.each([
  ["1 555 555 5555", true],
  ["AIGYFSAGUSIF", null],
  ["5555555555", true],
  ["5555555", null],
  ["(555)555-5555", true],
  ["10 (757) 622-7382", null],
  ["2(757)6227382", null],
  ["-1 (757) 622-7382", null]
])("Phone number %p should return %p", (string, expectedResult) => {
  const result = phoneValidator(string)
  expect(result).toEqual(expectedResult)
})
