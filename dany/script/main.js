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

// ---------------------------------

$('.btn-link').click(function() {
  $('.seo-text').toggleClass('active');
});

$('.close-city').click(function() {
  $('.address-select__body').css('display', 'none');
});

// --------------------------------------------------
$('.address-select__header').click(function() {
  $(this).toggleClass('active');
  $('.address-list').toggleClass('active');
});


// ---------------------------
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


$(document).ready(function() {
  $('.address-list__item').on('click', function() {
    var addressText = $(this).text(); // Получаем текст из .address-list__item
    $('.address-select__title').text(addressText); // Копируем текст в .address-select__title
  });
});


$(window).on('scroll', function() {
  if ($(window).scrollTop() > 35) {
    $('.navigation').addClass('fixed'); // Добавляем класс при прокрутке
  } else {
    $('.navigation').removeClass('fixed'); // Удаляем класс, если прокрутка в начале
  }
});