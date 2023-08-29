const inputRange = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

outputText.style.fontSize = "56px";

inputRange.addEventListener("input", (event) => {
  outputText.style.fontSize = `${event.currentTarget.value}px`;
});
