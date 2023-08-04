


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



document.addEventListener('DOMContentLoaded', function() {
  var nextNavLevelOne = document.querySelector('.next-nav-level__one');
  var mobNavigation = document.querySelector('.mob-navigation');
  var linkLeft = document.querySelector('.link-left');
  var backMenuOne = document.querySelector('.back-manu_level-one');


  nextNavLevelOne.addEventListener('click', function() {
    mobNavigation.classList.add('hidden');
    linkLeft.classList.add('show');
  });

  backMenuOne.addEventListener('click', function() {
    mobNavigation.classList.remove('hidden');
    linkLeft.classList.remove('show');
  });
});




// Получаем все элементы с классом "next-nav-level__two"
var nextNavLevelTwoItems = document.getElementsByClassName("next-nav-level__two");

// Добавляем обработчик события для каждого элемента
for (var i = 0; i < nextNavLevelTwoItems.length; i++) {
  nextNavLevelTwoItems[i].addEventListener("click", function() {
    // Получаем родительский элемент "desktop-menu__item"
    var parentItem = this.closest(".desktop-menu__item");
    
    // Добавляем класс "show-menu" к родительскому элементу
    parentItem.classList.add("show-menu");
  });
}


document.addEventListener('DOMContentLoaded', function() {
  var nextNavLevelTwoList = document.querySelectorAll('.next-nav-level__two');
  var linkLeftTwo = document.querySelector('.link-left');

  nextNavLevelTwoList.forEach(function(nextNavLevelTwo) {
    nextNavLevelTwo.addEventListener('click', function() {
      linkLeftTwo.classList.add('hidden-item');
    });
  });
});


// Получаем все элементы с классом ".back-manu_level-two"
var backMenuLevelTwoItems = document.querySelectorAll('.back-manu_level-two');

// Перебираем полученные элементы и добавляем обработчик события клика
backMenuLevelTwoItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Находим родительский элемент с классомlink-left"
    var linkLeftElement = this.closest('.link-left');
    // Удаляем класс "hidden-item" найденного элемента
    linkLeftElement.classList.remove('hidden-item');

    var desktopMenu = this.closest('.desktop-menu__item');

    desktopMenu.classList.remove('show-menu');
  });
});



// Получаем все элементы с классом "desktop-menu__item"
const menuItems = document.querySelectorAll('.desktop-menu__item');

// Проходимся по каждому элементу
menuItems.forEach(item => {
  // Получаем ссылку внутри элемента
  const link = item.querySelector('a');

  // Назначаем обработчик события наведения мыши на ссылку
  link.addEventListener('mouseover', () => {
    // Удаляем класс "active" у всех элементов с классом "desktop-menu__item"
    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    // Добавляем класс "active" к родительскому элементу
    item.classList.add('active');
  });
});


// Получаем все элементы с классом .next-nav-level__three
const subcategoryItems = document.querySelectorAll('.next-nav-level__three');

// Перебираем каждый элемент и добавляем обработчик события "click"
subcategoryItems.forEach(item => {
  item.addEventListener('click', function() {
    // Находим родительский элемент с классом .subcategory-title
    const parent = this.closest('.subcategory-title');
    
    // Добавляем класс visible к родительскому элементу
    parent.classList.add('visible');
    
    // Находим все элементы с классом .main-menu-item > li
    const mainMenuItems = document.querySelectorAll('.main-menu-item > li');
    
    // Перебираем каждый элемент и добавляем класс hidden
    mainMenuItems.forEach(item => {
      item.classList.add('hidden');
    });

    // Находим элементы с классом .back-manu_level-two
    const backMenuItems = document.querySelectorAll('.back-manu_level-two');

    // Перебираем каждый элемент и добавляем класс hidden
    backMenuItems.forEach(item => {
      item.classList.add('hidden');
    });

    // Находим элементы с классом .back-manu_level-three
    const backMenuLevelThreeItems = document.querySelectorAll('.back-manu_level-three');

    // Перебираем каждый элемент и добавляем класс visible
    backMenuLevelThreeItems.forEach(item => {
      item.classList.add('visible');
    });
  });
});
// =====================


document.addEventListener('DOMContentLoaded', function() {
  const backButtons = document.querySelectorAll('.back-manu_level-three');
  const menuItem = document.querySelectorAll('.main-menu-item > li');
  const backMenuLevelTwo = document.querySelectorAll('.back-manu_level-two');

  backButtons.forEach(function(backButton) {
    backButton.addEventListener('click', function() {
      // Remove 'visible' class from all .back-manu_level-three elements
      backButtons.forEach(function(button) {
        button.classList.remove('visible');
      });

      for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('visible', 'hidden');
      }

      for (let i = 0; i < backMenuLevelTwo.length; i++) {
        backMenuLevelTwo[i].classList.remove('hidden');
      }
    });
  });
});








// Получаем все элементы с классом ".product-card .btn"
const productBtns = document.querySelectorAll('.product-card .btn');

// Получаем элементы ".backet-link" и ".backet-link .quantity"
const backetLinks = document.querySelectorAll('.backet-link');
const quantityElements = document.querySelectorAll('.backet-link .quantity');

// Инициализируем количество товара
let clickCount = parseInt(quantityElements[0].textContent);

// Функция для обновления видимости корзины
function updateBasketVisibility() {
  const basketItems = document.querySelectorAll('.basket-small-content .basket-small__item');
  const basketContent = document.querySelector('.basket-small-content');

  if (basketItems.length === 0) {
    basketContent.classList.add('hidden');
  } else {
    basketContent.classList.remove('hidden');
  }

  // Уд аление класса "basket-quantity" из элемента ".backet-link", если количество товаров равно 0
  if (clickCount === 0) {
    backetLinks.forEach(link => link.classList.remove('basket-quantity'));
  }
}

