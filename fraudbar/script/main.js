$('.btn-menu').click(function () {
  $(this).toggleClass("btn-menu-close");
  $(".nav-header").toggleClass("nav-header-open");
});
$('.nav-header a').click(function () {
  $('.btn-menu').removeClass("btn-menu-close");
  $(".nav-header").removeClass("nav-header-open");
});
$('.faq-item').click(function () {
  $(this).toggleClass("faq-item-open");
});



owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin:0,
  // autoWidth: 160,
  responsive: {
    0: {
      items: 1
    },
    980: {
      items: 1
    },
    1170: {
      items: 4
    }
  }

  
})
owl.on('changed.owl.carousel', function (property) {
  var current = property.item.index;
  var first = current + 1;
  $('.owl-item .slide').removeClass('blured');
  $(property.target).find(".owl-item").eq(first).find('.slide').addClass('blured');
});

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});

$(window).on("scroll", function() {
  // Если высота больше 200px 
  // Добавляем классу header класс fixed
    if ($(window).scrollTop() > 200) $('.navigation-page').addClass('fixed');
  // Иначе удаляем класс fixed
          else $('.navigation-page').removeClass('fixed');
    });