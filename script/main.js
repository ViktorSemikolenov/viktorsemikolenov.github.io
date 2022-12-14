$('.btn-hamb').on('click',function(){
    $('.nav-page').addClass('open');
});



$('.btn-close').on('click',function(){
    $('.nav-page').removeClass('open');
});


$(document).mouseup(function (e) {
    var div = $(".nav-page"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass("open")
    }
});