const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markupArray = [];

for (const item of ingredients) {
  let listElement = document.createElement("li");
  listElement.textContent = `${item}`;
  listElement.classList.add("item");
  markupArray.push(listElement);
}

const list = document.querySelector("#ingredients");
list.prepend(...markupArray);
