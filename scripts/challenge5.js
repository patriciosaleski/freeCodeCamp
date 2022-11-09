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