function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");

buttonCreate.addEventListener("click", (event) => {
  const inputNumber = document.querySelector('[name="number"]');
  const number = Number.parseInt(inputNumber.value);
  if (!number || number < 1 || number > 100) {
    alert("Please enter a number from 1 to 100");
    inputNumber.value = "";
  } else {
    createBoxes(number);
    inputNumber.value = "";
  }
});
buttonDestroy.addEventListener("click", (event) => {
  destroyBoxes();
});

function createBoxes(amount) {
  const widthBase = 30;
  const heightBase = 30;
  const boxes = document.querySelector("div#boxes");
  let collection = [];

  for (let index = 0; index < amount; index++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = widthBase + 10 * index + "px";
    newDiv.style.height = heightBase + 10 * index + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    collection.push(newDiv);
  }
  boxes.append(...collection);
}
function destroyBoxes() {
  document.querySelector("div#boxes").replaceChildren();
}
