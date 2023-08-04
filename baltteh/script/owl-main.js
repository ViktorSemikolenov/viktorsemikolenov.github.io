$(document).ready(function () {
    var owl = $('.owl-banner');
    owl.owlCarousel({
        margin: 24,
        center: false,
        autoHeight: false,
        loop:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        nav: true,
        navContainer: '.navigation-banner',
        dotsContainer: '.pagination-banner'
    })
});

// табы слайдера
$(document).ready(function () {
    var owl = $('.owl-product-one');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-one',
        dotsContainer: '.pagination-product-one',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-product-two');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-two',
        dotsContainer: '.pagination-product-two',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-product-three');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-three',
        dotsContainer: '.pagination-product-three',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-product-foure');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-foure',
        dotsContainer: '.pagination-product-foure',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});



$(document).ready(function () {
    var owl = $('.owl-product-slider');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight: false,
        loop:false,
        items: 1,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: true
    })
});



$(document).ready(function () {
    var owl = $('.owl-news');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:true,
        loop:false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: true,
        dots: true,
        navContainer: '.navigation-news',
        dotsContainer: '.pagination-news',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});

window.addEventListener('load', function() {
    var owlStage = document.querySelector('.owl-stage');
    var owlItems = owlStage.querySelectorAll('.owl-item');
    var maxHeight = 0;
    
    // Находим самую большую высоту элемента
    for (var i = 0; i < owlItems.length; i++) {
      if (owlItems[i].offsetHeight > maxHeight) {
        maxHeight = owlItems[i].offsetHeight;
      }
    }
    
    // Устанавливаем одинаковую высоту для всех элементов
    for (var i = 0; i < owlItems.length; i++) {
      owlItems[i].style.height = maxHeight + 'px';
    }
  });


