const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const markupArray = [];

// for (const item of ingredients) {
//   let listElement = document.createElement("li");
//   listElement.textContent = `${item}`;
//   listElement.classList.add("item");
//   markupArray.push(listElement);
// }

ingredients.forEach((item) => {
  let listElement = document.createElement("li");
  listElement.textContent = `${item}`;
  listElement.classList.add("item");
  markupArray.push(listElement);
});

list.prepend(...markupArray);

// markupArray[0] = ingredients
//   .map((item) => `<li class="item">${item}</li>`)
//   .join("");
// list.innerHTML = markupArray[0];

// const markupArray = ingredients.map((item) => {
//   const listElement = document.createElement("li");
//   listElement.textContent = item;
//   listElement.classList.add("item");
//   return  listElement;
// });
// list.prepend(...markupArray);