// Добавляем обработчик события клика на каждую кнопку
productBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Увеличиваем количество нажатий
    clickCount++;

    // Добавляем класс "basket-quantity" к элементу ".backet-link"
    backetLinks.forEach(link => link.classList.add('basket-quantity'));

    // Обновляем текст элемента ".backet-link .quantity" с помощью количества нажатий
    quantityElements.forEach(element => element.textContent = clickCount);

    // Получить данные о товаре, которые нужно добавить в корзину
    var productName = $(btn).closest('.product-card').find('.product-card__title').text();
    var productPrice = $(btn).closest('.product-card').find('.price').text();

    // Создать новый элемент корзины
    var basketItem = $('<div class="basket-small__item">' +
      '<button class="basket-small__item-btn btn-nostyle">Remove</button>' + // Добавляем текст и класс кнопке
      '<a href="#" class="basket-small__title">' + productName + '</a>' +
      '<span class="basket-small__info">' + productPrice + '</span>' +
      '</div>');

    // Добавить новый элемент в корзину
    $('.basket-small-content').append(basketItem);

    // Обновление видимости корзины после добавления элемента
    updateBasketVisibility();
  });
});

// Обработчик события для кнопки ".basket-small__item-btn"
$(document).on('click', '.basket-small__item-btn', function(e) {
  e.preventDefault(); // Отменить стандартное действие ссылки

  // Удалить соответствующий элемент корзины
  $(this).closest('.basket-small__item').remove();

  // Получить текущее значение количества товаров в корзине
  var quantity = parseInt($('.backet-link .quantity').text());

  // Проверить, что количество больше 0, чтобы избежать отрицательных значений
  if (quantity > 0) {
    // Уменьшить количество на 1
    clickCount--;

    // Обновить значение количества товаров во всех элементах с классом ".backet-link .quantity"
    quantityElements.forEach(element => element.textContent = clickCount);
  }

  // Обновление видимости корзины после удаления элемента
  updateBasketVisibility();

});

// Используем DOMContentLoaded, чтобы убедиться, что весь HTML был полностью загружен
document.addEventListener('DOMContentLoaded', () => {
  // Обновление видимости корзины при начальной загрузке страницы
  updateBasketVisibility();
});



// Избранное
// Получаем все элементы с классом ".product-card .btn"
const wishlistBtn = document.querySelectorAll('.add-wishlist');

// Получаем элементы ".backet-link" и ".backet-link .quantity"
const wishlistLinks = document.querySelectorAll('.wishlist-link');
const wishlistQuantityElements = document.querySelectorAll('.wishlist-link .quantity');

// Инициализируем количество товара
let clickCountWishlist = parseInt(wishlistQuantityElements[0].textContent);

// Функция для обновления видимости корзины
function updateWishlistVisibility() {
  const wishlistItems = document.querySelectorAll('.wishlist-small-content .wishlist-small__item');
  const wishlistContent = document.querySelector('.wishlist-small-content');

  if (wishlistItems.length === 0) {
    wishlistContent.classList.add('hidden');
  } else {
    wishlistContent.classList.remove('hidden');
  }

  // Уд аление класса "basket-quantity" из элемента ".backet-link", если количество товаров равно 0
  if (clickCountWishlist === 0) {
    wishlistLinks.forEach(link => link.classList.remove('wishlist-quantity'));
  }
}

// Добавляем обработчик события клика на каждую кнопку
wishlistBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    // Увеличиваем количество нажатий
    clickCountWishlist++;

    // Добавляем класс "basket-quantity" к элементу ".backet-link"
    wishlistLinks.forEach(link => link.classList.add('wishlist-quantity'));

    // Обновляем текст элемента ".backet-link .quantity" с помощью количества нажатий
    wishlistQuantityElements.forEach(element => element.textContent = clickCountWishlist);

    // Получить данные о товаре, которые нужно добавить в корзину
    var productName = $(btn).closest('.product-card').find('.product-card__title').text();
    var productPrice = $(btn).closest('.product-card').find('.price').text();

    // Создать новый элемент корзины
    var basketItem = $('<div class="wishlist-small__item">' +
      '<button class="wishlist-small__item-btn btn-nostyle">Remove</button>' + // Добавляем текст и класс кнопке
      '<a href="#" class="wishlist-small__title">' + productName + '</a>' +
      '<span class="wishlist-small__info">' + productPrice + '</span>' +
      '</div>');

    // Добавить новый элемент в корзину
    $('.wishlist-small-content').append(basketItem);

    // Обновление видимости корзины после добавления элемента
    updateWishlistVisibility();
  });
});

// Обработчик события для кнопки ".basket-small__item-btn"
$(document).on('click', '.wishlist-small__item-btn', function(e) {
  e.preventDefault(); // Отменить стандартное действие ссылки

  // Удалить соответствующий элемент корзины
  $(this).closest('.wishlist-small__item').remove();

  // Получить текущее значение количества товаров в корзине
  var quantity = parseInt($('.wishlist-link .quantity').text());

  // Проверить, что количество больше 0, чтобы избежать отрицательных значений
  if (quantity > 0) {
    // Уменьшить количество на 1
    clickCountWishlist--;

    // Обновить значение количества товаров во всех элементах с классом ".backet-link .quantity"
    wishlistQuantityElements.forEach(element => element.textContent = clickCountWishlist);
  }

  // Обновление видимости корзины после удаления элемента
  updateWishlistVisibility();

});

// Используем DOMContentLoaded, чтобы убедиться, что весь HTML был полностью загружен
document.addEventListener('DOMContentLoaded', () => {
  // Обновление видимости корзины при начальной загрузке страницы
  updateWishlistVisibility();
});



