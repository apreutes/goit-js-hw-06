const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);
console.log(inputLength);

const onInputBlur = (event) => {
  const inputValue = event.currentTarget.value.trim();
  console.log(inputValue.length);
  console.log(inputValue.length === inputLength);
  if (inputValue.length === inputLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", onInputBlur);
