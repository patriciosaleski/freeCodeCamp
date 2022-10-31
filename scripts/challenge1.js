"use strict";
const checkButton = document.getElementById("palindrome-button");
const resetButton = document.getElementById("reset-input");
const result = document.getElementById("challenge1-result");
const input = document.getElementById("challenge1-input");
checkButton.disabled = true;
resetButton.addEventListener("click", () => {
    resetButton.parentElement.children[0].textContent = "";
    result.placeholder = "waiting";
    checkButton.disabled = true;
});
input.addEventListener("keyup", () => {
    const value = input.textContent;
    value.length > 0
        ? (checkButton.disabled = false)
        : (checkButton.disabled = true);
    result.placeholder = "waiting";
});
function checkPalindrome(str) {
    const regEx = /[_\W]+/g;
    const string = str.replace(regEx, "").toLowerCase();
    if (string.length == 0)
        return false;
    const reverseString = string.split("").reverse().join("");
    return string === reverseString;
}
checkButton.addEventListener("click", () => {
    checkPalindrome(input.textContent)
        ? (result.placeholder = "true")
        : (result.placeholder = "false");
});
