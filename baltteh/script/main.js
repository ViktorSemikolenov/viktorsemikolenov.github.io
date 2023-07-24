document.querySelectorAll('.count .plus').forEach(item => {
  item.addEventListener('click', function () {
    let input = item.parentElement.querySelector('input');
    input.value = parseInt(input.value) + 1;

    if (parseInt(input.value) > 1) {
      item.parentElement.querySelector('.minus').classList.remove('min');
    }
  });
});

document.querySelectorAll('.count .minus').forEach(item => {
  item.addEventListener('click', function () {
    let input = item.parentElement.querySelector('input');
    input.value = parseInt(input.value) - 1;

    if (parseInt(input.value) < 2) {
      input.value = 1;
      item.classList.add('min');
    }
  });
});

// ------------------------------------

window.addEventListener('scroll', function() {
  var elements = document.getElementsByClassName('navigation-page');
  var scrollPosition = window.scrollY;

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

 if (scrollPosition > 100 ) { // Замените 100 наелаемую позицию прокрутки
      element.classList.add('fixed-nav');
    } else {
      element.classList.remove('fixed-nav');
    }
  }
});

// ------------------------------------

// Получаем все родительские элементы с классом .catalog-page__list-block
const parentElements = document.querySelectorAll('.catalog-page__list-block');

// Проходимся по каждому родительскому элементу
parentElements.forEach(parentElement => {
  // Получаем все дочерние элементы списка
  const listItems = parentElement.querySelectorAll('.catalog-page__list-item');
  
  // Скрываем все элементы, начиная с пятого
  for (let i = 5; i < listItems.length; i++) {
    listItems[i].style.display = 'none';
  }
  
  // Создаем кнопку "Показать еще"
  const showMoreButton = document.createElement('button');
  showMoreButton.textContent = 'Показать еще';
  showMoreButton.classList.add('catalog-page__list-btn');
  
  //обавляем обработчик события на кнопку
  showMoreButton.addEventListener('click', () => {
    // Проверяем текущее состояние кнопки
    if (showMoreButton.textContent === 'Показать еще') {
      // Показываем скрытые элементы
      for (let i = 5; i < listItems.length; i++) {
        listItems[i].style.display = '';
      }
      // Меняем текст кнопки на "Скрыть"
      showMoreButton.textContent = 'Скрыть';
 } else {
      // Скрываем элементы, начиная с пятого
      for (let i = 5; i < listItems.length; i++) {
        listItems[i].style.display = 'none';
      }
      //еняем текст кнопки наПоказать еще"
      showMoreButton.textContent = 'Показать еще';
 }
  });
  
  //обавляем кнопку водительский элемент
  parentElement.appendChild(showMoreButton);
});


// Получаем все элементы с классом .catalog-page-item__filter-typ-btn
const filterButtons = document.querySelectorAll('.catalog-page-item__filter-typ-btn');

// Добавляем обработчик события для каждой кнопки
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Проверяем, есть ли у кнопки класс .active
    const isActive = button.classList.contains('active');
    
    if (isActive) {
      // Если класс уже присутствует, удаляем его
      button.classList.remove('active');
    } else {
      // Если класс отсутствует, добавляем его
      button.classList.add('active');
    }
  });
});

// Получаем все элементы с классом "load-more__container"
const loadMoreContainers = document.querySelectorAll('.load-more__container');

//обавляем обработчик события клика для каждого элемента
loadMoreContainers.forEach(container => {
  const loadMoreButton = container.querySelector('.load-more');
  let isOpen = false;

  loadMoreButton.addEventListener('click', () => {
    isOpen = !isOpen;
    container.classList.toggle('open');
    loadMoreButton.textContent = isOpen ? 'Скрыть' : 'Показать еще';
  });
});

// Получаем все кнопки с классом "sorting-btn"
  const buttons = document.querySelectorAll('.sorting-btn');

  // Добавляем обработчик события клика на каждую кнопку
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      //роверяем, есть ли у кнопки класс "active"
      const isActive = button.classList.contains('active');

      // Если класс уже есть, то удаляем его
      if (isActive) {
        button.classList.remove('active');
      } else {
        // Иначе, добавляем класс "active" и удаляем его у всех остальных кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      }
    });
  });


 // Получаем все кнопки с классом "type-cards-btn"
 const buttonsSort = document.querySelectorAll('.type-cards-btn');

 // Добавляем обработчик события для каждой кнопки
 buttonsSort.forEach(button => {
   button.addEventListener('click', () => {
     // Проверяем, есть ли у кнопки класс "active"
     const isActive = button.classList.contains('active');

     // Если класс уже есть, то удаляем его
     if (isActive) {
       button.classList.remove('active');
     } else {
       // Удаляем класс "active" у всех кнопок
       buttonsSort.forEach(btn => btn.classList.remove('active'));
       // Добавляем классactive" к текущей кнопке
       button.classList.add('active');
     }
   });
 });


// Получаем все элементы с классом ".product-filter__item-header"
const headers = document.querySelectorAll('.product-filter__item-header');

// Перебираем каждый заголовок
headers.forEach(header => {
  // Добавляем обработчик события "click" для каждого заголовка
  header.addEventListener('click', () => {
    // Получаем родительский элемент ".product-filter__item"
    const item = header.parentNode;

    // Проверяем, содержит ли родительский элемент класс "open"
    const isOpen = item.classList.contains('open');

    // Если класс "open" уже присутствует, то удаляем его, иначе добавляем
    if (isOpen) {
      item.classList.remove('open');
    } else {
      item.classList.add('open');
    }
  });
});







// Получаем все элементы классом catalog-btn
var catalogBtns = document.querySelectorAll('.catalog-btn');
var desktopMenu = document.querySelector('.desktop-menu');
var overflowMenu = document.querySelector('.overflow-menu');

// Добавляем обработчик события на каждый элемент с классом .catalog-btn
catalogBtns.forEach(function(catalogBtn) {
  catalogBtn.addEventListener('click', function() {
 desktopMenu.classList.add('show');
    overflowMenu.classList.add('open');
  });
});

// Добавляем обработчик события на меню .overflow-menu
overflowMenu.addEventListener('click', function() {
  desktopMenu.classList.remove('show');
  overflowMenu.classList.remove('open');
});




 // Получаем все кнопки с классом "type-cards-btn"
 const navItems = document.querySelectorAll('.footer-page__nav-list');

 // Добавляем обработчик события для каждой кнопки
 navItems.forEach(button => {
   button.addEventListener('click', () => {
     // Проверяем, есть ли у кнопки класс "active"
     const isActive = button.classList.contains('active');

     // Если класс уже есть, то удаляем его
     if (isActive) {
       button.classList.remove('active');
     } else {
       // Удаляем класс "active" у всех кнопок
       navItems.forEach(btn => btn.classList.remove('active'));
       // Добавляем классactive" к текущей кнопке
       button.classList.add('active');
     }
   });
 });



 // Modal
$(".modal").each(function () {
  $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
      modal = $($this).data("modal");

  $(modal).parents(".overlay").addClass("open");
  setTimeout(function () {
      $(modal).addClass("open");
  }, 350);

  $(document).on('click', function (e) {
      var target = $(e.target);

      if ($(target).hasClass("overlay")) {
          $(target).find(".modal").each(function () {
              $(this).removeClass("open");
          });
          setTimeout(function () {
              $(target).removeClass("open");
          }, 350);
      }

  });

});


$(".close-modal").on('click', function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
      modal = $($this).data("modal");

  $(modal).removeClass("open");
  setTimeout(function () {
      $(modal).parents(".overlay").removeClass("open");
  }, 350);

});
