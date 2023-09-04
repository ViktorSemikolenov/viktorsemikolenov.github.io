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


  
// // Находим все элементы .checkbox-row
// const checkboxRows = document.querySelectorAll('.checkbox-row');

// // Добавляем обработчик события клика для каждого элемента .checkbox-row
// checkboxRows.forEach((checkboxRow) => {
//   checkboxRow.addEventListener('click', () => {
//     // Находим элемент confirmation-window
//     const confirmationWindow = document.querySelector('.confirmation-window');

//     // Перемещаем элемент confirmation-window внутрь выбранного checkboxRow
//     checkboxRow.appendChild(confirmationWindow);
//   });
// });


// // Получаем все элементы checkbox-row
// const checkboxRowTwo = document.querySelectorAll('.checkbox-row');

// // Проходимся циклом по всем checkbox-row элементам
// checkboxRowTwo.forEach(row => {
//   // Получаем все .confirmation-window элементы внутри текущего checkbox-row
//   const confirmationWindowsTwo = row.querySelectorAll('.confirmation-window');
  
//   // Если количество .confirmation-window элементов больше одного, то удаляем их
//   if (confirmationWindowsTwo.length > 1) {
//     confirmationWindowsTwo.forEach(element => {
//       element.remove();
//     });
//   }
// });


// var confirmationWindow = document.querySelector('.confirmation-window');
// confirmationWindow.remove();

const searchForms = document.querySelectorAll('.product-filter__body .search-form_filter');
const checkboxRowsResults = document.querySelectorAll('.product-filter__body .search-filter-result');

searchForms.forEach(function(searchForm, index) {
const searchInput = searchForm.querySelector('.search-filter-input');
const checkboxRows = checkboxRowsResults[index].querySelectorAll('.checkbox-row');

searchInput.addEventListener('input', function() {
const searchTerm = searchInput.value.toLowerCase();
checkboxRows.forEach(function(checkboxRow) {
  const label = checkboxRow.textContent.toLowerCase();

  if (label.includes(searchTerm)) {
    checkboxRow.style.display = 'flex';
  } else {
    checkboxRow.style.display = 'none';
  }
});
});
});

function addActiveClass(parentElement) {
  $(parentElement).addClass("active");
  }


$(document).ready(function() {
  $(".checkbox-row").click(function() {
    $(".range-input").removeClass("active");
  });
});



$(document).ready(function() {
  $(".checkbox-row").click(function() {
    var checkboxPos = $(this).position().top;
    var parentPos = $(this).closest(".product-filter__content-content").position().top;
    var windowPos = checkboxPos - parentPos;
    $(".confirmation-window").css({
      top: windowPos,
      "transition-duration": "0.3s"
    });
  });
});