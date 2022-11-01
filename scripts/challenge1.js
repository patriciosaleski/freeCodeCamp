const checkPalindromeButton = document.getElementById("palindrome-button");
const challenge1Result = document.getElementById("challenge1-result");
const challenge1Input = document.getElementById("challenge1-input");
checkPalindromeButton.disabled = true;
challenge1Input.addEventListener("keyup", () => {
    const value = challenge1Input.value;
    value.length > 0
        ? (checkPalindromeButton.disabled = false)
        : (checkPalindromeButton.disabled = true);
});
function checkPalindrome(str) {
    const regEx = /[_\W]+/g;
    const string = str.replace(regEx, "").toLowerCase();
    if (string.length == 0)
        return false;
    const reverseString = string.split("").reverse().join("");
    return string === reverseString;
}
checkPalindromeButton.addEventListener("click", () => {
    checkPalindrome(challenge1Input.value)
        ? (challenge1Result.placeholder = "true")
        : (challenge1Result.placeholder = "false");
});
