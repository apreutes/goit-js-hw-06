const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

const onInputSlider = (event) => {
  const inputValue = Number(event.currentTarget.value);
  refs.span.style.fontSize = `${inputValue}px`;
};

refs.input.addEventListener("input", onInputSlider);
