$(function() {
    var images = $(".first-screen__background-item");
    var currentImageIndex = 0;
  
    function showNextImage() {
      // Скрыть текущее изображение
      images.eq(currentImageIndex).fadeOut();
  
      // Увеличить индекс для следующего изображения
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
  
      // Показать следующее изображение
      images.eq(currentImageIndex).fadeIn();
    }
  
    // Показать первое изображение при загрузке страницы
    images.eq(0).show();
  
    // Запустить таймер для показа следующего изображения каждые 6 секунд
    setInterval(showNextImage, 8000);
  });


// плавное появление текста для первого слайда

$(document).ready(function() {
    $('.play-icon').click(function() {
      var investVideo = $('.video-invest')[0];
  
      $('.invest-video-poster, .play-icon').fadeOut(function() {
        investVideo.play();
      });
    });
  });
// ---------------------

// =----------------------------------------------------------
$(document).ready(function() {
    $('.project-info__icon').click(function() {
      $(this).closest('.slider-item').toggleClass('active');
    });
  });
// -------------------------------
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var navigation = $('.navigation');
    var offset = 150;
  
    if (scrollTop > offset) {
      navigation.addClass('fixed');
    } else {
      navigation.removeClass('fixed');
    }
  });



$(document).ready(function() {
    $('.btn-search').click(function() {
      $('.search-page').addClass('active');
    });
  });
// -------------------------------
  $(document).ready(function() {
    $('.close-search').click(function() {
      $('.search-page').removeClass('active');
    });
  }); 
  
  
  $(document).ready(function() {
    $('.open-menu').click(function() {
      $('.navigation').toggleClass('active');
      $(this).toggleClass('active');
      $('body').toggleClass('hidden');
    });
  });


// ===========================
$(document).ready(function() {
  var breakpoint = 1439;
  var dropNav = $('.drop-nav');

  dropNav.click(function() {
    if ($(window).width() < breakpoint) {
      $(this).toggleClass('active');
    }
  });
});

// ---------------------
$(document).ready(function() {
  $('.btn').hover(function() {
    $(this).closest('.consultation__item').toggleClass('active');
  });
});



$(document).ready(function() {
  // Проверяем размер экрана при загрузке
  if ($(window).width() < 990) {
      wrapTableWithScrollDiv();
  } else {
      unwrapTableFromScrollDiv();
  }
  
  // Обрабатываем изменение размера окна
  $(window).resize(function() {
      if ($(window).width() < 990) {
          if (!$('.scroll').length) {
              wrapTableWithScrollDiv();
          }
      } else {
          unwrapTableFromScrollDiv();
      }
  });
});

function wrapTableWithScrollDiv() {
  if (!$('.scroll').length) {
      $('table').wrap('<div class="scroll"></div>');
  }
}

function unwrapTableFromScrollDiv() {
  $('.scroll').replaceWith($('table'));
}






$(document).ready(function() {
  // По клику на вкладку
  $('.tab').click(function() {
    // Удаляем класс "active" у всех вкладок
    $('.tab').removeClass('active');
    // Добавляем класс "active" к текущей вкладке
    $(this).addClass('active');
    
    // Получаем индекс текущей вкладки
    var tabIndex = $(this).index();
    
    // Скрываем все содержимое вкладок
    $('.tab-content .content').removeClass('active');
    // Отображаем содержимое текущей вкладки
    $('.tab-content .content:eq(' + tabIndex + ')').addClass('active');
  });
});





$(document).ready(function() {
  $('.filter-header').click(function() {
    $(this).parent('.filter').toggleClass('active');
  });
});