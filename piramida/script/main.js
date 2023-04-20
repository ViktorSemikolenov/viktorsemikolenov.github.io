//   mask

// input rotate

$(document).ready(function () {
    var owl = $('.main-slider');
    owl.owlCarousel({
        nav: true,
        margin: 0,
        center: false,
        autoHeight: true,
        loop: true,
        autoplay: true,  
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})

$(".tooltip_icon").hover(function () {
    $(this).parents('.tooltip').toggleClass("show");
});

$(document).ready(function () {
    var owl = $('.slider');
    owl.owlCarousel({
        nav: true,
        margin: 0,
        center: false,
        autoHeight: true,
        loop: true,
        autoplay: false,  
        autoplayTimeout: 5000,
        items:1
    })
})

$(document).ready(function () {
    var owl = $('.slider_step');
    owl.owlCarousel({
        nav: false,
        margin: 0,
        center: false,
        autoHeight: true,
        loop: true,
        autoplay: false,  
        items:1,
        URLhashListener:true,
        mouseDrag: false,
        touchDrag : false,
        
    })
})

$(".tabs-nav a").click(function () {
    $(".tabs-nav a").removeClass("active");
    $(this).addClass("active");
});


$(document).ready(function () {
    var owl = $('.slider_two_item');
    owl.owlCarousel({
        nav: true,
        margin: 0,
        center: false,
        autoHeight: true,
        loop: true,
        autoplay: false,  
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})

$(document).ready(function () {
    var owl = $('.slider_brand');
    owl.owlCarousel({
        nav: true,
        margin: 0,
        center: false,
        autoHeight: true,
        loop: true,
        autoplay: false,  
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
})

$(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
  });
  
  $(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
        modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
      $(modal).addClass("open");
    }, 350);
    
    $(document).on('click', function(e){
      var target = $(e.target);
      
      if ($(target).hasClass("overlay")){
        $(target).find(".modal").each( function(){
          $(this).removeClass("open");
        });
        setTimeout( function(){
          $(target).removeClass("open");
        }, 350);
      }
      
    });
    
  });
  
  $(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
        modal = $($this).data("modal");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
      $(modal).parents(".overlay").removeClass("open");
    }, 350);
    
  }); 

  
$(".btn_humb").click(function () {
    $(this).toggleClass("open");
    $(".navigation_page").toggleClass("open");
    $(".mod_btn_row ul").toggleClass('hidden')
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 90;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });