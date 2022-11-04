const sliderEl = document.querySelector("#font-size-control");
const textEL = document.querySelector("#text");

sliderEl.addEventListener("input", (event) => {
  textEL.style.fontSize = event.currentTarget.value + "px";
});
