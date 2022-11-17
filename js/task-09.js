function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

const changeColor = (event) => {
  const colorEl = getRandomHexColor(event);
  refs.body.style.backgroundColor = colorEl;
  refs.span.textContent = colorEl;
};

refs.button.addEventListener("click", changeColor);
