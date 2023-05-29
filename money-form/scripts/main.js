
// label form
$('.input-line input').focusin(function () {
    if ($(this).val().length < 50) {
        $(this).siblings('.placeholder').addClass('placeholder-top');
    }

});
$('.input-line input').focusout(function () {
    if ($(this).val().length < 1) {
        $(this).siblings('.placeholder').removeClass('placeholder-top');
    }
});

// ---------------------------------------------------------------------

var randomNumber = Math.floor(Math.random() * 10) + 1;
var elements = document.getElementsByClassName("make-order__numb");
for (var i = 0; i < elements.length; i++) {
  elements[i].innerHTML = randomNumber;
}

// Таймер начало

// получаем массив элементов страницы
const timerEls = document.querySelectorAll("[id^='timer']");
const messageEls = document.querySelectorAll("[id^='message']");

// устанавливаем начальные значения таймеров
let countdowns = [];
for (let i = 0; i < timerEls.length; i++) {
  let countdown = localStorage.getItem(`countdown${i}`) || 11692;
  countdowns.push(countdown);
}

// функция обновления таймера
function updateTimer() {
  // обходим все таймеры на странице
  for (let i = 0; i < timerEls.length; i++) {
    let countdown = countdowns[i];

    // уменьшаем счетчик на 1 секунду
    countdown--;
    countdowns[i] = countdown;

    // вычисляем оставшееся время
    let hours = Math.floor(countdown / 3600);
    let minutes = Math.floor((countdown - (hours * 3600)) / 60);
    let seconds = countdown % 60;

    // форматируем вывод времени
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // выводим оставшееся время на страницу
    timerEls[i].innerText = `${hours}:${minutes}:${seconds}`;

    // если таймер закончился, выводим сообщение и сохраняем значение в локальное хранилище браузера
    if (countdown === 0) {
      messageEls[i].innerText = "Таймер закончился!";
      clearInterval(updateTimerId);

      // сохраняем значение таймера в локальное хранилище браузера
      localStorage.setItem(`countdown${i}`, countdown);

    } else {
      messageEls[i].innerText = "";

      // сохраняем значение таймера каждую секунду в локальное хранилище браузера
      localStorage.setItem(`countdown${i}`, countdown);
    }
  }
}

// вызываем функцию обновления таймера каждую секунду
const updateTimerId = setInterval(updateTimer, 1000);
// ---------------------------------------------------------------------

// Получаем все элементы с классом .form-quez__item
const formItems = document.querySelectorAll('.form-quez__item');

// Проходимся по каждому элементу
formItems.forEach(item => {
  // Находим все input с атрибутом required внутри текущего элемента
  const inputs = item.querySelectorAll('input[required]');
  
  // Добавляем обработчик события на каждый input
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      // Проверяем, все ли input заполнены верно
      const isValid = Array.from(inputs).every(input => input.checkValidity());
      
      // Если все input заполнены верно, добавляем класс .active к .btn-next
      if (isValid) {
        const btnNext = item.querySelector('.btn-next');
        btnNext.classList.add('active');
      } else {
        const btnNext = item.querySelector('.btn-next');
        btnNext.classList.remove('active');
      }
    });
  });
});
// ---------------------------------------------------------------------

var selectInput = document.querySelector('.select-input');
var selectOptions = document.querySelector('.select-options');
var selectOptionItems = document.querySelectorAll('.select-options li');

// При клике на input, показываем или скрываем список опций
selectInput.addEventListener('click', function() {
  if (selectOptions.style.display === 'none') {
    selectOptions.style.display = 'block';
  } else {
    selectOptions.style.display = 'none';
  }
});

// При клике на опцию, изменяем значение input и скрываем список опций
selectOptionItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    selectInput.value = this.innerText;
    selectOptions.style.display = 'none';
  });
});



// ==========================================================================
// получить все элементы .option-item
const optionItems = document.querySelectorAll('.option-item');

// перебрать все элементы и повесить обработчик события клика на каждый
optionItems.forEach(optionItem => {
  optionItem.addEventListener('click', () => {
    // получить родительский элемент .form-quez__item
    const parent = optionItem.closest('.form-quez__item');

    // добавить класс active к .btn-next внутри найденного родительского элемента
    parent.querySelector('.btn-next').classList.add('active');
  });
});


$(".btn-accent-phone").click(function () {
  $('.btn-row__hidden').addClass("hidden");
  $(".edit-phone").addClass("visible");
  $(".block-phone-accent").addClass("visible");
  $(".form-quez__row-off").addClass("visible-op");
});

$(".edit-phone").click(function () {
  $(this).removeClass("visible");
  $('.block-phone-accent').removeClass("visible");
  $('.form-quez__row-off').removeClass("visible-op");
  $('.btn-row__hidden').removeClass("hidden");
});



const inputTel = document.querySelector('.input-tel');
const buttonAccent = document.querySelector('.btn-accent-phone');

inputTel.addEventListener('input', () => {
  if (inputTel.value.length > 9) {
    buttonAccent.classList.add('active');
  } else {
    buttonAccent.classList.remove('active');
  }
});

const buttonsScroll = document.querySelectorAll('.btn-scroll');

buttonsScroll.forEach((button) => {
  button.addEventListener('click', () => {
    const targetSelector = button.dataset.target;
    const targetSection = document.querySelector(targetSelector);
    targetSection.scrollIntoView({ behavior: 'smooth' });
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










