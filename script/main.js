// Показать пароль
$(".password_icon").click(function () {
    $(this).toggleClass("show");
    $(".input_password").attr("type", "password");
    $(this).parents(".input").toggleClass("input_password_show");
    $(".input_password_show input").attr("type", "text");
});


// Ивент
$(".event_name").click(function () {
    $(this).parents(".event_block").toggleClass("show");
    $(".post").removeClass("show");
});
$('.event_name').before('<div class="event_overlay"></div>');
$(".event_overlay").click(function () {
    $(".event_block").toggleClass("show");
});


// Пост
$(".post_menu_icon").click(function () {
    $(".event_block").removeClass("show");
    $(this).parents(".post").toggleClass("show");
});
$('.post_img').before('<div class="post_menu_overlay"></div>');

$(".post_menu_overlay").click(function () {
    $(".post").removeClass("show");
});


// коммент
$(".comment_menu_icon").click(function () {
    $(this).parents(".comment_menu").toggleClass("show");
    $(this).parents(".comment_item").toggleClass("show");
});
$('.comment_menu').before('<div class="comment_overlay"></div>');

$(".comment_overlay").click(function () {
    $(".comment_item").removeClass("show");
    $(".comment_menu").removeClass("show")
});
// лайк поста
$(".like_post").click(function () {
    $(this).toggleClass("active");
});

// описание поста
$(".info_post").click(function () {
    $(this).toggleClass("active");
    $(this).parents(".post").toggleClass("show_text");
});



// описание поста
$(".edit_page_schedule").click(function () {
    $(".row_icons").toggleClass("hidden");
});

// описание поста
$(".edit_page_gift").click(function () {
    $(".edit_gift").toggleClass("hidden");
});

// выбор подарка
$(".gift_item").click(function () {
    $(this).toggleClass("select");
});

$(window).scroll(function () {
    var height = $(window).scrollTop();

    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 5) {
        $('.header_page').addClass('header_page-fix');
    } else {
        /*Если меньше 100px удаляем класс для header*/
        $('.header_page').removeClass('header_page-fix');
    }

});

// лайк поста
$(".edit_page").click(function () {
    $(this).toggleClass("active");
    $(".table_item .open_table").toggleClass("hidden");
    $(".table_item .delete_table").toggleClass("hidden");
});


