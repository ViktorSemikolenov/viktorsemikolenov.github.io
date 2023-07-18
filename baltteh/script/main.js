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

