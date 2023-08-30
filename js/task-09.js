function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

const handleClick = () => {
  const newColor = getRandomHexColor();
  //console.log(newColor);
  colorText.textContent = newColor;
  body.style.backgroundColor = newColor;
};

changeColorBtn.addEventListener("click", handleClick);
