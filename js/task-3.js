const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
console.log(nameInput);
console.log(nameOutput);

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value.trim() || "Anonymous";
});
