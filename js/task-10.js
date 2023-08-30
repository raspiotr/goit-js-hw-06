function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const input = document.querySelector("input");
// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");

// input.addEventListener("change", (event) => {
//   console.log(event.currentTarget.value);
// });
