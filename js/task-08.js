const formEl = document.querySelector(".login-form");

// console.log(formEl);
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены");
  }
  const formData = { email, password };
  console.log(formData);
  formEl.reset();
}
