// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//  после чего рендерится коллекция.При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const bodyEl = document.querySelector('body');
// const inputEl = document.querySelector('input');
// const boxEl = document.querySelector('#boxes');
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');

// createBtn.addEventListener("click", createBoxes);

// function createBoxes() {
// for (let i = 1; i <= inputEl; i += 1) {
//   let box = document.createElement('div');
//   box.style.width = "30px";
//   box.style.height = "30px";
//   box.style.backgroundColor = getRandomHexColor();
//   bodyEl.appendChild(box);
// }
// }

