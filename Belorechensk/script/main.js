function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  const formattedTime = hours + ':' + minutes;

  return formattedDate + ' (' + formattedTime + ')';
}

$(document).ready(function() {
  const currentDate = new Date();
  const timerPage = $('.timer-page');
  timerPage.text(formatDate(currentDate));

  function updateTime() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    timerPage.text(formattedDate);
  }

  setInterval(updateTime, 1000);
});

// ---------------------------------------------

$(window).scroll(function() {
  var navigation = $(".navigation");
  var scrollPosition = $(window).scrollTop();

  if (scrollPosition >= 194) {
    navigation.addClass("fixed");
  } else {
    navigation.removeClass("fixed");
  }
});

// ----------------------------------------------------------

$(document).ready(function() {
  $('.search-popup').click(function() {
    $('.search-block').addClass('show');
    $('body').css('overflow', 'hidden');
  });

  $('.close-search, .search-block .overflow').click(function() {
    $('.search-block').removeClass('show');
    $('body').css('overflow', 'visible');
  });
});

// ------------------------------------------------------------

$(function() {
  $('.tabs-nav a').click(function() {

    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content div').hide();
    $(currentTab).fadeIn(300);

    return false;
  });
});

// -------------------------------------------------
$(document).ready(function() {
  const $sitesCity = $('.sites-city');
  
  $('.all-sites').click(function() {
    $sitesCity.fadeIn(300);
    $('body').css('overflow', 'hidden');
  });

  $sitesCity.find('.close').click(function() {
    $sitesCity.fadeOut(300);
    $('body').css('overflow', 'visible');
  });
});
// ----------------------------
$('.drop-navigation__header').click(function() {
  var parentCol = $(this).parent('.drop-navigation__col');
  parentCol.toggleClass('active');
  parentCol.siblings('.drop-navigation__col').removeClass('active');
});

// -------------------------------------------------

$('.btn-menu-open').click(function() {
  $('.drop-navigation').toggleClass("active");
  $(this).toggleClass("active");
});