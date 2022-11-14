const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  navEl.appendChild(itemEl);
});
