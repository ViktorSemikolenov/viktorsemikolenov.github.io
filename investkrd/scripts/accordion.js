$(document).ready(function() {
  $('.accordion-header').click(function() {
    // Проверяем, не является ли текущий аккордеон уже развернутым
    var isActive = $(this).parent('.accordion-item').hasClass('active');

    // Сворачиваем все аккордеоны
    $('.accordion-content').slideUp();
    $('.accordion-item').removeClass('active');
    
    // Разворачиваем текущий аккордеон, если он не был активным
    if (!isActive) {
      $(this).siblings('.accordion-content').slideDown();
      $(this).parent('.accordion-item').addClass('active');
    }
  });
});

$(document).ready(function() {
  $('.accordion-inside-header').click(function() {
    // Проверяем, не является ли текущий аккордеон уже развернутым
    var isActive = $(this).parent('.accordion-inside-item').hasClass('active');

    // Сворачиваем все аккордеоны
    $('.accordion-inside-content').slideUp();
    $('.accordion-inside-item').removeClass('active');
    
    // Разворачиваем текущий аккордеон, если он не был активным
    if (!isActive) {
      $(this).siblings('.accordion-inside-content').slideDown();
      $(this).parent('.accordion-inside-item').addClass('active');
    }
  });
});