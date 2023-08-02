 
  // Получаем ссылки на элементы DOM
  const btnOpenFilter = document.querySelector('.btn-open-filter');
  const productFilter = document.querySelector('.product-filter');
  const closeOverlay = document.querySelector('.close-overlay');
  
  // Добавляем обработчик события для кнопки открытия фильтра
  btnOpenFilter.addEventListener('click', function() {
    productFilter.classList.add('show');
    closeOverlay.classList.add('show');
  });
  
  // Добавляем обработчик события для закрытия фильтра по клику на оверлей
  closeOverlay.addEventListener('click', function() {
    productFilter.classList.remove('show');
    closeOverlay.classList.remove('show');
  });


  
// Находим все элементы .checkbox-row
const checkboxRows = document.querySelectorAll('.checkbox-row');

// Добавляем обработчик события клика для каждого элемента .checkbox-row
checkboxRows.forEach((checkboxRow) => {
  checkboxRow.addEventListener('click', () => {
    // Находим элемент confirmation-window
    const confirmationWindow = document.querySelector('.confirmation-window');

    // Перемещаем элемент confirmation-window внутрь выбранного checkboxRow
    checkboxRow.appendChild(confirmationWindow);
  });
});

// Получение элементов DOM
const searchInput = document.querySelector('.product-filter__body .search-filter-input');
const checkboxRowsSearch = document.querySelectorAll('.search-filter-result .checkbox-row');

// Обработчик события ввода в поле поиска
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  
  // Перебор всех вариантов поиска
  checkboxRowsSearch.forEach(function(checkboxRow) {
    const label = checkboxRow.textContent.toLowerCase();
    
    // Скрытие или отображение варианта поиска в зависимости от соответствия
    if (label.includes(searchTerm)) {
      checkboxRow.style.display = 'flex';
    } else {
      checkboxRow.style.display = 'none';
    }
  });
});
