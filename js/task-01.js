// Кількість категорій

const listItemEl = document.querySelectorAll("li.item");
console.log(`Amount of categories: ${listItemEl.length}`);

//Текст заголовку та кількість елементів

listItemEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
