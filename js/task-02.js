// В HTML есть пустой список ul#ingredients.


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  let item = document.createElement('li');
  item.classList.add("item");
  item.textContent = ingredient;
  list.appendChild(item);
}

  console.log(list);


