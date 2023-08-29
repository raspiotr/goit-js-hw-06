let counterValue = 0;
const value = document.querySelector("#value");

const decrBtn = document.querySelector('button[data-action = "decrement"]');
const incrBtn = document.querySelector('button[data-action = "increment"]');

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
});
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = `${counterValue}`;
});
