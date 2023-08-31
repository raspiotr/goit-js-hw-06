function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes() {
  const inputValue = input.valueAsNumber;

  for (let i = 0; i < inputValue; i++) {
    let divItem = document.createElement("div");
    divItem.style.width = `${30 + i * 10}px`;
    divItem.style.height = `${30 + i * 10}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.style.marginTop = "10px";
    boxes.append(divItem);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
