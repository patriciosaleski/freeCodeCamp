function checkCashRegister(price, cash, cid) {
  let difference = cash - price
  const resultObject = {
    status: "",
    change: []
  }

  const totalCid = cid
    .flat()
    .filter((el) => typeof el === "number")
    .reduce((prev, curr) => prev + curr, 0)

  if(totalCid === difference) {
    resultObject.status = "CLOSED"
    resultObject.change = cid
    return resultObject
  }

  const currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ]

  const change = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0]
  ]

  const availableCurrency = [...cid].reverse()
  for (let i = 0; i < currency.length; i++) {
    availableCurrency[i][1] = +(availableCurrency[i][1] / currency[i][1]).toFixed(0)
  }

  for (let i = 0; i < cid.length; i++) {
    while (difference >= currency[i][1] && availableCurrency[i][1] !== 0) {
      difference = difference.toFixed(2)
      change[i][1] += +currency[i][1]
      difference -= currency[i][1]
      availableCurrency[i][1]--
    }
  }

  if (totalCid < difference || difference !== 0) {
    resultObject.status = "INSUFFICIENT_FUNDS"
  } else {
    resultObject.status = "OPEN"
    resultObject.change = change.filter((el) => el[1] > 0)
  }

  return resultObject
}

test.each([
  [
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ],
    { status: "OPEN", change: [["QUARTER", 0.5]] },
  ],
  [
    3.26,
    100,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ],
    {
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04],
      ],
    },
  ],
  [
    19.5,
    20,
    [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
    { status: "INSUFFICIENT_FUNDS", change: [] },
  ],
  [
    19.5,
    20,
    [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
    {
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    },
  ],
])("Test", (order, payment, cid, expectedResult) => {
  const result = checkCashRegister(order, payment, cid)
  expect(result).toEqual(expectedResult)
})
