// Получаем ссылки на элементы кнопок и секцию с продуктами
const listBtn = document.querySelector('.type-cards-btn__list');
const tableBtn = document.querySelector('.type-cards-btn__table');
const productSection = document.querySelector('.section-product-filter__product');

// Обработчик события для кнопки списка
listBtn.addEventListener('click', function() {
  // Добавляем класс к секции с продуктами
  productSection.classList.add('section-product-filter__product-list');
});

// Обработчик события для кнопки таблицы
tableBtn.addEventListener('click', function() {
  // Удаляем класс из секции продуктами
  productSection.classList.remove('section-product-filter__product-list');
});
