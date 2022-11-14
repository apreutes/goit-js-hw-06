const minusButton = document.querySelector('[data-action="decrement"]');
const plusButton = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

minusButton.addEventListener("click", decrement);
plusButton.addEventListener("click", increment);
