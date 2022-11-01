const romanConvertButton = document.getElementById("roman-button");
const challenge2Input = document.getElementById("challenge2-input");
const challenge2Result = document.getElementById("challenge2-result");
romanConvertButton.disabled = true;
challenge2Input.addEventListener("keyup", () => {
    const value = +challenge2Input.value;
    value < 1 || value > 3999
        ? (romanConvertButton.disabled = true,
            challenge2Input.setCustomValidity("Number should be an integer between 1 and 3999"),
            challenge2Input.reportValidity(),
            challenge2Input.value = "",
            romanConvertButton.setAttribute("title", "Invalid input")) : (romanConvertButton.disabled = false,
        romanConvertButton.removeAttribute("title"));
});
romanConvertButton.addEventListener("click", () => {
    challenge2Result.placeholder = romanConvert(+challenge2Input.value);
});
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
        I: 1
    };
    let roman = "", index;
    for (index in values) {
        while (num >= values[index]) {
            roman += index;
            num = num - values[index];
        }
    }
    return roman;
}
