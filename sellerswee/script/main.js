$(".modal").each(function () {
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout(function () {
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("overlay")) {
            $(target).find(".modal").each(function () {
                $(this).removeClass("open");
            });
            setTimeout(function () {
                $(target).removeClass("open");
            }, 350);
        }

    });

});

$(".close-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function () {
        $(modal).parents(".overlay").removeClass("open");
    }, 350);

});





$(".form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    e.preventDefault();
    var form_data = $(this).serialize(); // Собираем все данные из формы
    $.ajax({
        type: "POST", // Метод отправки
        url: "../script/mail.php", // Путь до php файла отправителя
        data: form_data,
        success: function () {
            document.querySelector('form').reset()

            // Код в этом блоке выполняется при успешной отправке сообщения                    
            // $('.modal_thanks_container .overlay').addClass("open");
            // $('.modal_thanks_container .modal_thanks').addClass("open");

            // $('.modal_one_container .overlay').removeClass("open");
            // $('.modal_one_container .modal').removeClass("open");

            // $('.modal_two_container .overlay').removeClass("open");
            // $('.modal_two_container .modal').removeClass("open");
            window.location.replace("thanks.html");

        }
    });
});