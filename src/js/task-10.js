function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");
const createBtnEl = inputEl.nextElementSibling;
const destroyBtnEl = createBtnEl.nextElementSibling;

let els = [];

createBtnEl.addEventListener("click", () => {
  els = [];
  boxesEl.innerHTML = "";
  for (let i = 1; i <= inputEl.value; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = `${30 + (i - 1) * 10}px`;
    newEl.style.height = `${30 + (i - 1) * 10}px`;
    els.push(newEl);
  }
  boxesEl.append(...els);
});

destroyBtnEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
