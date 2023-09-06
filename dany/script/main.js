// Получаем все элементы с классом .restaurants-link
const restaurantLinks = document.querySelectorAll('.restaurants-link');

// Добавляем обработчик события клика для каждого элемента
restaurantLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Убираем класс .active у всех элементов
    restaurantLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Добавляем класс .active к кликнутому элементу
    link.classList.add('active');
  });
});


// -============================================-
// Получаем все элементы .select-item
const selectItems = document.querySelectorAll('.select-item');

// Добавляем обработчик события клика для каждого элемента .select-item
selectItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedText = item.textContent;
    const dropList = item.closest('.drop-list'); // Находим ближайший родительский элемент .drop-list
    const dropListTitle = dropList.querySelector('.drop-list_title'); // Находим элемент .drop-list_title внутри родительского элемента .drop-list
    
    dropListTitle.textContent = selectedText;
  });
});