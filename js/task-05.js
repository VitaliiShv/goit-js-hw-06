const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

console.log(inputEl);
console.log(nameOutputEl);

function onInputChange(event) {
  if (event.currentTarget.value.length > 0) {
    nameOutputEl.textContent = event.currentTarget.value;
  }

  if (event.currentTarget.value.length === 0) {
    nameOutputEl.textContent = "Anonymous";
  }
}

inputEl.addEventListener("input", onInputChange);
