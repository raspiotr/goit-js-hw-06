const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length == textInput.dataset.length) {
    textInput.setAttribute("class", "valid");
  } else {
    textInput.setAttribute("class", "invalid");
  }
});
