
var swiper = new Swiper(".slider", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".fs-swiper-pagination",
    clickable: true,
  }
});


$(window).scroll(function () {
  var height = $(window).scrollTop();

  if (height > 50) {
    $('.navigation').addClass('navigation-fixed');
  } else {

    $('.navigation').removeClass('navigation-fixed');
  }

});

const
  anchors =
    document
      .querySelectorAll(
        'a[href*="#"]'
      )
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(".burger-menu").click(function () {
    $(this).toggleClass("show");
    $(".menu").toggleClass("show");
    $('.navigation').toggleClass('show')
});