



class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');




  $(document).ready(function() {
    dotcount = 1;
  
    $(".owl-carousel").owlCarousel({
      items: 1,
      margin: 10,
      nav: false,
      autoHeight: true
    });
    
    $('.owl-dot').each(function() {
      $(this).addClass('dotnumber' + dotcount);
      $(this).attr('data-info', dotcount);
      dotcount = dotcount + 1;
    });
  
    slidecount = 1;
  
    $('.owl-item').not('.cloned').each(function() {
      $(this).addClass('slidenumber' + slidecount);
      slidecount = slidecount + 1;
    });
  
    $('.owl-dot').each(function() {
      grab = $(this).data('info');
      slidegrab = $('.slidenumber' + grab + ' img').attr('src');
      var slide = '<img src="' + slidegrab + '">';
      $(this).append(slide)
    });
  
    amount = jQuery('.owl-dot').length;
    gotowidth = 100 / amount;
  
    $('.owl-dot').css("width", gotowidth + "%");
    newwidth = $('.owl-dot').width();
    $('.owl-dot').css("height", newwidth + "px");
  
  });

  $(".size_btn").click(function () {
    $(".size_btn").removeClass("active");
    $(this).addClass("active");
});


$(".color_btn").click(function () {
  $(".color_btn").removeClass("active");
  $(this).addClass("active");
});

$(".material_btn").click(function () {
  $(".material_btn").removeClass("active");
  $(this).addClass("active");
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
$(".humb_menu").click(function () {
  $(this).toggleClass('humb_open')
  $(".nav_content").toggleClass("active");
});
$(".nav_list li").click(function () {
  $(".humb_menu").toggleClass('humb_open')
  $(".nav_content").removeClass("active");
});