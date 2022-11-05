const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
let value = 0;

decrementBtnEl.addEventListener("click", () => {
  value -= 1;
  valueEl.innerHTML = value;
});

incrementBtnEl.addEventListener("click", () => {
  value += 1;
  valueEl.innerHTML = value;
});
