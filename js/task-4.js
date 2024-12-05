const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const regForm = event.target;
  const email = regForm.elements.email.value;
  const password = regForm.elements.password.value;
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {};
    for (const element of regForm.elements) {
      if (element.name) {
        obj[element.name] = element.value.trim();
      }
    }
    console.log(obj);
    regForm.reset();
  }
});
