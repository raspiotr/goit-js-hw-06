const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

const itemsArray = [...items];

for (const item of itemsArray) {
  console.log("");
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
}
