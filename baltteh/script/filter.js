 
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


  