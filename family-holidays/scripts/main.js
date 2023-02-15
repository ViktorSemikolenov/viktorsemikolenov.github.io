var mainNav = document.querySelector('.navigation');

window.onscroll = function () {
    windowScroll();
};

function windowScroll() {
    mainNav.classList.toggle("fixed", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
}

