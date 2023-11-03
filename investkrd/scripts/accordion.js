$(document).ready(function() {
    $('.accordion-header').click(function() {
      // Сворачиваем все аккордеоны
      $('.accordion-content').slideUp();
      $('.accordion-item').removeClass('active');
      
      // Разворачиваем текущий аккордеон
      $(this).siblings('.accordion-content').slideDown();
      $(this).parent('.accordion-item').addClass('active');
    });
  });