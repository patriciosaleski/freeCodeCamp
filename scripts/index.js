const resetButton = Array.from(document.querySelectorAll("button[name='reset-button']"))
  
resetButton.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.children[0].value = ""
    el.parentElement.children[1].disabled = true
    el.parentElement.children[1].setAttribute("title", "Invalid input")
    el.parentElement.children[3].placeholder = "waiting"
  })
})
  